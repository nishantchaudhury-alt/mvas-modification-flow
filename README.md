# MVAS Booking Modification Flow

An interactive product-design prototype for managing Margaritaville at Sea bookings. It explores how reservation agents can modify cabins, supplements, and guest details while seeing the combined price impact before saving.

## What the prototype covers

- Searchable bookings workspace with advanced filters
- Booking overview and fare breakdown
- Four-step modification flow:
  1. Cabin modification
  2. Supplements
  3. Guest details
  4. Review and save
- Cabin and stateroom reassignment
- Adding and removing guests
- Supplement discovery and guest assignment
- Guest profiles grouped by cabin with completion states
- Collapsible live-impact rail for staged changes
- Clear separation of the existing unpaid balance, new price change, and final balance due
- Full and partial cancellation concepts, including refund and supplement-reallocation states

The prototype uses representative data and stores staged browser state in `localStorage`. It is not connected to a production booking or payment system.

## Run locally

No build step or package installation is required. Serve the repository with any static HTTP server:

```bash
python3 -m http.server 4173
```

Then open [http://127.0.0.1:4173](http://127.0.0.1:4173).

For the primary walkthrough, open booking `54334373`, choose **Modify booking**, and move through the four stages.

An internet connection is recommended because Lucide icons are loaded from the unpkg CDN.

## Project structure

```text
.
├── index.html     # Application shell and static interface markup
├── styles.css     # MVAS visual system and responsive layouts
├── script.js      # Prototype data, state, calculations, and interactions
├── scripts/       # Lightweight design-system checks
├── assets/        # Brand assets
└── Booking_Modification_and_Cancellation_Experience_Design_Report.docx
```

## Design principles

- Preserve staged work when moving between steps.
- Keep booking and price impact visible without duplicating detail.
- Group changes by the affected booking area for fast scanning.
- Use progressive disclosure for dense cabin, supplement, and guest information.
- Keep additions and price increases visually consistent and easy to distinguish.
- Use the 4px spacing grid for component padding, margins, and gaps.

## Design-system checks

Run the spacing audit after changing layouts or component CSS:

```bash
node scripts/check-spacing-grid.mjs
```

The check covers positive pixel values used for padding, margins, and gaps. Borders, typography, icon dimensions, responsive fluid values, negative overlap fixes, and optical positioning are intentionally outside the spacing-grid rule.

## Notes

- The experience is optimized for desktop reservation workflows and includes responsive behavior for narrower viewports.
- Refreshing the page returns to the bookings list, while saved prototype changes may remain in browser storage.
- To reset persisted prototype state, clear this site's local storage in the browser.
