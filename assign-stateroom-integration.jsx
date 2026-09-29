(() => {
  const React = window.React;
  const ReactDOM = window.ReactDOM;
  const portable = window.MVASAssignStateroom;
  const mount = document.getElementById('assignStateroomReactMount');
  if (!React || !ReactDOM || !portable || !mount) return;

  const { AssignStateroom } = portable;
  let root = null;
  let sessionId = 0;

  function cleanup() {
    if (root) root.unmount();
    root = null;
    mount.hidden = true;
    document.body.classList.remove('portable-stateroom-open');
  }

  function Runtime({ config, id }) {
    const stateRef = React.useRef(config.bookingState);
    const [booking, setBooking] = React.useState(config.bookingState);

    const update = React.useCallback((patch) => {
      const next = { ...stateRef.current, ...patch };
      stateRef.current = next;
      setBooking(next);
    }, []);

    const close = React.useCallback(() => {
      window.queueMicrotask(() => {
        cleanup();
        config.onClose?.();
      });
    }, [config]);

    const confirm = React.useCallback(() => {
      const confirmed = stateRef.current;
      window.queueMicrotask(() => {
        cleanup();
        config.onConfirm?.(confirmed);
      });
    }, [config]);

    return (
      <AssignStateroom
        key={id}
        s={booking}
        update={update}
        initialOpenPanel={config.initialRowId}
        initialActiveSlot={config.activeCabinIndex || 0}
        onPanelClose={close}
        onConfirmRooms={confirm}
      />
    );
  }

  window.openPortableAssignStateroom = (config) => {
    cleanup();
    sessionId += 1;
    mount.hidden = false;
    document.body.classList.add('portable-stateroom-open');
    root = ReactDOM.createRoot(mount);
    root.render(<Runtime config={config} id={sessionId} />);
  };

  window.dispatchEvent(new CustomEvent('portable-stateroom-ready'));
})();
