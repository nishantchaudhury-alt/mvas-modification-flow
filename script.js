const bookings=[
{id:"54334373",name:"Amish Sethi",guests:["Priya Sethi","Rohan Sethi","Kavya Sethi","Arjun Mehta","Sneha Mehta","Aarav Mehta","Diya Sharma"],party:{adult:4,youngAdult:1,child:2,infant:1},date:"16 Jan 2027",time:"16:00 departure",cabins:["4228","4229"],itin:"5N Cozumel & Progreso",farecode:"FLEX-5NIGHT",source:"Website",advisor:"Not assigned",agency:"Direct booking",commissionPct:0,email:"amish.sethi@example.com",phone:"+1 (305) 555-0142",value:9221.20,pending:300.00,status:"pending",created:"20 Jul 2026",createdTime:"05:59"},
{id:"54334374",name:"Fatima Stephenson",guests:["Barrett Daniels"],date:"14 Jun 2027",time:"16:00 departure",cabins:["6331"],itin:"5N Progreso & Cozumel",value:7116.54,pending:3707.98,status:"pending",created:"20 Jul 2026",createdTime:"06:16"},
{id:"54334375",name:"Shoshana Olsen",guests:["Guinevere Kramer"],date:"14 Jun 2027",time:"16:00 departure",cabins:["7292"],itin:"5N Progreso & Cozumel",value:8634.56,pending:4373.00,status:"pending",created:"20 Jul 2026",createdTime:"06:59"},
{id:"54334376",name:"Aryan Punjabi",guests:[],date:"13 Mar 2027",time:"16:00 departure",cabins:["5266","5275"],itin:"5N Cozumel & Progreso",value:7862.94,pending:4406.94,status:"pending",created:"20 Jul 2026",createdTime:"07:03"},
{id:"54334377",name:"Amish Sethi",guests:[],party:{adult:4,youngAdult:1,child:2,infant:1},date:"13 Mar 2027",time:"16:00 departure",cabins:["5295","1119"],itin:"5N Cozumel & Progreso",farecode:"SAVER-5NIGHT",source:"Website",advisor:"Maya Thompson",agency:"Blue Horizon Travel",commissionPct:10,value:9508.00,pending:0,status:"booked",created:"20 Jul 2026",createdTime:"07:07",recordVersion:2},
{id:"54334378",name:"Sheila Walter",guests:["Sylvia Rutledge"],date:"14 Jun 2027",time:"16:00 departure",cabins:["7341"],itin:"5N Progreso & Cozumel",value:8710.16,pending:4448.60,status:"pending",created:"20 Jul 2026",createdTime:"07:08"},
{id:"54334379",name:"Naveen G",guests:[],date:"14 Jun 2027",time:"16:00 departure",cabins:["8266"],itin:"5N Progreso & Cozumel",value:9120.64,pending:0,status:"booked",created:"20 Jul 2026",createdTime:"07:22"},
{id:"54334380",name:"Amish One",guests:[],date:"13 Mar 2027",time:"16:00 departure",cabins:["6168"],itin:"5N Cozumel & Progreso",value:6097.44,pending:3596.00,status:"pending",created:"20 Jul 2026",createdTime:"07:30"},
{id:"54334381",name:"Amish Sethi",guests:[],date:"10 Apr 2028",time:"15:30 departure",cabins:["4228"],itin:"5N Mexico Duo",value:8637.01,pending:0,status:"booked",created:"20 Jul 2026",createdTime:"08:17"},
{id:"54334384",name:"Test Sdds",guests:[],date:"08 May 2027",time:"16:00 departure",cabins:["5101"],itin:"5N Key West & Cozumel",value:1778.00,pending:596.00,status:"pending",created:"21 Jul 2026",createdTime:"03:03"},
{id:"54334385",name:"Priya Nair",guests:["Rohan Nair"],date:"22 Feb 2027",time:"16:00 departure",cabins:["3312"],itin:"5N Cozumel & Progreso",value:6890.30,pending:2100.00,status:"pending",created:"21 Jul 2026",createdTime:"09:12"},
{id:"54334386",name:"Marcus Yee",guests:[],date:"05 Sep 2027",time:"16:00 departure",cabins:["4410"],itin:"5N Progreso & Cozumel",value:5432.10,pending:0,status:"booked",created:"21 Jul 2026",createdTime:"10:41"},
{id:"54334387",name:"Elena Voss",guests:["Karl Voss"],date:"19 Nov 2027",time:"15:30 departure",cabins:["2201","2202"],itin:"5N Mexico Duo",value:11230.75,pending:5320.00,status:"pending",created:"21 Jul 2026",createdTime:"11:05"},
{id:"54334388",name:"Amish Sethi",guests:[],date:"30 Jan 2028",time:"16:00 departure",cabins:["4228"],itin:"5N Cozumel & Progreso",value:9350.00,pending:0,status:"booked",created:"21 Jul 2026",createdTime:"12:30"},
{id:"54334389",name:"Diego Cruz",guests:["Marta Cruz"],date:"14 Jun 2027",time:"16:00 departure",cabins:["6650"],itin:"5N Progreso & Cozumel",value:7402.88,pending:1950.00,status:"pending",created:"21 Jul 2026",createdTime:"13:47"},
{id:"54334390",name:"Grace Lin",guests:[],date:"13 Mar 2027",time:"16:00 departure",cabins:["5580"],itin:"5N Cozumel & Progreso",value:6120.00,pending:2500.00,status:"pending",created:"21 Jul 2026",createdTime:"14:02"},
{id:"54334391",name:"Naveen G",guests:["Aditi G"],date:"08 May 2027",time:"16:00 departure",cabins:["5102","5103"],itin:"5N Key West & Cozumel",value:8990.40,pending:0,status:"booked",created:"21 Jul 2026",createdTime:"15:19"},
{id:"54334392",name:"Oscar Petit",guests:[],date:"22 Feb 2027",time:"16:00 departure",cabins:["3390"],itin:"5N Cozumel & Progreso",value:5765.20,pending:2900.00,status:"pending",created:"21 Jul 2026",createdTime:"16:38"},
{id:"54334393",name:"Test Sdds",guests:[],date:"05 Sep 2027",time:"16:00 departure",cabins:["4470"],itin:"5N Progreso & Cozumel",value:4980.00,pending:0,status:"booked",created:"22 Jul 2026",createdTime:"02:11"},
{id:"54334394",name:"Fatima Stephenson",guests:[],date:"19 Nov 2027",time:"15:30 departure",cabins:["2250"],itin:"5N Mexico Duo",value:10120.60,pending:4750.00,status:"pending",created:"22 Jul 2026",createdTime:"03:55"}
];
/* Capture the version shipped by the booking feed before any locally committed
   cancellation is hydrated. A persisted transaction is valid only for this
   exact source record, so refreshed prototype data cannot inherit a stale edit. */
const BOOKING_SOURCE_RECORD_VERSION=new Map(bookings.map(b=>[String(b.id),Number(b.recordVersion??1)]));
const PAGE_SIZE=10;
let currentPage=1,searchTerm="";
const ADVANCED_FILTER_DEFAULTS={bookingId:"",customer:"",contact:"",dateType:"sailing",dateFrom:"",dateTo:"",statuses:[],cruise:"",itinerary:"",cabin:"",guest:"",balance:""};
let advancedFilters={...ADVANCED_FILTER_DEFAULTS,statuses:[]};
function displayDateToISO(value){
const parts=value.split(" ");
if(parts.length!==3)return "";
const months={Jan:"01",Feb:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Jul:"07",Aug:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"};
return `${parts[2]}-${months[parts[1]]||"01"}-${String(parts[0]).padStart(2,"0")}`;
}
function bookingMeta(b){
const slug=b.name.toLowerCase().replace(/[^a-z0-9]+/g,".").replace(/^\.|\.$/g,"");
return {
email:b.email||`${slug}@example.com`,
phone:b.phone||`+1 305 55${b.id.slice(-5)}`,
cruise:b.ship||(b.itin.includes("Key West")?"MVAS Voyager":"MVAS Islander"),
sailingDate:displayDateToISO(b.date),
bookingDate:displayDateToISO(b.created),
source:b.source||"Website",
advisor:b.advisor||"Maya Thompson",
agency:b.agency||"Blue Horizon Travel",
commissionPct:Number.isFinite(b.commissionPct)?b.commissionPct:10
};
}
function bookingGuestNames(b){
const explicit=GUEST_ROSTERS[b.id];
return explicit?explicit.map(g=>g.name):[b.name,...b.guests];
}
function matchesAdvancedFilters(b,filters){
const meta=bookingMeta(b);
const bookingId=filters.bookingId.trim().toLowerCase();
if(bookingId&&!b.id.toLowerCase().includes(bookingId))return false;
const customer=filters.customer.trim().toLowerCase();
if(customer&&!bookingGuestNames(b).join(" ").toLowerCase().includes(customer))return false;
const contact=filters.contact.trim().toLowerCase().replace(/\s/g,"");
if(contact&&!(meta.email+" "+meta.phone).toLowerCase().replace(/\s/g,"").includes(contact))return false;
if(filters.statuses.length&&!filters.statuses.includes(b.status))return false;
if(filters.cruise&&meta.cruise!==filters.cruise)return false;
if(filters.itinerary&&b.itin!==filters.itinerary)return false;
if(filters.cabin&&!bookingRoomNumbers(b).some(c=>c.toLowerCase().includes(filters.cabin.trim().toLowerCase())))return false;
const guest=filters.guest.trim().toLowerCase();
if(guest&&!bookingGuestNames(b).join(" ").toLowerCase().includes(guest))return false;
if(filters.balance==="due"&&b.pending<=0)return false;
if(filters.balance==="paid"&&b.pending!==0)return false;
const relevantDate=filters.dateType==="booking"?meta.bookingDate:meta.sailingDate;
if(filters.dateFrom&&relevantDate<filters.dateFrom)return false;
if(filters.dateTo&&relevantDate>filters.dateTo)return false;
return true;
}
function fmt(n){return n===0?"$0.00":"$"+n.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});}
function roundMoney(n){const value=Number(n)||0;return Math.sign(value)*Math.round((Math.abs(value)+Number.EPSILON)*100)/100;}
function allocateMoney(total,weights){
const sign=total<0?-1:1,target=Math.round((Math.abs(total)+Number.EPSILON)*100);
const safe=weights.map(weight=>Math.max(0,Number(weight)||0));
const weightTotal=safe.reduce((sum,weight)=>sum+weight,0);
if(!safe.length)return[];
if(weightTotal<=0){const values=safe.map(()=>0);values[0]=sign*target/100;return values;}
const raw=safe.map(weight=>target*weight/weightTotal);
const cents=raw.map(value=>Math.floor(value));
let remainder=target-cents.reduce((sum,value)=>sum+value,0);
raw.map((value,index)=>({index,fraction:value-Math.floor(value)}))
.sort((a,b)=>b.fraction-a.fraction||a.index-b.index)
.forEach(entry=>{if(remainder>0){cents[entry.index]++;remainder--;}});
return cents.map(value=>sign*value/100);
}
function farecodeFor(b){
if(b.farecode)return b.farecode;
const fareFamilies={0:"VALUE",1:"SELECT",2:"SAVE",3:"FLEX",4:"SAIL",5:"SAVER",6:"FLEX",7:"VALUE",8:"SELECT",9:"SAVE"};
const family=fareFamilies[Number(b.id.slice(-1))]||"FLEX";
const nights=(b.itin.match(/^(\d+)N/)||[])[1]||"5";
return `${family}-${nights}NIGHT`;
}
function shipNameFor(b){return bookingMeta(b).cruise;}
function bookingRoomNumbers(b){
const savedPlan=Number(b.pricingBase?.recordVersion)===Number(b.recordVersion??1)&&Array.isArray(b.pricingBase?.cabinPlan)
?b.pricingBase.cabinPlan:null;
return(b.cabins||[]).map((room,index)=>String(savedPlan?.[index]?.room??room));
}
function cabinCategoryFor(b){
const labels={"Interior Stateroom":"Interior","Ocean View":"Ocean View","Balcony Stateroom":"Balcony","Suite":"Suite"};
const savedPlan=Number(b.pricingBase?.recordVersion)===Number(b.recordVersion??1)&&Array.isArray(b.pricingBase?.cabinPlan)
?b.pricingBase.cabinPlan:null;
const categories=[...new Set((b.cabins||[]).map((room,index)=>{
const type=savedPlan?.[index]?.code?catEntry(savedPlan[index].code).type:cabinType(room);
return labels[type]||type;
}))];
return categories.length===1?categories[0]:categories.length?"Mixed categories":"Not assigned";
}
function rowHTML(b){
return `<tr data-id="${b.id}" data-status="${b.status}" data-search="${(b.id+" "+bookingGuestNames(b).join(" ")+" "+bookingRoomNumbers(b).join(" ")+" "+shipNameFor(b)+" "+b.itin+" "+farecodeFor(b)+" "+cabinCategoryFor(b)).toLowerCase()}">
<td><a href="#" class="booking-id">${b.id}</a></td>
<td><div class="cust-name">${b.name}</div></td>
<td><div class="date-main">${b.date}</div><div class="date-sub">${b.time}</div></td>
<td><span class="ship-name-cell">${shipNameFor(b)}</span></td>
<td><span class="chip chip-itinerary">${b.itin}</span></td>
<td><span class="farecode">${farecodeFor(b)}</span></td>
<td><span class="cabin-category">${cabinCategoryFor(b)}</span></td>
<td class="right"><span class="money">${fmt(b.value)}</span></td>
<td class="right">${b.status==="cancelled"?'<span class="money zero">&mdash;</span>':`<span class="money${b.pending===0?' zero':''}">${fmt(b.pending)}</span>`}</td>
<td>${statusBadgeHtml(b)}</td>
<td><div class="date-main">${b.created}</div><div class="date-sub">${b.createdTime}</div></td>
</tr>`;
}
function getFiltered(filters=advancedFilters){
return bookings.filter(b=>{
if(searchTerm){
const meta=bookingMeta(b);
const hay=(b.id+" "+bookingGuestNames(b).join(" ")+" "+bookingRoomNumbers(b).join(" ")+" "+shipNameFor(b)+" "+b.itin+" "+farecodeFor(b)+" "+cabinCategoryFor(b)+" "+meta.email+" "+meta.phone).toLowerCase();
if(!hay.includes(searchTerm))return false;
}
return matchesAdvancedFilters(b,filters);
});
}
function render(){
const filtered=getFiltered();
const totalPages=Math.max(1,Math.ceil(filtered.length/PAGE_SIZE));
if(currentPage>totalPages)currentPage=totalPages;
const start=(currentPage-1)*PAGE_SIZE;
const pageItems=filtered.slice(start,start+PAGE_SIZE);
document.getElementById("tableBody").innerHTML=pageItems.length?pageItems.map(rowHTML).join(""):`<tr><td colspan="11"><div class="booking-empty"><strong>No bookings match these filters.</strong><span>Try removing a filter or broadening your search.</span><button type="button" id="emptyClearFilters">Clear all filters</button></div></td></tr>`;
const end=Math.min(start+pageItems.length,filtered.length);
const queryActive=searchTerm||getFilterDescriptors(advancedFilters).length;
document.getElementById("footerText").textContent=filtered.length?`Showing ${start+1}–${end} of ${filtered.length}${queryActive?" matching":""} bookings`:"No bookings found";
const activeBookings=filtered.filter(booking=>booking.status!=="cancelled");
document.getElementById("bookingValueLabel").textContent=queryActive?"Filtered active booking value":"Active booking value";
document.getElementById("bookingValueTotal").textContent=fmt(activeBookings.reduce((sum,booking)=>sum+booking.value,0));
document.getElementById("bookingValueMeta").textContent=queryActive
?`Across ${activeBookings.length} active matching booking${activeBookings.length===1?"":"s"}`
:`Across ${activeBookings.length} active booking${activeBookings.length===1?"":"s"}`;
renderPager(totalPages);
renderAppliedFilters();
updateScrollHint();
}
function renderPager(totalPages){
const pager=document.querySelector(".pager");
pager.querySelectorAll(".pageBtn").forEach(b=>b.remove());
const next=document.getElementById("nextBtn");
for(let p=1;p<=totalPages;p++){
const btn=document.createElement("button");
btn.className="pageBtn"+(p===currentPage?" active":"");
btn.dataset.page=p;
btn.textContent=p;
btn.type="button";
btn.setAttribute("aria-label",`Go to page ${p}`);
if(p===currentPage)btn.setAttribute("aria-current","page");
btn.onclick=()=>{currentPage=p;render();};
pager.insertBefore(btn,next);
}
document.getElementById("prevBtn").disabled=currentPage===1;
next.disabled=currentPage===totalPages;
}
function updateScrollHint(){
const scroller=document.querySelector(".table-scroll");
const wrap=document.getElementById("tableWrap");
const hasMore=scroller.scrollWidth-scroller.clientWidth-scroller.scrollLeft>4;
wrap.classList.toggle("has-more",hasMore);
}
const advancedFilterBtn=document.getElementById("advancedFilterBtn");
const advancedFilterBtnLabel=document.getElementById("advancedFilterBtnLabel");
const advancedFilterCount=document.getElementById("advancedFilterCount");
const advancedFilterPanel=document.getElementById("advancedFilterPanel");
const advancedFilterForm=document.getElementById("advancedFilterForm");
const advancedFilterClose=document.getElementById("advancedFilterClose");
const activeFiltersEl=document.getElementById("activeFilters");
const activeFilterChips=document.getElementById("activeFilterChips");
const afDateError=document.getElementById("afDateError");
const itineraryOptions=[...new Set(bookings.map(b=>b.itin))];
let filterPanelOpen=false;
activeFiltersEl.before(advancedFilterPanel);
function cloneFilters(filters){return {...filters,statuses:[...filters.statuses]};}
function formatISODate(value){
if(!value)return "";
const [year,month,day]=value.split("-");
return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(new Date(Number(year),Number(month)-1,Number(day)));
}
function getFilterDescriptors(filters){
const items=[];
if(filters.bookingId)items.push({key:"bookingId",label:`Booking ID: ${filters.bookingId}`});
if(filters.customer)items.push({key:"customer",label:`Guest/company: ${filters.customer}`});
if(filters.contact)items.push({key:"contact",label:`Contact: ${filters.contact}`});
if(filters.dateFrom||filters.dateTo){
const range=filters.dateFrom&&filters.dateTo?`${formatISODate(filters.dateFrom)} – ${formatISODate(filters.dateTo)}`:filters.dateFrom?`From ${formatISODate(filters.dateFrom)}`:`Through ${formatISODate(filters.dateTo)}`;
items.push({key:"date",label:`${filters.dateType==="booking"?"Booked":"Sailing"}: ${range}`});
}
if(filters.statuses.length){const labels={pending:"Pending",booked:"Booked",cancelled:"Cancelled / aborted"};items.push({key:"statuses",label:`Status: ${filters.statuses.map(s=>labels[s]).join(", ")}`});}
if(filters.cruise)items.push({key:"cruise",label:`Cruise: ${filters.cruise.replace("MVAS ","")}`});
if(filters.itinerary)items.push({key:"itinerary",label:`Sailing: ${filters.itinerary}`});
if(filters.cabin)items.push({key:"cabin",label:`Cabin: ${filters.cabin}`});
if(filters.guest)items.push({key:"guest",label:`Guest: ${filters.guest}`});
if(filters.balance)items.push({key:"balance",label:filters.balance==="due"?"Balance due":"Paid in full"});
return items;
}
function clearFilterKey(filters,key){
const next=cloneFilters(filters);
if(key==="date"){next.dateFrom="";next.dateTo="";}
else if(key==="statuses")next.statuses=[];
else if(key==="cruise"){next.cruise="";next.itinerary="";}
else next[key]="";
return next;
}
function renderAppliedFilters(){
const descriptors=getFilterDescriptors(advancedFilters);
activeFilterChips.replaceChildren();
descriptors.forEach(item=>{
const chip=document.createElement("span");chip.className="active-filter-chip";
const label=document.createElement("span");label.textContent=item.label;
const remove=document.createElement("button");remove.type="button";remove.dataset.filterKey=item.key;remove.setAttribute("aria-label",`Remove ${item.label} filter`);remove.textContent="×";
chip.append(label,remove);activeFilterChips.append(chip);
});
activeFiltersEl.hidden=!descriptors.length;
advancedFilterCount.hidden=!descriptors.length;
advancedFilterCount.textContent=descriptors.length;
advancedFilterBtn.setAttribute("aria-label",descriptors.length?`Advanced filters, ${descriptors.length} applied`:"Advanced filters");
}
function updateItineraryOptions(selectedValue=""){
const cruise=document.getElementById("afCruise").value;
const select=document.getElementById("afItinerary");
select.replaceChildren();
const first=document.createElement("option");first.value="";first.textContent=cruise?"All sailings":"Choose a cruise first";select.append(first);
select.disabled=!cruise;
if(cruise){
itineraryOptions.filter(itin=>bookingMeta(bookings.find(b=>b.itin===itin)).cruise===cruise).forEach(itin=>{const option=document.createElement("option");option.value=itin;option.textContent=itin;select.append(option);});
}
select.value=[...select.options].some(o=>o.value===selectedValue)?selectedValue:"";
}
function writeFiltersToForm(filters){
document.getElementById("afBookingId").value=filters.bookingId;
document.getElementById("afCustomer").value=filters.customer;
document.getElementById("afContact").value=filters.contact;
const dateRadio=advancedFilterForm.querySelector(`input[name="afDateType"][value="${filters.dateType}"]`);if(dateRadio)dateRadio.checked=true;
document.getElementById("afDateFrom").value=filters.dateFrom;
document.getElementById("afDateTo").value=filters.dateTo;
advancedFilterForm.querySelectorAll('input[name="afStatus"]').forEach(input=>input.checked=filters.statuses.includes(input.value));
document.getElementById("afCruise").value=filters.cruise;
updateItineraryOptions(filters.itinerary);
document.getElementById("afCabin").value=filters.cabin;
document.getElementById("afGuest").value=filters.guest;
document.getElementById("afBalance").value=filters.balance;
validateFilterDates(false);
updateFilterPreview();
}
function readFiltersFromForm(){
return {
bookingId:document.getElementById("afBookingId").value.trim(),customer:document.getElementById("afCustomer").value.trim(),contact:document.getElementById("afContact").value.trim(),
dateType:advancedFilterForm.querySelector('input[name="afDateType"]:checked').value,dateFrom:document.getElementById("afDateFrom").value,dateTo:document.getElementById("afDateTo").value,
statuses:[...advancedFilterForm.querySelectorAll('input[name="afStatus"]:checked')].map(input=>input.value),cruise:document.getElementById("afCruise").value,itinerary:document.getElementById("afItinerary").value,
cabin:document.getElementById("afCabin").value.trim(),guest:document.getElementById("afGuest").value.trim(),balance:document.getElementById("afBalance").value
};
}
function validateFilterDates(shouldFocus=true){
const from=document.getElementById("afDateFrom"),to=document.getElementById("afDateTo");
const invalid=Boolean(from.value&&to.value&&from.value>to.value);
afDateError.hidden=!invalid;to.setAttribute("aria-invalid",invalid?"true":"false");
if(invalid)to.setAttribute("aria-describedby","afDateError");else to.removeAttribute("aria-describedby");
if(invalid&&shouldFocus)to.focus();
return !invalid;
}
function updateFilterPreview(){
const draft=readFiltersFromForm();
const count=validateFilterDates(false)?getFiltered(draft).length:0;
document.getElementById("afPreviewCount").textContent=`${count} matching ${count===1?"booking":"bookings"}`;
}
function openAdvancedFilters(){
filterPanelOpen=true;writeFiltersToForm(advancedFilters);advancedFilterPanel.hidden=false;advancedFilterBtn.setAttribute("aria-expanded","true");advancedFilterBtn.setAttribute("aria-label","Hide advanced filters");advancedFilterBtnLabel.textContent="Hide filters";
requestAnimationFrame(()=>document.getElementById("afBookingId").focus());
}
function closeAdvancedFilters(){
filterPanelOpen=false;advancedFilterPanel.hidden=true;advancedFilterBtn.setAttribute("aria-expanded","false");advancedFilterBtnLabel.textContent="Advanced filters";advancedFilterBtn.setAttribute("aria-label",getFilterDescriptors(advancedFilters).length?`Advanced filters, ${getFilterDescriptors(advancedFilters).length} applied`:"Advanced filters");advancedFilterBtn.focus();
}
advancedFilterBtn.addEventListener("click",()=>filterPanelOpen?closeAdvancedFilters():openAdvancedFilters());
advancedFilterClose.addEventListener("click",closeAdvancedFilters);
document.getElementById("afCruise").addEventListener("change",()=>{updateItineraryOptions();updateFilterPreview();});
advancedFilterForm.addEventListener("input",updateFilterPreview);
advancedFilterForm.addEventListener("change",updateFilterPreview);
advancedFilterForm.addEventListener("submit",event=>{
event.preventDefault();if(!validateFilterDates())return;
advancedFilters=readFiltersFromForm();currentPage=1;closeAdvancedFilters();render();
});
document.getElementById("clearDraftFilters").addEventListener("click",()=>writeFiltersToForm({...ADVANCED_FILTER_DEFAULTS,statuses:[]}));
document.getElementById("clearAppliedFilters").addEventListener("click",()=>{advancedFilters={...ADVANCED_FILTER_DEFAULTS,statuses:[]};currentPage=1;render();});
activeFilterChips.addEventListener("click",event=>{
const button=event.target.closest("button[data-filter-key]");if(!button)return;
advancedFilters=clearFilterKey(advancedFilters,button.dataset.filterKey);currentPage=1;render();
});
document.getElementById("tableBody").addEventListener("click",event=>{
if(!event.target.closest("#emptyClearFilters"))return;
advancedFilters={...ADVANCED_FILTER_DEFAULTS,statuses:[]};searchTerm="";document.getElementById("searchInput").value="";currentPage=1;render();
});
document.addEventListener("keydown",event=>{
if(!filterPanelOpen)return;
if(event.key==="Escape"){event.preventDefault();event.stopImmediatePropagation();closeAdvancedFilters();return;}
},true);
document.getElementById("searchInput").addEventListener("input",e=>{
searchTerm=e.target.value.trim().toLowerCase();
currentPage=1;
render();
});
document.getElementById("prevBtn").addEventListener("click",()=>{if(currentPage>1){currentPage--;render();}});
document.getElementById("nextBtn").addEventListener("click",()=>{const filtered=getFiltered();const totalPages=Math.max(1,Math.ceil(filtered.length/PAGE_SIZE));if(currentPage<totalPages){currentPage++;render();}});
document.querySelector(".table-scroll").addEventListener("scroll",updateScrollHint);
window.addEventListener("resize",updateScrollHint);
const ITIN_INFO={
"5N Cozumel & Progreso":{ship:"MVAS Islander",shipSub:"5-Night Cozumel & Progreso",from:"Tampa Bay",to:"Tampa Bay",ports:"Cozumel & Progreso",nights:5},
"5N Progreso & Cozumel":{ship:"MVAS Islander",shipSub:"5-Night Progreso & Cozumel",from:"Tampa Bay",to:"Tampa Bay",ports:"Progreso & Cozumel",nights:5},
"5N Mexico Duo":{ship:"MVAS Islander",shipSub:"5-Night Mexico Duo",from:"Tampa Bay",to:"Tampa Bay",ports:"Progreso & Cozumel",nights:5},
"5N Key West & Cozumel":{ship:"MVAS Voyager",shipSub:"5-Night Key West & Cozumel",from:"Miami",to:"Miami",ports:"Key West & Cozumel",nights:5}
};
const ITINERARY_STOPS={
"5N Cozumel & Progreso":[
{place:"Tampa Bay, Florida",kind:"Embarkation",time:"Departs 4:00 PM"},
{place:"At Sea",kind:"Sea day",time:"Cruising"},
{place:"Cozumel, Mexico",kind:"Port day",time:"8:00 AM – 6:00 PM"},
{place:"Progreso, Mexico",kind:"Port day",time:"9:00 AM – 5:00 PM"},
{place:"At Sea",kind:"Sea day",time:"Cruising"},
{place:"Tampa Bay, Florida",kind:"Disembarkation",time:"Arrives 7:00 AM"}
],
"5N Progreso & Cozumel":[
{place:"Tampa Bay, Florida",kind:"Embarkation",time:"Departs 4:00 PM"},
{place:"At Sea",kind:"Sea day",time:"Cruising"},
{place:"Progreso, Mexico",kind:"Port day",time:"9:00 AM – 5:00 PM"},
{place:"Cozumel, Mexico",kind:"Port day",time:"8:00 AM – 6:00 PM"},
{place:"At Sea",kind:"Sea day",time:"Cruising"},
{place:"Tampa Bay, Florida",kind:"Disembarkation",time:"Arrives 7:00 AM"}
],
"5N Mexico Duo":[
{place:"Tampa Bay, Florida",kind:"Embarkation",time:"Departs 4:00 PM"},
{place:"At Sea",kind:"Sea day",time:"Cruising"},
{place:"Progreso, Mexico",kind:"Port day",time:"9:00 AM – 5:00 PM"},
{place:"Cozumel, Mexico",kind:"Port day",time:"8:00 AM – 6:00 PM"},
{place:"At Sea",kind:"Sea day",time:"Cruising"},
{place:"Tampa Bay, Florida",kind:"Disembarkation",time:"Arrives 7:00 AM"}
],
"5N Key West & Cozumel":[
{place:"Miami, Florida",kind:"Embarkation",time:"Departs 4:00 PM"},
{place:"At Sea",kind:"Sea day",time:"Cruising"},
{place:"Key West, Florida",kind:"Port day",time:"8:00 AM – 4:00 PM"},
{place:"Cozumel, Mexico",kind:"Port day",time:"9:00 AM – 6:00 PM"},
{place:"At Sea",kind:"Sea day",time:"Cruising"},
{place:"Miami, Florida",kind:"Disembarkation",time:"Arrives 7:00 AM"}
]
};
const MONTHS=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const AGE_CATEGORIES=[
{singular:"Adult (21+)",plural:"Adults (21+)"},
{singular:"Young adult (13–20)",plural:"Young adults (13–20)"},
{singular:"Child (2–12)",plural:"Children (2–12)"},
{singular:"Infant (under 2)",plural:"Infants (under 2)"}
];
const CABIN_TYPES=["Interior Stateroom","Ocean View","Balcony Stateroom","Suite"];
function cabinType(cabinNumber){return CABIN_TYPES[parseInt(cabinNumber,10)%CABIN_TYPES.length];}
function parseBDate(s){const[d,mon,y]=s.split(" ");return new Date(parseInt(y),MONTHS.indexOf(mon),parseInt(d));}
function fmtDateShort(dt){return MONTHS[dt.getMonth()]+" "+dt.getDate()+", "+dt.getFullYear();}
function fmtDOB(dt){return String(dt.getDate()).padStart(2,"0")+" "+MONTHS[dt.getMonth()]+" "+dt.getFullYear();}
function addDays(dt,n){const d=new Date(dt);d.setDate(d.getDate()+n);return d;}
function daysUntilSailing(sail,now=new Date()){return Math.ceil((sail-now)/(1000*60*60*24));}
function daysUntilSailingLabel(days){
if(days>1)return `${days} days`;
if(days===1)return "1 day";
if(days===0)return "Today";
const elapsed=Math.abs(days);
return `Sailed ${elapsed} day${elapsed===1?"":"s"} ago`;
}
function fmtTime12(value){
const[hours,minutes]=value.split(":").map(Number),hour12=((hours+11)%12)+1;
return `${String(hour12).padStart(2,"0")}:${String(minutes).padStart(2,"0")} ${hours<12?"AM":"PM"}`;
}

/* ---- guest roster ---------------------------------------------------- */
/* Explicit roster for the reference booking (Figma 491:7174). Every other
   booking derives one deterministically so the tables stay consistent. */
const GUEST_ROSTERS={
"54334373":[
{name:"Amish Sethi",dob:"15 Mar 1985",cabin:"4228",supplements:3,supps:{presale:1,shore:1,paradise:1},insurance:true,profile:{first:"Amish",middle:"",last:"Sethi",iso:"US",email:"amish.sethi@example.com",phone:"(305) 555-0142",gender:"Male",address:"1421 Brickell Avenue",city:"Miami",zip:"33101",state:"Florida"}},
{name:"Priya Sethi",dob:"22 Jul 1987",cabin:"4228",supplements:2,supps:{daybed:1,paradise:1},insurance:true,profile:{first:"Priya",middle:"",last:"Sethi",iso:"US",email:"priya.sethi@example.com",phone:"(305) 555-0143",gender:"Female",address:"1421 Brickell Avenue",city:"Miami",zip:"33101",state:"Florida"}},
{name:"Rohan Sethi",dob:"08 Nov 2006",cabin:"4228",supplements:1,supps:{paradise:1},insurance:true,profile:{first:"Rohan",middle:"",last:"Sethi",iso:"US",email:"rohan.sethi@example.com",phone:"(305) 555-0144",gender:"Male",address:"1421 Brickell Avenue",city:"Miami",zip:"33101",state:"Florida"}},
{name:"Kavya Sethi",dob:"14 Apr 2014",cabin:"4228",supplements:0,supps:{},insurance:true,profile:{first:"Kavya",middle:"",last:"Sethi",iso:"US",email:"kavya.sethi@example.com",phone:"(305) 555-0145",gender:"Female",address:"1421 Brickell Avenue",city:"Miami",zip:"33101",state:"Florida"}},
{name:"Arjun Mehta",dob:"03 Sep 1982",cabin:"4229",supplements:4,supps:{landshark:1,saltair:1,paradise:1,photo:1},insurance:true,profile:{first:"Arjun",middle:"",last:"Mehta",iso:"US",email:"arjun.mehta@example.com",phone:"(305) 555-0151",gender:"Male",address:"801 Bayshore Drive",city:"Miami",zip:"33101",state:"Florida"}},
{name:"Sneha Mehta",dob:"19 Dec 1984",cabin:"4229",supplements:2,supps:{paradise:1,photo:1},insurance:true,profile:{first:"Sneha",middle:"",last:"Mehta",iso:"US",email:"sneha.mehta@example.com",phone:"(305) 555-0152",gender:"Female",address:"801 Bayshore Drive",city:"Miami",zip:"33101",state:"Florida"}},
{name:"Aarav Mehta",dob:"27 Jun 2018",cabin:"4229",supplements:0,supps:{},insurance:true,profile:{first:"Aarav",middle:"",last:"Mehta",iso:"US",email:"aarav.mehta@example.com",phone:"(305) 555-0153",gender:"Male",address:"801 Bayshore Drive",city:"Miami",zip:"33101",state:"Florida"}},
{name:"Diya Sharma",dob:"11 Feb 2025",cabin:"4229",supplements:0,supps:{},insurance:true,profile:{first:"Diya",middle:"",last:"Sharma",iso:"US",email:"diya.sharma@example.com",phone:"(305) 555-0154",gender:"Female",address:"801 Bayshore Drive",city:"Miami",zip:"33101",state:"Florida"}}
],
"54334377":[
{name:"Amish Sethi",dob:"15 Mar 1985",cabin:"5295",supplements:2,insurance:true},
{name:"Priya Sethi",dob:"22 Jul 1987",cabin:"5295",supplements:1,insurance:true},
{name:"Rohan Sethi",dob:"08 Nov 2006",cabin:"5295",supplements:1,insurance:true},
{name:"Kavya Sethi",dob:"14 Apr 2014",cabin:"5295",supplements:0,insurance:true},
{name:"Arjun Mehta",dob:"03 Sep 1982",cabin:"1119",supplements:2,insurance:true},
{name:"Sneha Mehta",dob:"19 Dec 1984",cabin:"1119",supplements:1,insurance:true},
{name:"Aarav Mehta",dob:"27 Jun 2018",cabin:"1119",supplements:0,insurance:true},
{name:"Mira Mehta",dob:"11 Feb 2026",cabin:"1119",supplements:0,insurance:true}
]
};
const FILLER_FIRST=["Priya","Rohan","Kavya","Arjun","Sneha","Aarav","Diya","Ishaan","Meera","Kabir","Anaya","Vivaan"];
function seedOf(str){let s=0;for(let i=0;i<str.length;i++)s=(s*31+str.charCodeAt(i))>>>0;return s;}
function baseGuestId(bookingId,g){
const fingerprint=`${g.name}|${g.dob}|${g.cabin}`;
return`base:${bookingId}:${seedOf(fingerprint).toString(36)}-${seedOf(fingerprint+"|mvas").toString(36)}`;
}
/* age bands at sailing: 0 = adult 21+, 1 = young adult 13–20,
   2 = child 2–12, 3 = infant under 2 */
function ageAt(dob,on){let a=on.getFullYear()-dob.getFullYear();const m=on.getMonth()-dob.getMonth();if(m<0||(m===0&&on.getDate()<dob.getDate()))a--;return a;}
function ageBand(age){return age>=21?0:age>=13?1:age>=2?2:3;}
function buildRoster(b){
const sail=parseBDate(b.date);
const explicit=GUEST_ROSTERS[b.id];
if(explicit)return explicit.map(g=>{
const dobDate=parseBDate(g.dob),band=ageBand(ageAt(dobDate,sail));
return{...g,guestId:g.guestId||baseGuestId(b.id,g),dobDate,supplements:band===3?0:g.supplements};
});
const counts=b.party?[b.party.adult??b.party.a21??0,b.party.youngAdult??b.party.a18??0,b.party.child||0,b.party.infant||0]:null;
let bands=[];
if(counts){counts.forEach((n,i)=>{for(let k=0;k<n;k++)bands.push(i);});}
else{const total=1+b.guests.length;bands.push(0);for(let i=1;i<total;i++)bands.push(i%3===0?2:0);}
const surname=(b.name.split(" ")[1]||"Guest");
const seed=seedOf(b.id);
return bands.map((band,i)=>{
const r=(seed+i*97)%1000;
const named=i===0?b.name:(b.guests[i-1]||FILLER_FIRST[(seed+i)%FILLER_FIRST.length]+" "+surname);
const yearsBack=band===0?25+(r%31):band===1?13+(r%9):band===2?2+(r%11):(r%2);
const dobDate=new Date(sail.getFullYear()-yearsBack,r%12,1+(r%28));
const guest={name:named,dob:fmtDOB(dobDate),dobDate,
cabin:b.cabins[i%b.cabins.length],
supplements:band===3?0:band===2?(r%2===0?0:1):r%5,
insurance:true};
return{...guest,guestId:baseGuestId(b.id,guest)};
});
}

/* Completed booking transactions are authoritative, unlike the separate
   modification draft below. Persist only the committed booking record, roster,
   price baseline and audit data needed to reproduce each transaction. */
const CANCELLATION_COMMIT_VERSION=1;
const CANCELLATION_COMMIT_PREFIX="mvas-booking-cancellation-commit:v1:";
const MODIFICATION_COMMIT_VERSION=1;
const MODIFICATION_COMMIT_PREFIX="mvas-booking-modification-commit:v1:";
function cancellationCommitOrigin(){
try{return String(location.origin||"null");}catch(_error){return"unknown";}
}
function cancellationCommitKey(bookingId){return CANCELLATION_COMMIT_PREFIX+String(bookingId);}
function modificationCommitKey(bookingId){return MODIFICATION_COMMIT_PREFIX+String(bookingId);}
function cancellationSnapshotGuest(g){
const supps={};
Object.entries(g.supps||{}).forEach(([id,value])=>{
const quantity=Math.max(0,Math.floor(Number(value)||0));
if(quantity)supps[id]=quantity;
});
return{
guestId:String(g.guestId||""),name:String(g.name||""),dob:String(g.dob||""),cabin:String(g.cabin||""),
supplements:Object.values(supps).reduce((sum,value)=>sum+value,0),supps,pkg:g.pkg?String(g.pkg):null,
insurance:g.insurance!==false,profile:g.profile&&typeof g.profile==="object"?{...g.profile}:{}
};
}
function cancellationSnapshotBooking(b){
return{
status:b.status,name:b.name,guests:Array.isArray(b.guests)?b.guests.map(String):[],
party:b.party&&typeof b.party==="object"?{...b.party}:null,
cabins:Array.isArray(b.cabins)?b.cabins.map(String):[],value:roundMoney(b.value),pending:roundMoney(b.pending),
paidToDate:Number.isFinite(Number(b.paidToDate))?roundMoney(b.paidToDate):roundMoney(b.value-b.pending),
cancel:b.cancel&&typeof b.cancel==="object"?{...b.cancel}:null,
events:Array.isArray(b.events)?b.events.map(event=>({time:String(event.time||""),title:String(event.title||""),desc:String(event.desc||""),...(event.src?{src:String(event.src)}:{})})):[],
historySeed:Array.isArray(b.historySeed)?b.historySeed.map(event=>({time:String(event.time||""),title:String(event.title||""),desc:String(event.desc||""),...(event.src?{src:String(event.src)}:{})})):[],
appliedPromos:Array.isArray(b.appliedPromos)?b.appliedPromos.map(String):[],
pricingBase:b.pricingBase&&typeof b.pricingBase==="object"?JSON.parse(JSON.stringify(b.pricingBase)):null
};
}
function persistCommittedCancellation(b,guests,commitType){
try{
const sourceRecordVersion=BOOKING_SOURCE_RECORD_VERSION.get(String(b.id));
localStorage.setItem(cancellationCommitKey(b.id),JSON.stringify({
version:CANCELLATION_COMMIT_VERSION,origin:cancellationCommitOrigin(),bookingId:String(b.id),
sourceRecordVersion,recordVersion:Number(b.recordVersion),commitType,
committedAt:new Date().toISOString(),booking:cancellationSnapshotBooking(b),
roster:(guests||[]).map(cancellationSnapshotGuest)
}));
}catch(_error){/* The completed in-memory transaction still succeeds if storage is unavailable. */}
}
function persistCommittedModification(b,guests){
try{
const sourceRecordVersion=BOOKING_SOURCE_RECORD_VERSION.get(String(b.id));
localStorage.setItem(modificationCommitKey(b.id),JSON.stringify({
version:MODIFICATION_COMMIT_VERSION,origin:cancellationCommitOrigin(),bookingId:String(b.id),
sourceRecordVersion,recordVersion:Number(b.recordVersion),commitType:"modification",
committedAt:new Date().toISOString(),booking:cancellationSnapshotBooking(b),
roster:(guests||[]).map(cancellationSnapshotGuest)
}));
}catch(_error){/* The completed in-memory transaction still succeeds if storage is unavailable. */}
}
function validCancellationMoney(value){return Number.isFinite(Number(value))&&Number(value)>=0;}
function hydrateCommittedCancellation(b){
let saved;
try{
const candidates=[cancellationCommitKey(b.id),modificationCommitKey(b.id)]
.map(key=>{
try{const raw=localStorage.getItem(key);return raw?JSON.parse(raw):null;}catch(_error){return null;}
}).filter(Boolean)
.filter(candidate=>candidate&&["full","partial","modification"].includes(candidate.commitType))
.sort((a,b)=>Number(b.recordVersion)-Number(a.recordVersion)||String(b.committedAt||"").localeCompare(String(a.committedAt||"")));
if(!candidates.length)return;
saved=candidates[0];
}catch(_error){return;}
const seedVersion=BOOKING_SOURCE_RECORD_VERSION.get(String(b.id));
const recordVersion=Number(saved?.recordVersion),booking=saved?.booking,roster=saved?.roster;
const cabins=Array.isArray(booking?.cabins)?booking.cabins.map(String):[];
const valid=saved&&Number(saved.version)===CANCELLATION_COMMIT_VERSION
&&String(saved.origin)===cancellationCommitOrigin()
&&String(saved.bookingId)===String(b.id)
&&Number(saved.sourceRecordVersion)===seedVersion
&&Number.isInteger(recordVersion)&&recordVersion>seedVersion
&&(saved.commitType==="full"||saved.commitType==="partial"||saved.commitType==="modification")
&&booking&&typeof booking==="object"
&&["pending","booked","cancelled"].includes(booking.status)
&&(saved.commitType!=="full"||booking.status==="cancelled")
&&validCancellationMoney(booking.value)&&validCancellationMoney(booking.pending)
&&cabins.length>0&&Array.isArray(roster)&&roster.length>0;
if(!valid)return;
const cabinSet=new Set(cabins),guestIds=new Set();
const normalizedRoster=roster.map(rawGuest=>{
if(!rawGuest||typeof rawGuest!=="object")return null;
const guest={...rawGuest,guestId:String(rawGuest.guestId||""),name:String(rawGuest.name||""),
dob:String(rawGuest.dob||""),cabin:String(rawGuest.cabin||""),insurance:rawGuest.insurance!==false,
profile:rawGuest.profile&&typeof rawGuest.profile==="object"?{...rawGuest.profile}:{}};
if(!guest.guestId||guestIds.has(guest.guestId)||!guest.name||!guest.dob||!cabinSet.has(guest.cabin)||!guest.insurance)return null;
guestIds.add(guest.guestId);
guest.supps={};
Object.entries(rawGuest.supps&&typeof rawGuest.supps==="object"?rawGuest.supps:{}).forEach(([id,value])=>{
const quantity=Math.max(0,Math.floor(Number(value)||0));if(quantity)guest.supps[id]=quantity;
});
guest.supplements=Object.values(guest.supps).reduce((sum,value)=>sum+value,0);
guest.pkg=rawGuest.pkg?String(rawGuest.pkg):null;
return guest;
});
if(normalizedRoster.some(guest=>!guest))return;
let pricingBase=null;
if(booking.pricingBase!=null){
const candidate=booking.pricingBase;
const priceGuestIds=Array.isArray(candidate?.guests)?candidate.guests.map(guest=>String(guest?.guestId||"")):[];
const priceFields=[candidate?.cabinFare,candidate?.taxes,candidate?.insurance,candidate?.discount,candidate?.newGuestCabinFare];
if(!candidate||Number(candidate.recordVersion)!==recordVersion
||priceGuestIds.length!==normalizedRoster.length
||priceGuestIds.some(id=>!guestIds.has(id))
||priceFields.some(value=>!validCancellationMoney(value))
||!Array.isArray(candidate.cabinPlan)||candidate.cabinPlan.length!==cabins.length)return;
pricingBase=JSON.parse(JSON.stringify(candidate));
}
/* Assign whitelisted committed fields only. In particular, no cabin/guest
   modification draft, promo or pending-removal state can enter this record. */
b.status=booking.status;
b.name=String(booking.name||normalizedRoster[0].name);
b.guests=Array.isArray(booking.guests)?booking.guests.map(String):normalizedRoster.slice(1).map(guest=>guest.name);
if(booking.party&&typeof booking.party==="object")b.party={...booking.party};else delete b.party;
b.cabins=cabins;b.value=roundMoney(booking.value);b.pending=roundMoney(booking.pending);
b.paidToDate=validCancellationMoney(booking.paidToDate)?roundMoney(booking.paidToDate):roundMoney(b.value-b.pending);
b.recordVersion=recordVersion;
if(booking.cancel&&typeof booking.cancel==="object")b.cancel={...booking.cancel};else delete b.cancel;
b.events=Array.isArray(booking.events)?booking.events.map(event=>({time:String(event?.time||""),title:String(event?.title||""),desc:String(event?.desc||""),...(event?.src?{src:String(event.src)}:{})})):[];
b.historySeed=Array.isArray(booking.historySeed)?booking.historySeed.map(event=>({time:String(event?.time||""),title:String(event?.title||""),desc:String(event?.desc||""),...(event?.src?{src:String(event.src)}:{})})):[];
b.appliedPromos=Array.isArray(booking.appliedPromos)?booking.appliedPromos.map(String):[];
if(pricingBase)b.pricingBase=pricingBase;else delete b.pricingBase;
GUEST_ROSTERS[b.id]=normalizedRoster;
}
/* The design-review booking is a fixed scenario, not generated demo noise.
   Its sold products, cabin plan, per-passenger fare allocations and taxes are
   authored together and must reconcile to the booking total before rendering. */
function seedReferenceBookingPricing(){
const b=bookings.find(booking=>booking.id==="54334373");
const roster=GUEST_ROSTERS["54334373"];
if(!b||!roster)return;
const cabinFares=[1140.66,1140.66,1140.65,684.39,1261.49,1261.49,756.89,315.37];
const govtTaxes=[27.74,27.74,27.74,16.65,27.74,27.74,16.64,6.94];
const cruiseFees=[29.45,29.45,29.44,17.67,29.44,29.44,17.67,7.36];
const cabinFare=roundMoney(cabinFares.reduce((sum,value)=>sum+value,0));
const taxes=roundMoney(govtTaxes.reduce((sum,value)=>sum+value,0)+cruiseFees.reduce((sum,value)=>sum+value,0));
const supplements=358.75,insurance=792,discount=0;
const reconciledTotal=roundMoney(cabinFare+taxes+supplements+insurance-discount);
if(reconciledTotal!==roundMoney(b.value))throw new Error(`Reference booking pricing does not reconcile: ${reconciledTotal}`);
b.recordVersion=Number(b.recordVersion??1);
b.pricingBase={
recordVersion:b.recordVersion,cabinFare,taxes,supplements,insurance,discount,
newGuestCabinFare:roundMoney(cabinFare/roster.length),
cabinPlan:[{room:"4228",code:"I6"},{room:"4229",code:"O5"}],
guests:roster.map((guest,index)=>({
guestId:guest.guestId||baseGuestId(b.id,guest),supps:{...(guest.supps||{})},pkg:null,
insurance:guest.insurance!==false,profile:{...(guest.profile||{})},
baseCabinFare:cabinFares[index],baseGovtTax:govtTaxes[index],baseCruiseFee:cruiseFees[index],basePromotion:0
}))
};
}
seedReferenceBookingPricing();
bookings.forEach(hydrateCommittedCancellation);
/* ---- guest profiles -------------------------------------------------- */
/* the booking feed carries no contact details, so each guest's profile is
   derived deterministically from their name + booking id (Figma 538:8599) */
const COUNTRIES={IN:{name:"India",code:"+91"},US:{name:"United States",code:"+1"}};
const IN_SURNAMES=new Set(["Sethi","Mehta","Sharma","Kapoor","Nair","Punjabi","Joshi","G","One"]);
const MALE_FIRST=new Set(["Amish","Rohan","Arjun","Aarav","Ishaan","Kabir","Vivaan","Marcus","Diego","Karl","Oscar","Barrett","Naveen","Aryan","Test"]);
const FEMALE_FIRST=new Set(["Priya","Kavya","Sneha","Diya","Meera","Anaya","Fatima","Shoshana","Sheila","Elena","Grace","Marta","Aditi","Guinevere","Sylvia"]);
const GENDERS=["Male","Female","Non-binary","Prefer not to say"];
const STREETS=["Ocean Drive","Palm Terrace","Harbour Walk","Sunset Boulevard","Coral Way","Marina Bay Road"];
const FL_CITIES=[["Orlando","32830"],["Tampa","33602"],["Miami","33101"],["Key West","33040"],["Sarasota","34236"]];
/* zip → city/state, so the form can auto-fill both from a single input */
const ZIP_LOOKUP={};
FL_CITIES.forEach(([city,zip])=>{ZIP_LOOKUP[zip]={city,state:"Florida"};});
/* stand-in for the CRM guest directory: lets an agent pull a returning guest
   into the form instead of retyping details that are already on file */
const GUEST_DIRECTORY=[
{first:"Miguel",middle:"A",last:"Santos",dob:"1979-11-04",gender:"Male",iso:"US",email:"miguel.santos@example.com",phone:"(305) 442-8871",zip:"33101",city:"Miami",state:"Florida",address:"418 Coral Way, Miami"},
{first:"Priyanka",middle:"",last:"Raman",dob:"1986-02-19",gender:"Female",iso:"IN",email:"priyanka.raman@example.com",phone:"98220 41007",zip:"33602",city:"Tampa",state:"Florida",address:"77 Harbour Walk, Tampa"},
{first:"Daniel",middle:"J",last:"O'Brien",dob:"1965-07-30",gender:"Male",iso:"US",email:"daniel.obrien@example.com",phone:"(407) 233-1190",zip:"32830",city:"Orlando",state:"Florida",address:"2200 Palm Terrace, Orlando"},
{first:"Chen",middle:"",last:"Wei",dob:"1993-09-12",gender:"Female",iso:"US",email:"chen.wei@example.com",phone:"(941) 887-3320",zip:"34236",city:"Sarasota",state:"Florida",address:"9 Sunset Boulevard, Sarasota"},
{first:"Amara",middle:"N",last:"Okafor",dob:"1990-04-25",gender:"Female",iso:"US",email:"amara.okafor@example.com",phone:"(305) 118-6642",zip:"33040",city:"Key West",state:"Florida",address:"612 Ocean Drive, Key West"},
{first:"Tomas",middle:"",last:"Novak",dob:"1974-12-08",gender:"Male",iso:"US",email:"tomas.novak@example.com",phone:"(813) 550-2214",zip:"33602",city:"Tampa",state:"Florida",address:"145 Marina Bay Road, Tampa"}
];
function directoryFullName(p){return [p.first,p.middle,p.last].filter(Boolean).join(" ");}
/* match on name or email so either identifier an agent has to hand works */
function searchDirectory(q){
const t=q.trim().toLowerCase();
if(t.length<2)return[];
return GUEST_DIRECTORY.filter(p=>
directoryFullName(p).toLowerCase().includes(t)||p.email.toLowerCase().includes(t)).slice(0,5);
}
function guestProfile(g,i,b){
if(g?.profile&&typeof g.profile==="object")return{...g.profile};
const seed=seedOf(b.id+"|"+g.name+"|"+i);
const parts=g.name.split(" ");
const first=parts[0],last=parts.slice(1).join(" ")||"Guest";
const iso=IN_SURNAMES.has(last)?"IN":"US";
const[city,zip]=FL_CITIES[seed%FL_CITIES.length];
return{first,middle:"",last,iso,
email:(first+"."+last).toLowerCase().replace(/[^a-z.]/g,"")+"@example.com",
phone:iso==="IN"
?(90000+seed%10000)+" "+(10000+(seed*7)%90000)
:"("+(200+seed%700)+") "+(100+seed%900)+"-"+(1000+(seed*13)%9000),
gender:MALE_FIRST.has(first)?"Male":FEMALE_FIRST.has(first)?"Female":GENDERS[seed%2],
address:(100+seed%899)+" "+STREETS[seed%STREETS.length]+", Margaritaville",
city,zip,state:"Florida"};
}
function cabinOccupancy(roster,cabins,sail){
return cabins.map((num,idx)=>{
const counts=[0,0,0,0];
roster.filter(g=>g.cabin===num).forEach(g=>{counts[ageBand(ageAt(g.dobDate,sail))]++;});
return{num,idx,type:cabinType(num),counts};
});
}

/* ---- pricing engine -------------------------------------------------- */
const INSURANCE_RATE=99;              /* per guest, per booking (Figma 540:8594) */

/* ---- stateroom inventory (Figma 573:8658) ---------------------------- */
/* the sellable categories behind "Change room". price is per guest, so an
   upgrade costs (new price − originally sold price) x heads in that cabin. */
const STATEROOM_CATALOGUE=[
{code:"I6",name:"Interior Stateroom – I6",type:"Interior Stateroom",loc:"Forward",deck:4,price:472},
{code:"I7",name:"Interior Stateroom – I7",type:"Interior Stateroom",loc:"Mid Ship",deck:4,price:472},
{code:"I8",name:"Interior Stateroom – I8",type:"Interior Stateroom",loc:"Aft Ship",deck:5,price:472},
{code:"I8G",name:"Category I8-G",type:"Interior Stateroom",loc:"Mid Ship",deck:5,price:499},
{code:"O4",name:"Ocean View – O4",type:"Ocean View",loc:"Forward",deck:6,price:512},
{code:"O5",name:"Ocean View – O5",type:"Ocean View",loc:"Mid Ship",deck:6,price:522},
{code:"B2",name:"Balcony Deluxe – B2",type:"Balcony Stateroom",loc:"Mid Ship",deck:7,price:549},
{code:"B3",name:"Balcony Premium – B3",type:"Balcony Stateroom",loc:"Aft Ship",deck:7,price:579},
{code:"S1",name:"Grand Terrace Suite – S1",type:"Suite",loc:"Forward",deck:8,price:1932},
{code:"S3",name:"Jr Suite – S3",type:"Suite",loc:"Mid Ship",deck:8,price:1732},
{code:"S5",name:"Owner Suite – S5",type:"Suite",loc:"Aft Ship",deck:8,price:2250}
];
const OCC_KEYS=["single","double","dbinf","triple","quad"];
const OCC_LABELS=["Single","Double","DB+INF","Triple","Quad"];
const PROTOTYPE_MAX_CABIN_GUESTS=6;
/* the cabin's party size decides which occupancy bucket gates availability,
   so the screen answers that instead of printing the whole matrix */
function occBucketFor(guests){
const n=guests.length,inf=guests.filter(x=>x.g.band===3).length;
if(n<=1)return{key:"single",label:"1 guest"};
if(n===2)return{key:"double",label:"2 guests"};
if(n===3&&inf>0)return{key:"dbinf",label:"2 guests + infant"};
if(n===3)return{key:"triple",label:"3 guests"};
return{key:"quad",label:n===4?"4 guests":`${n} guests`,over:n>PROTOTYPE_MAX_CABIN_GUESTS};
}
const CAT_FILTERS=["All","Interior","Ocean View","Balcony","Suite"];
const LOC_FILTERS=["All","Forward","Mid Ship","Aft Ship"];
const CAT_FILTER_TYPE={All:null,Interior:"Interior Stateroom","Ocean View":"Ocean View",Balcony:"Balcony Stateroom",Suite:"Suite"};
function catEntry(code){return STATEROOM_CATALOGUE.find(e=>e.code===code)||STATEROOM_CATALOGUE[0];}
/* a cabin's originally sold category, stable per room number */
function baseCabinCode(num){
const pool=STATEROOM_CATALOGUE.filter(e=>e.type===cabinType(num));
return pool[seedOf(String(num))%pool.length].code;
}
/* per-booking availability: thin and often sold out, like real inventory.
   total is the sum of the occupancy buckets so every row reconciles. */
function stateroomInventory(b){
return STATEROOM_CATALOGUE.map(e=>{
/* a minority of categories are fully sold out; the rest carry independent
   per-occupancy inventory so each party size sees a plausible mix */
const soldOut=seedOf(b.id+"|"+e.code)%7===0;
const occ={};
OCC_KEYS.forEach(k=>{
const t=seedOf(b.id+"|"+e.code+"|"+k)%10;
occ[k]=soldOut||t<3?0:t-2;
});
return{...e,occ,total:OCC_KEYS.reduce((a,k)=>a+occ[k],0)};
});
}
const AGE_WEIGHT=[1,1,0.6,0.25];      /* fare share by age band */
const PROMO_CODES={SAVE10:{type:"pct",value:0.10,label:"10% off cabin fare"},MVAS50:{type:"flat",value:50,label:"$50 off booking total"},SAILFREE:{type:"flat",value:150,label:"$150 off booking total"}};
let detail=null;

/* Keep an in-progress modification as a booking-specific local draft.  Only the
   mutable working state is stored: the freshly built booking remains the source
   of truth for inventory, sailing information and the original-price baseline. */
const DETAIL_DRAFT_VERSION=4;
const DETAIL_DRAFT_PREFIX="mvas-booking-modification-draft:";
const FARE_SNAPSHOT_KEYS=["baseCabin","cabinUpgrade","cabinFare","govtTax","cruiseFee","taxes","onboard","protection","enhancements","basePromotion","subtotal","promotion","total"];
function detailDraftKey(bookingId){return DETAIL_DRAFT_PREFIX+String(bookingId);}
function detailBaselineVersion(bookingId){return String(bookingId)==="54334373"?2:1;}
function clearDetailDraft(bookingId){
try{localStorage.removeItem(detailDraftKey(bookingId));}catch(_error){}
}
function cloneGuestState(g){
return{...g,
dobDate:g.dobDate instanceof Date?new Date(g.dobDate):new Date(g.dobDate),
supps:{...(g.supps||{})},profile:{...(g.profile||{})},pendingRemoval:clonePendingRemoval(g.pendingRemoval)};
}
function cloneDetailState(d){
return{...d,
info:{...(d.info||{})},
sail:d.sail instanceof Date?new Date(d.sail):new Date(d.sail),
guests:(d.guests||[]).map(cloneGuestState),
inventory:(d.inventory||[]).map(item=>({...item,occ:{...(item.occ||{})}})),
cabinPlan:(d.cabinPlan||[]).map(cabin=>({...cabin})),
base:{...(d.base||{}),
suppsBy:(d.base?.suppsBy||[]).map(supps=>({...supps})),
pkgBy:[...(d.base?.pkgBy||[])],supplementsBy:[...(d.base?.supplementsBy||[])],
insuranceBy:[...(d.base?.insuranceBy||[])],cabinCodeBy:[...(d.base?.cabinCodeBy||[])],
roomBy:[...(d.base?.roomBy||[])],cabinBy:[...(d.base?.cabinBy||[])],
profileBy:(d.base?.profileBy||[]).map(profile=>({...profile})),
guests:(d.base?.guests||[]).map(cloneGuestState)},
selected:d.selected&&typeof d.selected==="object"?{...d.selected}:d.selected};
}
function committedDetailState(d){
const committed=cloneDetailState(d);
committed.guests=(d.base?.guests||[]).map(cloneGuestState);
committed.cabinPlan=(d.b?.cabins||[]).map((num,index)=>({
num,room:String(d.base?.roomBy?.[index]??num),code:d.base?.cabinCodeBy?.[index]||baseCabinCode(num)
}));
committed.promo=null;
return committed;
}
function fareSnapshot(row){
return FARE_SNAPSHOT_KEYS.reduce((snapshot,key)=>{
snapshot[key]=roundMoney(Number(row?.[key])||0);return snapshot;
},{});
}
function clonePendingRemoval(marker){
if(!marker||typeof marker!=="object")return null;
return{
farePosition:Math.max(1,Math.floor(Number(marker.farePosition)||1)),
cabinIdx:Math.max(0,Math.floor(Number(marker.cabinIdx)||0)),
room:String(marker.room??""),fare:fareSnapshot(marker.fare)
};
}
function addedGuestId(bookingId){
const random=globalThis.crypto?.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`;
return`new:${bookingId}:${random}`;
}
function draftGuest(g){
return{
guestId:g.guestId,
name:g.name,dob:g.dob,
dobDate:g.dobDate instanceof Date?g.dobDate.toISOString():g.dobDate,
band:g.band,cabin:g.cabin,supplements:g.supplements,
supps:{...(g.supps||{})},pkg:g.pkg||null,insurance:g.insurance!==false,
profile:{...(g.profile||{})},pendingRemoval:clonePendingRemoval(g.pendingRemoval)
};
}
/* A previous prototype left one Express Laundry & Pressing unit on every sold
   guest in the reference booking.  That draft is stored per browser origin, so
   the stale file:// copy can survive after the http:// copy has been cleaned.
   Migrate only that exact, impossible-through-the-current-UI fingerprint. */
function migrateLegacyUniformLaundry(draft,fresh,guests){
const affected=new Set();
if(Number(draft?.version)!==1||String(fresh.b.id)!=="54334373"
||Number(draft?.recordVersion??1)!==1||Number(fresh.b.recordVersion??1)!==1)return affected;
const baseline=fresh.base.guests||[];
if(baseline.length!==8||baseline.some(g=>Number(g.supps?.laundry||0)!==0)
||baseline.some(g=>Math.abs(Number(g.basePromotion)||0)>.005)
||!baseline.some(g=>g.band===3)||draft.promo)return affected;
const rawById=new Map((draft.guests||[]).map(g=>[g?.guestId,g]));
const restoredById=new Map(guests.map(g=>[g.guestId,g]));
const matches=baseline.every(base=>{
const raw=rawById.get(base.guestId),restored=restoredById.get(base.guestId);
return raw&&restored&&raw.supps?.laundry===1&&restored.supps?.laundry===1;
});
if(!matches)return affected;
const laundryPrice=SUPP_BY_ID.laundry.pricePP;
const invalidFrozenFare=baseline.some(base=>{
const guest=restoredById.get(base.guestId),fare=guest?.pendingRemoval?.fare;
if(!fare)return false;
const covered=Boolean(guest.pkg&&PKG_BY_ID[guest.pkg]?.includedSupps.includes("laundry"));
if(covered)return false;
return Math.abs(Number(fare.promotion)||0)>.005
||["onboard","enhancements","subtotal","total"].some(key=>Number(fare[key])<laundryPrice);
});
if(invalidFrozenFare)return affected;
baseline.forEach(base=>{
const guest=restoredById.get(base.guestId);
guest.supps={...(guest.supps||{})};
delete guest.supps.laundry;
guest.supplements=suppCount(guest.supps);
affected.add(base.guestId);
});
return affected;
}
/* v2 drafts for the review fixture stored the delta against supplement maps
   that were synthesized from counts. Rebase that delta onto the authored v3
   maps so a real agent's staged work survives the fixture correction without
   treating the corrected sold products as new pending changes. */
const REFERENCE_V2_SUPPLEMENTS={
"Amish Sethi":{paradise:1,wifi:1,presale:1},
"Priya Sethi":{paradise:1,wifi:1},
"Rohan Sethi":{paradise:1},
"Kavya Sethi":{},
"Arjun Mehta":{paradise:1,wifi:1,presale:1,daybed:1},
"Sneha Mehta":{paradise:1,wifi:1},
"Aarav Mehta":{},
"Diya Sharma":{}
};
function migrateReferenceV2Supplements(saved,fallback,fresh,draftVersion){
if(draftVersion!==2||String(fresh.b.id)!=="54334373"||!fallback)return saved?.supps;
const legacy=REFERENCE_V2_SUPPLEMENTS[fallback.name];
if(!legacy)return saved?.supps;
const authored=fallback.supps||{},staged=saved?.supps||{};
const rebased={};
new Set([...Object.keys(legacy),...Object.keys(authored),...Object.keys(staged)]).forEach(id=>{
const quantity=Math.max(0,Math.floor((Number(authored[id])||0)+(Number(staged[id])||0)-(Number(legacy[id])||0)));
if(quantity)rebased[id]=quantity;
});
return rebased;
}
function legacyReferenceProfile(g,index,b){
const seed=seedOf(b.id+"|"+g.name+"|"+index);
const parts=g.name.split(" "),first=parts[0],last=parts.slice(1).join(" ")||"Guest";
const iso=IN_SURNAMES.has(last)?"IN":"US";
const[city,zip]=FL_CITIES[seed%FL_CITIES.length];
return{first,middle:"",last,iso,
email:(first+"."+last).toLowerCase().replace(/[^a-z.]/g,"")+"@example.com",
phone:iso==="IN"?(90000+seed%10000)+" "+(10000+(seed*7)%90000):"("+(200+seed%700)+") "+(100+seed%900)+"-"+(1000+(seed*13)%9000),
gender:MALE_FIRST.has(first)?"Male":FEMALE_FIRST.has(first)?"Female":GENDERS[seed%2],
address:(100+seed%899)+" "+STREETS[seed%STREETS.length]+", Margaritaville",city,zip,state:"Florida"};
}
function migrateReferenceLegacyProfile(saved,fallback,fresh,draftVersion,index){
const authored={...(fallback?.profile||{})},staged={...(saved?.profile||{})};
if(draftVersion>=DETAIL_DRAFT_VERSION||String(fresh.b.id)!=="54334373"||!fallback?.name)return{...authored,...staged};
const legacy=legacyReferenceProfile(fallback,index,fresh.b),rebased={...authored};
new Set([...Object.keys(legacy),...Object.keys(staged)]).forEach(key=>{
if(String(staged[key]??"")!==String(legacy[key]??""))rebased[key]=staged[key];
});
return rebased;
}
function restoreDetailDraft(fresh){
let draft;
try{
const raw=localStorage.getItem(detailDraftKey(fresh.b.id));
if(!raw)return fresh;
draft=JSON.parse(raw);
}catch(_error){clearDetailDraft(fresh.b.id);return fresh;}
const draftVersion=Number(draft?.version);
const valid=draft&&[1,2,3,DETAIL_DRAFT_VERSION].includes(draftVersion)
&&String(draft.bookingId)===String(fresh.b.id)
&&Number(draft.recordVersion??1)===Number(fresh.b.recordVersion??1)
&&(draftVersion<DETAIL_DRAFT_VERSION||Number(draft.baselineVersion)===detailBaselineVersion(fresh.b.id))
&&Array.isArray(draft.guests)&&draft.guests.length>0
&&Array.isArray(draft.cabinPlan)&&draft.cabinPlan.length===fresh.cabinPlan.length;
if(!valid){clearDetailDraft(fresh.b.id);return fresh;}
const validCabins=new Set(fresh.b.cabins);
const freshById=new Map(fresh.guests.map(g=>[g.guestId,g]));
const usedGuestIds=new Set();
const guests=draft.guests.map((saved,i)=>{
if(!saved||typeof saved!=="object"||!validCabins.has(saved.cabin))return null;
let guestId=typeof saved.guestId==="string"&&saved.guestId&&!usedGuestIds.has(saved.guestId)?saved.guestId:null;
const savedBaseId=Boolean(guestId?.startsWith("base:"));
let fallback=guestId?freshById.get(guestId):null;
if(fallback&&savedBaseId&&(fallback.name!==saved.name||fallback.dob!==saved.dob)){
fallback=null;guestId=null;
}
if(!guestId||savedBaseId&&!fallback){
fallback=fresh.guests.find(g=>!usedGuestIds.has(g.guestId)&&g.name===saved.name&&g.dob===saved.dob)
||fresh.guests.find(g=>!usedGuestIds.has(g.guestId)&&g.dob===saved.dob);
if(fallback)guestId=fallback.guestId;
else if(savedBaseId)return null;
else guestId=addedGuestId(fresh.b.id);
}
if(usedGuestIds.has(guestId))return null;
usedGuestIds.add(guestId);
fallback=fallback||{};
const dobDate=new Date(saved.dobDate||saved.dob||fallback.dobDate);
if(Number.isNaN(dobDate.getTime()))return null;
const restored={...fallback,...saved,guestId,dobDate,band:ageBand(ageAt(dobDate,fresh.sail)),insurance:true,
profile:migrateReferenceLegacyProfile(saved,fallback,fresh,draftVersion,i),
/* Guest cancellation now has its own routed workflow. Do not revive legacy
   removal markers inside a Modification draft. */
pendingRemoval:null};
restored.supps=normalizeSupplementMap(migrateReferenceV2Supplements(saved,fallback,fresh,draftVersion),restored,fresh.sail);
restored.supplements=suppCount(restored.supps);
restored.pkg=restored.pkg&&packageAllowed(PKG_BY_ID[restored.pkg],restored,fresh.sail)?restored.pkg:null;
return restored;
});
if(guests.some(g=>!g)){clearDetailDraft(fresh.b.id);return fresh;}
const migratedLaundryIds=migrateLegacyUniformLaundry(draft,fresh,guests);
fresh.guests=guests;
fresh.cabinPlan=draft.cabinPlan.map((saved,i)=>{
const fallback=fresh.cabinPlan[i];
const known=STATEROOM_CATALOGUE.some(entry=>entry.code===saved.code);
return{...fallback,code:known?saved.code:fallback.code,
room:saved.room==null?fallback.room:String(saved.room)};
});
fresh.promo=draft.promo&&PROMO_CODES[draft.promo]?draft.promo:null;
syncGuestDerivedFields(fresh);
/* A staged cancellation keeps a frozen display fare. Rebuild that snapshot for
   a migrated guest surgically so unrelated frozen cabin and tax values stay put. */
migratedLaundryIds.forEach(guestId=>{
const index=fresh.guests.findIndex(g=>g.guestId===guestId),guest=fresh.guests[index];
if(index<0||!guest?.pendingRemoval)return;
const covered=Boolean(guest.pkg&&PKG_BY_ID[guest.pkg]?.includedSupps.includes("laundry"));
if(covered)return;
const fare=fareSnapshot(guest.pendingRemoval.fare),laundryPrice=SUPP_BY_ID.laundry.pricePP;
["onboard","enhancements","subtotal","total"].forEach(key=>{fare[key]=roundMoney(fare[key]-laundryPrice);});
guest.pendingRemoval={...guest.pendingRemoval,fare};
});
/* Upgrade every valid legacy envelope once. Future authored selections carry
   the fixture-baseline version and are never interpreted against old data. */
if(draftVersion!==DETAIL_DRAFT_VERSION){
try{
if(!isDirty(fresh))clearDetailDraft(fresh.b.id);
else localStorage.setItem(detailDraftKey(fresh.b.id),JSON.stringify({
version:DETAIL_DRAFT_VERSION,bookingId:fresh.b.id,savedAt:new Date().toISOString(),
recordVersion:fresh.b.recordVersion??1,baselineVersion:detailBaselineVersion(fresh.b.id),
cabinPlan:fresh.cabinPlan.map(c=>({num:c.num,room:c.room,code:c.code})),
guests:fresh.guests.map(draftGuest),promo:fresh.promo||null
}));
}catch(_error){/* Keep the corrected in-memory state if storage is unavailable. */}
}
return fresh;
}
function saveDetailDraft(){
if(!detail)return;
try{
if(!isDirty(detail)){clearDetailDraft(detail.b.id);return;}
localStorage.setItem(detailDraftKey(detail.b.id),JSON.stringify({
version:DETAIL_DRAFT_VERSION,bookingId:detail.b.id,savedAt:new Date().toISOString(),
recordVersion:detail.b.recordVersion??1,baselineVersion:detailBaselineVersion(detail.b.id),
cabinPlan:detail.cabinPlan.map(c=>({num:c.num,room:c.room,code:c.code})),
guests:detail.guests.map(draftGuest),promo:detail.promo||null
}));
}catch(_error){/* Storage can be unavailable in private/restricted browser modes. */}
}

function buildDetailState(b){
const route=ITIN_INFO[b.itin]||{ship:"MVAS Islander",shipSub:b.itin,from:"Tampa Bay",to:"Tampa Bay",ports:b.itin.replace(/^5N\s*/,""),nights:5};
const info={...route,ship:shipNameFor(b)};
const sail=parseBDate(b.date);
const roster=buildRoster(b);
const savedPricing=b.pricingBase
&&Number(b.pricingBase.recordVersion)===Number(b.recordVersion??1)
&&Array.isArray(b.pricingBase.guests)
&&b.pricingBase.guests.length===roster.length
?b.pricingBase:null;
const savedGuestById=new Map((savedPricing?.guests||[]).map(g=>[g.guestId,g]));
const pricingSnapshot=savedPricing&&roster.every(g=>savedGuestById.has(g.guestId))?savedPricing:null;
const taxes=pricingSnapshot?roundMoney(pricingSnapshot.taxes):roundMoney(b.value*0.04);
roster.forEach(g=>{g.band=ageBand(ageAt(g.dobDate,sail));});
const rawPkgBy=roster.map(g=>pricingSnapshot?savedGuestById.get(g.guestId)?.pkg||null:null);
const pkgBy=rawPkgBy.map((pkgId,index)=>pkgId&&packageAllowed(PKG_BY_ID[pkgId],roster[index],sail)?pkgId:null);
/* Seed sold supplement counts only for eligible guests, then normalize any
   persisted maps through the same rule used by every assignment control. */
const rawSuppsBy=roster.map(g=>{
const saved=pricingSnapshot?savedGuestById.get(g.guestId):null;
if(saved?.supps&&typeof saved.supps==="object")return{...saved.supps};
if(g.supps&&typeof g.supps==="object")return{...g.supps};
const o={};
const eligibleCatalog=SUPP_CATALOG.filter(supplement=>suppAllowed(supplement,g,sail));
for(let k=0;k<Math.min(g.supplements,eligibleCatalog.length);k++)o[eligibleCatalog[k].id]=1;
return o;
});
const suppsBy=rawSuppsBy.map((supps,index)=>normalizeSupplementMap(supps,roster[index],sail));
/* A legacy snapshot may contain now-invalid infant assignments. Reclassify
   their former value into the frozen cabin-fare baseline so correcting the
   ownership never changes the sold booking total or creates a fake credit. */
const migratedBaseValueBy=roster.map((guest,index)=>{
if(!pricingSnapshot)return 0;
const removedSupplements=roundMoney(suppValue(rawSuppsBy[index],rawPkgBy[index])-suppValue(suppsBy[index],pkgBy[index]));
const removedPackage=rawPkgBy[index]&&!pkgBy[index]&&PKG_BY_ID[rawPkgBy[index]]
?roundMoney(PKG_BY_ID[rawPkgBy[index]].rate*(info.nights||5)):0;
return roundMoney(removedSupplements+removedPackage);
});
const migratedBaseValue=roundMoney(migratedBaseValueBy.reduce((sum,value)=>sum+value,0));
const insuranceBy=roster.map(g=>pricingSnapshot?savedGuestById.get(g.guestId)?.insurance!==false:true);
/* price the baseline from the real catalogue and let cabin fare absorb the remainder,
   so base.total still reproduces the amount the booking was actually sold for */
const supplements=roundMoney(suppsBy.reduce((a,o,i)=>a+suppValue(o,pkgBy[i]),0));
const baseInsurance=insuranceBy.filter(Boolean).length*INSURANCE_RATE;
const packages=roundMoney(pkgBy.reduce((sum,pkg)=>sum+(pkg&&PKG_BY_ID[pkg]?PKG_BY_ID[pkg].rate*(info.nights||5):0),0));
const cabinFare=pricingSnapshot
?roundMoney(pricingSnapshot.cabinFare+migratedBaseValue)
:roundMoney(b.value-taxes-supplements-packages-baseInsurance);
const baseUnits=suppsBy.reduce((a,o)=>a+suppCount(o),0);
const guests=roster.map((g,i)=>({...g,guestId:g.guestId||baseGuestId(b.id,g),band:ageBand(ageAt(g.dobDate,sail)),
supps:{...suppsBy[i]},pkg:pkgBy[i],insurance:insuranceBy[i],
profile:pricingSnapshot?{...savedGuestById.get(g.guestId).profile}:guestProfile(g,i,b)}));
const weights=guests.map(g=>AGE_WEIGHT[g.band]);
/* Travel protection was historically bundled into the sold cabin amount. Allocate
   that legacy pool first, then carve out the same flat premium for each guest. This
   exposes the $99 line without changing any passenger's sold total. */
const legacyCabinShares=allocateMoney(roundMoney(cabinFare+baseInsurance),weights);
const taxParts=taxBreakdown(taxes);
const govtShares=allocateMoney(taxParts.govt,weights);
const cruiseShares=allocateMoney(taxParts.cruise,weights);
guests.forEach((g,i)=>{
const saved=pricingSnapshot?savedGuestById.get(g.guestId):null;
g.baseCabinFare=Number.isFinite(saved?.baseCabinFare)?roundMoney(saved.baseCabinFare+migratedBaseValueBy[i]):roundMoney(legacyCabinShares[i]-(g.insurance?INSURANCE_RATE:0));
g.baseGovtTax=Number.isFinite(saved?.baseGovtTax)?roundMoney(saved.baseGovtTax):govtShares[i];
g.baseCruiseFee=Number.isFinite(saved?.baseCruiseFee)?roundMoney(saved.baseCruiseFee):cruiseShares[i];
g.basePromotion=Number.isFinite(saved?.basePromotion)?Math.max(0,roundMoney(saved.basePromotion)):0;
});
const baseDiscount=roundMoney(guests.reduce((sum,g)=>sum+(g.basePromotion||0),0));
const cabinPlan=pricingSnapshot&&Array.isArray(pricingSnapshot.cabinPlan)&&pricingSnapshot.cabinPlan.length===b.cabins.length
?pricingSnapshot.cabinPlan.map((saved,i)=>({num:b.cabins[i],room:String(saved.room),code:catEntry(saved.code).code}))
:b.cabins.map(num=>({num,room:num,code:baseCabinCode(num)}));
return{
b,info,sail,
guests,
inventory:stateroomInventory(b),
cabinPlan,
base:{
cabinFare,taxes,supplements,insurance:baseInsurance,discount:baseDiscount,total:b.value,pending:b.pending,
paidToDate:Number.isFinite(Number(b.paidToDate))?roundMoney(b.paidToDate):roundMoney(b.value-b.pending),
newGuestCabinFare:pricingSnapshot&&Number.isFinite(pricingSnapshot.newGuestCabinFare)
?roundMoney(pricingSnapshot.newGuestCabinFare):roundMoney(cabinFare/Math.max(roster.length,1)),
units:baseUnits,
insured:insuranceBy.filter(Boolean).length,
suppsBy:suppsBy.map(o=>({...o})),
pkgBy:pkgBy.slice(),
supplementsBy:suppsBy.map(suppCount),
insuranceBy:insuranceBy.slice(),
cabinCodeBy:cabinPlan.map(c=>c.code),
roomBy:cabinPlan.map(c=>String(c.room)),
cabinBy:roster.map(g=>g.cabin),
profileBy:roster.map((g,i)=>guestProfile(g,i,b)),
guests:guests.map(cloneGuestState),
origGuestCount:roster.length
},
promo:null,selected:null
};
}
function baseGuestMap(d){return new Map((d.base.guests||[]).map(g=>[g.guestId,g]));}
function baseGuestFor(d,g){return g?baseGuestMap(d).get(g.guestId)||null:null;}
function isBaseGuest(d,g){return Boolean(baseGuestFor(d,g));}
function isGuestActive(g){return Boolean(g)&&!g.pendingRemoval;}
function pendingProtection(d,g){
if(!g?.pendingRemoval||!isBaseGuest(d,g))return 0;
return Math.max(0,roundMoney(Number(g.pendingRemoval.fare?.protection)||0));
}
function activeGuestEntries(d){return d.guests.map((g,i)=>({g,i})).filter(({g})=>isGuestActive(g));}
function activeGuests(d){return activeGuestEntries(d).map(({g})=>g);}
function isPrimaryGuest(d,g){return activeGuests(d)[0]?.guestId===g?.guestId;}
function originalCabinFarePosition(d,g){
const before=baseGuestFor(d,g);
if(!before)return 0;
return(d.base.guests||[]).filter(candidate=>candidate.cabin===before.cabin).findIndex(candidate=>candidate.guestId===before.guestId)+1;
}
function activeCabinFarePosition(d,g){
return activeGuests(d).filter(candidate=>candidate.cabin===g.cabin).findIndex(candidate=>candidate.guestId===g.guestId)+1;
}
/* A downgrade may credit cabin fare down to zero, never below it. Catalogue
   deltas can exceed a guest's sold cabin allocation, especially for children
   and infants, so every consumer uses this same guarded adjustment. */
function newGuestCabinFare(d,g,cabinIdx=d.b.cabins.indexOf(g?.cabin)){
const baseGuests=d.base.guests||[];
const cabinNumber=d.b.cabins[cabinIdx];
let comparable=baseGuests.filter(guest=>guest.cabin===cabinNumber);
if(!comparable.length)comparable=baseGuests;
const weightTotal=comparable.reduce((sum,guest)=>sum+(AGE_WEIGHT[guest.band]||0),0);
const fareTotal=comparable.reduce((sum,guest)=>sum+(Number(guest.baseCabinFare)||0),0);
const adultEquivalent=weightTotal>0?fareTotal/weightTotal:Number(d.base.newGuestCabinFare)||0;
return Math.max(0,roundMoney(adultEquivalent*(AGE_WEIGHT[g?.band]||0)));
}
function cabinAdjustmentForGuest(d,g,cabinIdx,perHeadFare,code=d.cabinPlan[cabinIdx].code){
const before=baseGuestFor(d,g);
const baseFare=Math.max(0,roundMoney(before?before.baseCabinFare:newGuestCabinFare(d,g,cabinIdx)));
const raw=catEntry(code).price-catEntry(d.base.cabinCodeBy[cabinIdx]).price;
return roundMoney(Math.max(-baseFare,raw));
}
function cabinAdjustmentForCode(d,cabinIdx,code,perHeadFare){
return roundMoney(activeGuests(d).filter(g=>g.cabin===d.b.cabins[cabinIdx])
.reduce((sum,g)=>sum+cabinAdjustmentForGuest(d,g,cabinIdx,perHeadFare,code),0));
}
/* Added guests inherit the sold tax-and-port-fee rate for their passenger type.
   The original booking distributes these charges by age-band weight, so derive
   the same per-weight rate from the stable base allocations instead of leaving
   a new passenger's tax rows at zero. */
function newGuestTaxComponents(d,g){
const baseGuests=d.base.guests||[];
const totalWeight=baseGuests.reduce((sum,guest)=>sum+(AGE_WEIGHT[guest.band]||0),0);
if(totalWeight<=0)return{govtTax:0,cruiseFee:0,taxes:0};
const guestWeight=AGE_WEIGHT[g?.band]||0;
const baseGovtTax=roundMoney(baseGuests.reduce((sum,guest)=>sum+(guest.baseGovtTax||0),0));
const baseCruiseFee=roundMoney(baseGuests.reduce((sum,guest)=>sum+(guest.baseCruiseFee||0),0));
const baseTaxes=roundMoney(baseGovtTax+baseCruiseFee);
const taxes=roundMoney(baseTaxes*guestWeight/totalWeight);
const govtTax=baseTaxes>0?roundMoney(taxes*baseGovtTax/baseTaxes):0;
const cruiseFee=roundMoney(taxes-govtTax);
return{govtTax,cruiseFee,taxes};
}
function priceDetail(d){
const origCount=d.base.guests?.length||d.base.origGuestCount;
const pricedGuests=activeGuests(d);
const origGuests=pricedGuests.filter(g=>isBaseGuest(d,g)),newGuests=pricedGuests.filter(g=>!isBaseGuest(d,g));
const retainedBase=origGuests.map(g=>baseGuestFor(d,g)).filter(Boolean);
const retainedCabinFare=roundMoney(retainedBase.reduce((sum,g)=>sum+(g.baseCabinFare||0),0));
const baseDiscount=roundMoney(retainedBase.reduce((sum,g)=>sum+(g.basePromotion||0),0));
const newGuestTaxRows=newGuests.map(g=>newGuestTaxComponents(d,g));
const newGuestGovtTax=roundMoney(newGuestTaxRows.reduce((sum,row)=>sum+row.govtTax,0));
const newGuestCruiseFee=roundMoney(newGuestTaxRows.reduce((sum,row)=>sum+row.cruiseFee,0));
const newGuestTaxes=roundMoney(newGuestGovtTax+newGuestCruiseFee);
const govtTax=roundMoney(retainedBase.reduce((sum,g)=>sum+(g.baseGovtTax||0),0)+newGuestGovtTax);
const cruiseFee=roundMoney(retainedBase.reduce((sum,g)=>sum+(g.baseCruiseFee||0),0)+newGuestCruiseFee);
const taxes=roundMoney(govtTax+cruiseFee);
const units=pricedGuests.reduce((a,g)=>a+suppCount(g.supps),0);
/* every supplement is priced from the catalogue; anything a guest's package already
   covers contributes nothing, so the package is what they pay for instead */
const supplements=pricedGuests.reduce((a,g)=>a+suppValue(g.supps,g.pkg),0);
/* packages are per guest, charged at the bundle rate for every night of the sailing */
const nights=d.info.nights||5;
const packages=pricedGuests.reduce((a,g)=>a+(g.pkg&&PKG_BY_ID[g.pkg]?PKG_BY_ID[g.pkg].rate*nights:0),0);
const pkgCount=pricedGuests.filter(g=>g.pkg).length;
const activeInsured=pricedGuests.filter(g=>g.insurance).length;
const retainedProtectionValues=d.guests.map(g=>pendingProtection(d,g)).filter(value=>value>.005);
const retainedProtection=roundMoney(retainedProtectionValues.reduce((sum,value)=>sum+value,0));
const retainedProtectionCount=retainedProtectionValues.length;
const insured=activeInsured+retainedProtectionCount;
const insurance=roundMoney(activeInsured*INSURANCE_RATE+retainedProtection);
const insuranceAdj=insurance-(d.base.insurance??d.base.insured*INSURANCE_RATE);
/* a newly added guest inherits the original per-head cabin rate rather than
   splitting the fixed cabinFare across more heads — nothing gets redistributed */
const perHeadFare=d.base.newGuestCabinFare??roundMoney(d.base.cabinFare/origCount);
const newGuestFare=roundMoney(newGuests.reduce((sum,g)=>sum+newGuestCabinFare(d,g),0));
/* a category change is charged per occupant, bounded by that guest's cabin
   allocation so a downgrade can never create a negative cabin fare */
const cabinAdj=roundMoney(d.cabinPlan.reduce((sum,c,idx)=>
sum+cabinAdjustmentForCode(d,idx,c.code,perHeadFare),0));
/* Percentage promotions are cabin-fare promotions. Apply them to the current
   cabin subtotal, including added guests and category adjustments, but never to
   taxes, onboard extras, or travel protection. */
const currentCabinSubtotal=Math.max(0,roundMoney(retainedCabinFare+newGuestFare+cabinAdj));
const grossTotal=Math.max(0,roundMoney(currentCabinSubtotal+taxes+supplements+packages+insurance));
const prePromoTotal=Math.max(0,roundMoney(grossTotal-baseDiscount));
let promoAmt=0;
if(d.promo){const p=PROMO_CODES[d.promo];promoAmt=roundMoney(Math.min(prePromoTotal,p.type==="pct"?currentCabinSubtotal*p.value:p.value));}
const total=Math.max(0,roundMoney(prePromoTotal-promoAmt));
const discount=roundMoney(baseDiscount+promoAmt);
const perGuestBase=d.guests.map(g=>{
if(!isGuestActive(g))return 0;
const before=baseGuestFor(d,g);
if(before)return roundMoney((before.baseCabinFare||0)+(before.baseGovtTax||0)+(before.baseCruiseFee||0));
return roundMoney(newGuestCabinFare(d,g)+newGuestTaxComponents(d,g).taxes);
});
/* each guest carries their own supplement and package cost, priced from the catalogue */
const perGuestSupp=d.guests.map(g=>!isGuestActive(g)?0:suppValue(g.supps,g.pkg)
+(g.pkg&&PKG_BY_ID[g.pkg]?PKG_BY_ID[g.pkg].rate*nights:0));
const perGuestProtection=d.guests.map(g=>isGuestActive(g)&&g.insurance?INSURANCE_RATE:0);
const perGuest=perGuestBase.map((base,i)=>roundMoney(base+perGuestSupp[i]+perGuestProtection[i]));
/* Payment position is derived from the same modification baseline as the fare
   calculation. This keeps Review changes honest when the booking object has
   been rebased after a committed cancellation. */
const paidToDate=Math.max(0,roundMoney(Number.isFinite(Number(d.base.paidToDate))?d.base.paidToDate:d.base.total-d.base.pending));
const unpaidAfterChanges=roundMoney(total-paidToDate);
const pending=Math.max(0,unpaidAfterChanges);
const creditDue=Math.max(0,roundMoney(-unpaidAfterChanges));
return{units,supplements,packages,pkgCount,nights,insured,activeInsured,insurance,insuranceAdj,retainedProtection,retainedProtectionCount,cabinAdj,baseDiscount,promoAmt,discount,total,
retainedCabinFare,currentCabinSubtotal,grossTotal,prePromoTotal,taxes,govtTax,cruiseFee,perGuest,perGuestBase,perGuestSupp,perGuestProtection,
newGuestFare,newGuestTaxes,newGuestGovtTax,newGuestCruiseFee,newGuestCount:newGuests.length,activeGuestCount:pricedGuests.length,perHeadFare,
delta:roundMoney(total-d.base.total),
suppDelta:supplements-d.base.supplements,
paidToDate,pending,creditDue};
}
function sameSupps(a,b){
const ka=Object.keys(a||{}),kb=Object.keys(b||{});
return ka.length===kb.length&&ka.every(k=>a[k]===b[k]);
}
function sameProfile(a,b){
const keys=new Set([...Object.keys(a||{}),...Object.keys(b||{})]);
return[...keys].every(k=>String((a||{})[k]??"")===String((b||{})[k]??""));
}
const PROFILE_IMPACT_LABELS={first:"First name",middle:"Middle name",last:"Last name",gender:"Gender",email:"Email",iso:"Country",phone:"Phone",zip:"Zip code",city:"City",state:"State",address:"Address"};
function profileImpactFacts(before={},after={}){
const ordered=[...Object.keys(PROFILE_IMPACT_LABELS),...new Set([...Object.keys(before||{}),...Object.keys(after||{})])];
return [...new Set(ordered)].filter(key=>String(before?.[key]??"")!==String(after?.[key]??"")).map(key=>({
label:PROFILE_IMPACT_LABELS[key]||key.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/^./,value=>value.toUpperCase()),
value:`${String(before?.[key]??"").trim()||"Not provided"} → ${String(after?.[key]??"").trim()||"Not provided"}`
}));
}
function isDirty(d){
const baseById=baseGuestMap(d),currentIds=new Set(activeGuests(d).map(g=>g.guestId));
return d.promo!==null
||[...baseById.keys()].some(id=>!currentIds.has(id))
||d.guests.some(g=>{
if(!isGuestActive(g))return true;
const before=baseById.get(g.guestId);
return!before||!sameSupps(g.supps,before.supps)||g.pkg!==before.pkg||g.insurance!==before.insurance||g.cabin!==before.cabin||!sameProfile(g.profile,before.profile);
})
||d.cabinPlan.some((c,i)=>c.code!==d.base.cabinCodeBy[i]||String(c.room)!==String(d.base.roomBy[i]));
}
function fmtSigned(n){return(n>0?"+":n<0?"−":"")+fmt(Math.abs(n));}
function fmt0(n){return"$"+Math.round(n).toLocaleString("en-US");}
/* Taxes & Port Fees is a single derived total (4% of booking value); split it into
   the two named lines using the reference schedule's ratio ($63.55 : $67.45) rather
   than the fixed figures verbatim, so the two rows always sum exactly to whatever
   total is shown for a given booking. */
const GOVT_TAX_REF=63.55,CRUISE_FEE_REF=67.45;
function taxBreakdown(taxes){
const govt=Math.round(taxes*GOVT_TAX_REF/(GOVT_TAX_REF+CRUISE_FEE_REF)*100)/100;
return{govt,cruise:taxes-govt};
}
const PASSENGER_TYPE=["Adult Passenger","Young Adult Passenger","Child Passenger","Infant Passenger"];
const PASSENGER_ABBR=["A","YA","C","I"];
/* ---- supplements & packages catalogue ----
   Reference bookings carry explicit product IDs. Generated filler bookings may
   still derive deterministic selections when their lightweight fixture has only
   a count, but catalogue order never defines the reviewed booking's sold data. */
const SUPP_CATALOG=[
{id:"paradise",name:"Paradise Certificates",emoji:"🎟️",cat:"Experiences",pricePP:18.75,info:"Prepaid onboard credit redeemable at participating bars, shops, spa services, and excursion desks. Unused value is non-refundable."},
{id:"wifi",name:"Coconut Telegraph Wi-Fi 3-Night",emoji:"📶",cat:"Connectivity",pricePP:23.75,info:"One-device social and messaging access for three consecutive nights. Streaming and ship-to-shore calls are not included."},
{id:"presale",name:"Pre-Sale Drinks + WiFi Bundle",emoji:"🍹",cat:"Food & Drink",pricePP:62.50,minAge:21,info:"Includes select house beverages and one-device Wi-Fi access for the sailing. Alcohol service requires government-issued ID."},
{id:"daybed",name:"Bahama Bay Pool Club Daybed",emoji:"🏖️",cat:"Activities",pricePP:45.00,info:"Reserved half-day daybed with pool-club access for the assigned guest. Availability depends on the port and operating schedule."},
{id:"shore",name:"Shore Excursion Credit",emoji:"⚓",cat:"Activities",pricePP:45.00,info:"A $50 credit toward one eligible excursion booked through Margaritaville at Sea. It cannot be exchanged for cash."},
{id:"dining",name:"Specialty Dining Package",emoji:"🍽️",cat:"Food & Drink",pricePP:40.00,info:"One prix-fixe dinner at a participating specialty restaurant. Premium menu items, beverages, and gratuities are excluded."},
{id:"fiveoclock",name:"5 O'Clock Somewhere Bar Crawl",emoji:"🍸",cat:"Food & Drink",pricePP:52.50,minAge:21,info:"A hosted onboard crawl with four sample-size cocktails at participating venues. Guests must be 21+ and carry government-issued ID."},
{id:"landshark",name:"LandShark Beach Cabana",emoji:"🦈",cat:"Activities",pricePP:47.50,info:"Shared cabana access with shaded seating and bottled water at LandShark Beach Club. Subject to weather and port availability."},
{id:"saltair",name:"Salt Air Thermal Spa Pass",emoji:"🔥",cat:"Wellness",pricePP:27.50,info:"Single-day access to the thermal suite, sauna, and relaxation areas. Spa treatments and salon services are not included."},
{id:"sunsetyoga",name:"Sunset Yoga & Wellness Series",emoji:"🧘",cat:"Wellness",pricePP:30.00,info:"Three guided yoga and breathwork sessions scheduled during the sailing. Mats are provided; session times may vary."},
{id:"photo",name:"Margaritaville Photo Album",emoji:"📸",cat:"Experiences",pricePP:18.75,info:"A digital album containing up to 10 voyage photos linked to the guest's booking. Downloads remain available for 30 days after sailing."},
{id:"tiki",name:"Tiki Hut Cooking Class",emoji:"🍤",cat:"Experiences",pricePP:21.25,info:"A 60-minute instructor-led island cooking class with tastings and a take-home recipe card. Advance reservations are required."},
{id:"finsup",name:"Fins Up Fitness Classes",emoji:"🏋️",cat:"Wellness",pricePP:30.00,info:"Access to scheduled group fitness classes during the sailing. Private training and limited-capacity workshops are excluded."},
{id:"laundry",name:"Express Laundry & Pressing",emoji:"🧺",cat:"Services",pricePP:16.25,info:"One express laundry bag with wash, fold, and pressing service. Same-day return applies when submitted before 9:00 AM."},
{id:"turndown",name:"Stateroom Premium Turndown",emoji:"🛏️",cat:"Services",pricePP:75.00,info:"Nightly premium turndown with upgraded linens, bottled water, and a small welcome amenity for the assigned guest."},
{id:"sommelier",name:"Boat Drinks Sommelier Tasting",emoji:"🍷",cat:"Food & Drink",pricePP:52.50,minAge:21,info:"A guided tasting of five wines with paired small bites. Guests must be 21+ and carry government-issued ID."},
{id:"arcade",name:"Arcade All-Access Pass",emoji:"👾",cat:"Activities",pricePP:12.50,info:"Unlimited standard arcade play for one guest during the sailing. Prize games, simulators, and VR experiences are excluded."},
{id:"heli",name:"Port Heli-Adventures",emoji:"🚁",cat:"Activities",pricePP:47.50,info:"A $50 credit toward a participating helicopter excursion. Reservations, weather, and passenger weight restrictions apply."}
];
const SUPP_BY_ID={};SUPP_CATALOG.forEach(s=>{SUPP_BY_ID[s.id]=s;});
const SUPP_CATS=[...new Set(SUPP_CATALOG.map(s=>s.cat))];
/* packages bundle supplements at a per-guest, per-night rate */
const PKG_CATALOG=[
{id:"relaxation",name:"Relaxation",emoji:"🧖",rate:18,
tagline:"Thermal spa access, sunset yoga & slow mornings.",
includedSupps:["saltair","sunsetyoga","finsup","dining"]},
{id:"adventure",name:"Adventure",emoji:"🎿",rate:16,
tagline:"Shore excursions, heli-tours & island days.",
includedSupps:["shore","wifi","photo","heli"]},
{id:"anniversary",name:"Anniversary",emoji:"💍",rate:20,
tagline:"Boat drinks, private dinners & premium turndown.",
includedSupps:["presale","dining","sommelier","turndown"]},
{id:"family",name:"Family",emoji:"👨‍👩‍👧‍👦",rate:14,
tagline:"Cabanas, arcade passes & photo albums.",
includedSupps:["photo","arcade","landshark","laundry"]}
];
const PKG_BY_ID={};PKG_CATALOG.forEach(p=>{PKG_BY_ID[p.id]=p;});
/* what a guest's own supplement selections cost, ignoring anything their package covers */
function suppValue(supps,pkgId){
const inc=pkgId&&PKG_BY_ID[pkgId]?PKG_BY_ID[pkgId].includedSupps:[];
return Object.entries(supps||{}).reduce((a,[id,q])=>
a+(inc.includes(id)||!SUPP_BY_ID[id]?0:SUPP_BY_ID[id].pricePP*q),0);
}
function suppCount(supps){return Object.values(supps||{}).reduce((a,q)=>a+Math.max(0,Number(q)||0),0);}
function supplementReviewBreakdown(beforeSupps,afterSupps,beforePkg,afterPkg){
const before=beforeSupps||{},after=afterSupps||{};
const catalogueOrder=new Map(SUPP_CATALOG.map((sup,index)=>[sup.id,index]));
const ids=[...new Set([...Object.keys(before),...Object.keys(after)])]
.sort((a,b)=>(catalogueOrder.get(a)??Number.MAX_SAFE_INTEGER)-(catalogueOrder.get(b)??Number.MAX_SAFE_INTEGER)||a.localeCompare(b));
const coverage=(pkgId,id,qty)=>{
const pkg=pkgId&&PKG_BY_ID[pkgId];
return qty>0&&pkg?.includedSupps.includes(id)?{id:pkg.id,name:pkg.name}:null;
};
const lines=ids.map(id=>{
const sup=SUPP_BY_ID[id]||null;
const beforeQty=Math.max(0,Number(before[id])||0),afterQty=Math.max(0,Number(after[id])||0);
const beforeCoverage=coverage(beforePkg,id,beforeQty),afterCoverage=coverage(afterPkg,id,afterQty);
const unitPrice=Number(sup?.pricePP)||0;
const beforeSubtotal=beforeCoverage?0:roundMoney(unitPrice*beforeQty);
const afterSubtotal=afterCoverage?0:roundMoney(unitPrice*afterQty);
return{id,name:sup?.name||`Unavailable supplement (${id})`,category:sup?.cat||"Catalogue item unavailable",known:Boolean(sup),unitPrice,
beforeQty,afterQty,beforeCoverage,afterCoverage,beforeSubtotal,afterSubtotal,delta:roundMoney(afterSubtotal-beforeSubtotal)};
}).filter(line=>line.beforeQty>0||line.afterQty>0);
return{type:"supplements",lines,beforeSubtotal:roundMoney(suppValue(before,beforePkg)),afterSubtotal:roundMoney(suppValue(after,afterPkg))};
}
function packageReviewBreakdown(beforePkg,afterPkg,nights){
const ids=[...new Set([beforePkg,afterPkg].filter(Boolean))];
const lines=ids.map(id=>{
const pkg=PKG_BY_ID[id];
const beforeQty=id===beforePkg?1:0,afterQty=id===afterPkg?1:0;
const unitPrice=Number(pkg?.rate)||0;
const beforeSubtotal=roundMoney(unitPrice*nights*beforeQty),afterSubtotal=roundMoney(unitPrice*nights*afterQty);
return{id,name:pkg?.name||`Unavailable package (${id})`,known:Boolean(pkg),unitPrice,nights,beforeQty,afterQty,
includedSupplements:(pkg?.includedSupps||[]).map(suppId=>({id:suppId,name:SUPP_BY_ID[suppId]?.name||suppId,unitPrice:Number(SUPP_BY_ID[suppId]?.pricePP)||0,quantity:1})),
beforeSubtotal,afterSubtotal,delta:roundMoney(afterSubtotal-beforeSubtotal)};
});
return{type:"packages",lines,beforeSubtotal:roundMoney(lines.reduce((sum,line)=>sum+line.beforeSubtotal,0)),afterSubtotal:roundMoney(lines.reduce((sum,line)=>sum+line.afterSubtotal,0))};
}
/* Supplement eligibility is evaluated at sailing age. Infants can never own
   direct supplements, even if stale fixture or persisted data says otherwise. */
function suppAllowed(sup,g,sail=detail?.sail){
if(!sup||!g||!(sail instanceof Date)||Number.isNaN(sail.getTime()))return false;
const dob=g.dobDate instanceof Date?g.dobDate:new Date(g.dobDate||g.dob);
if(Number.isNaN(dob.getTime()))return false;
const age=ageAt(dob,sail);
if(g.band===3||age<2)return false;
return sup.minAge==null||age>=sup.minAge;
}
function normalizeSupplementMap(source,g,sail=detail?.sail){
const normalized={};
Object.entries(source&&typeof source==="object"?source:{}).forEach(([id,raw])=>{
const sup=SUPP_BY_ID[id],numeric=Number(raw),quantity=Math.floor(numeric);
if(!sup||!Number.isFinite(numeric)||quantity<=0||!suppAllowed(sup,g,sail))return;
normalized[id]=quantity;
});
return normalized;
}
/* Packages are bundles of supplements, so every included product must be
   eligible for the guest. This closes the cabin-level infant assignment path. */
function packageAllowed(pkg,g,sail=detail?.sail){
return Boolean(pkg&&g)&&pkg.includedSupps.every(id=>suppAllowed(SUPP_BY_ID[id],g,sail));
}

/* ---- render ---------------------------------------------------------- */
/* Guest identity, age band and cabin assignment are shared booking data.
   Normalize them before either view renders so the booking details and the
   modification flow can never show different occupants for the same cabin. */
function profileDisplayName(profile){
return [profile&&profile.first,profile&&profile.middle,profile&&profile.last]
.map(value=>String(value||"").trim()).filter(Boolean).join(" ");
}
function syncGuestDerivedFields(d){
const validCabins=new Set(d.b.cabins);
d.guests.forEach(g=>{
const editedName=profileDisplayName(g.profile);
if(editedName)g.name=editedName;
g.band=ageBand(ageAt(g.dobDate,d.sail));
g.supps=normalizeSupplementMap(g.supps,g,d.sail);
g.supplements=suppCount(g.supps);
if(g.pkg&&!packageAllowed(PKG_BY_ID[g.pkg],g,d.sail))g.pkg=null;
if(!validCabins.has(g.cabin)){
const original=baseGuestFor(d,g)?.cabin;
g.cabin=validCabins.has(original)?original:d.b.cabins[0];
}
});
}
/* group the roster by cabin so each cabin renders as its own card. counts
   retain all four booking age bands used by the details and modification UI. */
function cabinGroups(d){
syncGuestDerivedFields(d);
return d.b.cabins.map((num,idx)=>{
const allGuests=d.guests.map((g,i)=>({g,i})).filter(x=>x.g.cabin===num);
const guests=allGuests.filter(({g})=>isGuestActive(g));
const bandCounts=[0,0,0,0];
guests.forEach(({g})=>{bandCounts[g.band]++;});
/* type/room follow the working plan, so an upgrade shows on both screens */
const plan=d.cabinPlan[idx],entry=catEntry(plan.code);
return{num,idx,type:entry.type,catName:entry.name,code:plan.code,room:plan.room,
deck:String(plan.room).charAt(0),guests,allGuests,counts:bandCounts};
});
}
/* roster-wide overview: who's traveling, and the age-band breakdown behind
   the per-cabin counts, at a glance before drilling into cabin specifics */
function renderGuestSummary(d=detail){
const guests=activeGuests(d),primary=guests[0],total=guests.length,cabinTotal=d.cabinPlan.length;
const counts=[0,0,0,0];
guests.forEach(g=>counts[g.band]++);
const breakdown=counts.map((count,i)=>count>0?
`<span>${count} ${AGE_CATEGORIES[i][count===1?"singular":"plural"].toLowerCase()}</span>`:"").join("");
document.getElementById("sGuestSummary").innerHTML=`
<div class="ov-guest-overview">
<div class="ov-guest-summary-copy">
<span class="ov-guest-summary-eyebrow">Primary guest</span>
<div class="ov-guest-summary-head"><span class="ov-guest-summary-name">${esc(primary?.name||"No active guest")}</span></div>
</div>
<div class="ov-guest-mix">
<span class="ov-guest-mix-label">Guest mix</span>
<div class="ov-guest-mix-total"><strong>Party of ${total}</strong><span aria-hidden="true">&middot;</span><span>${cabinTotal} cabin${cabinTotal===1?"":"s"}</span></div>
<div class="ov-guest-breakdown" aria-label="Guest breakdown">${breakdown}</div>
</div>
</div>`;
}
let cabinDisclosureBookingId=null;
let expandedCabinIndexes=new Set();
function syncCabinDisclosureState(d){
const bookingId=d.b.id;
if(cabinDisclosureBookingId===bookingId)return;
cabinDisclosureBookingId=bookingId;
expandedCabinIndexes=new Set();
}
function renderCabinCards(p,d=detail){
const cabins=cabinGroups(d);
const fareRows=guestFareRows(d,p);
syncCabinDisclosureState(d);
document.getElementById("sCabinCount").textContent=cabins.length;
document.getElementById("sCabinCount").setAttribute("aria-label",`${cabins.length} cabin${cabins.length===1?"":"s"}`);
document.getElementById("sCabinCards").innerHTML=cabins.map(c=>{
const isExpanded=expandedCabinIndexes.has(c.idx);
const contentId=`cabin-details-${d.b.id}-${c.idx}`;
const guestContent=c.guests.length?`<div id="${contentId}" class="ov-gt-scroll ov-cc-content"${isExpanded?"":" hidden"}>
<div class="ov-gt-row ov-gt-head">
<div>Guest details</div><div>Date of birth</div><div>Insurance</div>
<div class="ov-gt-r">Supplements</div><div class="ov-gt-r">Total fare breakdown</div>
</div>
${c.guests.map(({g,i})=>{
const age=ageAt(g.dobDate,d.sail);
const supp=p.perGuestSupp[i];
const fare=fareRows[i];
const primary=isPrimaryGuest(d,g);
const supplementProducts=Object.values(g.supps||{}).filter(quantity=>Number(quantity)>0).length;
const supplementUnits=suppCount(g.supps);
const supplementCopy=supplementProducts===supplementUnits
?`${supplementProducts} product${supplementProducts===1?"":"s"}`
:`${supplementProducts} products · ${reviewQuantity(supplementUnits)} units`;
return `<div class="ov-gt-row ov-gt-body${primary?" primary":""}">
<div class="ov-gt-name">
<div class="ov-gt-name-row"><span class="ov-gt-guest" title="${esc(g.name)}">${esc(g.name)}</span>${primary?'<span class="ov-tag-primary">Primary</span>':""}</div>
<span class="ov-gt-type">${PASSENGER_TYPE[g.band]}</span>
</div>
<div class="ov-gt-cell">${g.dob} (${age})</div>
<div class="ov-gt-ins${g.insurance?"":" off"}">${g.insurance?"Yes":"No"}</div>
<div class="ov-gt-cell ov-gt-r">${supplementCopy}${g.pkg?` &middot; ${esc(PKG_BY_ID[g.pkg].name)} package`:""}</div>
<div class="ov-gt-fare">
<span class="ov-gt-fare-amt">${fmt(fare.total)}</span>
${supp>0.005?`<span class="ov-gt-fare-sub">Includes ${fmt(supp)} extras</span>`:""}
</div>
</div>`;}).join("")}
</div>`:`<div id="${contentId}" class="ov-cc-content ov-cabin-empty"${isExpanded?"":" hidden"}>
<span class="ov-cabin-empty-title">No guests assigned</span>
<span class="ov-cabin-empty-copy">No guests are currently assigned to this cabin.</span>
</div>`;
return `<div class="ov-cabin-card mvas-interactive-surface${isExpanded?"":" collapsed"}" data-cabin-index="${c.idx}">
	<button type="button" class="ov-cc-head ov-cc-accordion-btn" aria-expanded="${isExpanded}" aria-controls="${contentId}">
<div class="ov-cc-head-left">
<div class="ov-cc-identity">
<span class="ov-cc-accent"></span>
<div class="ov-cc-names">
<div class="ov-cc-title-row"><span class="ov-cc-title">Cabin ${c.idx+1}</span><span class="ov-cc-room">Room #${c.room}</span></div>
<div class="ov-cc-sub">${c.type} (Deck ${c.deck})</div>
</div>
</div>
<div class="ov-cc-counts">
<span class="ov-cc-count"><span class="ov-cc-count-label">Adults</span><span class="ov-cc-count-val">${c.counts[0]}</span></span>
<span class="ov-cc-count"><span class="ov-cc-count-label">Young adults</span><span class="ov-cc-count-val">${c.counts[1]}</span></span>
<span class="ov-cc-count"><span class="ov-cc-count-label">Children</span><span class="ov-cc-count-val">${c.counts[2]}</span></span>
<span class="ov-cc-count"><span class="ov-cc-count-label">Infants</span><span class="ov-cc-count-val">${c.counts[3]}</span></span>
</div>
</div>
	<svg class="ov-cc-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
	</button>
	${guestContent}
	</div>`;
	}).join("");
}
/* ---- booking history: derived deterministically from the booking ----
   shared by the sidebar preview and the full-page view, so the two never drift */
function historyItems(d){
const b=d.b;
const historyTime=minutesAfter=>{
const dt=parseBDate(b.created),[hours,minutes]=b.createdTime.split(":").map(Number);
dt.setHours(hours,minutes+minutesAfter,0,0);
const hour12=((dt.getHours()+11)%12)+1,meridiem=dt.getHours()<12?"AM":"PM";
return `${String(dt.getDate()).padStart(2,"0")} ${MONTHS[dt.getMonth()]} ${dt.getFullYear()} · ${String(hour12).padStart(2,"0")}:${String(dt.getMinutes()).padStart(2,"0")} ${meridiem}`;
};
if(!Array.isArray(b.historySeed)||!b.historySeed.length){
const confirmedGuests=d.base.guests||[];
const confirmedGuestCount=confirmedGuests.length;
const supplementGuestCount=confirmedGuests.filter(guest=>suppCount(guest.supps)>0||guest.pkg).length;
const paid=roundMoney(Number.isFinite(Number(d.base.paidToDate))?d.base.paidToDate:d.base.total-d.base.pending);
b.historySeed=[];
if(paid>0)b.historySeed.push({time:historyTime(22),title:"Payment Received",desc:`Paid ${fmt(paid)} · Balance ${fmt(d.base.pending)}`,src:"Payment gateway"});
if(d.base.units>0)b.historySeed.push({time:historyTime(14),title:"Guest Supplements Added",desc:`${d.base.units} supplement units assigned to ${supplementGuestCount} of ${confirmedGuestCount} guests`,src:"JD · Reservations"});
b.historySeed.push({time:historyTime(8),title:"Cabin Assignments Confirmed",desc:(d.base.roomBy||b.cabins).map((room,i)=>`Cabin ${i+1}: Room #${room}`).join(" · "),src:"Inventory system"});
b.historySeed.push({time:historyTime(4),title:"Guest details verified",desc:`${confirmedGuestCount} guests verified · Insurance active for ${d.base.insured} guest${d.base.insured===1?"":"s"}`,src:"JD · Reservations"});
b.historySeed.push({time:historyTime(0),title:"Booking Created",desc:`${d.info.ship} · ${d.info.shipSub} · ${farecodeFor(b)}`,src:"Booking engine"});
}
/* Completed transactions append above the immutable sold-booking events. */
return[...(b.events||[]),...b.historySeed];
}
function timelineHtml(items){
return items.map(it=>`<div class="ov-tl-item">
<div class="ov-tl-rail"><span class="ov-tl-dot"></span><span class="ov-tl-line"></span></div>
<div class="ov-tl-body">
<span class="ov-tl-time">${esc(it.time)}</span>
<span class="ov-tl-title">${esc(it.title)}</span>
<span class="ov-tl-desc">${esc(it.desc)}</span>
<span class="ov-tl-src">${esc(it.src||"Margaritaville at Sea")}</span>
</div>
</div>`).join("");
}
function changeItemFactsHtml(item){
const facts=(item.facts?.length?item.facts:[
...(item.sub?[{label:"Details",value:item.sub}]:[]),
...(item.detail?[{label:"Additional context",value:item.detail}]:[])
]).filter(fact=>fact?.label&&fact?.value);
if(!facts.length)return"";
return `<dl class="ov-change-item-facts">${facts.map(fact=>`<div class="ov-change-item-fact"><dt>${esc(fact.label)}</dt><dd>${esc(fact.value)}</dd></div>`).join("")}</dl>`;
}
const REVIEW_CHANGE_GROUPS=[
{key:"cabin",title:"Cabin changes",description:"Room and stateroom category assignments",kinds:["room-change"]},
{key:"guest-cancellation",title:"Guest cancellations",description:"Staged cancellations, fare credits, and position changes",kinds:["guest-removed"]},
{key:"guest-addition",title:"Guest additions",description:"New guests, assigned fare, protection, and supplements",kinds:["guest-added"],includeNestedSupplements:true},
{key:"guest-update",title:"Guest updates",description:"Cabin transfers and guest profile changes",kinds:["guest-moved","guest-updated"]},
{key:"supplements",title:"Supplement changes",description:"Supplement products grouped for fast assignment review",kinds:["package-change","supplement-change"]},
{key:"extras",title:"Extras & offers",description:"Travel protection and promotions",kinds:["protection-change","promo-change"]},
{key:"other",title:"Other changes",description:"Additional staged booking updates",kinds:[]}
];
const REVIEW_CHANGE_KIND_LABELS={
"room-change":"Cabin update","guest-added":"Guest addition","guest-removed":"Cancellation",
"guest-moved":"Cabin transfer","guest-updated":"Details updated","package-change":"Package",
"supplement-change":"Supplements","protection-change":"Travel protection","promo-change":"Promotion",
"booking-change":"Booking update"
};
function reviewChangeGroupIcon(key){
return key==="cabin"?SVG_BED:key==="guest-cancellation"?SVG_TRASH:key==="guest-addition"?SVG_USERS:key==="guest-update"?SVG_USERS:key==="supplements"?SVG_PACKAGE:key==="extras"?SVG_SPARKLES:SVG_INFO;
}
function reviewChangeItemTitle(item){
if(item.kind==="room-change")return item.label.match(/^Cabin \d+/)?.[0]||item.label;
const guestFact=item.facts?.find(fact=>fact.label==="Guest")?.value;
if(guestFact)return guestFact;
if(["guest-added","guest-removed","guest-moved"].includes(item.kind)){
const named=item.label.split(" · ").slice(1).join(" · ");
if(named)return named;
}
if(item.kind==="promo-change")return item.label.replace(/^Promo code\s+/i,"");
return item.label;
}
function reviewCabinCategoryName(name,code){
let value=String(name||"").trim();
[` – ${code}`,` - ${code}`,` · ${code}`].forEach(suffix=>{
if(code&&value.endsWith(suffix))value=value.slice(0,-suffix.length).trim();
});
return value||"Category unavailable";
}
function reviewCabinAssignmentHtml(change,side){
if(!change)return `<span class="mf-review-cabin-assignment"><strong>Not available</strong><span>Assignment unavailable</span></span>`;
const category=change.category||{},room=change.room||{};
const code=String(category[`${side}Code`]||"—");
const name=reviewCabinCategoryName(category[`${side}Name`],code);
const roomNumber=String(room[side]||"—");
return `<span class="mf-review-cabin-assignment">
<strong>${esc(name)}</strong>
<span>Category ${esc(code)} <i aria-hidden="true">·</i> Room ${esc(roomNumber)}</span>
</span>`;
}
function reviewCabinChangeTableHtml(items){
return `<div class="mf-review-cabin-table-wrap"><table class="mf-review-cabin-table">
<caption class="sr-only">Current and updated cabin assignments, guest count, and fare impact</caption>
<thead><tr><th scope="col">Cabin</th><th scope="col">Before</th><th scope="col">After change</th><th scope="col">Guests</th><th scope="col">Fare impact</th></tr></thead>
<tbody>${items.map(item=>{
const change=item.cabinChange||{};
const cabinNumber=Number(change.cabinIndex)+1||reviewChangeItemTitle(item).match(/\d+/)?.[0]||"—";
const guestCount=Number(change.guestCount)||0;
return `<tr>
<th scope="row"><strong>Cabin ${cabinNumber}</strong></th>
<td class="mf-review-cabin-before" data-label="Before">${reviewCabinAssignmentHtml(change,"before")}</td>
<td class="mf-review-cabin-after" data-label="After change">${reviewCabinAssignmentHtml(change,"after")}</td>
<td class="mf-review-cabin-guests" data-label="Guests"><strong>${guestCount}</strong><span>active guest${guestCount===1?"":"s"}</span></td>
<td class="mf-review-cabin-impact${reviewImpactClass(item.amt)}" data-label="Fare impact"><strong>${fmtSigned(item.amt)}</strong></td>
</tr>`;
}).join("")}</tbody>
</table></div>`;
}
function reviewQuantity(value){
const number=Number(value)||0;
return Number.isInteger(number)?String(number):number.toLocaleString("en-US",{maximumFractionDigits:2});
}
function reviewSupplementQuantityHtml(line,nested){
if(nested&&line.beforeQty===0)return reviewQuantity(line.afterQty);
return `${reviewQuantity(line.beforeQty)} <i aria-hidden="true">→</i> ${reviewQuantity(line.afterQty)}`;
}
function reviewImpactClass(value){return value<-.005?" credit":value>.005?" charge":"";}
function reviewSupplementCoverage(line){
const before=line.beforeCoverage,after=line.afterCoverage;
if(line.beforeQty===0&&line.afterQty>0)return after?`Added · Included in ${after.name}`:"Added as a direct charge";
if(line.beforeQty>0&&line.afterQty===0)return before?`Removed · Was included in ${before.name}`:"Removed from direct charges";
if(before&&after)return before.id===after.id?`Included in ${after.name}`:`Included package: ${before.name} → ${after.name}`;
if(!before&&after)return `Direct charge → Included in ${after.name}`;
if(before&&!after)return `Included in ${before.name} → Direct charge`;
return "Direct supplement charge";
}
function reviewExtraTableFooter(label,beforeSubtotal,afterSubtotal){
return `<tfoot><tr><th scope="row" colspan="4"><span>${esc(label)}</span><small>Before ${fmt(beforeSubtotal)} → After ${fmt(afterSubtotal)}</small></th></tr></tfoot>`;
}
function reviewExtraRoundingRow(item,review){
const calculated=roundMoney(review.afterSubtotal-review.beforeSubtotal);
const adjustment=roundMoney(item.amt-calculated);
if(Math.abs(adjustment)<=.005)return"";
return `<tr class="mf-review-extra-rounding"><th scope="row"><strong>Rounding adjustment</strong><small>Keeps the displayed staged total reconciled</small></th><td data-label="Quantity">—</td><td data-label="Unit price">—</td><td class="mf-review-extra-money${reviewImpactClass(adjustment)}" data-label="Line impact">${fmtSigned(adjustment)}</td></tr>`;
}
function reviewChangedProductLines(review){
return(review?.lines||[]).filter(line=>line.beforeQty!==line.afterQty||Math.abs(line.delta)>.005||line.beforeCoverage?.id!==line.afterCoverage?.id);
}
function stagedChangeUnitCount(items){
return(items||[]).reduce((sum,item)=>{
if(["supplement-change","package-change"].includes(item.kind))return sum+Math.max(1,reviewChangedProductLines(item.review).length);
return sum+1;
},0);
}
function reviewSupplementDetailsHtml(item,review,nested=false){
if(!review.lines?.length)return changeItemFactsHtml(item);
const changedLines=reviewChangedProductLines(review);
if(!changedLines.length)return changeItemFactsHtml(item);
return `<div class="mf-review-extra-detail${nested?" is-nested":""}">
${nested?"":`<div class="mf-review-extra-detail-head"><span>Supplement details</span><small>Only products changed in this draft</small></div>`}
<div class="mf-review-extra-table-wrap"><table class="mf-review-extra-table">
<caption class="sr-only">Supplement changes for ${esc(review.guest||reviewChangeItemTitle(item))}</caption>
<thead><tr><th scope="col">Supplement</th><th scope="col">Quantity</th><th scope="col">Unit price</th><th scope="col">Line impact</th></tr></thead>
<tbody>${changedLines.map(line=>`<tr>
<th scope="row"><strong>${esc(line.name)}</strong><small>${esc(line.category)} · ${esc(reviewSupplementCoverage(line))}</small></th>
<td data-label="Quantity"><span class="mf-review-extra-quantity">${reviewSupplementQuantityHtml(line,nested)}</span></td>
<td class="mf-review-extra-rate" data-label="Unit price">${fmt(line.unitPrice)}<small>per unit</small></td>
<td class="mf-review-extra-money${reviewImpactClass(line.delta)}" data-label="Line impact">${fmtSigned(line.delta)}</td>
</tr>`).join("")}${reviewExtraRoundingRow(item,review)}</tbody>
${reviewExtraTableFooter("Direct supplement subtotal",review.beforeSubtotal,review.afterSubtotal)}
</table></div></div>`;
}
function reviewPackageDetailsHtml(item,review){
if(!review.lines?.length)return changeItemFactsHtml(item);
return `<div class="mf-review-extra-detail">
<div class="mf-review-extra-detail-head"><span>Package details</span><small>Rate, sailing duration, and included products</small></div>
<div class="mf-review-extra-table-wrap"><table class="mf-review-extra-table mf-review-package-table">
<caption class="sr-only">Package changes for ${esc(review.guest||reviewChangeItemTitle(item))}</caption>
<thead><tr><th scope="col">Package</th><th scope="col">Assignment</th><th scope="col">Price basis</th><th scope="col">Line impact</th></tr></thead>
<tbody>${review.lines.map(line=>`<tr>
<th scope="row"><strong>${esc(line.name)}</strong>${line.includedSupplements.length?`<span class="mf-review-package-inclusions"><em>Included products</em>${line.includedSupplements.map(product=>`<span><b>${esc(product.name)}</b><small>${product.quantity} included · ${fmt(product.unitPrice)} per unit · $0 direct charge</small></span>`).join("")}</span>`:`<small>No included supplements listed</small>`}</th>
<td data-label="Assignment">${line.beforeQty?"Assigned":"Not assigned"} <span class="mf-review-extra-arrow" aria-hidden="true">→</span> ${line.afterQty?"Assigned":"Removed"}</td>
<td class="mf-review-extra-rate" data-label="Price basis">${fmt(line.unitPrice)}<small>per guest / night × ${line.nights} nights</small></td>
<td class="mf-review-extra-money${reviewImpactClass(line.delta)}" data-label="Line impact">${fmtSigned(line.delta)}</td>
</tr>`).join("")}${reviewExtraRoundingRow(item,review)}</tbody>
${reviewExtraTableFooter("Package subtotal",review.beforeSubtotal,review.afterSubtotal)}
</table></div></div>`;
}
function reviewProtectionDetailsHtml(item,review){
return `<div class="mf-review-extra-detail">
<div class="mf-review-extra-detail-head"><span>Travel protection details</span><small>Required coverage priced per guest</small></div>
<div class="mf-review-extra-table-wrap"><table class="mf-review-extra-table mf-review-protection-table">
<caption class="sr-only">Travel protection changes</caption>
<thead><tr><th scope="col">Guest</th><th scope="col">Coverage</th><th scope="col">Rate</th><th scope="col">Line impact</th></tr></thead>
<tbody>${review.lines.map(line=>`<tr>
<th scope="row"><strong>${esc(line.name)}</strong></th>
<td data-label="Coverage">${line.beforeActive?"Active":"Not active"} <span class="mf-review-extra-arrow" aria-hidden="true">→</span> ${line.afterActive?"Active":"Not active"}</td>
<td class="mf-review-extra-rate" data-label="Rate">${fmt(review.rate)}<small>per guest${line.count>1?` × ${line.count}`:""}</small></td>
<td class="mf-review-extra-money${reviewImpactClass(line.delta)}" data-label="Line impact">${fmtSigned(line.delta)}</td>
</tr>`).join("")}${reviewExtraRoundingRow(item,review)}</tbody>
${reviewExtraTableFooter("Travel protection subtotal",review.beforeSubtotal,review.afterSubtotal)}
</table></div></div>`;
}
function reviewPromotionDetailsHtml(item,review){
return `<div class="mf-review-extra-detail">
<div class="mf-review-extra-detail-head"><span>Promotion details</span><small>Offer basis and applied booking discount</small></div>
<dl class="mf-review-extra-facts">
<div><dt>Promo code</dt><dd>${esc(review.code)}</dd></div>
<div><dt>Offer</dt><dd>${esc(review.offer)}</dd></div>
<div><dt>Eligible amount</dt><dd>${fmt(review.eligibleAmount)}</dd></div>
<div><dt>Configured benefit</dt><dd>${esc(review.configuredBenefit)}</dd></div>
<div><dt>Calculated discount</dt><dd>${fmt(review.requestedDiscount)}</dd></div>
<div><dt>Applied discount</dt><dd>${fmt(review.appliedDiscount)}${review.capped?" · capped at eligible total":""}</dd></div>
</dl></div>`;
}
function reviewExtraDetailsHtml(item,nested=false){
const review=item.review;
if(!review)return changeItemFactsHtml(item);
if(review.type==="supplements")return reviewSupplementDetailsHtml(item,review,nested);
if(review.type==="packages")return reviewPackageDetailsHtml(item,review);
if(review.type==="protection")return reviewProtectionDetailsHtml(item,review);
if(review.type==="promotion")return reviewPromotionDetailsHtml(item,review);
return changeItemFactsHtml(item);
}
function nestedGuestSupplementHtml(item){
return `<section class="mf-review-guest-supplements" aria-label="Supplements selected for this guest">
<header class="mf-review-guest-supplements-head">
<span><small>Supplements</small><strong>Selected for this guest</strong></span>
</header>
${reviewExtraDetailsHtml(item,true)}
</section>`;
}
function reviewGuestSupplementProductLines(nestedItems){
return nestedItems.flatMap(item=>item.review?.type==="supplements"?(item.review.lines||[]):[]).filter(line=>line.afterQty>0);
}
function reviewGuestSupplementProductsHtml(lines){
if(!lines.length)return"";
return `<ul class="mf-review-guest-supplement-products" aria-label="Selected supplement products">${lines.map(line=>{
const coverage=line.afterCoverage?`Included in ${line.afterCoverage.name}`:"Direct charge";
return `<li><span><strong>${esc(line.name)}</strong><small>Quantity ${reviewQuantity(line.afterQty)} · ${fmt(line.unitPrice)} per unit · ${esc(coverage)}</small></span><strong>${fmt(line.afterSubtotal)}</strong></li>`;
}).join("")}</ul>`;
}
function reviewGuestFareLedgerHtml(item,nestedItems,visibleAmt,totalLabel){
const ledger=item.fareLedger;
if(!ledger)return changeItemFactsHtml(item);
const nestedImpact=roundMoney(nestedItems.reduce((sum,child)=>sum+child.amt,0));
const productLines=reviewGuestSupplementProductLines(nestedItems);
const productsHtml=reviewGuestSupplementProductsHtml(productLines);
const productCount=productLines.length;
const productUnits=productLines.reduce((sum,line)=>sum+(Number(line.afterQty)||0),0);
const supplementKey=String(item.subjectGuestId||item.label||"guest");
const supplementPanelId=`review-supplements-${supplementKey.replace(/[^a-zA-Z0-9_-]/g,"-")}`;
const supplementExpanded=Boolean(mod.reviewSupplementExpandedIds?.has(supplementKey));
const lines=(ledger.lines||[]).filter(line=>!line.requiresNested||nestedItems.length).map(line=>({
...line,amount:roundMoney(line.amount+(line.addNestedImpact?nestedImpact:0))
}));
const componentTotal=roundMoney(lines.filter(line=>line.contributes!==false).reduce((sum,line)=>sum+line.amount,0));
const residual=roundMoney(visibleAmt-componentTotal);
if(Math.abs(residual)>.005)lines.push({label:"Pricing reconciliation",note:"Cent-level staged total allocation",amount:residual,level:"child",contributes:true});
const lineHtml=line=>{
const amountCopy=line.displayAmount||fmtSigned(line.amount);
const classes=["mf-review-guest-ledger-row",line.level?`is-${line.level}`:"",line.amount<-.005?"credit":"",line.retained?"is-retained":""].filter(Boolean).join(" ");
if(line.products&&productsHtml){
const productCopy=`${productCount} selected product${productCount===1?"":"s"} · ${reviewQuantity(productUnits)} unit${productUnits===1?"":"s"}`;
return `<div class="${classes} is-supplement-accordion${supplementExpanded?"":" is-collapsed"}">
<dt><button type="button" class="mf-review-guest-supplement-toggle" data-review-supplement-toggle="${esc(supplementKey)}" aria-expanded="${String(supplementExpanded)}" aria-controls="${supplementPanelId}">
<span class="mf-review-guest-supplement-toggle-copy"><strong>${esc(line.label)}</strong><small>${esc(productCopy)} · <span data-review-supplement-state>${supplementExpanded?"Hide details":"Show details"}</span></small></span>
<span class="mf-review-guest-supplement-toggle-meta"><strong>${esc(amountCopy)}</strong><span class="mf-review-guest-supplement-chevron" aria-hidden="true">${SVG_CARET}</span></span>
</button></dt>
<dd class="mf-review-guest-supplement-panel" id="${supplementPanelId}"${supplementExpanded?"":" hidden"}>${productsHtml}</dd>
</div>`;
}
return `<div class="${classes}"><dt><span>${esc(line.label)}</span>${line.note?`<small>${esc(line.note)}</small>`:""}</dt><dd>${esc(amountCopy)}</dd></div>`;
};
return `<div class="mf-review-guest-ledger-wrap">
<dl class="mf-review-guest-context">${(ledger.context||[]).map(fact=>`<div><dt>${esc(fact.label)}</dt><dd>${esc(fact.value)}</dd></div>`).join("")}</dl>
<section class="mf-review-guest-ledger" aria-label="Fare impact breakdown">
<header class="mf-review-guest-ledger-head"><span>Fare impact breakdown</span><small>${ledger.mode==="cancellation"?"Credit applied when this cancellation is completed":"Charges added for this guest"}</small></header>
<dl class="mf-review-guest-ledger-rows">${lines.map(lineHtml).join("")}
<div class="mf-review-guest-ledger-row is-total${visibleAmt<-.005?" credit":""}"><dt><span>${esc(totalLabel)}</span></dt><dd>${fmtSigned(visibleAmt)}</dd></div>
</dl></section>
${(ledger.notes||[]).length?`<ul class="mf-review-guest-ledger-notes">${ledger.notes.map(note=>`<li>${esc(note)}</li>`).join("")}</ul>`:""}
</div>`;
}
function reviewSupplementAssignmentAction(line,type){
const beforeQty=Number(line.beforeQty)||0,afterQty=Number(line.afterQty)||0;
if(beforeQty<=0&&afterQty>0)return"Added";
if(beforeQty>0&&afterQty<=0)return"Removed";
if(type==="supplements"&&line.beforeCoverage?.id!==line.afterCoverage?.id)return"Coverage updated";
if(beforeQty!==afterQty)return"Quantity updated";
return"Updated";
}
function reviewSupplementProductEntries(items){
return items.flatMap(item=>{
const review=item.review;
if(!review||!["supplements","packages"].includes(review.type))return[];
const changedLines=reviewChangedProductLines(review);
return changedLines.map(line=>({
key:`${review.type}:${line.id||line.name}`,
type:review.type,
name:line.name,
category:review.type==="packages"?"Package":line.category||"Supplement",
guest:review.guest||reviewChangeItemTitle(item),
action:reviewSupplementAssignmentAction(line,review.type),
beforeQty:Number(line.beforeQty)||0,
afterQty:Number(line.afterQty)||0,
beforeCoverage:line.beforeCoverage||null,
afterCoverage:line.afterCoverage||null,
unitPrice:Number(line.unitPrice)||0,
nights:Number(line.nights)||0,
impact:roundMoney(line.delta)
}));
});
}
function reviewSupplementAssignmentDetail(entry){
if(entry.type==="packages"){
const before=entry.beforeQty>0?"Assigned":"Not assigned",after=entry.afterQty>0?"Assigned":"Not assigned";
return `${before} → ${after} · ${fmt(entry.unitPrice)} per guest / night × ${entry.nights} nights`;
}
const coverage=reviewSupplementCoverage(entry);
return `Quantity ${reviewQuantity(entry.beforeQty)} → ${reviewQuantity(entry.afterQty)} · ${coverage} · ${fmt(entry.unitPrice)} per unit`;
}
function reviewSupplementProductGroups(entries){
const groups=new Map();
entries.forEach(entry=>{
if(!groups.has(entry.key))groups.set(entry.key,{key:entry.key,type:entry.type,name:entry.name,category:entry.category,entries:[]});
groups.get(entry.key).entries.push(entry);
});
return [...groups.values()].sort((a,b)=>a.type===b.type?a.name.localeCompare(b.name):a.type==="packages"?-1:1);
}
function reviewSupplementProductViewHtml(entries){
const groups=reviewSupplementProductGroups(entries);
if(!groups.length)return `<div class="mf-review-product-empty"><strong>No product-level changes</strong><span>Use the guest view to review the available staged details.</span></div>`;
return `<ul class="mf-review-product-groups" aria-label="Supplement changes grouped by product">${groups.map((group,index)=>{
const actions=[...new Set(group.entries.map(entry=>entry.action))];
const action=actions.length===1?actions[0]:"Mixed changes";
const actionClass=action==="Added"?" is-added":action==="Removed"?" is-removed":"";
const guestNames=[...new Set(group.entries.map(entry=>entry.guest))];
const guestCopy=guestNames.length<=3?guestNames.join(", "):`${guestNames.slice(0,3).join(", ")} +${guestNames.length-3} more`;
const impact=roundMoney(group.entries.reduce((sum,entry)=>sum+entry.impact,0));
const detailId=`review-supplement-product-${index}`;
return `<li class="ov-change-item mf-review-product-group has-collapsible-detail is-collapsed">
<button type="button" class="mf-review-item-toggle" data-review-item-toggle aria-expanded="false" aria-controls="${detailId}" aria-label="Expand guest assignments for ${esc(group.name)}">
<span class="mf-review-change-item-copy"><small class="mf-review-change-kind mf-review-product-action${actionClass}">${esc(action)}</small><span class="ov-change-item-label">${esc(group.name)}</span><small class="mf-review-product-meta">${esc(group.category)} · ${guestNames.length} guest${guestNames.length===1?"":"s"} · ${esc(guestCopy)}</small></span>
<span class="ov-change-item-impact"><small>Net impact</small><strong class="ov-change-item-amt${impact<0?" credit":""}">${fmtSigned(impact)}</strong></span>
<span class="mf-review-item-chevron" aria-hidden="true">${SVG_CHEV}</span>
</button>
<div class="mf-review-item-detail mf-review-product-detail" id="${detailId}" hidden>
<header class="mf-review-product-detail-head"><span>Guest-level changes</span><small>${group.entries.length} change${group.entries.length===1?"":"s"} included in this product total</small></header>
<ul class="mf-review-product-assignments">${group.entries.map(entry=>`<li>
<span class="mf-review-product-assignment-copy"><strong>${esc(entry.guest)}</strong><small><b>${esc(entry.action)}</b> · ${esc(reviewSupplementAssignmentDetail(entry))}</small></span>
<span class="mf-review-product-assignment-impact${reviewImpactClass(entry.impact)}"><small>Line impact</small><strong>${fmtSigned(entry.impact)}</strong></span>
</li>`).join("")}</ul>
</div>
</li>`;
}).join("")}</ul>`;
}
function reviewSupplementViewsHtml(items,entries){
const productCount=reviewSupplementProductGroups(entries).length;
const guestList=`<ul class="mf-review-change-group-items">${items.map((item,itemIndex)=>changeItemHtml(item,true,{collapsibleDetail:true,detailId:`review-supplements-guest-${itemIndex}`})).join("")}</ul>`;
return `<div class="mf-review-supplement-review">
<div class="mf-review-supplement-toolbar">
<span class="mf-review-supplement-toolbar-copy"><strong>${productCount} product${productCount===1?"":"s"} · ${entries.length} assignment${entries.length===1?"":"s"}</strong><small>Scan by product, then expand only the guest assignments you need to verify.</small></span>
<span class="mf-review-supplement-view-switch" role="group" aria-label="Group supplement changes by">
<button type="button" data-review-supplement-view="product" aria-pressed="true">By product</button>
<button type="button" data-review-supplement-view="guest" aria-pressed="false">By guest</button>
</span>
</div>
<div data-review-supplement-panel="product">${reviewSupplementProductViewHtml(entries)}</div>
<div data-review-supplement-panel="guest" hidden>${guestList}</div>
</div>`;
}
function reviewNestedChangeOwnership(items){
const addedGuestIds=new Set(items.filter(item=>item.kind==="guest-added"&&item.subjectGuestId).map(item=>String(item.subjectGuestId)));
const byGuest=new Map(),owned=new Set();
items.forEach(item=>{
if(!["supplement-change","package-change"].includes(item.kind)||!item.subjectGuestId||!addedGuestIds.has(String(item.subjectGuestId)))return;
const guestId=String(item.subjectGuestId),list=byGuest.get(guestId)||[];
list.push(item);byGuest.set(guestId,list);owned.add(item);
});
return{byGuest,owned};
}
function reviewChangeFact(item,label){return item.facts?.find(fact=>fact.label===label)?.value||"";}
function reviewCabinGroupDescription(items){
return items.map(item=>{
const change=item.cabinChange||{},category=change.category||{},room=change.room||{};
const cabinNumber=Number(change.cabinIndex)+1||reviewChangeItemTitle(item).match(/\d+/)?.[0]||"—";
const before=category.changed?`${category.beforeCode}/${room.before}`:`Room ${room.before}`;
const after=category.changed?`${category.afterCode}/${room.after}`:`${room.after}`;
return `Cabin ${cabinNumber}: ${before} → ${after}`;
}).join(" · ");
}
function reviewSupplementGroupDescription(entries){
const products=reviewSupplementProductGroups(entries);
if(!products.length)return"No supplement assignments changed";
if(products.length===1){
const product=products[0],guestCount=new Set(product.entries.map(entry=>entry.guest)).size;
const actions=[...new Set(product.entries.map(entry=>entry.action))];
const action=actions.length!==1?"updated for":actions[0]==="Added"?"added for":actions[0]==="Removed"?"removed from":"updated for";
return `${product.name} ${action} ${guestCount} guest${guestCount===1?"":"s"}`;
}
const names=products.slice(0,2).map(product=>product.name).join(" · ");
return `${names}${products.length>2?` · +${products.length-2} more`:""}`;
}
function reviewGroupPresentation(group,members,nestedByGuest,supplementEntries){
if(group.key==="cabin")return{title:"Cabin assignments",description:reviewCabinGroupDescription(members),countLabel:`${members.length} room assignment${members.length===1?"":"s"}`};
if(group.key==="guest-addition"){
const names=members.map(reviewChangeItemTitle),nestedItems=members.flatMap(item=>nestedByGuest.get(String(item.subjectGuestId))||[]);
const productCount=reviewSupplementProductGroups(reviewSupplementProductEntries(nestedItems)).length;
const assignedCabins=members.map(item=>reviewChangeFact(item,"Assigned cabin")).filter(Boolean);
const cabinNumbers=[...new Set(assignedCabins.map(value=>value.match(/Cabin \d+/)?.[0]).filter(Boolean))];
const cabinCopy=members.length===1
?(assignedCabins[0]||"Cabin assigned")
:cabinNumbers.length?`Across ${cabinNumbers.length} cabin${cabinNumbers.length===1?"":"s"}`:"Cabins assigned";
return{
title:"Guest additions",
description:`${members.length===1?`${names[0]} · `:""}${cabinCopy} · Fare and protection${productCount?` · ${productCount} supplement${productCount===1?"":"s"}`:""}`,
countLabel:`${members.length} guest${members.length===1?"":"s"}`
};
}
if(group.key==="guest-cancellation")return{title:members.length===1?`${reviewChangeItemTitle(members[0])} cancelled`:group.title,description:group.description,countLabel:`${members.length} guest${members.length===1?"":"s"}`};
if(group.key==="guest-update")return{title:members.length===1?`${reviewChangeItemTitle(members[0])} updated`:group.title,description:group.description,countLabel:`${members.length} guest${members.length===1?"":"s"}`};
if(group.key==="supplements"){
const productCount=reviewSupplementProductGroups(supplementEntries).length;
return{title:"Supplements for existing guests",description:reviewSupplementGroupDescription(supplementEntries),countLabel:`${productCount} product${productCount===1?"":"s"} · ${supplementEntries.length} assignment${supplementEntries.length===1?"":"s"}`};
}
return{title:group.title,description:group.description,countLabel:`${members.length} update${members.length===1?"":"s"}`};
}
function reviewChangeGroupModels(items){
const knownKinds=new Set(REVIEW_CHANGE_GROUPS.flatMap(group=>group.kinds));
const ownership=reviewNestedChangeOwnership(items);
return REVIEW_CHANGE_GROUPS.flatMap(group=>{
const members=items.filter(item=>{
if(group.key==="supplements"&&ownership.owned.has(item))return false;
return group.key==="other"?!knownKinds.has(item.kind):group.kinds.includes(item.kind);
});
if(!members.length)return[];
const nestedItems=group.includeNestedSupplements?members.flatMap(item=>ownership.byGuest.get(String(item.subjectGuestId))||[]):[];
const supplementEntries=group.key==="supplements"?reviewSupplementProductEntries(members):[];
const amounts=[...members,...nestedItems].map(item=>Number(item.amt)||0);
const impact=roundMoney(amounts.reduce((sum,amount)=>sum+amount,0));
const hasCharge=amounts.some(amount=>amount>.005),hasCredit=amounts.some(amount=>amount<-.005);
const allFlat=amounts.every(amount=>Math.abs(amount)<=.005);
return[{group,members,nestedItems,nestedByGuest:ownership.byGuest,supplementEntries,impact,impactLabel:hasCharge&&hasCredit?"Net price impact":"Price impact",impactValue:allFlat?"No price change":Math.abs(impact)<=.005&&hasCharge&&hasCredit?`${fmt(0)} net`:fmtSigned(impact),impactClass:allFlat?" flat":reviewImpactClass(impact),presentation:reviewGroupPresentation(group,members,ownership.byGuest,supplementEntries)}];
});
}
function changeItemHtml(item,grouped=false,options={}){
const nestedItems=options.nestedItems||[];
const visibleAmt=options.visibleAmt??item.amt;
const visibleImpactLabel=options.impactLabel||item.impactLabel||"Price impact";
const title=grouped?reviewChangeItemTitle(item):item.label;
const kindLabel=REVIEW_CHANGE_KIND_LABELS[item.kind]||"Booking update";
const guestLedger=grouped&&item.fareLedger;
const detailContent=guestLedger?reviewGuestFareLedgerHtml(item,nestedItems,visibleAmt,visibleImpactLabel):grouped&&item.review?reviewExtraDetailsHtml(item):changeItemFactsHtml(item);
if(options.collapsibleDetail&&grouped){
const detailId=options.detailId||`review-change-item-${String(title).replace(/[^a-zA-Z0-9_-]/g,"-")}`;
return `<li class="ov-change-item${item.kind?` ${item.kind}`:""} has-collapsible-detail is-collapsed">
<button type="button" class="mf-review-item-toggle" data-review-item-toggle aria-expanded="false" aria-controls="${esc(detailId)}" aria-label="Expand details for ${esc(title)}">
<span class="mf-review-change-item-copy"><small class="mf-review-change-kind">${esc(kindLabel)}</small><span class="ov-change-item-label">${esc(title)}</span></span>
<span class="ov-change-item-impact"><small>${esc(visibleImpactLabel)}</small><strong class="ov-change-item-amt${visibleAmt<0?" credit":""}">${fmtSigned(visibleAmt)}</strong></span>
<span class="mf-review-item-chevron" aria-hidden="true">${SVG_CHEV}</span>
</button>
<div class="mf-review-item-detail" id="${esc(detailId)}" hidden>${detailContent}</div>
</li>`;
}
return `<li class="ov-change-item${item.kind?` ${item.kind}`:""}${nestedItems.length?" has-nested-supplements":""}">
<div class="ov-change-item-head">
${grouped?`<span class="mf-review-change-item-copy"><small class="mf-review-change-kind">${esc(kindLabel)}</small><span class="ov-change-item-label">${esc(title)}</span></span>`:`<span class="ov-change-item-label">${esc(title)}</span>`}
${guestLedger?"":`<span class="ov-change-item-impact"><small>${esc(visibleImpactLabel)}</small><strong class="ov-change-item-amt${visibleAmt<0?" credit":""}">${fmtSigned(visibleAmt)}</strong></span>`}
</div>
${detailContent}
${grouped&&nestedItems.length&&!guestLedger?nestedItems.map(nestedGuestSupplementHtml).join(""):""}
</li>`;
}
function groupedChangeItemsHtml(items){
return reviewChangeGroupModels(items).map(({group,members,nestedByGuest,supplementEntries,impactLabel,impactValue,impactClass,presentation})=>{
const groupContent=group.key==="cabin"?reviewCabinChangeTableHtml(members):group.key==="supplements"?reviewSupplementViewsHtml(members,supplementEntries):`<ul class="mf-review-change-group-items">${members.map((item,itemIndex)=>{
const nestedItems=group.includeNestedSupplements&&item.kind==="guest-added"?(nestedByGuest.get(String(item.subjectGuestId))||[]):[];
const visibleAmt=roundMoney(item.amt+nestedItems.reduce((sum,child)=>sum+child.amt,0));
return changeItemHtml(item,true,{nestedItems,visibleAmt,impactLabel:nestedItems.length?"Fare + selected extras":item.impactLabel,collapsibleDetail:group.key==="supplements",detailId:`review-${group.key}-item-${itemIndex}`});
}).join("")}</ul>`;
const groupPanelId=`review-change-group-panel-${group.key}`;
return `<li class="mf-review-change-group is-collapsed" data-review-change-group="${group.key}">
<section aria-labelledby="review-change-group-${group.key}">
<button type="button" class="mf-review-change-group-head mf-review-change-group-toggle" data-review-group-toggle="${group.key}" aria-expanded="false" aria-controls="${groupPanelId}" aria-label="Expand ${esc(presentation.title)}">
<span class="mf-review-change-group-icon" aria-hidden="true">${reviewChangeGroupIcon(group.key)}</span>
<span class="mf-review-change-group-copy"><span class="mf-review-change-group-title" id="review-change-group-${group.key}">${esc(presentation.title)}</span><small><span class="mf-review-change-group-meta">${esc(presentation.countLabel)}</span><i aria-hidden="true">·</i><span class="mf-review-change-group-detail">${esc(presentation.description)}</span></small></span>
<span class="mf-review-change-group-summary">
<span class="mf-review-change-group-impact${impactClass}"><small>${esc(impactLabel)}</small><strong>${esc(impactValue)}</strong></span>
</span>
<span class="mf-review-change-group-chevron" aria-hidden="true">${SVG_CHEV}</span>
</button>
<div class="mf-review-change-group-body" id="${groupPanelId}" hidden>${groupContent}</div>
</section>
</li>`;
}).join("");
}
function committedPriceDetail(d){
const baseGuests=d.base.guests||[];
const nights=d.info.nights||5;
const packages=roundMoney(baseGuests.reduce((sum,g)=>sum+(g.pkg&&PKG_BY_ID[g.pkg]?PKG_BY_ID[g.pkg].rate*nights:0),0));
const parts=taxBreakdown(d.base.taxes||0);
const total=roundMoney(d.base.total||0);
const paidToDate=Math.max(0,roundMoney(Number.isFinite(Number(d.base.paidToDate))?d.base.paidToDate:total-(d.base.pending||0)));
const pending=Math.max(0,roundMoney(total-paidToDate));
const creditDue=Math.max(0,roundMoney(paidToDate-total));
return{
total,pending,creditDue,paidToDate,
cabinFare:roundMoney(d.base.cabinFare||0),taxes:roundMoney(d.base.taxes||0),
govtTax:roundMoney(parts.govt),cruiseFee:roundMoney(parts.cruise),
supplements:roundMoney(d.base.supplements||0),packages,
insurance:roundMoney(d.base.insurance||0),activeInsured:Number(d.base.insured)||0,
insured:Number(d.base.insured)||0,retainedProtectionCount:0,
baseDiscount:roundMoney(d.base.discount||0),promoAmt:0,discount:roundMoney(d.base.discount||0)
};
}
function renderPricePanel(p){
const d=detail;
const dirty=isDirty(d);
const payment=committedPriceDetail(d);
const dueDate=addDays(d.sail,-5);
const paidAmt=payment.paidToDate;
const hasCredit=payment.creditDue>.005;
const paidPct=payment.total>0?Math.max(0,Math.min(100,Math.round((paidAmt/payment.total)*100))):0;
const daysDiff=Math.ceil((dueDate-new Date())/(1000*60*60*24));
const badge=document.getElementById("payDueIn");
const settled=!hasCredit&&payment.pending<=0.005;
badge.textContent=hasCredit?"Credit to review":settled?"Fully paid":"Due in "+Math.max(daysDiff,0)+" days";
badge.classList.toggle("paid",settled);
badge.classList.toggle("credit",hasCredit);
document.getElementById("pBalance").textContent=fmt(hasCredit?payment.creditDue:payment.pending);
document.getElementById("pBalance").setAttribute("aria-label",hasCredit?"Credit to review":"Balance due");
const dueLine=document.getElementById("pDueDate");
dueLine.textContent=hasCredit?"Paid amount exceeds the updated booking total":settled?"Paid in full":"Final payment due "+fmtDateShort(dueDate);
dueLine.closest(".ov-due-line").classList.toggle("settled",settled);
dueLine.closest(".ov-due-line").classList.toggle("credit",hasCredit);
document.getElementById("pPaidToDate").textContent=fmt(paidAmt);
document.getElementById("pPaidPct").textContent=hasCredit?"Above updated total":paidPct+"% Paid";
document.getElementById("progressFill").style.width=(hasCredit?100:paidPct)+"%";
const cabinTypes=[...new Set(d.base.cabinCodeBy.map(code=>catEntry(code).type.replace(" Stateroom","")))];
const cabinLabel=cabinTypes.length===1?`Cabin fare (${cabinTypes[0]})`:"Cabin fare (mixed categories)";
/* Allocate any sub-cent display remainder to cabin fare so the visible ledger
   always adds back to the displayed booking total. The pricing model stays raw. */
const moneyCents=value=>Math.round((value+Number.EPSILON)*100);
const otherDisplayCents=moneyCents(payment.taxes)+moneyCents(payment.supplements)+moneyCents(payment.packages)+moneyCents(payment.insurance)-moneyCents(payment.discount);
const displayedCabinFare=(moneyCents(payment.total)-otherDisplayCents)/100;
document.getElementById("pCabinTitle").textContent=cabinLabel;
const activeCount=d.base.guests.length;
document.getElementById("pCabinSub").textContent=activeCount+" guest"+(activeCount===1?"":"s")+" · "+d.cabinPlan.length+" cabin"+(d.cabinPlan.length===1?"":"s");
document.getElementById("pCabinFare").textContent=fmt(displayedCabinFare);
document.getElementById("pTaxes").textContent=fmt(payment.taxes);
document.getElementById("pGovtTax").textContent=fmt(payment.govtTax);
document.getElementById("pCruiseFee").textContent=fmt(payment.cruiseFee);
document.getElementById("pSupplements").textContent=fmt(payment.supplements);
const packagesRow=document.getElementById("pPackagesRow");
packagesRow.hidden=payment.packages<=.005;
document.getElementById("pPackages").textContent=fmt(payment.packages);
const insuranceRow=document.getElementById("pInsuranceRow");
insuranceRow.hidden=payment.insurance<=.005;
insuranceRow.classList.remove("credit");
document.getElementById("pInsuranceSub").textContent=payment.insured+" guest"+(payment.insured===1?"":"s")+" × "+fmt(INSURANCE_RATE);
document.getElementById("pInsuranceAdj").textContent=fmt(payment.insurance);
const promoRow=document.getElementById("pPromoRow");
promoRow.hidden=payment.discount<=.005;
document.getElementById("pPromo").textContent=fmtSigned(-payment.discount);
const appliedPromo=(d.b.appliedPromos||[]).at(-1);
document.getElementById("pPromoSub").textContent=payment.baseDiscount>.005
?(appliedPromo?`Committed promotion · ${appliedPromo}`:"Committed booking discount"):"";
const promoInput=document.getElementById("promoInput"),promoApply=document.getElementById("promoApply");
const promoLocked=payment.discount>.005;
promoInput.disabled=promoLocked;promoApply.disabled=promoLocked;
promoInput.placeholder=promoLocked?"Promotion already applied":"Enter coupon code…";
if(promoLocked)promoInput.value="";
document.getElementById("pTotalPayable").textContent=fmt(payment.total);
const box=document.getElementById("changeBox");
box.hidden=!dirty;
document.getElementById("detailPendingChangesSlot").hidden=!dirty;
const paymentDraft=document.getElementById("paymentDraftImpact");
paymentDraft.hidden=!dirty;
const items=dirty?changeItems(p):[];
const review=document.getElementById("detailReviewChanges");
review.disabled=!dirty;
review.setAttribute("aria-expanded",String(dirty&&mod.previewOpen));
if(dirty){
const flat=Math.abs(p.delta)<=0.005;
const changeCount=stagedChangeUnitCount(items);
const affectedAreaCount=reviewChangeGroupModels(items).length;
document.getElementById("changesCount").textContent=changeCount+" change"+(changeCount===1?"":"s");
document.getElementById("pendingChangesScope").textContent=`Affects ${affectedAreaCount} booking area${affectedAreaCount===1?"":"s"} · Review before saving`;
document.getElementById("changesItems").innerHTML=items.map(item=>changeItemHtml(item)).join("");
document.getElementById("cNet").textContent=flat?fmt(0):fmtSigned(p.delta);
document.getElementById("cNetLabel").textContent="Unsaved price impact";
const projectedCredit=p.creditDue>.005;
const projectedSettled=!projectedCredit&&p.pending<=.005;
document.getElementById("cEstimatedBalanceLabel").textContent=projectedCredit?"Credit after saving":projectedSettled?"Payment status after saving":"Balance due after saving";
document.getElementById("cEstimatedBalance").textContent=projectedSettled?"Paid in full":fmt(projectedCredit?p.creditDue:p.pending);
document.getElementById("cNetRow").classList.toggle("credit",!flat&&p.delta<0);
document.getElementById("paymentDraftCount").textContent=changeCount+" change"+(changeCount===1?"":"s");
document.getElementById("paymentConfirmedLabel").textContent=hasCredit?"Confirmed credit":settled?"Confirmed payment status":"Confirmed balance due";
document.getElementById("paymentConfirmedBalance").textContent=settled?"Paid in full":fmt(hasCredit?payment.creditDue:payment.pending);
document.getElementById("paymentDraftDelta").textContent=flat?fmt(0):fmtSigned(p.delta);
document.getElementById("paymentDraftDeltaRow").classList.toggle("credit",!flat&&p.delta<0);
document.getElementById("paymentAfterSaveLabel").textContent=projectedCredit?"Credit after saving":projectedSettled?"Payment status after saving":"Balance due after saving";
document.getElementById("paymentAfterSave").textContent=projectedSettled?"Paid in full":fmt(projectedCredit?p.creditDue:p.pending);
const paymentAfterSaveRow=document.getElementById("paymentAfterSaveRow");
paymentAfterSaveRow.classList.toggle("credit",projectedCredit);
paymentAfterSaveRow.classList.toggle("paid",projectedSettled);
review.setAttribute("aria-label",`Review ${changeCount} unsaved booking change${changeCount===1?"":"s"}`);
}
}
/* every line item behind the net change, so the agent sees why the total moved, not just that it did */
function changeItems(p){
const d=detail;
const items=[];
d.cabinPlan.forEach((c,i)=>{
const categoryChanged=c.code!==d.base.cabinCodeBy[i];
const roomChanged=String(c.room)!==String(d.base.roomBy[i]);
if(!categoryChanged&&!roomChanged)return;
const amt=cabinAdjustmentForCode(d,i,c.code,p.perHeadFare);
const cabinGuestCount=activeGuests(d).filter(g=>g.cabin===d.b.cabins[i]).length;
const label=categoryChanged&&roomChanged?`Cabin ${i+1} category and room changed`:categoryChanged?`Cabin ${i+1} category changed`:`Cabin ${i+1} room changed`;
const categoryCopy=categoryChanged?`${catEntry(d.base.cabinCodeBy[i]).name} → ${catEntry(c.code).name} · `:"";
const facts=[];
if(categoryChanged)facts.push({label:"Category",value:`${catEntry(d.base.cabinCodeBy[i]).name} → ${catEntry(c.code).name}`});
if(roomChanged)facts.push({label:"Room",value:`${d.base.roomBy[i]} → ${c.room}`});
facts.push({label:"Guests affected",value:`${cabinGuestCount} active guest${cabinGuestCount===1?"":"s"}`});
items.push({kind:"room-change",label,sub:`${categoryCopy}Room ${d.base.roomBy[i]} → ${c.room}${Math.abs(amt)<=.005?" · no fare impact":""}`,detail:`Cabin ${i+1} · ${cabinGuestCount} active guest${cabinGuestCount===1?"":"s"}`,facts,impactLabel:"Fare impact",amt,cabinChange:{
cabinIndex:i,
category:{changed:categoryChanged,beforeName:catEntry(d.base.cabinCodeBy[i]).name,beforeCode:d.base.cabinCodeBy[i],afterName:catEntry(c.code).name,afterCode:c.code},
room:{changed:roomChanged,before:String(d.base.roomBy[i]),after:String(c.room)},
guestCount:cabinGuestCount
}});
});
const currentGuests=activeGuests(d);
const beforeById=baseGuestMap(d),afterById=new Map(currentGuests.map(g=>[g.guestId,g]));
const guestIds=[...(d.base.guests||[]).map(g=>g.guestId),...currentGuests.filter(g=>!beforeById.has(g.guestId)).map(g=>g.guestId)];
const packageValue=(pkgId)=>pkgId&&PKG_BY_ID[pkgId]?PKG_BY_ID[pkgId].rate*p.nights:0;
let accountedInsurance=0;
const protectionChanges=[];
guestIds.forEach(guestId=>{
const before=beforeById.get(guestId)||null,after=afterById.get(guestId)||null;
const guest=after||before;
const beforePkg=before?.pkg||null,afterPkg=after?.pkg||null;
const beforeSupps=before?.supps||{},afterSupps=after?.supps||{};
const beforeSuppCost=suppValue(beforeSupps,beforePkg),afterSuppCost=suppValue(afterSupps,afterPkg);
if(before&&!after){
const fromIdx=d.b.cabins.indexOf(before.cabin);
const originalPosition=(d.base.guests||[]).filter(g=>g.cabin===before.cabin).findIndex(g=>g.guestId===before.guestId)+1;
const room=d.cabinPlan[fromIdx]?.room||d.base.roomBy[fromIdx]||before.cabin;
const stagedGuest=d.guests.find(g=>g.guestId===guestId&&g.pendingRemoval);
const retainedProtection=pendingProtection(d,stagedGuest);
const insuranceCredit=before.insurance!==false?roundMoney(-INSURANCE_RATE+retainedProtection):0;
accountedInsurance+=insuranceCredit;
const baseCabinCredit=-roundMoney(before.baseCabinFare||0);
const govtTaxCredit=-roundMoney(before.baseGovtTax||0);
const cruiseFeeCredit=-roundMoney(before.baseCruiseFee||0);
const taxesCredit=roundMoney(govtTaxCredit+cruiseFeeCredit);
const supplementCredit=-roundMoney(beforeSuppCost);
const packageCredit=-roundMoney(packageValue(beforePkg));
const enhancementsCredit=roundMoney(supplementCredit+packageCredit+insuranceCredit);
const soldFareCredit=roundMoney(baseCabinCredit+taxesCredit);
const promotionOffset=Math.max(0,roundMoney(before.basePromotion||0));
const included=[];
if(Math.abs(soldFareCredit)>.005)included.push("base fare and taxes");
if(beforeSuppCost>.005)included.push("supplements");
if(packageValue(beforePkg)>.005)included.push("package");
if(insuranceCredit)included.push("travel protection");
if(promotionOffset)included.push("promotion adjustment");
const removalAmount=roundMoney(soldFareCredit-beforeSuppCost-packageValue(beforePkg)+insuranceCredit+promotionOffset);
let removalDetail=`Remaining fare positions resequence automatically${included.length?` · Cancellation credit includes ${included.join(", ")}`:""}`;
if(retainedProtection>.005)removalDetail+=` · Travel Protection Plus ${fmt(retainedProtection)} remains non-refundable`;
let dependentPricing=false,totalImpact=removalAmount;
if(stagedGuest){
const reinstatedGuests=d.guests.map(g=>g.guestId===guestId?{...g,pendingRemoval:null}:g);
totalImpact=roundMoney(p.total-priceDetail({...d,guests:reinstatedGuests}).total);
removalDetail=`Total booking impact ${Math.abs(totalImpact)<=.005?fmt(0):fmtSigned(totalImpact)} · ${removalDetail}`;
dependentPricing=Math.abs(totalImpact-removalAmount)>.005;
if(dependentPricing)removalDetail+=" · dependent cabin or promotion pricing is shown separately";
}
const cancellationFacts=[
{label:"Assigned cabin",value:`Cabin ${fromIdx+1} · Room ${room}`},
{label:"Fare position",value:`FP-${originalPosition} → Cancelled`},
{label:"Total booking impact",value:Math.abs(totalImpact)<=.005?fmt(0):fmtSigned(totalImpact)},
...(included.length?[{label:"Credit includes",value:included.map(value=>value[0].toUpperCase()+value.slice(1)).join(", ")}]:[]),
...(retainedProtection>.005?[{label:"Travel Protection Plus",value:`${fmt(retainedProtection)} retained · Non-refundable`}]:[]),
{label:"After cancellation",value:"Remaining fare positions resequence automatically"},
...(dependentPricing?[{label:"Related pricing",value:"Dependent cabin or promotion pricing is listed separately"}]:[])
];
const cancellationLedger={mode:"cancellation",context:[
{label:"Guest details",value:`${before.dob} (${ageAt(before.dobDate,d.sail)}) · ${PASSENGER_TYPE[before.band]}`},
{label:"Assigned cabin",value:`Cabin ${fromIdx+1} · Room ${room}`},
{label:"Fare position",value:`FP-${originalPosition} → Cancelled`}
],lines:[
{label:"Cabin fare",amount:baseCabinCredit,level:"parent",contributes:true},
{label:"Base cabin fare",amount:baseCabinCredit,level:"child",contributes:false},
{label:"Taxes, fees & port expenses",amount:taxesCredit,level:"parent",contributes:true},
{label:"Government taxes & fees",amount:govtTaxCredit,level:"child",contributes:false},
{label:"Required cruise fees & expenses",amount:cruiseFeeCredit,level:"child",contributes:false},
{label:"Enhancements",amount:enhancementsCredit,level:"parent",contributes:true},
{label:"Supplements",amount:supplementCredit,level:"child",contributes:false},
...(Math.abs(packageCredit)>.005?[{label:"Package",amount:packageCredit,level:"child",contributes:false}]:[]),
{label:"Travel Protection Plus",amount:insuranceCredit,note:retainedProtection>.005?`${fmt(retainedProtection)} retained · Non-refundable`:"Credited with cancellation",level:"child",contributes:false,retained:retainedProtection>.005},
...(promotionOffset>.005?[{label:"Promotion adjustment",amount:promotionOffset,level:"parent",contributes:true}]:[])
],notes:["Remaining fare positions are promoted automatically.",...(dependentPricing?["Dependent cabin or promotion pricing is listed separately."]:[])]};
items.push({kind:"guest-removed",subjectGuestId:guestId,label:`Guest cancellation · ${before.name}`,sub:`Cabin ${fromIdx+1} · Room ${room} · FP-${originalPosition} → Cancelled`,detail:removalDetail,facts:cancellationFacts,fareLedger:cancellationLedger,impactLabel:"Guest fare credit",amt:removalAmount});
return;
}else if(!before&&after){
const toIdx=d.b.cabins.indexOf(after.cabin);
const finalPosition=activeCabinFarePosition(d,after);
const insuranceCharge=after.insurance!==false?INSURANCE_RATE:0;
const addedTax=newGuestTaxComponents(d,after);
const addedCabinFare=newGuestCabinFare(d,after,toIdx);
accountedInsurance+=insuranceCharge;
const additionRoom=d.cabinPlan[toIdx]?.room||after.cabin;
const categoryPricingSeparate=d.cabinPlan[toIdx]?.code!==d.base.cabinCodeBy[toIdx];
const additionLedger={mode:"addition",context:[
{label:"Guest details",value:`${after.dob} (${ageAt(after.dobDate,d.sail)}) · ${PASSENGER_TYPE[after.band]}`},
{label:"Assigned cabin",value:`Cabin ${toIdx+1} · Room ${additionRoom}`},
{label:"Fare position",value:`New → FP-${finalPosition}`}
],lines:[
{label:"Cabin fare",amount:addedCabinFare,level:"parent",contributes:true},
{label:"Base cabin fare",amount:addedCabinFare,level:"child",contributes:false},
{label:"Taxes, fees & port expenses",amount:addedTax.taxes,level:"parent",contributes:true},
{label:"Government taxes & fees",amount:addedTax.govtTax,level:"child",contributes:false},
{label:"Required cruise fees & expenses",amount:addedTax.cruiseFee,level:"child",contributes:false},
{label:"Enhancements",amount:insuranceCharge,addNestedImpact:true,level:"parent",contributes:true},
{label:"Selected supplements",amount:0,addNestedImpact:true,requiresNested:true,products:true,level:"child",contributes:false},
{label:"Travel Protection Plus",amount:insuranceCharge,note:"Required for every guest",level:"child",contributes:false}
],notes:categoryPricingSeparate?["Stateroom pricing remains itemized under Cabin changes."]:[]};
items.push({kind:"guest-added",subjectGuestId:guestId,label:`Guest addition · ${after.name}`,sub:`Cabin ${toIdx+1} · Room ${additionRoom} · New → FP-${finalPosition}`,detail:`Cabin fare ${fmt(addedCabinFare)} · Taxes and port fees ${fmt(addedTax.taxes)}${insuranceCharge?` · Travel Protection Plus ${fmt(insuranceCharge)}`:""}`,facts:[
{label:"Assigned cabin",value:`Cabin ${toIdx+1} · Room ${additionRoom}`},
{label:"Fare position",value:`New → FP-${finalPosition}`},
{label:"Cabin fare",value:fmt(addedCabinFare)},
{label:"Taxes, fees & port expenses",value:fmt(addedTax.taxes)},
...(insuranceCharge?[{label:"Travel Protection Plus",value:fmt(insuranceCharge)}]:[])
],fareLedger:additionLedger,impactLabel:"Added fare",amt:roundMoney(addedCabinFare+addedTax.taxes+insuranceCharge)});
}else if(before&&after){
const beforeProtected=Boolean(before.insurance),afterProtected=Boolean(after.insurance);
if(beforeProtected!==afterProtected)protectionChanges.push({name:after.name||before.name,beforeActive:beforeProtected,afterActive:afterProtected,count:1,
beforeSubtotal:beforeProtected?INSURANCE_RATE:0,afterSubtotal:afterProtected?INSURANCE_RATE:0,delta:(afterProtected?INSURANCE_RATE:0)-(beforeProtected?INSURANCE_RATE:0)});
if(after.cabin!==before.cabin){
const fromIdx=d.b.cabins.indexOf(before.cabin),toIdx=d.b.cabins.indexOf(after.cabin);
items.push({kind:"guest-moved",subjectGuestId:guestId,label:`Guest moved · ${after.name}`,sub:`Cabin ${fromIdx+1} → Cabin ${toIdx+1} · no fare impact`,detail:`Fare position FP-${originalCabinFarePosition(d,after)} → FP-${activeCabinFarePosition(d,after)}`,facts:[
{label:"Cabin",value:`Cabin ${fromIdx+1} → Cabin ${toIdx+1}`},
{label:"Fare position",value:`FP-${originalCabinFarePosition(d,after)} → FP-${activeCabinFarePosition(d,after)}`}
],impactLabel:"Fare impact",amt:0});
}
if(!sameProfile(after.profile,before.profile)){
const changedProfileFacts=profileImpactFacts(before.profile,after.profile);
items.push({kind:"guest-updated",subjectGuestId:guestId,label:"Guest details updated",sub:`${after.name} · ${changedProfileFacts.length} profile field${changedProfileFacts.length===1?"":"s"} changed`,facts:[{label:"Guest",value:after.name},...changedProfileFacts],impactLabel:"Fare impact",amt:0});
}
}

if(beforePkg!==afterPkg){
const beforeName=beforePkg?PKG_BY_ID[beforePkg]?.name:"",afterName=afterPkg?PKG_BY_ID[afterPkg]?.name:"";
const packageAction=!beforePkg?"added":!afterPkg?"removed":"changed";
const packageCopy=!beforePkg?afterName:!afterPkg?beforeName:`${beforeName} → ${afterName}`;
items.push({kind:"package-change",subjectGuestId:guestId,label:`Package ${packageAction} · ${guest.name}`,sub:`${packageCopy} · ${p.nights} nights`,facts:[{label:"Guest",value:guest.name},{label:"Package",value:packageCopy},{label:"Duration",value:`${p.nights} nights`}],impactLabel:"Price impact",amt:packageValue(afterPkg)-packageValue(beforePkg),review:{...packageReviewBreakdown(beforePkg,afterPkg,p.nights),guest:guest.name}});
}

const assignmentsChanged=!sameSupps(beforeSupps,afterSupps),suppCostChanged=Math.abs(afterSuppCost-beforeSuppCost)>.005;
if(assignmentsChanged||suppCostChanged){
const beforeUnits=suppCount(beforeSupps),afterUnits=suppCount(afterSupps),unitDelta=afterUnits-beforeUnits;
const unitLabel=n=>`${n} supplement unit${n===1?"":"s"}`;
const supplementCopy=!after?"Removed with guest":!before?`${unitLabel(afterUnits)} added`
:unitDelta?`${unitLabel(Math.abs(unitDelta))} ${unitDelta>0?"added":"removed"}`
:assignmentsChanged?"Selections changed":"Package coverage updated";
items.push({kind:"supplement-change",subjectGuestId:guestId,label:`Supplements updated · ${guest.name}`,sub:supplementCopy,facts:[{label:"Guest",value:guest.name},{label:"Selection change",value:supplementCopy}],impactLabel:"Price impact",amt:afterSuppCost-beforeSuppCost,review:{...supplementReviewBreakdown(beforeSupps,afterSupps,beforePkg,afterPkg),guest:guest.name}});
}
});
const remainingInsurance=p.insuranceAdj-accountedInsurance;
if(protectionChanges.length||Math.abs(remainingInsurance)>0.005){
const n=Math.round(remainingInsurance/INSURANCE_RATE);
const balanced=Math.abs(remainingInsurance)<=.005;
const guestCopy=balanced
?protectionChanges.length+" guest"+(protectionChanges.length===1?"":"s")+" updated"
:Math.abs(n)+" guest"+(Math.abs(n)===1?"":"s")+(n>0?" added":" removed");
const namedProtectionTotal=roundMoney(protectionChanges.reduce((sum,line)=>sum+line.delta,0));
const unmatchedProtection=roundMoney(remainingInsurance-namedProtectionTotal);
const protectionLines=[...protectionChanges];
if(Math.abs(unmatchedProtection)>.005){
const count=Math.max(1,Math.abs(Math.round(unmatchedProtection/INSURANCE_RATE)));
const adding=unmatchedProtection>0;
protectionLines.push({name:`${count} booking guest${count===1?"":"s"}`,beforeActive:!adding,afterActive:adding,count,
beforeSubtotal:adding?0:Math.abs(unmatchedProtection),afterSubtotal:adding?Math.abs(unmatchedProtection):0,delta:unmatchedProtection});
}
items.push({kind:"protection-change",label:balanced?"Travel protection updated":n>0?"Travel protection added":"Travel protection removed",sub:guestCopy+" · "+fmt(INSURANCE_RATE)+" per guest",facts:[{label:"Guests affected",value:guestCopy},{label:"Rate",value:fmt(INSURANCE_RATE)+" per guest"}],impactLabel:"Price impact",amt:remainingInsurance,review:{type:"protection",rate:INSURANCE_RATE,lines:protectionLines,
beforeSubtotal:roundMoney(protectionLines.reduce((sum,line)=>sum+line.beforeSubtotal,0)),afterSubtotal:roundMoney(protectionLines.reduce((sum,line)=>sum+line.afterSubtotal,0))}});
}
if(d.promo){
const promo=PROMO_CODES[d.promo];
const eligibleAmount=promo.type==="pct"?p.currentCabinSubtotal:p.prePromoTotal;
const requestedDiscount=roundMoney(promo.type==="pct"?eligibleAmount*promo.value:promo.value);
items.push({kind:"promo-change",label:"Promo code "+d.promo,sub:promo.label,facts:[{label:"Offer",value:promo.label}],impactLabel:"Discount",amt:-p.promoAmt,review:{type:"promotion",code:d.promo,offer:promo.label,eligibleAmount,
configuredBenefit:promo.type==="pct"?`${Math.round(promo.value*100)}% of eligible cabin fare`:fmt(promo.value),requestedDiscount,appliedDiscount:p.promoAmt,capped:p.promoAmt<requestedDiscount-.005}});
}
/* Structural edits can be price-neutral (for example, swapping equal-price
   supplements). Keep the staged-change count and detailed review truthful. */
if(!items.length&&isDirty(d))items.push({kind:"booking-change",label:"Booking selections updated",sub:"Staged booking details changed · no fare impact",facts:[{label:"Details",value:"Staged booking selections changed"},{label:"Fare impact",value:"No price change"}],impactLabel:"Price impact",amt:p.delta});
/* Money is shown to cents. Only when the raw lines already reconcile with the
   pricing model, round them symmetrically and allocate the display residual. */
const displayCents=value=>Math.sign(value)*Math.round((Math.abs(value)+Number.EPSILON)*100);
const rawItemTotal=items.reduce((sum,item)=>sum+item.amt,0);
if(Math.abs(rawItemTotal-p.delta)<=.005){
items.forEach(item=>{item.amt=displayCents(item.amt)/100;});
const residualCents=displayCents(p.delta)-items.reduce((sum,item)=>sum+displayCents(item.amt),0);
if(residualCents){
const sink=[...items].reverse().find(item=>item.kind==="guest-added")
||[...items].reverse().find(item=>Math.abs(item.amt)>.005);
if(sink)sink.amt=(displayCents(sink.amt)+residualCents)/100;
}
}
return items;
}
function commitModification(){
if(!detail||!isDirty(detail)||detail.b.status==="cancelled")return false;
syncGuestDerivedFields(detail);
const pricing=priceDetail(detail);
const items=changeItems(pricing);
const stagedPromo=detail.promo;
const reconciliation=reviewPricingReconciliation(detail,pricing,items);
if(!reconciliation.balanced)return false;

/* Freeze the sold-booking history before rebasing any values. */
historyItems(committedDetailState(detail));
const fareRows=guestFareRows(detail,pricing);
const activeEntries=detail.guests.map((guest,index)=>({guest,index})).filter(({guest})=>isGuestActive(guest));
const committedGuests=activeEntries.map(({guest,index})=>{
const committed=cloneGuestState(guest),row=fareRows[index];
committed.pendingRemoval=null;
committed.baseCabinFare=Math.max(0,roundMoney(row?.cabinFare||0));
committed.baseGovtTax=Math.max(0,roundMoney(row?.govtTax||0));
committed.baseCruiseFee=Math.max(0,roundMoney(row?.cruiseFee||0));
committed.basePromotion=Math.max(0,roundMoney(-(row?.promotion||0)));
committed.supplements=suppCount(committed.supps);
return committed;
});
if(!committedGuests.length)return false;

const b=detail.b;
const previousTotal=roundMoney(detail.base.total);
const counts=[0,0,0,0];
committedGuests.forEach(guest=>{counts[guest.band]=(counts[guest.band]||0)+1;});
detail.guests=committedGuests;
detail.base.cabinFare=roundMoney(pricing.currentCabinSubtotal);
detail.base.taxes=roundMoney(pricing.taxes);
detail.base.supplements=roundMoney(pricing.supplements);
detail.base.insurance=roundMoney(pricing.insurance);
detail.base.discount=roundMoney(pricing.discount);
detail.base.total=roundMoney(pricing.total);
detail.base.pending=roundMoney(pricing.pending);
detail.base.paidToDate=roundMoney(pricing.paidToDate);
detail.base.units=committedGuests.reduce((sum,guest)=>sum+suppCount(guest.supps),0);
detail.base.insured=committedGuests.filter(guest=>guest.insurance!==false).length;
detail.base.suppsBy=committedGuests.map(guest=>({...guest.supps}));
detail.base.pkgBy=committedGuests.map(guest=>guest.pkg||null);
detail.base.supplementsBy=committedGuests.map(guest=>suppCount(guest.supps));
detail.base.insuranceBy=committedGuests.map(guest=>guest.insurance!==false);
detail.base.cabinCodeBy=detail.cabinPlan.map(cabin=>cabin.code);
detail.base.roomBy=detail.cabinPlan.map(cabin=>String(cabin.room));
detail.base.cabinBy=committedGuests.map(guest=>guest.cabin);
detail.base.profileBy=committedGuests.map(guest=>({...guest.profile}));
detail.base.guests=committedGuests.map(cloneGuestState);
detail.base.origGuestCount=committedGuests.length;
detail.base.newGuestCabinFare=roundMoney(detail.base.cabinFare/committedGuests.length);
detail.promo=null;

b.name=committedGuests[0].name;
b.guests=committedGuests.slice(1).map(guest=>guest.name);
b.party={adult:counts[0],youngAdult:counts[1],child:counts[2],infant:counts[3]};
b.value=detail.base.total;
b.pending=detail.base.pending;
b.paidToDate=detail.base.paidToDate;
b.appliedPromos=Array.isArray(b.appliedPromos)?b.appliedPromos:[];
if(stagedPromo&&!b.appliedPromos.includes(stagedPromo))b.appliedPromos.push(stagedPromo);
b.status=b.pending>.005?"pending":"booked";
b.recordVersion=Number(b.recordVersion??1)+1;
b.pricingBase={
recordVersion:b.recordVersion,cabinFare:detail.base.cabinFare,taxes:detail.base.taxes,
supplements:detail.base.supplements,insurance:detail.base.insurance,discount:detail.base.discount,
newGuestCabinFare:detail.base.newGuestCabinFare,
cabinPlan:detail.cabinPlan.map(cabin=>({num:cabin.num,room:String(cabin.room),code:cabin.code})),
guests:committedGuests.map(guest=>({
guestId:guest.guestId,baseCabinFare:guest.baseCabinFare,baseGovtTax:guest.baseGovtTax,
baseCruiseFee:guest.baseCruiseFee,basePromotion:guest.basePromotion||0,
supps:{...guest.supps},pkg:guest.pkg||null,insurance:guest.insurance!==false,profile:{...guest.profile}
}))
};
GUEST_ROSTERS[b.id]=committedGuests.map(cancellationSnapshotGuest);
const changeCount=stagedChangeUnitCount(items);
const now=new Date();
const timestamp=`${fmtDateShort(now)} · ${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}`;
const balanceCopy=pricing.creditDue>.005?`Credit to review ${fmt(pricing.creditDue)}`:`Balance ${fmt(pricing.pending)}`;
b.events=b.events||[];
b.events.unshift({time:timestamp,title:"Booking Modification Saved",desc:`${changeCount} change${changeCount===1?"":"s"} applied · Total ${fmt(previousTotal)} → ${fmt(pricing.total)} · ${balanceCopy}`,src:"JD · Reservations"});
clearDetailDraft(b.id);
persistCommittedModification(b,committedGuests);
detail=buildDetailState(b);
const promoInput=document.getElementById("promoInput"),promoMsg=document.getElementById("promoMsg");
promoInput.value="";promoInput.classList.remove("error");
promoMsg.hidden=true;promoMsg.classList.remove("error","ok");
document.getElementById("sStatusBadge").innerHTML=statusBadgeHtml(b);
document.getElementById("sCommission").textContent=bookingMeta(b).commissionPct+"% · "+fmt(detail.base.cabinFare*bookingMeta(b).commissionPct/100);
render();
return true;
}
function renderDetail(){
syncGuestDerivedFields(detail);
const pendingPricing=priceDetail(detail);
const committed=committedDetailState(detail);
const committedPricing=priceDetail(committed);
renderGuestSummary(committed);
renderCabinCards(committedPricing,committed);
renderPricePanel(pendingPricing);
historyItems(committed);
/* runs last so the cancelled state overrides the live payment figures */
applyCancelledUi();
}
function populateSummary(b){
detail=restoreDetailDraft(buildDetailState(b));
const{info,sail}=detail;
const meta=bookingMeta(b);
const depTime=b.time.replace(" departure","");
const retDate=addDays(sail,info.nights);
document.getElementById("sBookingId").textContent="#"+b.id;
document.getElementById("sStatusBadge").innerHTML=statusBadgeHtml(b);
document.getElementById("sShip").textContent=info.ship;
document.getElementById("sShipSub").textContent=info.shipSub;
document.getElementById("sFarecodeBadge").textContent="Farecode: "+farecodeFor(b);
document.getElementById("sBookingSource").textContent=meta.source;
document.getElementById("sCreatedDate").textContent=b.created+" · "+fmtTime12(b.createdTime);
document.getElementById("sTravelAdvisor").textContent=meta.advisor;
document.getElementById("sAgency").textContent=meta.agency;
document.getElementById("sCommission").textContent=meta.commissionPct+"% · "+fmt(detail.base.cabinFare*meta.commissionPct/100);
document.getElementById("sDeparts").innerHTML=fmtDateShort(sail)+' <em>- '+depTime+'</em>';
document.getElementById("sDepartsPort").textContent="Port of "+info.from+", FL";
document.getElementById("sReturnDate").innerHTML=fmtDateShort(retDate)+' <em>- 07:00</em>';
document.getElementById("sReturnPort").textContent="Port of "+info.to+", FL";
const promoInput=document.getElementById("promoInput");
promoInput.value=detail.promo||"";promoInput.classList.remove("error");
if(detail.promo)showPromoMsg("Staged: "+PROMO_CODES[detail.promo].label,"ok");
else{
const promoMsg=document.getElementById("promoMsg");
promoMsg.hidden=true;promoMsg.classList.remove("error","ok");
}
renderDetail();
}
const modalFocusOrigins=new Map();
function showAccessibleModal(host,focusSelector=".mf-modal-x, button, input, select, textarea"){
if(!modalFocusOrigins.has(host.id)){
modalFocusOrigins.set(host.id,document.activeElement);
document.body.classList.add("modal-open");
requestAnimationFrame(()=>host.querySelector(focusSelector)?.focus({preventScroll:true}));
}
host.hidden=false;
}
function hideAccessibleModal(host){
const wasOpen=modalFocusOrigins.has(host.id);
const origin=modalFocusOrigins.get(host.id);
const returnSelector=host.dataset.returnFocus;
host.hidden=true;host.innerHTML="";
if(!wasOpen)return;
modalFocusOrigins.delete(host.id);
if(!modalFocusOrigins.size){
document.body.classList.remove("modal-open");
const originIsUsable=origin&&document.contains(origin)&&origin!==document.body&&origin!==document.documentElement&&!origin.disabled&&!origin.hidden&&origin.getClientRects().length;
const returnTarget=originIsUsable?origin:(returnSelector?document.querySelector(returnSelector):null);
if(returnTarget&&typeof returnTarget.focus==="function")returnTarget.focus({preventScroll:true});
}
delete host.dataset.returnFocus;
}
function trapActiveDialogFocus(event){
if(event.key!=="Tab"||!modalFocusOrigins.size)return false;
const ids=[...modalFocusOrigins.keys()].reverse();
const host=ids.map(id=>document.getElementById(id)).find(el=>el&&!el.hidden);
const dialog=host?.querySelector('[role="dialog"],[role="alertdialog"]');
if(!dialog)return false;
const focusable=[...dialog.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])')]
.filter(el=>el.getClientRects().length&&el.getAttribute("aria-hidden")!=="true");
if(!focusable.length){event.preventDefault();dialog.focus();return true;}
const first=focusable[0],last=focusable[focusable.length-1];
if(!focusable.includes(document.activeElement)){
event.preventDefault();(event.shiftKey?last:first).focus({preventScroll:true});return true;
}
if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus({preventScroll:true});return true;}
if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus({preventScroll:true});return true;}
if(!dialog.contains(document.activeElement)){event.preventDefault();(event.shiftKey?last:first).focus({preventScroll:true});return true;}
return false;
}
function itineraryStopsFor(d){
const fallback=[
{place:d.info.from+", Florida",kind:"Embarkation",time:"Departs 4:00 PM"},
...Array.from({length:Math.max(0,d.info.nights-1)},()=>({place:"At Sea",kind:"Sea day",time:"Cruising"})),
{place:d.info.to+", Florida",kind:"Disembarkation",time:"Arrives 7:00 AM"}
];
return ITINERARY_STOPS[d.b.itin]||fallback;
}
function itineraryTimelineHtml(d){
return itineraryStopsFor(d).map((stop,index)=>{
const date=fmtDateShort(addDays(d.sail,index));
const sea=stop.kind==="Sea day";
return `<li class="ov-itin-stop${sea?" sea":""}">
<span class="ov-itin-rail" aria-hidden="true"><i></i></span>
<div class="ov-itin-day"><strong>Day ${index+1}</strong><span>${esc(date)}</span></div>
<div class="ov-itin-place"><span>${esc(stop.place)}</span><small>${esc(stop.kind)}</small></div>
<div class="ov-itin-time">${esc(stop.time)}</div>
</li>`;
}).join("");
}
function openItineraryModal(){
if(!detail)return;
const host=document.getElementById("itineraryModal");
host.innerHTML=`<div class="mf-modal-backdrop" data-itinerary-close></div>
<div class="mf-modal-card ov-itinerary-modal" role="dialog" aria-modal="true" aria-labelledby="itineraryTitle" aria-describedby="itinerarySub">
<div class="mf-modal-head">
<div class="mf-modal-title"><h2 class="mf-modal-h" id="itineraryTitle">Full itinerary</h2><span class="mf-modal-sub" id="itinerarySub">${esc(detail.info.ship)} · ${esc(detail.info.shipSub)} · ${detail.info.nights} nights</span></div>
<button class="mf-modal-x" type="button" data-itinerary-close aria-label="Close itinerary">${SVG_X}</button>
</div>
<div class="mf-modal-body ov-itinerary-body">
<div class="ov-itinerary-summary"><span>Voyage</span><strong>${esc(detail.b.itin)}</strong><small>${fmtDateShort(detail.sail)} – ${fmtDateShort(addDays(detail.sail,detail.info.nights))}</small></div>
<ol class="ov-itinerary-timeline" aria-label="Day-by-day itinerary">${itineraryTimelineHtml(detail)}</ol>
</div>
</div>`;
showAccessibleModal(host,".mf-modal-x");
}
function closeItineraryModal(){
const host=document.getElementById("itineraryModal");
if(host.hidden)return;
hideAccessibleModal(host);
}
function openDetail(b){
/* the price rail is a single element shared with the modification flow */
document.getElementById("detailLayout").appendChild(document.querySelector(".ov-side"));
/* A booking opened from the list is always a fresh page context. Do not carry
   a cancellation route or selection over to a different booking. */
cx=null;
cancellationReturnDetail=null;
document.getElementById("cancellationPageContent").innerHTML="";
/* Every visit to booking details starts with the cabin rows collapsed. User
   interaction can expand them normally for the remainder of that visit. */
cabinDisclosureBookingId=null;
expandedCabinIndexes=new Set();
populateSummary(b);
document.getElementById("viewList").classList.remove("active");
document.getElementById("viewModify").classList.remove("active");
document.getElementById("viewCancellation").classList.remove("active");
document.getElementById("viewHistory").classList.remove("active");
document.getElementById("viewDetail").classList.add("active");
document.querySelector(".main").scrollTop=0;
}
function closeDetail(){document.getElementById("viewDetail").classList.remove("active");document.getElementById("viewCancellation").classList.remove("active");document.getElementById("viewHistory").classList.remove("active");document.getElementById("viewList").classList.add("active");}
function openHistory(){
if(!detail)return;
document.getElementById("histBookingId").textContent="#"+detail.b.id;
document.getElementById("fullHistory").innerHTML=timelineHtml(historyItems(detail));
document.getElementById("viewDetail").classList.remove("active");
document.getElementById("viewCancellation").classList.remove("active");
document.getElementById("viewHistory").classList.add("active");
document.querySelector(".main").scrollTop=0;
}
function closeHistory(){
document.getElementById("viewHistory").classList.remove("active");
document.getElementById("viewDetail").classList.add("active");
document.querySelector(".main").scrollTop=0;
}

/* ================= cancellation & refund =================
   Money rules, stated once here so the ledger and the confirm button can never
   disagree about them:
   - The penalty is a sliding scale on days-to-sail; a no-show is always 100%.
   - Government taxes & port charges are pass-through, so they are never
     penalised — even a 100% penalty refunds them.
   - "Keep travel protection" means the policy stays in force and its premium is
     therefore not refunded.
   - Nothing can ever be refunded beyond what the guest has actually paid. */
const CANCEL_TIERS=[
{minDays:90,pct:0,   label:"90+ days before sailing"},
{minDays:60,pct:0.25,label:"60–89 days before sailing"},
{minDays:30,pct:0.50,label:"30–59 days before sailing"},
{minDays:15,pct:0.75,label:"15–29 days before sailing"},
{minDays:-Infinity,pct:1,label:"14 days or fewer before sailing"}];
const CANCEL_REASONS=["Guest request","Medical","Bereavement","Travel restriction","Duplicate booking","Schedule change","Other"];
const CARD_BRANDS=["Visa","Mastercard","Amex","Discover"];
function cancelTier(days){return CANCEL_TIERS.find(t=>days>=t.minDays);}
/* the card of record and the guest's wallet are derived from the booking id the
   same way guest profiles are, so a given booking always shows the same details */
function cardFor(b){
const seed=seedOf("card|"+b.id);
return{brand:CARD_BRANDS[seed%CARD_BRANDS.length],last4:String(1000+seed%9000),
exp:String(1+seed%12).padStart(2,"0")+"/"+(28+seed%4),holder:b.name};
}
function walletFor(b){
const seed=seedOf("wallet|"+b.id);
return{exists:seed%3!==0,id:"MVW-"+(100000+seed%900000),holder:b.name,
balance:Math.round((seed%450+25)*100)/100};
}
function money(v){const n=parseFloat(String(v).replace(/[^0-9.]/g,""));return isFinite(n)?n:0;}
function cancellationGuestIds(d=detail){
if(!cx||!d||(cx.scope!=="guest"&&cx.entry!=="partial"))return[];
const requested=Array.isArray(cx.guestIds)&&cx.guestIds.length
?cx.guestIds
:(cx.guestId?[cx.guestId]:[]);
return requested.filter((id,index)=>requested.indexOf(id)===index&&d.guests.some(guest=>guest.guestId===id));
}
function cancellationGuests(d=detail){
const byId=new Map((d?.guests||[]).map(guest=>[guest.guestId,guest]));
return cancellationGuestIds(d).map(id=>byId.get(id)).filter(Boolean);
}
function partialSelectedGuestIds(d=detail){
if(!cx||cx.entry!=="partial"||!d)return[];
const requested=Array.isArray(cx.guestIds)&&cx.guestIds.length
?cx.guestIds
:(cx.guestId?[cx.guestId]:d.guests.filter(guest=>guest.pendingRemoval).map(guest=>guest.guestId));
return requested.filter((id,index)=>requested.indexOf(id)===index&&d.guests.some(guest=>guest.guestId===id));
}
function partialSelectedGuests(d=detail){
const byId=new Map((d?.guests||[]).map(guest=>[guest.guestId,guest]));
return partialSelectedGuestIds(d).map(id=>byId.get(id)).filter(Boolean);
}
function cancellationGuestIndex(d=detail){
if(!cx||cx.scope!=="guest"||!d)return-1;
const guestId=cancellationGuestIds(d)[0]||cx.guestId;
if(guestId){
const byId=d.guests.findIndex(g=>g.guestId===guestId);
/* Once a cancellation owns a stable identity, never fall back to a numeric
   position. A changed roster must fail closed instead of targeting whoever
   happens to occupy the old array slot. */
return byId;
}
return Number.isInteger(cx.guestIdx)?cx.guestIdx:-1;
}
function cancellationGuest(d=detail){
return cancellationGuests(d)[0]||null;
}
function partialAllocationRecipients(d,line){
const sup=SUPP_BY_ID[line?.suppId];
if(!sup)return[];
return d.guests.filter(guest=>isGuestActive(guest)
&&suppAllowed(sup,guest,d.sail)
&&!(guest.pkg&&PKG_BY_ID[guest.pkg]?.includedSupps.includes(sup.id)));
}
function partialAllocationSummary(allocations=cx?.supplementAllocations){
const list=Array.isArray(allocations)?allocations:allocations?[allocations]:[];
const lines=list.flatMap(allocation=>allocation?.lines||[]);
return lines.reduce((summary,line)=>{
const quantity=Math.max(0,Math.floor(Number(line.quantity)||0));
const value=roundMoney((SUPP_BY_ID[line.suppId]?.pricePP||0)*quantity);
summary.totalLines++;summary.totalUnits+=quantity;summary.totalValue=roundMoney(summary.totalValue+value);
if(line.destination==="remove"){
summary.removedLines++;summary.removedUnits+=quantity;summary.removedValue=roundMoney(summary.removedValue+value);
}else if(line.destination){summary.retainedLines++;summary.retainedUnits+=quantity;}
else summary.unresolvedLines++;
return summary;
},{totalLines:0,totalUnits:0,totalValue:0,retainedLines:0,retainedUnits:0,removedLines:0,removedUnits:0,removedValue:0,unresolvedLines:0});
}
function partialSupplementAllocationReady(d=detail,allocations=cx?.supplementAllocations){
const selectedIds=partialSelectedGuestIds(d);
const list=Array.isArray(allocations)?allocations:allocations?[allocations]:[];
if(!selectedIds.length||list.length!==selectedIds.length)return false;
const bySource=new Map(list.map(allocation=>[allocation.sourceGuestId,allocation]));
return selectedIds.every(sourceGuestId=>{
const allocation=bySource.get(sourceGuestId);
return allocation&&allocation.lines.every(line=>line.destination==="remove"
||partialAllocationRecipients(d,line).some(guest=>guest.guestId===line.destination));
});
}
function applyPartialSupplementAllocations(d,allocations){
if(!d)return d;
const list=Array.isArray(allocations)?allocations:allocations?[allocations]:[];
d.guests.forEach(guest=>{guest.pendingRemoval=null;});
list.forEach(allocation=>{
const source=d.guests.find(guest=>guest.guestId===allocation.sourceGuestId);
if(!source)return;
(allocation.lines||[]).forEach(line=>{
const quantity=Math.max(0,Math.floor(Number(line.quantity)||0));
if(!SUPP_BY_ID[line.suppId]||quantity<=0||line.destination==="remove")return;
const target=d.guests.find(guest=>guest.guestId===line.destination&&guest.guestId!==source.guestId);
if(!target||!partialAllocationRecipients(d,line).some(guest=>guest.guestId===target.guestId))return;
if(!source.supps)source.supps={};
delete source.supps[line.suppId];
if(!target.supps)target.supps={};
target.supps[line.suppId]=Math.max(0,Math.floor(Number(target.supps[line.suppId])||0))+quantity;
});
});
d.guests.forEach(guest=>{guest.supplements=suppCount(guest.supps);});
return d;
}
function cancellationPricingDetail(){
if(cx?.entry!=="partial"||!cx.supplementAllocations)return detail;
const projected={...detail,guests:detail.guests.map(cloneGuestState)};
return applyPartialSupplementAllocations(projected,cx.supplementAllocations);
}
function cancelQuote(){
const d=cancellationPricingDetail(),b=d.b,p=priceDetail(d);
const guests=cancellationGuests(d);
const guest=guests[0]||null;
const allGuestRows=guest?guestFareRows(d,p):null;
const guestRows=guest?guests.map(selected=>allGuestRows[d.guests.findIndex(candidate=>candidate.guestId===selected.guestId)]).filter(Boolean):[];
const guestRow=guestRows.length===1?guestRows[0]:null;
const total=guest?roundMoney(guestRows.reduce((sum,row)=>sum+row.total,0)):p.total;
/* Allocate collected money only across guests who were part of the sold booking. */
const bookingPaid=Math.max(0,roundMoney(p.paidToDate));
const soldGuestTotal=guest?roundMoney(d.guests.reduce((sum,candidate,index)=>
sum+(isBaseGuest(d,candidate)?allGuestRows[index]?.total||0:0),0)):0;
const selectedSoldTotal=guest?roundMoney(guests.reduce((sum,selected)=>{
const index=d.guests.findIndex(candidate=>candidate.guestId===selected.guestId);
return sum+(isBaseGuest(d,selected)?allGuestRows[index]?.total||0:0);
},0)):0;
const paid=guest?roundMoney(Math.min(total,soldGuestTotal>0?selectedSoldTotal*Math.min(1,bookingPaid/soldGuestTotal):0)):bookingPaid;
const days=daysUntilSailing(d.sail);
const tier=cx.noShow?{pct:1,label:"No-show at sailing"}:cancelTier(days);
const protectedTaxes=guest?roundMoney(guestRows.reduce((sum,row)=>sum+row.taxes,0)):p.taxes;
const insuredCount=guest?guests.filter(selected=>selected.insurance).length:p.insured;
const insTotal=insuredCount*INSURANCE_RATE;
const insRetained=cx.keepInsurance?insTotal:0;
/* each ledger line below is additive: total − retained premium − penalty = refund */
const refundable=roundMoney(total-insRetained);
const penaltyBase=Math.max(0,roundMoney(refundable-protectedTaxes));
const penalty=roundMoney(penaltyBase*tier.pct);
const computed=Math.max(0,roundMoney(refundable-penalty));
const capped=Math.max(0,roundMoney(Math.min(computed,paid)));
const refund=cx.overrideOn?Math.max(0,roundMoney(Math.min(money(cx.overrideAmt),paid))):capped;
return{paid,days,tier,protectedTaxes,insTotal,insRetained,total,penaltyBase,penalty,
computed,capped,refund,cappedByPaid:computed>paid+0.005,guest,guests,guestRow,guestRows,guestCount:guests.length,insuredCount};
}
function cancelWallet(){
const w=walletFor(detail.b);
return cx.walletCreated?{...w,exists:true,balance:0,id:cx.walletCreated}:w;
}
function cancelWalletReady(){
const w=cancelWallet();
return w.exists&&cx.walletState==="valid";
}
/* the destination is only "ready" when the chosen instrument is fully resolved —
   this is what gates the irreversible confirm */
function cancelDestReady(q){
if(cx.source==="original")return true;
if(cx.source==="wallet")return cancelWalletReady();
if(cx.source==="cheque")return !!cx.chequePayee.trim()&&!!cx.chequeAddr.trim();
if(cx.source==="split"){
const c=money(cx.splitCard),w=money(cx.splitWallet);
if(Math.abs(c+w-q.refund)>0.005)return false;
if(w>0.005&&!cancelWalletReady())return false;
return c>=0&&w>=0;
}
return false;
}
function cancelOverrideDraftReady(q=cancelQuote()){
if(!cx?.overrideOn)return true;
const raw=String(cx.overrideAmt??"").trim();
const amount=Number(raw);
return raw!==""&&Number.isFinite(amount)&&amount>=0&&amount<=q.paid+0.005&&!!cx.overrideReason.trim();
}
function cancelStep1Ready(){
if(!cx.reason)return false;
if(cx.reason==="Other"&&!cx.note.trim())return false;
if(cx.overrideOn&&(!cancelOverrideDraftReady()||!cx.overrideConfirmed))return false;
return true;
}
function cancelDestLabel(q){
const card=cardFor(detail.b),w=cancelWallet();
if(cx.source==="original")return card.brand+" ••••"+card.last4;
if(cx.source==="wallet")return "Wallet "+w.id;
if(cx.source==="cheque")return "Cheque to "+cx.chequePayee.trim();
if(cx.source==="split")return fmt(money(cx.splitCard))+" to card · "+fmt(money(cx.splitWallet))+" to wallet";
return "";
}

let cx=null;
/* Keep a staged modification object here while cancellation works against an
   isolated snapshot. Backing out restores the draft exactly as the agent left it. */
let cancellationReturnDetail=null;
function createCancellationState(options={}){
const guestIdx=Number.isInteger(options.guestIdx)?options.guestIdx:-1;
const guest=guestIdx>=0?detail.guests[guestIdx]:null;
const prof=guest?guest.profile:(detail.guests[0]?detail.guests[0].profile:null);
return{presentation:options.presentation||"modal",entry:options.entry||"legacy",
scope:guest?"guest":"booking",guestId:guest?.guestId||null,guestIds:guest?[guest.guestId]:[],guestIdx:guest?guestIdx:-1,
sourceRecordVersion:Number(detail.b.recordVersion??1),
step:0,reason:"",note:"",noShow:false,keepInsurance:false,
overrideOn:false,overrideAmt:"",overrideReason:"",overrideConfirmed:false,
source:"original",walletId:"",walletState:"idle",walletCreated:null,
chequePayee:guest?guest.name:detail.b.name,
chequeAddr:prof?prof.address+", "+prof.city+", "+prof.state+" "+prof.zip:"",
splitCard:"",splitWallet:"",done:null};
}
function openCancelModal(options={}){
if(!detail)return;
cx=createCancellationState({...options,presentation:"modal"});
renderCancellationExperience();
}
function closeCancelModal(){
if(cx?.presentation==="page")return;
cx=null;renderCancelModal();
}

/* the refund ledger — re-rendered on its own so live amount edits never
   touch the inputs the agent is typing into */
function cancelLedgerHtml(q,{totalFirst=false}={}){
const pct=Math.round(q.tier.pct*100);
const rows=[];
const selectedGuestLabel=q.guestCount>1?`${q.guestCount} selected guests`:q.guest?`${q.guest.name} · ${PASSENGER_TYPE[q.guest.band]}`:"As sold";
rows.push({label:q.guest?(q.guestCount>1?"Selected guest fare total":"Guest fare total"):"Booking total",sub:selectedGuestLabel,amt:q.total});
if(q.insRetained>0.005)rows.push({label:"Travel protection retained",
sub:q.insuredCount+" guest"+(q.insuredCount===1?"":"s")+" · policy stays active",amt:-q.insRetained,neg:true});
rows.push({label:(q.guest?(q.guestCount>1?"Selected guest cancellation penalty (":"Guest cancellation penalty ("):"Cancellation penalty (")+pct+"%)",
sub:q.tier.label+" · excludes "+fmt(q.protectedTaxes)+" taxes and port fees",amt:-q.penalty,neg:true});
if(q.cappedByPaid)rows.push({label:"Unpaid balance",
sub:"Not collected, so it is not refundable",amt:-(q.computed-q.paid),adjustment:true});
const lineRows=rows.map(r=>{
const subtractive=(r.neg||r.adjustment)&&Math.abs(r.amt)>0.005;
return `<div class="cx-led-row${r.neg&&Math.abs(r.amt)>0.005?" neg":""}${r.adjustment?" adjustment":""}">
<div class="cx-led-desc"><span class="cx-led-label">${r.label}</span><span class="cx-led-sub">${r.sub}</span></div>
<span class="cx-led-amt">${subtractive?"−"+fmt(Math.abs(r.amt)):fmt(Math.abs(r.amt))}</span>
</div>`;
}).join("");
const totalRow=`<div class="cx-led-row total${cx.overrideOn?" overridden":""}">
<div class="cx-led-desc"><span class="cx-led-label">Refund payable</span>
<span class="cx-led-sub">${cx.overrideOn?"Manually overridden from "+fmt(q.capped):"Calculated"}</span></div>
<span class="cx-led-amt">${fmt(q.refund)}</span>
</div>`;
return totalFirst?totalRow+lineRows:lineRows+totalRow;
}
function cancellationImpactCardHtml(q){
const pct=Math.round(q.tier.pct*100);
const affectedGuests=cancellationGuestCount();
const affectedCabins=detail.b.cabins.length;
const impactTitle=q.guest
?(q.guestCount>1?`${q.guestCount} guests will be removed from this booking.`:`${esc(q.guest.name)} will be removed from this booking.`)
:`All ${affectedGuests} guest${affectedGuests===1?"":"s"} and ${affectedCabins} cabin${affectedCabins===1?"":"s"} will be cancelled.`;
const impactCaption=q.guest
?"The remaining guests and cabins will stay on the booking."
:"Every cabin will be released when the cancellation is completed.";
const penaltyTone=pct===0?"calm":pct>=75?"severe":"warn";
const penaltyTitle=pct===0?"No cancellation penalty":pct+"% cancellation penalty";
const penaltyDetail=cx.noShow
?"No-show policy applies to this cancellation"
:q.days+" day"+(q.days===1?"":"s")+" before sailing · "+(pct===0?"outside the penalty window":q.tier.label);
return `<section class="cx-impact-card" aria-labelledby="cancellationImpactTitle">
<div class="cx-impact-copy">
<span class="cx-impact-kicker">Cancellation impact</span>
<h2 class="cx-impact-title" id="cancellationImpactTitle">${impactTitle}</h2>
<span class="cx-impact-caption">${impactCaption}</span>
<div class="cx-impact-status ${penaltyTone}">
<span class="cx-impact-status-icon" aria-hidden="true">${pct===0?"✓":"!"}</span>
<span class="cx-impact-status-copy"><strong>${penaltyTitle}</strong><span>${penaltyDetail}</span></span>
</div>
</div>
<div class="cx-impact-main">
<span class="cx-impact-kicker">Estimated refund</span>
<strong class="cx-impact-amount" id="cancellationRefundEstimateTitle" data-cximpactrefund>${fmt(q.refund)}</strong>
<span class="cx-impact-caption">${cx.overrideOn?"Manual amount · capped at "+fmt(q.paid)+" paid":"Based on "+fmt(q.paid)+" collected to date"}</span>
</div>
</section>`;
}
function cancellationCalculationCardHtml(q){
return `<section class="cx-section-card cx-calculation-card" aria-labelledby="cancellationCalculationTitle">
<header class="cx-section-head cx-calculation-head">
<div><h3 id="cancellationCalculationTitle">Refund breakdown</h3><p>Based on the amount collected and the cancellation policy.</p></div>
</header>
<div class="cx-section-body"><div class="cx-ledger" data-cxledger>${cancelLedgerHtml(q)}</div></div>
</section>`;
}
function cancelStep1Html(q,options={}){
const insTotal=q.insTotal;
const overrideCanConfirm=cancelOverrideDraftReady(q);
const integrated=Boolean(options.integrated);
const hasExternalReview=Boolean(integrated||(q.guest&&cx.presentation==="page"));
const headingTag=integrated?"h3":hasExternalReview?"h2":"h3";
const cardTitle=integrated?"Reason &amp; policy handling":"Cancellation details";
const cardDescription=integrated
?(q.guest?"Record why the guests are leaving and any approved exceptions.":"Record why the booking is being cancelled and any approved exceptions.")
:(hasExternalReview?"Add the required reason and any exceptions before continuing.":"Record the reason and any exceptions that change the refund.");
return `<div class="cx-body${cx.presentation==="page"?" cx-body-decision":""}${hasExternalReview?" cx-body-review-panelled":""}">
${options.includeStepHeading===false?"":`<h2 class="sr-only" id="cancellationStepTitle" tabindex="-1">Cancellation details and refund</h2>`}
${hasExternalReview?"":cancellationImpactCardHtml(q)}

<div class="cx-decision-grid">
<section class="cx-section-card cx-input-card" aria-labelledby="cancellationDetailsTitle">
<header class="cx-section-head">
<div><${headingTag} id="cancellationDetailsTitle">${cardTitle}</${headingTag}><p>${cardDescription}</p></div>
</header>
<div class="cx-section-body">
<div class="cx-fields">
<div class="mf-field">
<label class="mf-flabel" for="cancellationReason">Cancellation reason <em>required</em></label>
<div class="mf-select"><select id="cancellationReason" data-cxreason required aria-required="true">
<option value="" ${cx.reason?"":"selected"}>Select a reason&hellip;</option>
${CANCEL_REASONS.map(r=>`<option value="${esc(r)}" ${cx.reason===r?"selected":""}>${esc(r)}</option>`).join("")}
</select>${SVG_CARET}</div>
</div>
<div class="mf-field">
<label class="mf-flabel" for="cancellationNote">${integrated?"Internal note":"Note"} ${cx.reason==="Other"?"<em>required</em>":"<span class=\"cx-opt\">optional</span>"}</label>
<input class="mf-input" id="cancellationNote" data-cxnote value="${esc(cx.note)}" placeholder="Recorded on the booking's audit trail" autocomplete="off" ${cx.reason==="Other"?'required aria-required="true"':""}>
</div>
</div>

<div class="cx-subsection-head"><div><h4>${integrated?"Policy exceptions":"Special handling"}</h4><p>${integrated?"Use only when the standard cancellation policy does not apply.":"These options change policy or payout behavior."}</p></div><span>Optional</span></div>
<div class="cx-opts">
${cxToggleHtml("cxnoshow",cx.noShow,"No-show cancellation","Guest never boarded. Forces a 100% penalty regardless of date.")}
${cxToggleHtml("cxkeepins",cx.keepInsurance,integrated?"Retain travel protection":"Keep travel protection",
q.insuredCount>0
?"Policy stays active for "+q.insuredCount+" insured guest"+(q.insuredCount===1?"":"s")+" — "+fmt(insTotal)+" premium is not refunded."
:"The selected guest does not carry travel protection.",q.insuredCount===0)}
${cxToggleHtml("cxoverride",cx.overrideOn,"Override refund amount","Set the payable amount manually instead of using the calculated figure.")}
</div>

${cx.overrideOn?`<div class="cx-override">
<div class="cx-ov-grid">
<div class="mf-field">
<label class="mf-flabel" for="cancellationOverrideAmount">Refund amount</label>
<div class="cx-money"><span aria-hidden="true">$</span><input class="mf-input" id="cancellationOverrideAmount" data-cxovamt value="${esc(cx.overrideAmt)}" placeholder="${q.capped.toFixed(2)}" inputmode="decimal" autocomplete="off"></div>
</div>
<div class="mf-field">
<label class="mf-flabel" for="cancellationOverrideReason">Justification <em>required</em></label>
<input class="mf-input" id="cancellationOverrideReason" data-cxovreason value="${esc(cx.overrideReason)}" placeholder="Why this differs from the calculated amount" autocomplete="off" required aria-required="true">
</div>
</div>
<div class="cx-override-foot"><p class="cx-ov-note">Calculated refund is <strong>${fmt(q.capped)}</strong>. Maximum allowed is <strong>${fmt(q.paid)}</strong> — the amount paid to date.</p><button type="button" class="cx-override-confirm${cx.overrideConfirmed?" is-confirmed":""}" data-cxconfirmoverride${overrideCanConfirm?"":" disabled"} aria-label="${cx.overrideConfirmed?"Refund override confirmed":"Confirm refund override"}">${cx.overrideConfirmed?`${SVG_CHECK}<span>Override confirmed</span>`:`<span>Confirm override</span>`}</button></div>
</div>`:""}
</div>
</section>

${hasExternalReview?"":cancellationCalculationCardHtml(q)}
</div>
</div>`;
}
function cxToggleHtml(key,on,title,note,disabled){
return `<div class="cx-opt-row${disabled?" off":""}">
<div class="cx-opt-det"><span class="cx-opt-title">${title}</span><span class="cx-opt-note">${note}</span></div>
<button type="button" class="mf-switch${on?" on":""}" data-${key} ${disabled?"disabled":""} role="switch" aria-checked="${!!on}" aria-label="${title}"><span class="mf-knob"></span></button>
</div>`;
}

const CX_SOURCES=[
{id:"original",icon:"credit-card",title:"Original card",note:"Return to the card used to pay"},
{id:"wallet",icon:"wallet",title:"Margaritaville wallet",note:"Issue as wallet credit"},
{id:"cheque",icon:"banknote",title:"Cheque",note:"Mail a cheque to the guest"},
{id:"split",icon:"columns-2",title:"Split card & wallet",note:"Divide the refund between both"}];
function cancelStep2Html(q,options={}){
const integrated=Boolean(options.integrated);
const hasExternalReview=Boolean(integrated||(q.guest&&cx.presentation==="page"));
const headingTag=integrated?"h3":"h3";
return `<div class="cx-body${cx.presentation==="page"?" cx-body-destination":""}${hasExternalReview?" cx-body-review-panelled":""}">
${options.includeStepHeading===false?"":`<h2 class="sr-only" id="cancellationStepTitle" tabindex="-1">Refund destination</h2>`}
${hasExternalReview?"":`<div class="cx-refund-banner cx-destination-summary">
<div class="cx-destination-summary-amount">
<span class="cx-rb-label">Refund payable</span>
<span class="cx-rb-amt">${fmt(q.refund)}</span>
<span class="cx-rb-sub">${cx.overrideOn?"Manually overridden":Math.round(q.tier.pct*100)?Math.round(q.tier.pct*100)+"% penalty applied":"No penalty"}${q.insRetained>0.005?" · protection retained":""}</span>
</div>
<div class="cx-destination-summary-copy"><strong>Choose where to send the refund</strong><span>The destination is verified before the cancellation is finalized.</span></div>
</div>`}
<div class="cx-destination-grid">
<section class="cx-section-card cx-destination-choice-card" aria-labelledby="refundDestinationTitle">
<header class="cx-section-head">
${integrated?"":`<span class="cx-section-index" aria-hidden="true">1</span>`}
<div><${headingTag} id="refundDestinationTitle">Refund destination</${headingTag}><p>${integrated?"Choose where to send the refund.":"Select the destination the guest has approved."}</p></div>
</header>
<div class="cx-section-body">
<div class="cx-src-grid" role="radiogroup" aria-label="Refund destination">
${CX_SOURCES.map(s=>`<button type="button" class="cx-src${cx.source===s.id?" on":""}" data-cxsrc="${s.id}" role="radio" aria-checked="${cx.source===s.id}" tabindex="${cx.source===s.id?"0":"-1"}">
<span class="cx-src-icon" aria-hidden="true"><i data-lucide="${s.icon}"></i></span>
<span class="cx-src-det"><span class="cx-src-t">${s.title}</span><span class="cx-src-n">${s.note}</span></span>
<span class="cx-src-radio" aria-hidden="true"><i data-lucide="check"></i></span>
</button>`).join("")}
</div>
</div>
</section>
<section class="cx-section-card cx-destination-details-card" aria-labelledby="refundDestinationDetailsTitle">
<header class="cx-section-head">
${integrated?"":`<span class="cx-section-index" aria-hidden="true">2</span>`}
<div><${headingTag} id="refundDestinationDetailsTitle">Destination details</${headingTag}><p>Review the selected account or payee before continuing.</p></div>
</header>
<div class="cx-section-body"><div class="cx-src-panel">${cancelSrcPanelHtml(q)}</div></div>
</section>
</div>
</div>`;
}
function fullCancellationDetailsHtml(q){
const ready=cancelStep1Ready()&&cancelDestReady(q);
return `<div class="cx-full-cancellation-details-stack">
<h2 class="sr-only" id="cancellationStepTitle" tabindex="-1">Complete cancellation details</h2>
<section class="cx-cancellation-info cx-full-cancellation-info${ready?" is-complete":""}" aria-labelledby="fullCancellationInformationTitle">
<header class="cx-cancellation-info-summary cx-full-cancellation-info-head"><span class="cx-cancellation-info-icon" aria-hidden="true"><i data-lucide="clipboard-list"></i></span><span class="cx-cancellation-info-copy"><strong id="fullCancellationInformationTitle">Cancellation information</strong><small>Reason, policy exceptions, and refund destination</small></span><span class="cx-cancellation-info-status">${ready?"Complete":"Details required"}</span></header>
<div class="cx-cancellation-info-body">
<div class="cx-stage2-section cx-details-editor" data-cxstage2controls>${cancelStep1Html(q,{includeStepHeading:false,integrated:true})}</div>
<div class="cx-stage2-section cx-destination-editor" data-cxstage2controls>${cancelStep2Html(q,{includeStepHeading:false,integrated:true})}</div>
</div>
</section>
</div>`;
}
/* each destination resolves to a concrete instrument before the refund can be
   confirmed; the wallet paths (validate, or create-then-refund) live here */
function cancelSrcPanelHtml(q){
const card=cardFor(detail.b);
if(cx.source==="original")return `<div class="cx-refund-instrument" aria-label="${esc(card.brand)} ending in ${esc(card.last4)}">
<div class="cx-refund-instrument-head"><span class="cx-refund-instrument-icon" aria-hidden="true"><i data-lucide="credit-card"></i></span><span class="cx-refund-instrument-copy"><small>Original payment method</small><strong>${esc(card.brand)} &middot;&middot;&middot;&middot; ${esc(card.last4)}</strong></span><span class="cx-refund-instrument-tag">Card on file</span></div>
<dl class="cx-refund-instrument-facts"><div><dt>Cardholder</dt><dd>${esc(card.holder)}</dd></div><div><dt>Expires</dt><dd>${esc(card.exp)}</dd></div></dl>
</div>
<p class="cx-hint cx-refund-timing"><i data-lucide="clock-3" aria-hidden="true"></i><span>Expected back on this card in 5–10 business days.</span></p>`;
if(cx.source==="wallet")return cancelWalletPanelHtml(fmt(q.refund));
if(cx.source==="cheque")return `<div class="cx-fields">
<div class="mf-field"><label class="mf-flabel" for="cancellationChequePayee">Payable to <em>required</em></label>
<input class="mf-input" id="cancellationChequePayee" data-cxpayee value="${esc(cx.chequePayee)}" autocomplete="off" required aria-required="true"></div>
<div class="mf-field"><label class="mf-flabel" for="cancellationChequeAddress">Mailing address <em>required</em></label>
<input class="mf-input" id="cancellationChequeAddress" data-cxaddr value="${esc(cx.chequeAddr)}" autocomplete="off" required aria-required="true"></div>
</div>
<p class="cx-hint">Cheques are issued within 10 business days and posted to the address above.</p>`;
if(cx.source==="split"){
const c=money(cx.splitCard),w=money(cx.splitWallet),rem=q.refund-c-w;
return `<div class="cx-split">
<div class="cx-split-leg">
<div class="mf-field"><label class="mf-flabel" for="cancellationSplitCard">To ${esc(card.brand)} ••••${esc(card.last4)}</label>
<div class="cx-money"><span aria-hidden="true">$</span><input class="mf-input" id="cancellationSplitCard" data-cxsplitcard value="${esc(cx.splitCard)}" placeholder="0.00" inputmode="decimal" autocomplete="off"></div></div>
</div>
<div class="cx-split-leg">
<div class="mf-field"><label class="mf-flabel" for="cancellationSplitWallet">To wallet</label>
<div class="cx-money"><span aria-hidden="true">$</span><input class="mf-input" id="cancellationSplitWallet" data-cxsplitwallet value="${esc(cx.splitWallet)}" placeholder="0.00" inputmode="decimal" autocomplete="off"></div></div>
</div>
<button type="button" class="cx-split-rest" data-cxsplitrest>Balance to wallet</button>
</div>
<div class="cx-remain${Math.abs(rem)<=0.005?" ok":rem<0?" over":""}" data-cxremain>${cxRemainText(rem)}</div>
<div class="cx-split-wallet" data-cxsplitwalletpanel>${w>0.005?cancelWalletPanelHtml(fmt(w)):""}</div>`;
}
return "";
}
function cxRemainText(rem){
if(Math.abs(rem)<=0.005)return "Fully allocated";
if(rem<0)return "Over-allocated by "+fmt(Math.abs(rem));
return fmt(rem)+" left to allocate";
}
function cancelWalletPanelHtml(amtLabel){
const w=cancelWallet();
if(!w.exists)return `<div class="cx-wallet-none">
<div class="cx-wn-det"><span class="cx-wn-t">No wallet on file</span>
<span class="cx-wn-n">${esc(detail.b.name)} does not have a Margaritaville wallet yet. Create one to hold this refund as credit.</span></div>
<button type="button" class="cx-wn-btn" data-cxwalletcreate>Create wallet</button>
</div>`;
if(cx.walletState==="valid")return `<div class="cx-wallet-ok">
<span class="cx-wok-ic">${SVG_CHECK}</span>
<div class="cx-wok-det"><span class="cx-wok-t">${esc(w.id)} &middot; ${esc(w.holder)}</span>
<span class="cx-wok-n">${cx.walletCreated?"New wallet created":"Balance "+fmt(w.balance)} &middot; <span data-cxwalletcreditamount>${amtLabel}</span> will be credited</span></div>
<button type="button" class="cx-wok-change" data-cxwalletreset>Change</button>
</div>`;
return `<div class="cx-wallet-find">
<div class="mf-field"><label class="mf-flabel" for="cancellationWalletId">Wallet ID <em>required</em></label>
<div class="cx-wf-row">
<input class="mf-input${cx.walletState==="invalid"?" error":""}" id="cancellationWalletId" data-cxwalletid value="${esc(cx.walletId)}" placeholder="MVW-000000" autocomplete="off" required aria-required="true" aria-invalid="${cx.walletState==="invalid"}" aria-describedby="cancellationWalletStatus">
<button type="button" class="cx-wf-btn" data-cxwalletcheck ${cx.walletId.trim()?"":"disabled"}>Validate</button>
</div>
</div>
<div class="cx-wf-status" id="cancellationWalletStatus" data-cxwalletstatus role="status" aria-live="polite">${cxWalletStatusHtml()}</div>
</div>`;
}
function cxWalletStatusHtml(){
if(cx.walletState==="checking")return `<span class="cx-wf-checking">Validating&hellip;</span>`;
if(cx.walletState==="invalid")return `<span class="cx-wf-bad">No wallet matches that ID. Check the ID with the guest, or look it up from their profile.</span>`;
return `<button type="button" class="cx-wf-lookup" data-cxwalletlookup>Look up from guest profile</button>`;
}

function cancelStep1Guidance(){
if(!cx.reason)return "Select a cancellation reason to continue";
if(cx.reason==="Other"&&!cx.note.trim())return "Add a note for the selected reason";
if(cx.overrideOn&&!cx.overrideReason.trim())return "Add a justification for the refund override";
return "";
}
function cancelFootHtml(q){
const guestMode=!!q.guest;
const showFinancialSummary=cx.entry!=="partial";
const firstBackLabel=cx.presentation==="page"
?(cx.entry==="partial"?(partialAllocationSummary(cx.supplementAllocations).totalLines?"&larr; Back to supplements":"&larr; Back to guest selection"):"&larr; Back to booking")
:(guestMode?"Keep Guest":"Keep Booking");
if(cx.step===0){const guidance=cancelStep1Guidance();const showInitialBack=cx.presentation!=="page"||cx.entry==="partial";return `${showInitialBack?`<button class="mf-rp-cancel" data-cxclose>${firstBackLabel}</button>`:""}
<div class="cx-foot-right">
${guidance||!showFinancialSummary?"":`<span class="cx-foot-amt">Refund <strong>${fmt(q.refund)}</strong></span>`}
<button class="mf-rp-confirm" data-cxnext ${cancelStep1Ready()?"":"disabled"}>Continue</button>
</div>`;}
const ready=cancelDestReady(q);
return `<button class="mf-rp-cancel" data-cxback>&larr; Back</button>
<div class="cx-foot-right">
${showFinancialSummary?`<span class="cx-foot-amt">${ready?fmt(q.refund)+" &rarr; "+esc(cancelDestLabel(q)):"Choose where the refund goes"}</span>`:""}
<button class="mf-rp-confirm cx-danger" data-cxconfirm ${ready?"":"disabled"}>${guestMode?(q.guestCount>1?`Cancel ${q.guestCount} guests &amp; refund`:"Cancel guest &amp; refund"):"Cancel booking &amp; refund"}</button>
</div>`;
}
function partialCancellationDecisionReady(q=cancelQuote(),allocations=cx?.supplementAllocations){
return cancelStep1Ready()
&&partialSupplementAllocationReady(detail,allocations)
&&cancelDestReady(q);
}
function partialCancellationDecisionGuidance(q=cancelQuote(),allocations=cx?.supplementAllocations){
if(!cx.reason)return "Select a cancellation reason.";
if(cx.reason==="Other"&&!cx.note.trim())return "Add an internal note for the selected reason.";
if(cx.overrideOn&&!String(cx.overrideAmt??"").trim())return "Enter the refund override amount.";
if(cx.overrideOn&&!cx.overrideReason.trim())return "Add a justification for the refund override.";
if(cx.overrideOn&&!cancelOverrideDraftReady(q))return `Enter a refund amount no greater than ${fmt(q.paid)}.`;
if(cx.overrideOn&&!cx.overrideConfirmed)return "Confirm the refund override.";
const summary=partialAllocationSummary(allocations||[]);
if(summary.unresolvedLines)return `Resolve ${summary.unresolvedLines} supplement assignment${summary.unresolvedLines===1?"":"s"}.`;
const wallet=cancelWallet();
if(cx.source==="wallet"&&!cancelWalletReady()){
if(!wallet.exists)return "Create a wallet to continue.";
return cx.walletId.trim()?"Validate the wallet before continuing.":"Enter and validate a wallet ID.";
}
if(cx.source==="cheque"){
if(!cx.chequePayee.trim())return "Enter the cheque payee.";
if(!cx.chequeAddr.trim())return "Enter the cheque mailing address.";
}
if(cx.source==="split"){
const cardAmount=money(cx.splitCard),walletAmount=money(cx.splitWallet);
if(cardAmount<0||walletAmount<0||Math.abs(cardAmount+walletAmount-q.refund)>0.005)return "Allocate the full refund between card and wallet.";
if(walletAmount>0.005&&!cancelWalletReady())return wallet.exists
?"Validate the wallet used for the split refund."
:"Create a wallet to complete the split refund.";
}
return "";
}
function partialConfirmFootHtml(q){
const ready=partialCancellationDecisionReady(q);
const guestLabel=q.guestCount===1?"guest":`${q.guestCount} guests`;
return `<button type="button" class="mf-rp-cancel" data-cxreviewback>&larr; Back to cancellation details</button>
<div class="cx-foot-right">
<button type="button" class="mf-rp-confirm cx-danger" data-cxconfirm${ready?"":" disabled"}>Cancel ${guestLabel} &amp; issue refund</button>
</div>`;
}
function fullCancellationFootHtml(q){
if(cx.step===0){
const ready=cancelStep1Ready()&&cancelDestReady(q);
const guidance=partialCancellationDecisionGuidance(q,[]);
return `<div class="cx-foot-right">${guidance?`<span class="cx-action-guidance">${guidance}</span>`:""}<button type="button" class="mf-rp-confirm" data-cxfullreview${ready?"":" disabled"}>Review cancellation</button></div>`;
}
const ready=cancelStep1Ready()&&cancelDestReady(q);
return `<button type="button" class="mf-rp-cancel" data-cxback>&larr; Back to cancellation details</button>
<div class="cx-foot-right"><button type="button" class="mf-rp-confirm cx-danger" data-cxconfirm${ready?"":" disabled"}>Cancel entire booking &amp; issue refund</button></div>`;
}
function cancelDoneHtml(){
const r=cx.done;
const guestCount=r.guestNames?.length||1;
const guestLabel=guestCount>1?`${guestCount} guests`:esc(r.guestName||r.guestNames?.[0]||"Guest");
return `<div class="cx-done" role="status" aria-live="polite">
<span class="cx-done-ic">${SVG_CHECK}</span>
<h3 class="cx-done-h" id="cancelDoneTitle" tabindex="-1">${r.scope==="guest"?(guestCount>1?"Guests cancelled":"Guest cancelled"):"Booking cancelled"}</h3>
<p class="cx-done-p" id="cancelDoneDescription">${r.scope==="guest"?`${guestLabel} ${guestCount>1?"have":"has"} been removed from booking #${esc(detail.b.id)}. The booking remains active.`:`#${esc(detail.b.id)} is now cancelled and the refund has been queued.`}</p>
<div class="cx-done-rows">
<div class="cx-done-row"><span>Refund amount</span><strong>${fmt(r.amount)}</strong></div>
<div class="cx-done-row"><span>Destination</span><strong>${esc(r.dest)}</strong></div>
<div class="cx-done-row"><span>Reason</span><strong>${esc(r.reason)}</strong></div>
<div class="cx-done-row"><span>Reference</span><strong>${esc(r.ref)}</strong></div>
</div>
</div>`;
}
function cancelDonePageHtml(){
const r=cx.done;
const guestCount=r.guestNames?.length||1;
const guestLabel=guestCount>1?`${guestCount} guests`:esc(r.guestName||r.guestNames?.[0]||"Guest");
const guestCancellation=r.scope==="guest";
const title=guestCancellation?(guestCount>1?"Guests cancelled":"Guest cancelled"):"Booking cancelled";
const description=guestCancellation
?`${guestLabel} ${guestCount>1?"have":"has"} been removed from booking #${esc(detail.b.id)}.`
:`Booking #${esc(detail.b.id)} has been cancelled.`;
return `<section class="cx-done-page-summary" role="status" aria-live="polite" aria-labelledby="cancelDoneTitle" aria-describedby="cancelDoneDescription">
<header class="cx-done-page-hero">
<span class="cx-done-ic" aria-hidden="true">${SVG_CHECK}</span>
<div class="cx-done-page-heading">
<span class="cx-done-page-eyebrow">Cancellation complete</span>
<h2 class="cx-done-h" id="cancelDoneTitle" tabindex="-1">${title}</h2>
<p class="cx-done-p" id="cancelDoneDescription">${description} ${guestCancellation?"The rest of the booking remains active.":"The refund has been queued for processing."}</p>
</div>
<span class="cx-done-page-state">${guestCancellation?"Booking remains active":"Booking closed"}</span>
</header>
<div class="cx-done-page-grid">
<section class="cx-done-refund-card" aria-labelledby="cancelDoneRefundTitle">
<span class="cx-done-section-label">Refund summary</span>
<div class="cx-done-refund-head">
<div><span id="cancelDoneRefundTitle">Refund amount</span><strong>${fmt(r.amount)}</strong></div>
<span class="cx-done-refund-status">Confirmed</span>
</div>
<div class="cx-done-refund-destination"><span>Refund destination</span><strong>${esc(r.dest)}</strong></div>
</section>
<section class="cx-done-confirmation-card" aria-labelledby="cancelDoneDetailsTitle">
<div class="cx-done-confirmation-head">
<span class="cx-done-section-label" id="cancelDoneDetailsTitle">Confirmation details</span>
<span>Keep this reference for your records</span>
</div>
<dl class="cx-done-facts">
<div><dt>Cancelled ${guestCount===1?"guest":"guests"}</dt><dd>${guestLabel}</dd></div>
<div><dt>Reason</dt><dd>${esc(r.reason)}</dd></div>
<div><dt>Reference</dt><dd>${esc(r.ref)}</dd></div>
<div><dt>Booking ID</dt><dd>#${esc(detail.b.id)}</dd></div>
</dl>
</section>
</div>
</section>`;
}
function cancellationContextHtml({compact=false,showPaid=true}={}){
const p=priceDetail(detail);
/* Keep the pre-cancellation roster visible while guests are selected, including
   guests staged in the modification flow. */
const stagingPartial=cx?.entry==="partial"&&!cx?.done;
const contextGuests=stagingPartial?detail.guests:activeGuests(detail);
const party=contextGuests.length;
const cabins=new Set(contextGuests.map(guest=>String(guest.cabin))).size;
const paid=p.paidToDate;
const sailingDays=daysUntilSailing(detail.sail);
if(compact)return `<dl class="cx-page-context-compact${showPaid?" cx-page-context-compact-with-paid":""}" aria-label="Booking context">
<div class="cx-context-booking"><dt>Booking ID</dt><dd>#${esc(detail.b.id)}</dd></div>
<div class="cx-context-farecode"><dt>Farecode</dt><dd>${esc(farecodeFor(detail.b))}</dd></div>
<div><dt>Sailing</dt><dd>${esc(detail.info.shipSub)}</dd></div>
<div><dt>Departs</dt><dd>${fmtDateShort(detail.sail)}</dd></div>
<div class="cx-context-countdown"><dt>Days until sailing</dt><dd>${daysUntilSailingLabel(sailingDays)}</dd></div>
${showPaid?`<div class="cx-context-paid"><dt>Paid to date</dt><dd>${fmt(paid)}</dd></div>`:""}
</dl>`;
return `<dl class="cx-page-context">
<div class="cx-context-booking"><dt>Booking</dt><dd>#${esc(detail.b.id)}</dd></div>
<div><dt>Sailing</dt><dd>${esc(detail.info.shipSub)}</dd></div>
<div><dt>Departure</dt><dd>${fmtDateShort(detail.sail)}</dd></div>
<div><dt>Current booking</dt><dd>${party} guest${party===1?"":"s"} &middot; ${cabins} cabin${cabins===1?"":"s"}</dd></div>
<div class="cx-context-paid"><dt>Paid to date</dt><dd>${fmt(paid)}</dd></div>
</dl>`;
}
function cancellationPageHeader(title,description,scope,{compactContext=false,showPaid=false}={}){
return `<header class="cx-page-head${compactContext?" cx-page-head-compact":""}">
<div class="cx-page-heading"><h1 id="cancellationPageTitle" tabindex="-1">${title}</h1><p>${description}</p></div>
${scope?`<span class="cx-page-scope">${scope}</span>`:""}
${compactContext?cancellationContextHtml({compact:true,showPaid}):""}
</header>${compactContext?"":cancellationContextHtml()}`;
}
function cancellationDraftNoticeHtml(){
if(!cancellationReturnDetail)return "";
if(cx?.entry==="partial")return `<div class="cx-draft-notice" role="note">${SVG_INFO}<div><strong>Staged booking updates included</strong><span>This cancellation uses the current guest, cabin, profile, and supplement changes. Going back restores the modification draft; completing the cancellation commits the reviewed booking state.</span></div></div>`;
return `<div class="cx-draft-notice" role="note">${SVG_INFO}<div><strong>Unsaved modification work is paused</strong><span>This cancellation is calculated from the saved booking, so room, guest, profile, and supplement edits cannot change the refund. Going back restores those edits; completing a cancellation replaces them.</span></div></div>`;
}
function cancellationVersionAlertHtml(){
if(!cx?.versionError)return "";
return `<div class="cx-version-alert" id="cancellationVersionError" role="alert" tabindex="-1">${SVG_INFO}<div><strong>The booking changed while cancellation was open</strong><span>Return to the booking and start again so the guest list and refund can be recalculated safely.</span></div></div>`;
}
function cancellationStepsHtml(){
if(cx.entry==="partial"){
const activeStep=cx.scope!==null?2:cx.partialStage==="supplements"?1:0;
const labels=["Guest selection","Cancellation details","Review & confirm"];
return `<div class="cx-partial-steps-sticky"><ol class="cx-steps cx-steps-partial" aria-label="Cancellation progress">
${labels.map((label,index)=>`${index?'<li class="cx-step-line" aria-hidden="true"></li>':""}<li class="cx-step${index===activeStep?" on":index<activeStep?" done":""}"${index===activeStep?' aria-current="step"':""}><i aria-hidden="true">${index+1}</i><span>${label}</span></li>`).join("")}
</ol></div>`;
}
if(cx.entry==="full"&&cx.presentation==="page"){
const activeStep=Math.max(0,Math.min(1,Number(cx.step)||0));
const labels=["Cancellation details","Review & confirm"];
return `<div class="cx-partial-steps-sticky"><ol class="cx-steps cx-steps-partial cx-steps-full" aria-label="Cancellation progress">
${labels.map((label,index)=>`${index?'<li class="cx-step-line" aria-hidden="true"></li>':""}<li class="cx-step${index===activeStep?" on":index<activeStep?" done":""}"${index===activeStep?' aria-current="step"':""}><i aria-hidden="true">${index+1}</i><span>${label}</span></li>`).join("")}
</ol></div>`;
}
return `<ol class="cx-steps" aria-label="Cancellation progress">
<li class="cx-step${cx.step===0?" on":" done"}"${cx.step===0?' aria-current="step"':""}><i aria-hidden="true">1</i><span>Cancellation &amp; refund</span></li>
<li class="cx-step-line" aria-hidden="true"></li>
<li class="cx-step${cx.step===1?" on":""}"${cx.step===1?' aria-current="step"':""}><i aria-hidden="true">2</i><span>Refund destination</span></li>
</ol>`;
}
function partialCancellationImpactHtml(){
const selectedGuests=partialSelectedGuests(detail).filter(guest=>guest.pendingRemoval);
const selectedIds=new Set(selectedGuests.map(guest=>guest.guestId));
const remainingGuests=activeGuests(detail);
const beforeGuestCount=detail.guests.length;
const afterGuestCount=remainingGuests.length;
const beforeCabinCount=detail.b.cabins.length;
const afterCabinCount=new Set(remainingGuests.map(guest=>String(guest.cabin))).size;
const releasedCabins=detail.b.cabins.filter(cabin=>!remainingGuests.some(guest=>guest.cabin===cabin));
const originalPrimary=detail.guests[0]||null;
const nextPrimary=remainingGuests[0]||null;
const primaryChanges=Boolean(originalPrimary&&selectedIds.has(originalPrimary.guestId)&&nextPrimary);
const allocations=selectedGuests.length?ensurePartialSupplementAllocations():[];
const supplementSummary=partialAllocationSummary(allocations);
const quote=selectedGuests.length?cancelQuote():null;
const leavingGuestRows=selectedGuests.map(guest=>{
const cabinIndex=detail.b.cabins.indexOf(guest.cabin);
const room=detail.cabinPlan[cabinIndex]?.room||guest.cabin;
const cabinLabel=cabinIndex>=0?`Cabin ${cabinIndex+1}`:"Cabin";
return `<li><span class="cx-impact-guest-avatar" aria-hidden="true">${esc(initials(guest.name))}</span><span class="cx-impact-guest-identity"><strong>${esc(guest.name)}</strong><small>${esc(PASSENGER_TYPE[guest.band]||"Guest")} &middot; ${cabinLabel} &middot; Room ${esc(room)}</small></span></li>`;
});
const impactGuestsOpen=cx.impactGuestsOpen===true;
const estimateNote=!selectedGuests.length
?"Select guests to calculate the impact"
:cx.partialStage==="select"&&supplementSummary.totalLines
?"Final amount may change after supplement allocation"
:supplementSummary.unresolvedLines
?"Complete every supplement allocation to finalize"
:cx.overrideOn
?"Manual refund amount, capped at the amount paid"
:quote?.cappedByPaid
?"Limited to the amount paid for guests leaving"
:"Calculated from the current cancellation choices";
const estimateStatus=cx.partialStage==="select"&&supplementSummary.totalLines
?"Provisional"
:supplementSummary.unresolvedLines
?"Needs allocation"
:cx.overrideOn
?"Overridden"
:"Calculated";
if(!selectedGuests.length)return `<aside class="cx-cancellation-impact" data-cximpact aria-labelledby="partialCancellationImpactTitle">
<header class="cx-cancellation-impact-head"><div><h2 id="partialCancellationImpactTitle">Cancellation Review</h2><p>Preview booking and refund changes as guests are selected.</p></div><span class="cx-cancellation-impact-state">No changes</span></header>
<div class="cx-cancellation-impact-body">
<section class="cx-impact-empty-state">
<div class="cx-impact-baseline">
<small>Current booking</small>
<div class="cx-impact-baseline-metrics">
<div><strong>${beforeGuestCount}</strong><span>${beforeGuestCount===1?"Guest":"Guests"}</span></div>
<div><strong>${beforeCabinCount}</strong><span>${beforeCabinCount===1?"Cabin":"Cabins"}</span></div>
</div>
</div>
${originalPrimary?`<div class="cx-impact-empty-primary"><small>Current primary guest</small><strong>${esc(originalPrimary.name)}</strong></div>`:""}
<div class="cx-impact-empty-copy"><strong>Select guests to preview the impact</strong><span>Guest count, booking changes, and the estimated refund will update here.</span></div>
</section>
</div>
</aside>`;
const penaltyPct=Math.round(quote.tier.pct*100);
const refundSubject=selectedGuests.length===1?selectedGuests[0].name:`${selectedGuests.length} selected guests`;
const refundCalculationRows=[{
label:`Charges for guest${selectedGuests.length===1?"":"s"} leaving`,
helper:refundSubject,
amount:fmt(quote.total)
}];
if(quote.insRetained>0.005)refundCalculationRows.push({
label:"Travel protection retained",helper:"Policy remains active",amount:`&minus;&nbsp;${fmt(quote.insRetained)}`,deduction:true
});
refundCalculationRows.push({
label:`Cancellation penalty (${penaltyPct}%)`,
helper:quote.penalty>0.005?`${quote.tier.label} · ${fmt(quote.protectedTaxes)} taxes and port fees excluded`:`${quote.tier.label} · No penalty applies`,
amount:quote.penalty>0.005?`&minus;&nbsp;${fmt(quote.penalty)}`:fmt(0),
deduction:quote.penalty>0.005,
penalty:true
});
if(quote.cappedByPaid)refundCalculationRows.push({
label:"Refund limited to amount paid",helper:`${fmt(quote.paid)} was collected for ${refundSubject}; the remaining amount is excluded`,amount:`&minus;&nbsp;${fmt(quote.computed-quote.paid)}`,deduction:true
});
if(cx.overrideOn){
const overrideAdjustment=roundMoney(quote.refund-quote.capped);
refundCalculationRows.push({
label:"Manual adjustment",helper:"Applied to the calculated refund",amount:Math.abs(overrideAdjustment)<=0.005?fmt(0):`${overrideAdjustment>0?"+":"&minus;&nbsp;"}${fmt(Math.abs(overrideAdjustment))}`,deduction:overrideAdjustment<0,addition:overrideAdjustment>0,adjustment:true
});
}
const refundCalculationHtml=refundCalculationRows.map(row=>`<div class="${row.deduction?"deduction":row.addition?"addition":""}"><dt><strong>${row.label}</strong><span>${esc(row.helper)}</span></dt><dd${row.penalty?' data-cximpactpenalty':row.adjustment?' data-cximpactadjustment':""}>${row.amount}</dd></div>`).join("");
return `<aside class="cx-cancellation-impact" data-cximpact aria-labelledby="partialCancellationImpactTitle">
<header class="cx-cancellation-impact-head"><div><h2 id="partialCancellationImpactTitle">Cancellation Review</h2><p>Review the staged booking and refund changes.</p></div><span class="cx-cancellation-impact-state active">Draft</span></header>
<div class="cx-cancellation-impact-body">
<section class="cx-impact-comparison" aria-label="Booking before and after cancellation">
<div class="cx-impact-comparison-state">
<small>Current booking</small>
<div class="cx-impact-baseline-metrics">
<div><strong>${beforeGuestCount}</strong><span>${beforeGuestCount===1?"Guest":"Guests"}</span></div>
<div><strong>${beforeCabinCount}</strong><span>${beforeCabinCount===1?"Cabin":"Cabins"}</span></div>
</div>
</div>
<div class="cx-impact-comparison-transition" aria-hidden="true"><span>&darr;</span></div>
<div class="cx-impact-comparison-state after">
<small>After cancellation</small>
<div class="cx-impact-baseline-metrics">
<div><strong>${afterGuestCount}</strong><span>${afterGuestCount===1?"Guest":"Guests"}</span></div>
<div><strong>${afterCabinCount}</strong><span>${afterCabinCount===1?"Cabin":"Cabins"}</span></div>
</div>
</div>
<div class="cx-impact-primary-summary">
<small>Primary guest after cancellation</small>
<div class="cx-impact-primary-summary-body">
<span class="cx-impact-primary-avatar" aria-hidden="true">${esc(initials(nextPrimary?.name||originalPrimary?.name||"—"))}</span>
<span class="cx-impact-primary-identity">
<span><strong>${esc(nextPrimary?.name||originalPrimary?.name||"—")}</strong><em class="${primaryChanges?"changed":""}">${primaryChanges?"New primary":"Unchanged"}</em></span>
${primaryChanges?`<small>Replaces ${esc(originalPrimary.name)}</small>`:""}
</span>
</div>
</div>
${releasedCabins.length?`<div class="cx-impact-release-summary"><small>Cabins released</small><strong>${releasedCabins.length} &middot; ${releasedCabins.map(cabin=>`Room ${esc(detail.cabinPlan[detail.b.cabins.indexOf(cabin)]?.room||cabin)}`).join(", ")}</strong></div>`:""}
</section>
<section class="cx-impact-selection" aria-labelledby="cancellationGuestsLeavingTitle">
<details class="cx-impact-guest-disclosure" data-cximpactguests${impactGuestsOpen?" open":""}>
<summary><span class="cx-impact-guest-label" id="cancellationGuestsLeavingTitle">Guests leaving</span><span class="cx-impact-guest-count">${selectedGuests.length} guest${selectedGuests.length===1?"":"s"}</span><i data-lucide="chevron-down" aria-hidden="true"></i></summary>
<ul class="cx-impact-guest-list">${leavingGuestRows.join("")}</ul>
</details>
</section>
<section class="cx-impact-financial" aria-label="Refund impact">
<div class="refund">
<div class="cx-impact-refund-head"><span>${cx.scope==="guest"?"Refund payable":"Estimated refund"}</span><em class="${supplementSummary.unresolvedLines?"warning":""}">${estimateStatus}</em></div>
<strong data-cximpactrefund>${fmt(quote.refund)}</strong>
<p>${estimateNote}</p>
</div>
<div class="cx-impact-financial-calculation">
<h3>How this estimate is calculated</h3>
<dl class="cx-impact-financial-breakdown" aria-label="Refund calculation">${refundCalculationHtml}</dl>
</div>
</section>
</div>
</aside>`;
}
function partialConfirmationReviewHtml(q){
const selectedGuests=q.guests||[];
const remainingGuests=activeGuests(detail);
const beforeGuestCount=detail.guests.length;
const afterGuestCount=remainingGuests.length;
const beforeCabinCount=detail.b.cabins.length;
const afterCabinCount=new Set(remainingGuests.map(guest=>String(guest.cabin))).size;
const originalPrimary=detail.guests[0]||null;
const nextPrimary=remainingGuests[0]||originalPrimary;
const primaryChanged=Boolean(originalPrimary&&nextPrimary&&originalPrimary.guestId!==nextPrimary.guestId);
const allocations=ensurePartialSupplementAllocations();
const supplementSummary=partialAllocationSummary(allocations);
const selectedGuestsByCabin=selectedGuests.reduce((groups,guest)=>{
const key=String(guest.cabin);
if(!groups.has(key))groups.set(key,[]);
groups.get(key).push(guest);
return groups;
},new Map());
const guestGroups=[...selectedGuestsByCabin.values()].map(guests=>{
const cabin=guests[0].cabin;
const cabinIndex=detail.b.cabins.indexOf(cabin);
const room=detail.cabinPlan[cabinIndex]?.room||cabin;
const cabinGuests=detail.guests.filter(guest=>String(guest.cabin)===String(cabin));
const cabinReleased=!remainingGuests.some(guest=>String(guest.cabin)===String(cabin));
const rows=guests.map(guest=>`<li><span class="cx-confirm-guest-avatar" aria-hidden="true">${esc(initials(guest.name))}</span><span class="cx-confirm-guest-copy"><strong>${esc(guest.name)}</strong><small>${esc(PASSENGER_TYPE[guest.band])}</small></span></li>`).join("");
const groupId=`partialReviewGuestsCabin${cabinIndex+1}`;
return `<section class="cx-confirm-guest-group" aria-labelledby="${groupId}"><header><div><h5 id="${groupId}">Cabin ${cabinIndex+1}</h5><small>Room ${esc(room)}</small></div><span class="${cabinReleased?"released":""}">${cabinReleased?"Cabin released":`${guests.length} of ${cabinGuests.length} leaving`}</span></header><ul class="cx-confirm-guest-list">${rows}</ul></section>`;
}).join("");
const supplementOutcomeRows=allocations.flatMap(allocation=>{
const sourceGuest=detail.guests.find(guest=>guest.guestId===allocation.sourceGuestId);
return allocation.lines.map(line=>{
const supplement=SUPP_BY_ID[line.suppId];
const destination=line.destination==="remove"?null:detail.guests.find(guest=>guest.guestId===line.destination);
const outcome=line.destination==="remove"
?`<em>Removed</em>`
:`<span class="cx-confirm-supplement-recipient"><small>Retained by</small><strong>${esc(destination?.name||"Remaining guest")}</strong></span>`;
return {removed:line.destination==="remove",html:`<li class="${line.destination==="remove"?"removed":""}"><span class="cx-confirm-supplement-icon" aria-hidden="true">${supplement?.emoji||"&bull;"}</span><span><strong>${esc(supplement?.name||line.suppId)}</strong><small>From ${esc(sourceGuest?.name||"guest leaving")} &middot; Quantity ${line.quantity}</small></span>${outcome}</li>`};
});
});
const retainedSupplementRows=supplementOutcomeRows.filter(row=>!row.removed).map(row=>row.html).join("");
const removedSupplementRows=supplementOutcomeRows.filter(row=>row.removed).map(row=>row.html).join("");
const penaltyPct=Math.round(q.tier.pct*100);
const guestCountLabel=`${selectedGuests.length} guest${selectedGuests.length===1?"":"s"}`;
const cancellationPolicy=cx.noShow
?`No-show policy applied &middot; ${penaltyPct}% penalty`
:`${esc(q.tier.label)} &middot; ${penaltyPct?`${penaltyPct}% penalty`:"No penalty"}`;
const protectionOutcome=q.insuredCount
?(cx.keepInsurance?`Retained for ${q.insuredCount} guest${q.insuredCount===1?"":"s"}`:"Included in the refund calculation")
:"Not applicable";
const refundCalculation=cx.overrideOn?`Manual override &middot; ${fmt(q.refund)}`:"Calculated refund";
const bookingPricingBefore=priceDetail(cancellationPricingDetail());
const bookingTotalBefore=bookingPricingBefore.total;
const paidToDate=bookingPricingBefore.paidToDate;
const bookingTotalAfter=Math.max(0,roundMoney(bookingTotalBefore-q.total));
const bookingValueDecrease=roundMoney(bookingTotalBefore-bookingTotalAfter);
const remainingPaidOnBooking=Math.max(0,roundMoney(paidToDate-q.paid));
const remainingBalanceDue=Math.max(0,roundMoney(bookingTotalAfter-remainingPaidOnBooking));
const remainingCreditDue=Math.max(0,roundMoney(remainingPaidOnBooking-bookingTotalAfter));
const paidAmountRetained=Math.max(0,roundMoney(q.paid-q.refund));
const uncollectedPortion=q.cappedByPaid?Math.max(0,roundMoney(q.computed-q.paid)):0;
const manualAdjustment=cx.overrideOn?roundMoney(q.refund-q.capped):0;
const refundCalculationItems=[{
label:`Cancelled booking value`,
sub:`${selectedGuests.length} guest${selectedGuests.length===1?"":"s"} leaving`,
amount:q.total
}];
if(q.insRetained>0.005)refundCalculationItems.push({
label:"Travel protection retained",
sub:`Policy stays active for ${q.insuredCount} guest${q.insuredCount===1?"":"s"}`,
amount:-q.insRetained,
deduction:true
});
if(q.penalty>0.005)refundCalculationItems.push({
label:`Cancellation penalty (${penaltyPct}%)`,
sub:`${q.tier.label} · ${fmt(q.protectedTaxes)} taxes and port fees excluded`,
amount:-q.penalty,
deduction:true
});
if(uncollectedPortion>0.005)refundCalculationItems.push({
label:"Uncollected portion",
sub:"Excluded because it was not paid",
amount:-uncollectedPortion,
deduction:true
});
if(cx.overrideOn&&Math.abs(manualAdjustment)>0.005)refundCalculationItems.push({
label:"Manual adjustment",
sub:"Approved refund override",
amount:manualAdjustment,
adjustment:true
});
const refundCalculationRows=refundCalculationItems.map(item=>{
const hasAmount=Math.abs(item.amount)>0.005;
const sign=item.adjustment&&hasAmount?(item.amount>0?"+":"−"):item.deduction&&hasAmount?"−":"";
const state=item.adjustment?(item.amount>0?" addition":" deduction"):item.deduction&&hasAmount?" deduction":"";
return `<div class="cx-confirm-refund-calculation-row${state}"><dt><strong>${item.label}</strong><span>${item.sub}</span></dt><dd>${sign}${fmt(Math.abs(item.amount))}</dd></div>`;
}).join("");
const refundHeroNote=cx.overrideOn
?`Confirmed manual amount · calculated refund was ${fmt(q.capped)}`
:`From ${fmt(bookingValueDecrease)} in cancelled booking value`;
const destinationSource=CX_SOURCES.find(source=>source.id===cx.source);
const destinationTitle=destinationSource?.title||"Refund destination";
const card=cardFor(detail.b);
const wallet=cancelWallet();
const destinationAccount=cx.source==="original"
?`${card.brand} ending in ${card.last4}`
:cx.source==="wallet"
?`Wallet ${wallet.id}`
:cx.source==="cheque"
?cx.chequeAddr.trim()
:`${fmt(money(cx.splitCard))} to ${card.brand} ending in ${card.last4} · ${fmt(money(cx.splitWallet))} to wallet ${wallet.id}`;
const destinationRecipient=cx.source==="cheque"?cx.chequePayee.trim():cx.source==="wallet"?wallet.holder:card.holder;
const destinationTiming=cx.source==="original"
?"Expected in 5–10 business days"
:cx.source==="wallet"
?"Credited after confirmation"
:cx.source==="cheque"
?"Processing starts after confirmation"
:"Card timing varies; wallet credit starts after confirmation";
const postCancellationPosition=remainingCreditDue>0.005
?{label:"Credit after cancellation",value:remainingCreditDue,note:"Credit remaining on the active booking"}
:remainingBalanceDue>0.005
?{label:"Balance due after cancellation",value:remainingBalanceDue,note:"Still due on the active booking"}
:{label:"Payment status after cancellation",value:0,note:"Active booking is paid in full"};
const refundCalculationHasException=cx.overrideOn||q.insRetained>0.005||q.penalty>0.005||uncollectedPortion>0.005;
const refundCalculationNote=q.penalty>0.005
?`${fmt(q.protectedTaxes)} in taxes and port fees are excluded from the penalty base.`
:cx.overrideOn
?"The calculated amount is reconciled with the confirmed manual override."
:uncollectedPortion>0.005
?"The refund is limited to the amount collected for the guests leaving."
:"Only amounts that affect the refund are shown.";
const manualAdjustmentSign=manualAdjustment>0?"+":"−";
return `<section class="cx-confirm-overview" aria-label="Cancellation review summary">
<div class="cx-confirm-summary-grid">
<section class="cx-confirm-summary-card cx-confirm-booking-summary" aria-labelledby="partialReviewBookingChangesTitle">
<header class="cx-confirm-summary-card-head">
<div class="cx-confirm-summary-heading"><span class="cx-confirm-summary-icon" aria-hidden="true">${SVG_CLIPBOARD_LIST}</span><h3 id="partialReviewBookingChangesTitle">Cancellation summary</h3></div>
</header>
<section class="cx-confirm-summary-section" aria-labelledby="partialReviewBookingAfterTitle">
<header><h4 id="partialReviewBookingAfterTitle">Booking after cancellation</h4></header>
<dl class="cx-confirm-booking-changes">
<div><dt>Guests remaining</dt><dd><strong>${afterGuestCount}</strong><span>${beforeGuestCount-afterGuestCount} removed from ${beforeGuestCount}</span></dd></div>
<div><dt>Cabins remaining</dt><dd><strong>${afterCabinCount}</strong><span>${beforeCabinCount===afterCabinCount?"None released":`${beforeCabinCount-afterCabinCount} released`}</span></dd></div>
<div class="primary"><dt>Primary guest</dt><dd><strong>${esc(nextPrimary?.name||"—")}</strong><span class="${primaryChanged?"changed":""}">${primaryChanged?"Changed":"Unchanged"}</span>${primaryChanged?`<small>Replaces ${esc(originalPrimary?.name||"previous primary")}</small>`:""}</dd></div>
</dl>
</section>
<section class="cx-confirm-summary-section" aria-labelledby="partialReviewRecordTitle">
<header><h4 id="partialReviewRecordTitle">Cancellation record</h4></header>
<dl class="cx-confirm-record">
<div><dt>Reason</dt><dd>${esc(cx.reason)}</dd></div>
<div><dt>Internal note</dt><dd>${cx.note.trim()?esc(cx.note.trim()):"Not provided"}</dd></div>
<div><dt>Cancellation policy</dt><dd>${cancellationPolicy}</dd></div>
<div><dt>Travel protection</dt><dd>${protectionOutcome}</dd></div>
<div><dt>Refund calculation</dt><dd>${refundCalculation}</dd></div>
${cx.overrideOn?`<div><dt>Override justification</dt><dd>${esc(cx.overrideReason.trim())}</dd></div>`:""}
</dl>
</section>
<section class="cx-confirm-summary-section cx-confirm-guests-section" aria-labelledby="partialReviewGuestsTitle">
<header><h4 id="partialReviewGuestsTitle">Guests leaving</h4><span class="danger">${guestCountLabel}</span></header>
<div class="cx-confirm-guest-groups">${guestGroups}</div>
</section>
<section class="cx-confirm-summary-section" aria-labelledby="partialReviewSupplementsTitle">
<header><div><h4 id="partialReviewSupplementsTitle">Supplement outcome</h4><p>${supplementSummary.retainedLines} retained &middot; ${supplementSummary.removedLines} removed</p></div></header>
${supplementOutcomeRows.length?`<div class="cx-confirm-supplement-groups">
${retainedSupplementRows?`<section class="cx-confirm-supplement-group retained" aria-labelledby="partialReviewRetainedSupplementsTitle"><header><h5 id="partialReviewRetainedSupplementsTitle">Retained on booking</h5><span>${supplementSummary.retainedLines}</span></header><ul class="cx-confirm-supplement-list">${retainedSupplementRows}</ul></section>`:""}
${removedSupplementRows?`<section class="cx-confirm-supplement-group removed" aria-labelledby="partialReviewRemovedSupplementsTitle"><header><h5 id="partialReviewRemovedSupplementsTitle">Removed from booking</h5><span>${supplementSummary.removedLines}</span></header><ul class="cx-confirm-supplement-list">${removedSupplementRows}</ul></section>`:""}
</div>`:`<p class="cx-confirm-empty">No supplements are affected by this cancellation.</p>`}
</section>
</section>
<section class="cx-confirm-summary-card cx-confirm-refund-summary" aria-labelledby="partialReviewRefundSummaryTitle">
<header class="cx-confirm-summary-card-head cx-confirm-refund-head"><div class="cx-confirm-summary-heading"><span class="cx-confirm-summary-icon" aria-hidden="true">${SVG_RECEIPT}</span><h3 id="partialReviewRefundSummaryTitle">Refund summary</h3></div><div class="cx-confirm-refund-badges">${cx.overrideOn?`<em class="override">Manual override confirmed</em>`:""}<em class="policy ${penaltyPct?"warning":""}">${penaltyPct?`${penaltyPct}% cancellation penalty`:"0% cancellation penalty"}</em></div></header>
<section class="cx-confirm-refund-hero${cx.overrideOn?" is-overridden":""}" aria-labelledby="partialReviewRefundPayableTitle">
<div><h4 id="partialReviewRefundPayableTitle">Refund to issue</h4><span>${cx.overrideOn?"Confirmed override":"Calculated amount"}</span></div>
<strong>${fmt(q.refund)}</strong>
<p>${refundHeroNote}</p>
<dl class="cx-confirm-refund-delivery" aria-label="Refund delivery">
<div><dt>Refund to</dt><dd><strong>${esc(destinationTitle)}</strong><span>${esc(destinationAccount)}</span></dd></div>
<div><dt>Expected</dt><dd><strong>${esc(destinationTiming)}</strong><span>${esc(destinationRecipient)}</span></dd></div>
</dl>
</section>
${cx.overrideOn?`<section class="cx-confirm-override-review" aria-labelledby="partialReviewOverrideTitle">
<header><div><span>Manual exception</span><h4 id="partialReviewOverrideTitle">Override reconciliation</h4></div><em>Confirmed</em></header>
<dl>
<div><dt>Calculated refund</dt><dd>${fmt(q.capped)}</dd></div>
${Math.abs(manualAdjustment)>0.005?`<div class="adjustment ${manualAdjustment>0?"addition":"deduction"}"><dt>Manual adjustment</dt><dd>${manualAdjustmentSign}${fmt(Math.abs(manualAdjustment))}</dd></div>`:""}
</dl>
<p><strong>Justification</strong><span>${esc(cx.overrideReason.trim())}</span></p>
</section>`:""}
<section class="cx-confirm-booking-value" aria-labelledby="partialReviewBookingValueTitle">
<header><h4 id="partialReviewBookingValueTitle">Remaining booking</h4><p>Financial position after cancelling ${guestCountLabel}.</p></header>
<dl class="cx-confirm-payment-position" aria-label="Remaining booking payment position">
<div><dt><strong>Updated booking total</strong><span>Previously ${fmt(bookingTotalBefore)}</span></dt><dd>${fmt(bookingTotalAfter)}</dd></div>
<div><dt><strong>Payments applied to remaining booking</strong><span>Allocated to active guests</span></dt><dd>${fmt(remainingPaidOnBooking)}</dd></div>
<div class="total${remainingCreditDue>0.005?" credit":""}"><dt><strong>${postCancellationPosition.label}</strong><span>${postCancellationPosition.note}</span></dt><dd>${fmt(postCancellationPosition.value)}</dd></div>
</dl>
</section>
<details class="cx-confirm-refund-calculation"${refundCalculationHasException?" open":""}>
<summary><div><h4 id="partialReviewRefundCalculationTitle">How this refund is calculated</h4><p>${refundCalculationNote}</p></div><span>${refundCalculationHasException?"Exception details":"View details"}</span></summary>
<div class="cx-confirm-refund-calculation-body" aria-labelledby="partialReviewRefundCalculationTitle">
<dl aria-label="Refund calculation">${refundCalculationRows}</dl>
<dl class="cx-confirm-refund-total"><div><dt><strong>Refund to issue</strong><span>${cx.overrideOn?"Confirmed manual amount":"Final calculated amount"}</span></dt><dd>${fmt(q.refund)}</dd></div></dl>
<p class="cx-confirm-refund-reconciliation">${paidAmountRetained>0.005?`${fmt(q.paid)} was collected for the guests leaving: ${fmt(q.refund)} will be refunded and ${fmt(paidAmountRetained)} retained.`:`The full ${fmt(q.paid)} collected for the guests leaving will be refunded.`}</p>
</div>
</details>
</section>
</div>
</section>`;
}
function fullCancellationReviewHtml(q){
const pricing=priceDetail(cancellationPricingDetail());
const guests=activeGuests(detail);
const guestCount=guests.length;
const cabinCount=detail.b.cabins.length;
const guestCountLabel=`${guestCount} guest${guestCount===1?"":"s"}`;
const cabinCountLabel=`${cabinCount} cabin${cabinCount===1?"":"s"}`;
const penaltyPct=Math.round(q.tier.pct*100);
const cancellationPolicy=cx.noShow
?`No-show policy applied &middot; ${penaltyPct}% penalty`
:`${esc(q.tier.label)} &middot; ${penaltyPct?`${penaltyPct}% penalty`:"No penalty"}`;
const protectionOutcome=q.insuredCount
?(cx.keepInsurance?`Retained for ${q.insuredCount} guest${q.insuredCount===1?"":"s"}`:"Included in the refund calculation")
:"Not applicable";
const refundCalculation=cx.overrideOn?`Manual override &middot; ${fmt(q.refund)}`:"Calculated refund";
const guestGroups=detail.b.cabins.map((cabin,cabinIndex)=>{
const cabinGuests=guests.filter(guest=>String(guest.cabin)===String(cabin));
if(!cabinGuests.length)return "";
const room=detail.cabinPlan[cabinIndex]?.room||cabin;
const cabinCategory=catEntry(detail.cabinPlan[cabinIndex]?.code).type;
const rows=cabinGuests.map(guest=>`<li><span class="cx-confirm-guest-avatar" aria-hidden="true">${esc(initials(guest.name))}</span><span class="cx-confirm-guest-copy"><strong>${esc(guest.name)}</strong><small>${esc(PASSENGER_TYPE[guest.band]||"Guest")}</small></span></li>`).join("");
return `<section class="cx-confirm-guest-group" aria-labelledby="fullReviewGuestsCabin${cabinIndex+1}"><header><div><h5 id="fullReviewGuestsCabin${cabinIndex+1}">Cabin ${cabinIndex+1}</h5><small>Room ${esc(room)} &middot; ${esc(cabinCategory)}</small></div><span class="released">Cabin released</span></header><ul class="cx-confirm-guest-list">${rows}</ul></section>`;
}).join("");
const extras=guests.flatMap(guest=>{
const pkg=guest.pkg&&PKG_BY_ID[guest.pkg]?PKG_BY_ID[guest.pkg]:null;
const packageLine=pkg?[{kind:"package",name:pkg.name,emoji:pkg.emoji,guest:guest.name,quantity:1,value:roundMoney(pkg.rate*pricing.nights),note:`${pricing.nights}-night package`}]:[];
const supplementLines=Object.entries(guest.supps||{}).filter(([,quantity])=>Number(quantity)>0).map(([id,quantity])=>{
const supplement=SUPP_BY_ID[id];
const included=Boolean(pkg?.includedSupps.includes(id));
return{kind:"supplement",name:supplement?.name||id,emoji:supplement?.emoji||"&bull;",guest:guest.name,quantity:Number(quantity),value:included?0:roundMoney((supplement?.pricePP||0)*Number(quantity)),note:included?`Included in ${pkg.name} package`:"Supplement"};
});
return packageLine.concat(supplementLines);
});
const extraRows=extras.map(extra=>`<li class="removed"><span class="cx-confirm-supplement-icon" aria-hidden="true">${extra.emoji}</span><span><strong>${esc(extra.name)}</strong><small>From ${esc(extra.guest)} &middot; ${extra.note} &middot; Quantity ${extra.quantity}${extra.value>0.005?` &middot; ${fmt(extra.value)}`:""}</small></span><em>Removed</em></li>`).join("");
const paidAmountRetained=Math.max(0,roundMoney(q.paid-q.refund));
const uncollectedPortion=q.cappedByPaid?Math.max(0,roundMoney(q.computed-q.paid)):0;
const manualAdjustment=cx.overrideOn?roundMoney(q.refund-q.capped):0;
const calculationItems=[{label:"Cancelled booking value",sub:`${guestCountLabel} and ${cabinCountLabel}`,amount:q.total}];
if(q.insRetained>0.005)calculationItems.push({label:"Travel protection retained",sub:`Policy stays active for ${q.insuredCount} guest${q.insuredCount===1?"":"s"}`,amount:-q.insRetained,deduction:true});
if(q.penalty>0.005)calculationItems.push({label:`Cancellation penalty (${penaltyPct}%)`,sub:`${q.tier.label} · ${fmt(q.protectedTaxes)} taxes and port fees excluded`,amount:-q.penalty,deduction:true});
if(uncollectedPortion>0.005)calculationItems.push({label:"Uncollected portion",sub:"Excluded because it was not paid",amount:-uncollectedPortion,deduction:true});
if(cx.overrideOn&&Math.abs(manualAdjustment)>0.005)calculationItems.push({label:"Manual adjustment",sub:"Approved refund override",amount:manualAdjustment,adjustment:true});
const calculationRows=calculationItems.map(item=>{
const hasAmount=Math.abs(item.amount)>0.005;
const sign=item.adjustment&&hasAmount?(item.amount>0?"+":"−"):item.deduction&&hasAmount?"−":"";
const state=item.adjustment?(item.amount>0?" addition":" deduction"):item.deduction&&hasAmount?" deduction":"";
return `<div class="cx-confirm-refund-calculation-row${state}"><dt><strong>${item.label}</strong><span>${item.sub}</span></dt><dd>${sign}${fmt(Math.abs(item.amount))}</dd></div>`;
}).join("");
const destinationSource=CX_SOURCES.find(source=>source.id===cx.source);
const destinationTitle=destinationSource?.title||"Refund destination";
const card=cardFor(detail.b);
const wallet=cancelWallet();
const destinationAccount=cx.source==="original"
?`${card.brand} ending in ${card.last4}`
:cx.source==="wallet"
?`Wallet ${wallet.id}`
:cx.source==="cheque"
?cx.chequeAddr.trim()
:`${fmt(money(cx.splitCard))} to ${card.brand} ending in ${card.last4} · ${fmt(money(cx.splitWallet))} to wallet ${wallet.id}`;
const destinationRecipient=cx.source==="cheque"?cx.chequePayee.trim():cx.source==="wallet"?wallet.holder:card.holder;
const destinationTiming=cx.source==="original"
?"Expected in 5–10 business days"
:cx.source==="wallet"
?"Credited after confirmation"
:cx.source==="cheque"
?"Processing starts after confirmation"
:"Card timing varies; wallet credit starts after confirmation";
const refundHeroNote=cx.overrideOn
?`Confirmed manual amount · calculated refund was ${fmt(q.capped)}`
:`From ${fmt(q.total)} in cancelled booking value`;
const refundCalculationHasException=cx.overrideOn||q.insRetained>0.005||q.penalty>0.005||uncollectedPortion>0.005;
const refundCalculationNote=q.penalty>0.005
?`${fmt(q.protectedTaxes)} in taxes and port fees are excluded from the penalty base.`
:cx.overrideOn
?"The calculated amount is reconciled with the confirmed manual override."
:uncollectedPortion>0.005
?"The refund is limited to the amount collected before the booking closes."
:"Only amounts that affect the refund are shown.";
const manualAdjustmentSign=manualAdjustment>0?"+":"−";
return `<section class="cx-confirm-overview cx-full-confirm-overview" aria-label="Full booking cancellation review">
<div class="cx-full-confirmation-warning" role="note">${SVG_INFO}<div><strong>This cancels the entire booking.</strong><span>Every guest, cabin, and included extra below will be removed when you confirm.</span></div></div>
<div class="cx-confirm-summary-grid">
<section class="cx-confirm-summary-card cx-confirm-booking-summary" aria-labelledby="fullReviewCancellationTitle">
<header class="cx-confirm-summary-card-head"><div class="cx-confirm-summary-heading"><span class="cx-confirm-summary-icon" aria-hidden="true">${SVG_CLIPBOARD_LIST}</span><h3 id="fullReviewCancellationTitle">Cancellation summary</h3></div></header>
<section class="cx-confirm-summary-section" aria-labelledby="fullReviewBookingAfterTitle">
<header><h4 id="fullReviewBookingAfterTitle">Booking after cancellation</h4></header>
<dl class="cx-confirm-booking-changes">
<div><dt>Guests remaining</dt><dd><strong>0</strong><span>${guestCount} removed</span></dd></div>
<div><dt>Cabins remaining</dt><dd><strong>0</strong><span>${cabinCount} released</span></dd></div>
<div class="booking-status"><dt>Booking status</dt><dd><strong>Cancelled</strong><span>Booking closed</span></dd></div>
</dl>
</section>
<section class="cx-confirm-summary-section" aria-labelledby="fullReviewRecordTitle">
<header><h4 id="fullReviewRecordTitle">Cancellation record</h4></header>
<dl class="cx-confirm-record">
<div><dt>Scope</dt><dd>Entire booking</dd></div>
<div><dt>Reason</dt><dd>${esc(cx.reason)}</dd></div>
<div><dt>Internal note</dt><dd>${cx.note.trim()?esc(cx.note.trim()):"Not provided"}</dd></div>
<div><dt>Cancellation policy</dt><dd>${cancellationPolicy}</dd></div>
<div><dt>Travel protection</dt><dd>${protectionOutcome}</dd></div>
<div><dt>Refund calculation</dt><dd>${refundCalculation}</dd></div>
${cx.overrideOn?`<div><dt>Override justification</dt><dd>${esc(cx.overrideReason.trim())}</dd></div>`:""}
</dl>
</section>
<section class="cx-confirm-summary-section cx-confirm-guests-section" aria-labelledby="fullReviewGuestsTitle">
<header><h4 id="fullReviewGuestsTitle">Guests being cancelled</h4><span class="danger">${guestCountLabel}</span></header>
<div class="cx-confirm-guest-groups">${guestGroups}</div>
</section>
<section class="cx-confirm-summary-section" aria-labelledby="fullReviewExtrasTitle">
<header><div><h4 id="fullReviewExtrasTitle">Booking extras being removed</h4><p>${pricing.units} supplement unit${pricing.units===1?"":"s"}${pricing.pkgCount?` &middot; ${pricing.pkgCount} package${pricing.pkgCount===1?"":"s"}`:""} &middot; ${fmt(pricing.supplements+pricing.packages)} total value</p></div></header>
${extras.length?`<div class="cx-confirm-supplement-groups"><section class="cx-confirm-supplement-group removed" aria-labelledby="fullReviewRemovedExtrasTitle"><header><h5 id="fullReviewRemovedExtrasTitle">Removed with booking</h5><span>${extras.length}</span></header><ul class="cx-confirm-supplement-list">${extraRows}</ul></section></div>`:`<p class="cx-confirm-empty">No supplements or packages are attached to this booking.</p>`}
</section>
</section>
<section class="cx-confirm-summary-card cx-confirm-refund-summary" aria-labelledby="fullReviewRefundSummaryTitle">
<header class="cx-confirm-summary-card-head cx-confirm-refund-head"><div class="cx-confirm-summary-heading"><span class="cx-confirm-summary-icon" aria-hidden="true">${SVG_RECEIPT}</span><h3 id="fullReviewRefundSummaryTitle">Refund summary</h3></div><div class="cx-confirm-refund-badges">${cx.overrideOn?`<em class="override">Manual override confirmed</em>`:""}<em class="policy ${penaltyPct?"warning":""}">${penaltyPct?`${penaltyPct}% cancellation penalty`:"0% cancellation penalty"}</em></div></header>
<section class="cx-confirm-refund-hero${cx.overrideOn?" is-overridden":""}" aria-labelledby="fullReviewRefundPayableTitle">
<div><h4 id="fullReviewRefundPayableTitle">Refund to issue</h4><span>${cx.overrideOn?"Confirmed override":"Calculated amount"}</span></div>
<strong>${fmt(q.refund)}</strong>
<p>${refundHeroNote}</p>
<dl class="cx-confirm-refund-delivery" aria-label="Refund delivery">
<div><dt>Refund to</dt><dd><strong>${esc(destinationTitle)}</strong><span>${esc(destinationAccount)}</span></dd></div>
<div><dt>Expected</dt><dd><strong>${esc(destinationTiming)}</strong><span>${esc(destinationRecipient)}</span></dd></div>
</dl>
</section>
${cx.overrideOn?`<section class="cx-confirm-override-review" aria-labelledby="fullReviewOverrideTitle">
<header><div><span>Manual exception</span><h4 id="fullReviewOverrideTitle">Override reconciliation</h4></div><em>Confirmed</em></header>
<dl>
<div><dt>Calculated refund</dt><dd>${fmt(q.capped)}</dd></div>
${Math.abs(manualAdjustment)>0.005?`<div class="adjustment ${manualAdjustment>0?"addition":"deduction"}"><dt>Manual adjustment</dt><dd>${manualAdjustmentSign}${fmt(Math.abs(manualAdjustment))}</dd></div>`:""}
</dl>
<p><strong>Justification</strong><span>${esc(cx.overrideReason.trim())}</span></p>
</section>`:""}
<section class="cx-confirm-booking-value" aria-labelledby="fullReviewBookingValueTitle">
<header><h4 id="fullReviewBookingValueTitle">Closed booking</h4><p>Financial position after the entire booking is cancelled.</p></header>
<dl class="cx-confirm-payment-position" aria-label="Closed booking payment position">
<div><dt><strong>Booking total after cancellation</strong><span>Previously ${fmt(pricing.total)}</span></dt><dd>${fmt(0)}</dd></div>
<div><dt><strong>Collected before cancellation</strong><span>Total payments received</span></dt><dd>${fmt(q.paid)}</dd></div>
${pricing.pending>0.005?`<div><dt><strong>Uncollected before cancellation</strong><span>Closed with the booking; never refundable</span></dt><dd>${fmt(pricing.pending)}</dd></div>`:""}
<div class="total"><dt><strong>Booking balance after cancellation</strong><span>The closed booking has no remaining balance</span></dt><dd>${fmt(0)}</dd></div>
</dl>
</section>
<details class="cx-confirm-refund-calculation"${refundCalculationHasException?" open":""}>
<summary><div><h4 id="fullReviewRefundCalculationTitle">How this refund is calculated</h4><p>${refundCalculationNote}</p></div><span>${refundCalculationHasException?"Exception details":"View details"}</span></summary>
<div class="cx-confirm-refund-calculation-body" aria-labelledby="fullReviewRefundCalculationTitle">
<dl aria-label="Refund calculation">${calculationRows}</dl>
<dl class="cx-confirm-refund-total"><div><dt><strong>Refund to issue</strong><span>${cx.overrideOn?"Confirmed manual amount":"Final calculated amount"}</span></dt><dd>${fmt(q.refund)}</dd></div></dl>
<p class="cx-confirm-refund-reconciliation">${paidAmountRetained>0.005?`${fmt(q.paid)} was collected: ${fmt(q.refund)} will be refunded and ${fmt(paidAmountRetained)} retained.`:`The full ${fmt(q.paid)} collected on this booking will be refunded.`}</p>
</div>
</details>
</section>
</div>
</section>`;
}
function partialCancellationSelectionHtml(){
const selectedGuests=partialSelectedGuests(detail).filter(guest=>guest.pendingRemoval);
const actionBar=`<div class="cx-page-actionbar cx-partial-selection-actionbar" role="region" aria-label="Partial cancellation actions" aria-live="polite">
<button type="button" class="mf-rp-confirm" data-cxpartialcontinue${selectedGuests.length?"":" disabled"}>Continue</button>
</div>`;
return `<div class="cx-partial-page-layout">
${cancellationStepsHtml()}
<div class="cx-page-card cx-partial">
${cancellationPageHeader("Partial cancellation","Choose one or more guests who are leaving. The remaining booking will stay active.","Guest-level cancellation",{compactContext:true})}
${cancellationDraftNoticeHtml()}
${cancellationVersionAlertHtml()}
<section class="cx-page-workspace" aria-labelledby="partialCancellationSelectTitle">
<div class="cx-page-intro"><div><h2 id="partialCancellationSelectTitle">Select guests leaving the booking</h2><p>At least one guest must remain.</p></div></div>
${mfCabinBody({context:"partialCancellation",allowRoomChange:false,allowGuestAdd:false,allowGuestRemove:true})}
</section>
</div>
${partialCancellationImpactHtml()}
</div>${actionBar}`;
}
function partialSupplementLinesForGuest(guest){
return Object.entries(guest?.supps||{}).map(([suppId,rawQuantity])=>({
suppId,quantity:Math.max(0,Math.floor(Number(rawQuantity)||0))
})).filter(line=>SUPP_BY_ID[line.suppId]&&line.quantity>0);
}
function createPartialSupplementAllocation(guest){
const primary=activeGuests(detail)[0]||null;
return{
sourceGuestId:guest.guestId,
lines:partialSupplementLinesForGuest(guest).map(line=>{
const eligible=primary&&partialAllocationRecipients(detail,line).some(candidate=>candidate.guestId===primary.guestId);
return{...line,destination:eligible?primary.guestId:null};
})
};
}
function ensurePartialSupplementAllocations(){
const selectedGuests=partialSelectedGuests(detail);
const existing=new Map((cx.supplementAllocations||[]).map(allocation=>[allocation.sourceGuestId,allocation]));
cx.supplementAllocations=selectedGuests.map(guest=>{
const allocation=existing.get(guest.guestId)||createPartialSupplementAllocation(guest);
allocation.lines.forEach(line=>{
if(line.destination==="remove")return;
const eligible=partialAllocationRecipients(detail,line);
if(eligible.some(candidate=>candidate.guestId===line.destination))return;
const lineKey=`${allocation.sourceGuestId}::${line.suppId}`;
if(cx.supplementDecisionModes?.[lineKey]==="other"){line.destination=null;return;}
const primary=activeGuests(detail)[0]||null;
line.destination=primary&&eligible.some(candidate=>candidate.guestId===primary.guestId)?primary.guestId:null;
});
return allocation;
});
return cx.supplementAllocations;
}
function partialSupplementAllocationHtml(){
const guests=partialSelectedGuests(detail),allocations=ensurePartialSupplementAllocations();
if(!guests.length||!allocations.length)return partialCancellationSelectionHtml();
const summary=partialAllocationSummary(allocations);
const q=cancelQuote();
const primary=activeGuests(detail)[0]||null;
const allocationLines=allocations.flatMap(allocation=>allocation.lines);
const allDefaulted=summary.totalLines>0&&allocationLines.every(line=>line.destination===primary?.guestId);
const sharedDestination=allocationLines.length&&allocationLines[0].destination&&allocationLines[0].destination!=="remove"&&allocationLines.every(line=>line.destination===allocationLines[0].destination)
?allocationLines[0].destination:null;
const sharedRecipient=sharedDestination?detail.guests.find(guest=>guest.guestId===sharedDestination):null;
const allSupplementsRemoved=summary.totalLines>0&&summary.removedLines===summary.totalLines;
const bulkOutcomeTitle=allSupplementsRemoved
?"Remove from booking"
:sharedRecipient
?`Assign to ${sharedRecipient.name}`
:"Mixed outcomes";
const bulkOutcomeCopy=allSupplementsRemoved
?`All ${summary.totalLines} affected supplement${summary.totalLines===1?" is":"s are"} marked for removal.`
:sharedRecipient
?`All ${summary.totalLines} affected supplement${summary.totalLines===1?" uses":"s use"} this assignment unless changed below.`
:"The affected supplements currently have different assignments.";
const canResetAllToPrimary=allocations.some(allocation=>allocation.lines.some(line=>primary&&line.destination!==primary.guestId&&partialAllocationRecipients(detail,line).some(guest=>guest.guestId===primary.guestId)));
if(!cx.supplementDecisionModes)cx.supplementDecisionModes={};
if(!cx.supplementGroupsOpen)cx.supplementGroupsOpen={};
const introCopy=!summary.totalLines
?"No supplements are linked to the guests leaving the booking."
:summary.unresolvedLines
?`${summary.unresolvedLines} supplement${summary.unresolvedLines===1?" needs":"s need"} a decision before you can continue.`
:allDefaulted
?"Assign everything at once, then adjust only the exceptions below."
:"Review the updated assignments before you continue.";
const pageDescription=summary.totalLines
?"Review affected supplements, complete the cancellation record, and choose where to send the refund."
:"Complete the cancellation record and choose where to send the refund.";
const cancellationInfoReady=cancelStep1Ready()&&cancelDestReady(q);
return `<div class="cx-partial-page-layout">
${cancellationStepsHtml()}
<div class="cx-page-card cx-partial cx-allocation-page">
${cancellationPageHeader("Cancellation details",pageDescription,"Guest-level cancellation",{compactContext:true})}
${cancellationDraftNoticeHtml()}
${cancellationVersionAlertHtml()}
<section class="cx-page-workspace cx-cancellation-details-workspace" aria-labelledby="cancellationStepTitle">
<h2 class="sr-only" id="cancellationStepTitle" tabindex="-1">Complete cancellation details</h2>
<details class="cx-allocation-card" data-cxsupplementsection aria-labelledby="partialSupplementAllocationTitle"${cx.supplementSectionOpen!==false&&!cx.cancellationInfoOpen?" open":""}>
<summary class="cx-allocation-card-head"><span class="cx-allocation-card-icon" aria-hidden="true"><i data-lucide="package"></i></span><span class="cx-allocation-card-heading"><strong id="partialSupplementAllocationTitle">Supplement reallocation</strong><small>${introCopy}</small></span>${summary.totalLines?`<span class="cx-allocation-card-status" aria-label="${summary.totalLines} affected supplements, total value ${fmt(summary.totalValue)}">Total value &middot; ${fmt(summary.totalValue)}</span>`:""}<span class="cx-allocation-card-toggle" aria-hidden="true"><i data-lucide="chevron-down"></i></span></summary>
<div class="cx-allocation-list">${summary.totalLines?`<div class="cx-allocation-default-notice" role="group" aria-label="Actions for all affected supplements"><span class="cx-allocation-default-icon"><i data-lucide="layers-3" aria-hidden="true"></i></span><div class="cx-allocation-default-copy"><span>All affected supplements</span><strong>${esc(bulkOutcomeTitle)}</strong><small>${esc(bulkOutcomeCopy)}</small></div><div class="cx-allocation-default-actions"><button type="button" class="assign" data-cxsuppbulkassign aria-haspopup="dialog" aria-controls="partialSupplementAssignModal"><i data-lucide="users" aria-hidden="true"></i><span>${allSupplementsRemoved?"Reassign all":sharedRecipient?"Change assignment":"Assign all"}</span></button>${canResetAllToPrimary?`<button type="button" class="restore" data-cxsuppprimary><i data-lucide="rotate-ccw" aria-hidden="true"></i><span>${allSupplementsRemoved?"Undo removal":"Restore default"}</span></button>`:""}${allSupplementsRemoved?"":`<button type="button" class="remove" data-cxsuppremoveall aria-haspopup="dialog" aria-controls="removeAllSupplementsModal"><i data-lucide="trash-2" aria-hidden="true"></i><span>Remove all from booking</span></button>`}</div></div>`:`<div class="cx-allocation-empty" role="note"><i data-lucide="check-circle-2" aria-hidden="true"></i><span>No allocation decisions are required.</span></div>`}${allocations.filter(allocation=>allocation.lines.length).map((allocation,groupIndex)=>{
const source=detail.guests.find(guest=>guest.guestId===allocation.sourceGuestId);
const cabinIndex=source?detail.b.cabins.indexOf(source.cabin):-1;
const sourceValue=roundMoney(allocation.lines.reduce((total,line)=>total+(SUPP_BY_ID[line.suppId]?.pricePP||0)*line.quantity,0));
const unresolvedCount=allocation.lines.filter(line=>!line.destination).length;
const removedCount=allocation.lines.filter(line=>line.destination==="remove").length;
const changedCount=allocation.lines.filter(line=>line.destination&&line.destination!=="remove"&&line.destination!==primary?.guestId).length;
const sourceFullyRemoved=allocation.lines.length>0&&removedCount===allocation.lines.length;
const hasOpenDecision=allocation.lines.some(line=>cx.supplementDecisionOpen===`${allocation.sourceGuestId}::${line.suppId}`);
const sourceExpanded=hasOpenDecision||cx.supplementGroupsOpen[allocation.sourceGuestId]===true;
const sourceStatus=unresolvedCount
?`${unresolvedCount} decision${unresolvedCount===1?"":"s"} required`
:removedCount
?`${removedCount} removed from booking`
:changedCount
?`${changedCount} reassigned`
:`All assigned to ${primary?.name||"the primary guest"}`;
return `<details class="cx-allocation-source${unresolvedCount?" needs-review":removedCount||changedCount?" has-changes":""}${sourceFullyRemoved?" is-cancelled":""}" data-cxallocationsource="${esc(allocation.sourceGuestId)}"${sourceExpanded?" open":""}>
<summary class="cx-allocation-source-head"><div class="cx-allocation-source-person"><span class="cx-allocation-source-avatar" aria-hidden="true">${esc(initials(source?.name||"Guest"))}</span><span class="cx-allocation-source-identity"><small>Supplements from</small><span><strong id="allocationSource${groupIndex}">${esc(source?.name||"Selected guest")}</strong><em>${sourceFullyRemoved?"Cancelled":"Cancelling"}</em></span></span></div><span class="cx-allocation-source-overview"><strong>${allocation.lines.length} supplement${allocation.lines.length===1?"":"s"} &middot; ${fmt(sourceValue)}</strong><small>${esc(sourceStatus)}</small></span><span class="cx-allocation-source-toggle" aria-hidden="true"><i data-lucide="chevron-down"></i></span></summary>
<div class="cx-allocation-items" role="list" aria-label="Supplement assignments from ${esc(source?.name||"selected guest")}">
<div class="cx-allocation-table-head" aria-hidden="true"><span>Supplement</span><span>Qty / value</span><span>Assigned to</span><span>Actions</span></div>
${allocation.lines.map((line,index)=>{
const sup=SUPP_BY_ID[line.suppId],value=roundMoney(sup.pricePP*line.quantity);
const rowClass=line.destination==="remove"?" is-removing":line.destination?" is-resolved":" is-unresolved";
const controlId=`allocationSupplement${groupIndex}-${index}`;
const lineKey=`${allocation.sourceGuestId}::${line.suppId}`;
const eligibleRecipients=partialAllocationRecipients(detail,line);
const decisionOpen=cx.supplementDecisionOpen===lineKey;
const recipient=detail.guests.find(guest=>guest.guestId===line.destination);
const assignmentLabel=line.destination==="remove"?"Removed from booking":line.destination?esc(recipient?.name||"Eligible guest"):"Assignment required";
const assignmentState=line.destination==="remove"?"Removed":!line.destination?"Required":recipient?.guestId===primary?.guestId?"Default":"Changed";
const assignmentMeta=assignmentState==="Default"?"Primary guest · Default assignment":assignmentState==="Changed"?"Reassigned guest":"Select a remaining guest";
const canResetToPrimary=primary&&eligibleRecipients.some(guest=>guest.guestId===primary.guestId)&&line.destination!==primary.guestId;
return `<article class="cx-allocation-line${rowClass}" role="listitem" aria-labelledby="${controlId}">
<div class="cx-allocation-line-main">
<div class="cx-allocation-item">
<span class="mf-supp-emoji-box" aria-hidden="true"><span class="mf-supp-emoji">${sup.emoji}</span></span>
<span class="mf-supp-det"><span class="mf-supp-category">${esc(sup.cat)}</span><span class="mf-supp-title"><span class="mf-supp-name" id="${controlId}">${esc(sup.name)}</span></span></span>
</div>
<span class="cx-allocation-item-meta" aria-label="Quantity ${line.quantity}, value ${fmt(value)}"><span>Qty ${line.quantity}</span><strong>${fmt(value)}</strong></span>
<div class="cx-allocation-line-assignment"><span class="cx-allocation-line-label">Assigned to</span>${line.destination==="remove"
?`<span class="cx-allocation-removed"><strong>${assignmentLabel}</strong><small>${fmt(value)} enters refund</small></span>`
:`<button type="button" class="cx-allocation-trigger" data-cxsuppchange data-cxsuppsource="${esc(allocation.sourceGuestId)}" data-cxsuppdest="${esc(line.suppId)}" aria-haspopup="dialog" aria-expanded="${decisionOpen}" aria-controls="partialSupplementAssignModal"><span class="cx-allocation-trigger-avatar ${assignmentState.toLowerCase()}" aria-hidden="true">${assignmentState==="Required"?"!":esc(initials(recipient?.name||"Guest"))}</span><span class="cx-allocation-trigger-copy"><strong>${assignmentLabel}</strong><small class="${assignmentState.toLowerCase()}">${assignmentMeta}</small></span><span class="cx-allocation-trigger-action">${assignmentState==="Required"?"Select":"Change"}</span></button>`}</div>
<div class="cx-allocation-assignment-actions">${line.destination==="remove"&&canResetToPrimary?`<button type="button" class="cx-allocation-restore-action" data-cxsuppundo data-cxsuppsource="${esc(allocation.sourceGuestId)}" data-cxsuppdest="${esc(line.suppId)}" aria-label="Restore ${esc(sup.name)} to primary guest" title="Restore to primary guest"><i data-lucide="rotate-ccw" aria-hidden="true"></i></button>`:line.destination!=="remove"?`<button type="button" class="cx-allocation-icon-action remove" data-cxsuppremove data-cxsuppsource="${esc(allocation.sourceGuestId)}" data-cxsuppdest="${esc(line.suppId)}" aria-label="Remove ${esc(sup.name)} from booking" title="Remove supplement"><i data-lucide="trash-2" aria-hidden="true"></i></button>`:""}</div>
</div></article>`;
}).join("")}</div></details>`;
}).join("")}</div>
</details>
<details class="cx-cancellation-info${cancellationInfoReady?" is-complete":""}" data-cxcancellationinfo${cx.cancellationInfoOpen?" open":""}>
<summary class="cx-cancellation-info-summary"><span class="cx-cancellation-info-icon" aria-hidden="true"><i data-lucide="clipboard-list"></i></span><span class="cx-cancellation-info-copy"><strong>Cancellation information</strong><small>Reason, policy exceptions, and refund destination</small></span><span class="cx-cancellation-info-status">${cancellationInfoReady?"Complete":"Details required"}</span><span class="cx-cancellation-info-toggle" aria-hidden="true"><i data-lucide="chevron-down"></i></span></summary>
<div class="cx-cancellation-info-body">
<div class="cx-stage2-section cx-details-editor" data-cxstage2controls>
${cancelStep1Html(q,{includeStepHeading:false,integrated:true})}
</div>
<div class="cx-stage2-section cx-destination-editor" data-cxstage2controls>
${cancelStep2Html(q,{includeStepHeading:false,integrated:true})}
</div>
</div>
</details>
</section>
</div>
${partialCancellationImpactHtml()}
</div>
<div class="cx-page-actionbar cx-allocation-actionbar" role="region" aria-label="Cancellation details actions">
<button type="button" class="mf-rp-cancel" data-cxsuppback>&larr; Back to guest selection</button>
<div class="cx-foot-right">
<span class="cx-action-guidance" id="partialCancellationDecisionStatus" role="status" aria-live="polite">${partialCancellationDecisionGuidance(q,allocations)}</span>
<button type="button" class="mf-rp-confirm" data-cxsuppcontinue aria-describedby="partialCancellationDecisionStatus"${partialCancellationDecisionReady(q,allocations)?"":" disabled"}>Review cancellation</button>
</div>
</div>`;
}
function hydrateCancellationIcons(root){
if(window.lucide&&typeof window.lucide.createIcons==="function")window.lucide.createIcons({root});
}
function partialSupplementDecisionContext(){
if(!detail||!cx||cx.entry!=="partial"||cx.scope!==null||cx.partialStage!=="supplements"||!cx.supplementDecisionOpen)return null;
const separator=cx.supplementDecisionOpen.indexOf("::");
if(separator<0)return null;
const sourceId=cx.supplementDecisionOpen.slice(0,separator);
const suppId=cx.supplementDecisionOpen.slice(separator+2);
const allocation=ensurePartialSupplementAllocations().find(item=>item.sourceGuestId===sourceId);
const line=allocation?.lines.find(item=>item.suppId===suppId);
const sup=SUPP_BY_ID[suppId];
if(!allocation||!line||!sup||line.destination==="remove")return null;
return{sourceId,suppId,allocation,line,sup,source:detail.guests.find(guest=>guest.guestId===sourceId)};
}
function renderPartialSupplementAssignModal(){
const host=document.getElementById("partialSupplementAssignModal");
const context=partialSupplementDecisionContext();
if(!context){hideAccessibleModal(host);return;}
const{sourceId,suppId,line,sup,source}=context;
const primary=activeGuests(detail)[0]||null;
const eligibleRecipients=partialAllocationRecipients(detail,line);
const eligibleRecipientIds=new Set(eligibleRecipients.map(guest=>guest.guestId));
const remainingRecipients=activeGuests(detail);
const recipientGroups=detail.b.cabins.map((cabin,cabinIndex)=>({
cabinIndex,
room:detail.cabinPlan[cabinIndex]?.room||cabin,
guests:remainingRecipients.filter(guest=>guest.cabin===cabin)
})).filter(group=>group.guests.length);
const value=roundMoney(sup.pricePP*line.quantity);
const selectedEligible=eligibleRecipientIds.has(cx.supplementDecisionDraft);
host.dataset.returnFocus=`[data-cxsuppchange][data-cxsuppsource="${CSS.escape(sourceId)}"][data-cxsuppdest="${CSS.escape(suppId)}"]`;
host.innerHTML=`<div class="mf-modal-backdrop" data-cxsuppmodalcancel></div>
<section class="mf-modal-card cx-supplement-recipient-modal" role="dialog" aria-modal="true" aria-labelledby="partialSupplementAssignTitle" aria-describedby="partialSupplementAssignDescription">
<header class="mf-modal-head"><div class="mf-modal-title"><h2 class="mf-modal-h" id="partialSupplementAssignTitle">Choose a recipient</h2><span class="mf-modal-sub" id="partialSupplementAssignDescription">Assign this supplement to one guest who is staying on the booking.</span></div><button type="button" class="mf-modal-x" data-cxsuppmodalcancel aria-label="Close recipient selection">${SVG_X}</button></header>
<div class="mf-modal-body cx-supplement-recipient-body">
<div class="cx-supplement-recipient-product"><span class="mf-supp-emoji-box" aria-hidden="true"><span class="mf-supp-emoji">${sup.emoji}</span></span><span class="cx-supplement-recipient-product-copy"><small>${esc(sup.cat)}</small><strong>${esc(sup.name)}</strong><span>From ${esc(source?.name||"cancelling guest")}</span></span><span class="cx-supplement-recipient-product-value"><small>Qty ${line.quantity}</small><strong>${fmt(value)}</strong></span></div>
<div class="cx-supplement-recipient-groups" role="radiogroup" aria-label="Eligible recipients for ${esc(sup.name)}">${recipientGroups.length?recipientGroups.map(group=>`<section class="cx-supplement-recipient-cabin" aria-labelledby="partialSupplementCabin${group.cabinIndex}"><header><strong id="partialSupplementCabin${group.cabinIndex}">Cabin ${group.cabinIndex+1}</strong><span>Room ${esc(group.room)} &middot; ${group.guests.length} remaining guest${group.guests.length===1?"":"s"}</span></header><div>${group.guests.map(guest=>{
const guestEligible=eligibleRecipientIds.has(guest.guestId);
const guestAge=ageAt(guest.dobDate,detail.sail);
const ineligibleReason=guest.pkg&&PKG_BY_ID[guest.pkg]?.includedSupps.includes(sup.id)
?"Already included with this guest's package"
:(guest.band===3||guestAge<2)
?"Infant under 2 · Cannot receive supplements"
:sup.minAge!=null&&guestAge<sup.minAge
?`Requires age ${sup.minAge}+`
:"Unavailable for this supplement";
const isCurrent=line.destination===guest.guestId;
return `<label class="cx-supplement-recipient-option${guestEligible?"":" disabled"}"${guestEligible?"":` aria-disabled="true"`}><input type="radio" name="partialSupplementRecipient" value="${esc(guest.guestId)}"${guestEligible?" data-cxsupprecipient":" disabled"}${cx.supplementDecisionDraft===guest.guestId?" checked":""}><span class="cx-supplement-recipient-marker" aria-hidden="true"><i data-lucide="check"></i></span><span class="cx-supplement-recipient-avatar" aria-hidden="true">${esc(initials(guest.name))}</span><span class="cx-supplement-recipient-copy"><strong>${esc(guest.name)}${guest.guestId===primary?.guestId?"<em>Primary guest</em>":""}</strong><small>${guestEligible?`${esc(PASSENGER_TYPE[guest.band])} &middot; Cabin ${group.cabinIndex+1} &middot; Room ${esc(group.room)}`:esc(ineligibleReason)}</small></span>${isCurrent?`<span class="cx-supplement-recipient-current">Current</span>`:""}</label>`;
}).join("")}</div></section>`).join(""):`<p class="cx-supplement-recipient-empty">No remaining guest is available for this supplement.</p>`}</div>
</div>
<footer class="mf-modal-foot cx-supplement-recipient-foot"><span>One recipient receives the full quantity.</span><div><button type="button" class="cx-supplement-recipient-cancel" data-cxsuppmodalcancel>Cancel</button><button type="button" class="cx-supplement-recipient-confirm" data-cxsuppmodalconfirm${selectedEligible?"":" disabled"}>Save assignment</button></div></footer>
</section>`;
hydrateCancellationIcons(host);
showAccessibleModal(host,host.querySelector("input:checked")?"input:checked":"input:not(:disabled)");
}
function partialSupplementBulkContext(){
if(!detail||!cx||cx.entry!=="partial"||cx.scope!==null||cx.partialStage!=="supplements"||!cx.supplementBulkOpen)return null;
const allocations=ensurePartialSupplementAllocations().filter(allocation=>allocation.lines.length);
const lines=allocations.flatMap(allocation=>allocation.lines);
if(!lines.length)return null;
return{allocations,lines,summary:partialAllocationSummary(allocations)};
}
function renderPartialSupplementBulkAssignModal(){
const host=document.getElementById("partialSupplementAssignModal");
const context=partialSupplementBulkContext();
if(!context){hideAccessibleModal(host);return;}
const{lines,summary}=context;
const primary=activeGuests(detail)[0]||null;
const remainingRecipients=activeGuests(detail);
const recipientGroups=detail.b.cabins.map((cabin,cabinIndex)=>({
cabinIndex,
room:detail.cabinPlan[cabinIndex]?.room||cabin,
guests:remainingRecipients.filter(guest=>guest.cabin===cabin)
})).filter(group=>group.guests.length);
const sharedDestination=lines[0].destination&&lines[0].destination!=="remove"&&lines.every(line=>line.destination===lines[0].destination)?lines[0].destination:null;
const eligibilityByGuest=new Map(remainingRecipients.map(guest=>[guest.guestId,lines.filter(line=>partialAllocationRecipients(detail,line).some(candidate=>candidate.guestId===guest.guestId)).length]));
const selectedEligible=eligibilityByGuest.get(cx.supplementBulkDraft)===summary.totalLines;
host.dataset.returnFocus="[data-cxsuppbulkassign]";
host.innerHTML=`<div class="mf-modal-backdrop" data-cxsuppmodalcancel></div>
<section class="mf-modal-card cx-supplement-recipient-modal" role="dialog" aria-modal="true" aria-labelledby="partialSupplementBulkAssignTitle" aria-describedby="partialSupplementBulkAssignDescription">
<header class="mf-modal-head"><div class="mf-modal-title"><h2 class="mf-modal-h" id="partialSupplementBulkAssignTitle">Choose one recipient for all</h2><span class="mf-modal-sub" id="partialSupplementBulkAssignDescription">Assign every affected supplement to one eligible guest who is staying.</span></div><button type="button" class="mf-modal-x" data-cxsuppmodalcancel aria-label="Close bulk recipient selection">${SVG_X}</button></header>
<div class="mf-modal-body cx-supplement-recipient-body">
<div class="cx-supplement-recipient-product"><span class="cx-supplement-recipient-context-icon" aria-hidden="true"><i data-lucide="package"></i></span><span class="cx-supplement-recipient-product-copy"><small>Bulk assignment</small><strong>${summary.totalLines} supplement${summary.totalLines===1?"":"s"} from ${context.allocations.length} guest${context.allocations.length===1?"":"s"}</strong><span>Choose once, then adjust individual exceptions if needed.</span></span><span class="cx-supplement-recipient-product-value"><small>Total value</small><strong>${fmt(summary.totalValue)}</strong></span></div>
<div class="cx-supplement-recipient-groups" role="radiogroup" aria-label="Guests eligible to receive all supplements">${recipientGroups.map(group=>`<section class="cx-supplement-recipient-cabin" aria-labelledby="partialSupplementBulkCabin${group.cabinIndex}"><header><strong id="partialSupplementBulkCabin${group.cabinIndex}">Cabin ${group.cabinIndex+1}</strong><span>Room ${esc(group.room)} &middot; ${group.guests.length} remaining guest${group.guests.length===1?"":"s"}</span></header><div>${group.guests.map(guest=>{
const eligibleCount=eligibilityByGuest.get(guest.guestId)||0;
const guestEligible=eligibleCount===summary.totalLines;
const isCurrent=sharedDestination===guest.guestId;
return `<label class="cx-supplement-recipient-option${guestEligible?"":" disabled"}"${guestEligible?"":` aria-disabled="true"`}><input type="radio" name="partialSupplementBulkRecipient" value="${esc(guest.guestId)}"${guestEligible?" data-cxsuppbulkrecipient":" disabled"}${cx.supplementBulkDraft===guest.guestId?" checked":""}><span class="cx-supplement-recipient-marker" aria-hidden="true"><i data-lucide="check"></i></span><span class="cx-supplement-recipient-avatar" aria-hidden="true">${esc(initials(guest.name))}</span><span class="cx-supplement-recipient-copy"><strong>${esc(guest.name)}${guest.guestId===primary?.guestId?"<em>Primary guest</em>":""}</strong><small>${guestEligible?`Eligible for all ${summary.totalLines} supplements`:`Eligible for ${eligibleCount} of ${summary.totalLines} &middot; Use individual assignment for exceptions`}</small></span>${isCurrent?`<span class="cx-supplement-recipient-current">Current</span>`:""}</label>`;
}).join("")}</div></section>`).join("")}</div>
</div>
<footer class="mf-modal-foot cx-supplement-recipient-foot"><span>This replaces all individual assignments and removal choices.</span><div><button type="button" class="cx-supplement-recipient-cancel" data-cxsuppmodalcancel>Cancel</button><button type="button" class="cx-supplement-recipient-confirm" data-cxsuppbulkconfirm${selectedEligible?"":" disabled"}>Assign all</button></div></footer>
</section>`;
hydrateCancellationIcons(host);
showAccessibleModal(host,host.querySelector("input:checked")?"input:checked":"input:not(:disabled)");
}
function openPartialSupplementBulkAssignModal(){
const allocations=ensurePartialSupplementAllocations();
const lines=allocations.flatMap(allocation=>allocation.lines);
if(!lines.length)return;
const sharedDestination=lines[0].destination&&lines[0].destination!=="remove"&&lines.every(line=>line.destination===lines[0].destination)?lines[0].destination:null;
cx.supplementDecisionOpen=null;
cx.supplementDecisionDraft=null;
cx.supplementBulkOpen=true;
cx.supplementBulkDraft=sharedDestination;
cx.confirmRemoveAll=false;
renderPartialSupplementBulkAssignModal();
}
function confirmPartialSupplementBulkAssignment(){
const context=partialSupplementBulkContext();
if(!context){closePartialSupplementAssignModal();return;}
const selectedId=cx.supplementBulkDraft;
if(!context.lines.every(line=>partialAllocationRecipients(detail,line).some(guest=>guest.guestId===selectedId)))return;
const primary=activeGuests(detail)[0]||null;
context.allocations.forEach(allocation=>allocation.lines.forEach(line=>{
line.destination=selectedId;
cx.supplementDecisionModes[`${allocation.sourceGuestId}::${line.suppId}`]=selectedId===primary?.guestId?"primary":"other";
}));
const selectedGuest=detail.guests.find(guest=>guest.guestId===selectedId);
cx.supplementBulkOpen=false;
cx.supplementBulkDraft=null;
hideAccessibleModal(document.getElementById("partialSupplementAssignModal"));
renderCancellationWithFocus("[data-cxsuppbulkassign]");
requestAnimationFrame(()=>{
const status=document.getElementById("cancellationStatus");
if(status)status.textContent=`All ${context.summary.totalLines} supplements assigned to ${selectedGuest?.name||"the selected guest"}.`;
});
}
function openPartialSupplementAssignModal(sourceId,suppId){
const allocation=ensurePartialSupplementAllocations().find(item=>item.sourceGuestId===sourceId);
const line=allocation?.lines.find(item=>item.suppId===suppId);
if(!line||line.destination==="remove")return;
cx.supplementDecisionOpen=`${sourceId}::${suppId}`;
cx.supplementDecisionDraft=line.destination||null;
cx.supplementBulkOpen=false;
cx.supplementBulkDraft=null;
cx.confirmRemoveAll=false;
document.querySelector(`[data-cxsuppchange][data-cxsuppsource="${CSS.escape(sourceId)}"][data-cxsuppdest="${CSS.escape(suppId)}"]`)?.setAttribute("aria-expanded","true");
renderPartialSupplementAssignModal();
}
function closePartialSupplementAssignModal(){
const context=partialSupplementDecisionContext();
if(context)document.querySelector(`[data-cxsuppchange][data-cxsuppsource="${CSS.escape(context.sourceId)}"][data-cxsuppdest="${CSS.escape(context.suppId)}"]`)?.setAttribute("aria-expanded","false");
if(cx){cx.supplementDecisionOpen=null;cx.supplementDecisionDraft=null;cx.supplementBulkOpen=false;cx.supplementBulkDraft=null;}
hideAccessibleModal(document.getElementById("partialSupplementAssignModal"));
}
function confirmPartialSupplementAssignment(){
const context=partialSupplementDecisionContext();
if(!context){closePartialSupplementAssignModal();return;}
const{sourceId,suppId,line}=context;
const selectedId=cx.supplementDecisionDraft;
if(!partialAllocationRecipients(detail,line).some(guest=>guest.guestId===selectedId))return;
const primary=activeGuests(detail)[0]||null;
line.destination=selectedId;
cx.supplementDecisionModes[`${sourceId}::${suppId}`]=selectedId===primary?.guestId?"primary":"other";
cx.confirmRemoveAll=false;
cx.supplementDecisionOpen=null;
cx.supplementDecisionDraft=null;
hideAccessibleModal(document.getElementById("partialSupplementAssignModal"));
renderCancellationWithFocus(`[data-cxsuppchange][data-cxsuppsource="${CSS.escape(sourceId)}"][data-cxsuppdest="${CSS.escape(suppId)}"]`);
}
function renderRemoveAllSupplementsModal(){
const host=document.getElementById("removeAllSupplementsModal");
const validState=cx?.presentation==="page"&&cx.entry==="partial"&&cx.scope===null&&cx.partialStage==="supplements"&&cx.confirmRemoveAll;
if(!validState){hideAccessibleModal(host);return;}
const allocations=ensurePartialSupplementAllocations();
const summary=partialAllocationSummary(allocations);
if(!summary.totalLines||summary.removedLines===summary.totalLines){
cx.confirmRemoveAll=false;hideAccessibleModal(host);return;
}
const isSingleSupplement=summary.totalLines===1;
const titleCopy=isSingleSupplement?"Remove supplement?":"Remove all supplements?";
const descriptionCopy=isSingleSupplement
?"This supplement will be removed from the booking instead of reassigned."
:`All ${summary.totalLines} supplements will be removed from the booking instead of reassigned.`;
const confirmLabel=isSingleSupplement?"Remove supplement":"Remove all supplements";
host.dataset.returnFocus='[data-cxsuppremoveall]';
host.innerHTML=`<div class="mf-modal-backdrop" data-cxsuppremoveallcancel></div>
<div class="mf-modal-card cx-remove-all-modal" role="alertdialog" aria-modal="true" aria-labelledby="removeAllSupplementsTitle" aria-describedby="removeAllSupplementsDescription">
<header class="mf-modal-head">
<div class="cx-remove-all-title-row"><span class="cx-remove-all-icon" aria-hidden="true"><i data-lucide="trash-2"></i></span><div class="mf-modal-title"><h2 class="mf-modal-h" id="removeAllSupplementsTitle">${titleCopy}</h2></div></div>
<button type="button" class="mf-modal-x" data-cxsuppremoveallcancel aria-label="Cancel and close">${SVG_X}</button>
</header>
<div class="mf-modal-body">
<p class="cx-remove-all-description" id="removeAllSupplementsDescription">${descriptionCopy}</p>
<dl class="cx-remove-all-impact" id="removeAllSupplementsImpact" aria-label="Supplements affected">
<div><dt>Assignments</dt><dd>${summary.totalLines}</dd></div>
<div><dt>Value removed</dt><dd>${fmt(summary.totalValue)}</dd></div>
</dl>
<p class="cx-remove-all-note" id="removeAllSupplementsNote"><i data-lucide="info" aria-hidden="true"></i><span>The refund estimate will recalculate. Review the updated amount before continuing.</span></p>
</div>
<footer class="mf-modal-foot">
<button type="button" class="cx-remove-all-keep" data-cxsuppremoveallcancel>Cancel</button>
<button type="button" class="cx-remove-all-confirm" data-cxsuppremoveallconfirm><i data-lucide="trash-2" aria-hidden="true"></i><span>${confirmLabel}</span></button>
</footer>
</div>`;
hydrateCancellationIcons(host);
showAccessibleModal(host,".cx-remove-all-keep");
}
function openRemoveAllSupplementsModal(){
if(!cx||cx.entry!=="partial"||cx.scope!==null||cx.partialStage!=="supplements")return;
const summary=partialAllocationSummary(ensurePartialSupplementAllocations());
if(!summary.totalLines||summary.removedLines===summary.totalLines)return;
cx.confirmRemoveAll=true;
renderRemoveAllSupplementsModal();
}
function closeRemoveAllSupplementsModal(){
if(cx)cx.confirmRemoveAll=false;
hideAccessibleModal(document.getElementById("removeAllSupplementsModal"));
}
function confirmRemoveAllSupplements(){
if(!cx||cx.entry!=="partial"||cx.scope!==null||cx.partialStage!=="supplements"){
closeRemoveAllSupplementsModal();return;
}
const allocations=ensurePartialSupplementAllocations();
const summary=partialAllocationSummary(allocations);
if(!summary.totalLines){closeRemoveAllSupplementsModal();return;}
cx.supplementDecisionOpen=null;
cx.supplementDecisionDraft=null;
cx.supplementBulkOpen=false;
cx.supplementBulkDraft=null;
allocations.forEach(allocation=>allocation.lines.forEach(line=>{
line.destination="remove";
cx.supplementDecisionModes[`${allocation.sourceGuestId}::${line.suppId}`]="remove";
}));
cx.confirmRemoveAll=false;
hideAccessibleModal(document.getElementById("removeAllSupplementsModal"));
renderCancellationWithFocus("#partialSupplementAllocationTitle");
requestAnimationFrame(()=>{
const status=document.getElementById("cancellationStatus");
if(status)status.textContent=`All ${summary.totalLines} supplement assignment${summary.totalLines===1?"":"s"} marked for removal. Refund estimate updated.`;
});
}
function renderCancellationPage(){
const host=document.getElementById("cancellationPageContent");
const status=document.getElementById("cancellationStatus");
if(status)status.textContent="";
if(!detail||!cx||cx.presentation!=="page"){host.innerHTML="";return;}
syncGuestDerivedFields(detail);
if(cx.done){
const full=cx.done.scope!=="guest";
const completedGuestCount=cx.done.guestNames?.length||1;
host.innerHTML=`<div class="cx-page-card">
${cancellationPageHeader(full?"Full booking cancellation":"Partial cancellation",full?"The booking cancellation and refund have been completed.":completedGuestCount>1?"The guest cancellations and refund have been completed.":"The guest cancellation and refund have been completed.",full?"Full booking":completedGuestCount>1?"Selected guests":"Selected guest",full?{}:{compactContext:true})}
<div class="cx-page-done cx-page-done-wide">${cancelDonePageHtml()}<div class="cx-page-done-foot"><button type="button" class="ov-btn-solid" data-cxclose>Back to booking</button></div></div>
</div>`;
hydrateCancellationIcons(host);return;
}
if(cx.entry==="partial"&&cx.scope===null){
host.innerHTML=cx.partialStage==="supplements"?partialSupplementAllocationHtml():partialCancellationSelectionHtml();
hydrateCancellationIcons(host);return;
}
const q=cancelQuote();
const guestMode=!!q.guest;
const title=guestMode?"Partial cancellation":"Full booking cancellation";
const description=guestMode?`Confirm the selected guest${q.guestCount===1?"":"s"}, cancellation policy, refund amount, and refund destination.`:"Cancel every guest, release all cabins, and complete the booking refund.";
if(guestMode){
host.innerHTML=`<div class="cx-partial-page-layout cx-confirm-page-layout">
${cancellationStepsHtml()}
<div class="cx-page-card cx-partial cx-confirm-page">
${cancellationPageHeader("Review & confirm","Verify the guests, booking changes, cancellation record, and refund before completing the cancellation.","",{compactContext:true})}
${cancellationDraftNoticeHtml()}
${cancellationVersionAlertHtml()}
<section class="cx-page-workspace cx-confirm-workspace" aria-label="Confirm cancellation workspace">
${partialConfirmationReviewHtml(q)}
</section>
</div>
</div>
<div class="cx-foot cx-page-actionbar cx-confirm-actionbar" role="region" aria-label="Confirm cancellation actions">${partialConfirmFootHtml(q)}</div>`;
return;
}
const fullStages=[
{title:"Cancellation details",description:"Complete the cancellation record, review the policy impact, and choose where to send the refund."},
{title:"Review & confirm",description:"Verify every guest, cabin, booking extra, policy decision, and refund detail before completing the cancellation."}
];
const activeStage=fullStages[Math.max(0,Math.min(1,Number(cx.step)||0))];
const stageContent=cx.step===0
?`<div class="cx-page-form cx-page-form-step-1"><div class="cx-page-form-body">${fullCancellationDetailsHtml(q)}</div></div>`
:fullCancellationReviewHtml(q);
host.innerHTML=`<div class="cx-partial-page-layout cx-confirm-page-layout cx-full-cancellation-layout">
${cancellationStepsHtml()}
<div class="cx-page-card cx-full-cancellation-page${cx.step===1?" cx-confirm-page":""}">
${cancellationPageHeader(activeStage.title,activeStage.description,"",{compactContext:true})}
${cx.step===0?cancellationDraftNoticeHtml():""}
${cancellationVersionAlertHtml()}
<section class="cx-page-workspace cx-full-cancellation-workspace${cx.step===1?" cx-confirm-workspace":""}" aria-label="${esc(activeStage.title)} workspace">
${stageContent}
</section>
</div>
</div>
<div class="cx-foot cx-page-actionbar cx-full-cancellation-actionbar${cx.step===0?" cx-page-actionbar-forward-only":""}" data-cxfoot role="region" aria-label="Full cancellation actions">${fullCancellationFootHtml(q)}</div>`;
hydrateCancellationIcons(host);
}
function renderCancellationExperience(){
if(cx?.presentation==="page")renderCancellationPage();else renderCancelModal();
}
function renderCancelModal(){
const host=document.getElementById("cancelModal");
if(!detail||!cx||cx.presentation==="page"){hideAccessibleModal(host);return;}
if(cx.done){
host.innerHTML=`<div class="mf-modal-backdrop" data-cxclose></div>
<div class="mf-modal-card mf-modal-cancel" role="dialog" aria-modal="true" aria-labelledby="cancelDoneTitle" aria-describedby="cancelDoneDescription">
<div class="mf-modal-body">${cancelDoneHtml()}</div>
<div class="mf-modal-foot cx-foot-done"><button class="mf-rp-confirm" data-cxclose>Done</button></div>
</div>`;
showAccessibleModal(host,"[data-cxclose]");return;
}
const q=cancelQuote();
const guestMode=!!q.guest;
const cabinIndex=guestMode?detail.b.cabins.indexOf(q.guest.cabin):-1;
host.innerHTML=`<div class="mf-modal-backdrop" data-cxclose></div>
<div class="mf-modal-card mf-modal-cancel" role="dialog" aria-modal="true" aria-labelledby="cancelDialogTitle" aria-describedby="cancelDialogDescription">
<div class="mf-modal-head">
<div class="mf-modal-title">
<h2 class="mf-modal-h" id="cancelDialogTitle">${guestMode?"Cancel guest":"Cancel booking"}</h2>
<span class="mf-modal-sub" id="cancelDialogDescription">#${esc(detail.b.id)} &middot; ${guestMode?`${esc(q.guest.name)} &middot; Cabin ${cabinIndex+1} &middot; `:`${esc(detail.b.name)} &middot; `}${fmt(q.paid)} paid to date</span>
</div>
<button class="mf-modal-x" data-cxclose aria-label="Close">${SVG_X}</button>
</div>
${cancellationStepsHtml()}
<div class="mf-modal-body">${cx.step===0?cancelStep1Html(q):cancelStep2Html(q)}</div>
<div class="mf-modal-foot cx-foot" data-cxfoot>${cancelFootHtml(q)}</div>
</div>`;
showAccessibleModal(host,".mf-modal-x");
}
/* live money edits repaint only the derived readouts, never the inputs */
function syncCancelMoney(){
if(!cx)return;
const q=cancelQuote();
const root=cx.presentation==="page"
?document.getElementById("cancellationPageContent")
:document.getElementById("cancelModal");
const led=root.querySelector("[data-cxledger]");
if(led)led.innerHTML=cancelLedgerHtml(q);
const rem=root.querySelector("[data-cxremain]");
if(rem){const left=q.refund-money(cx.splitCard)-money(cx.splitWallet);
rem.textContent=cxRemainText(left);
rem.className="cx-remain"+(Math.abs(left)<=0.005?" ok":left<0?" over":"");}
const splitWalletPanel=root.querySelector("[data-cxsplitwalletpanel]");
if(splitWalletPanel){
const walletAmount=money(cx.splitWallet);
const shouldShowWallet=walletAmount>0.005;
if(shouldShowWallet!==!!splitWalletPanel.firstElementChild){
splitWalletPanel.innerHTML=shouldShowWallet?cancelWalletPanelHtml(fmt(walletAmount)):"";
}
const walletCreditAmount=splitWalletPanel.querySelector("[data-cxwalletcreditamount]");
if(walletCreditAmount)walletCreditAmount.textContent=fmt(walletAmount);
}
const foot=root.querySelector("[data-cxfoot]");
if(foot)foot.innerHTML=cx.entry==="full"&&cx.presentation==="page"?fullCancellationFootHtml(q):cancelFootHtml(q);
const overrideConfirm=root.querySelector("[data-cxconfirmoverride]");
if(overrideConfirm){
const canConfirm=cancelOverrideDraftReady(q);
overrideConfirm.disabled=!canConfirm;
overrideConfirm.classList.toggle("is-confirmed",!!cx.overrideConfirmed);
overrideConfirm.setAttribute("aria-label",cx.overrideConfirmed?"Refund override confirmed":"Confirm refund override");
overrideConfirm.innerHTML=cx.overrideConfirmed?`${SVG_CHECK}<span>Override confirmed</span>`:"<span>Confirm override</span>";
}
const fullInformation=root.querySelector(".cx-full-cancellation-info");
if(fullInformation){
const ready=cancelStep1Ready()&&cancelDestReady(q);
fullInformation.classList.toggle("is-complete",ready);
const state=fullInformation.querySelector(".cx-cancellation-info-status");
if(state)state.textContent=ready?"Complete":"Details required";
}
const impactPaid=root.querySelector("[data-cximpactpaid]");
const impactPenalty=root.querySelector("[data-cximpactpenalty]");
const impactRefund=root.querySelector("[data-cximpactrefund]");
const impactAdjustment=root.querySelector("[data-cximpactadjustment]");
if(impactPaid)impactPaid.textContent=fmt(q.paid);
if(impactPenalty)impactPenalty.innerHTML=q.penalty>0.005?"&minus;&nbsp;"+fmt(q.penalty):fmt(0);
if(impactRefund)impactRefund.textContent=fmt(q.refund);
if(impactAdjustment){
const adjustment=roundMoney(q.refund-q.capped);
impactAdjustment.textContent=Math.abs(adjustment)<=0.005?fmt(0):`${adjustment>0?"+":"−"}${fmt(Math.abs(adjustment))}`;
const row=impactAdjustment.closest("div");
if(row){row.classList.toggle("deduction",adjustment<0);row.classList.toggle("addition",adjustment>0);}
}
const partialDecisionButton=root.querySelector("[data-cxsuppcontinue]");
if(partialDecisionButton)partialDecisionButton.disabled=!partialCancellationDecisionReady(q,cx.supplementAllocations);
const partialDecisionStatus=root.querySelector("#partialCancellationDecisionStatus");
if(partialDecisionStatus)partialDecisionStatus.textContent=partialCancellationDecisionGuidance(q,cx.supplementAllocations);
}
function commitGuestCancellation(q,b,dest,ref,stamp){
if(cx.entry==="partial")applyPartialSupplementAllocations(detail,cx.supplementAllocations);
const cancelledIds=new Set(cancellationGuestIds(detail));
const cancelledGuests=detail.guests.filter(guest=>cancelledIds.has(guest.guestId));
if(!cancelledGuests.length)return;
const originalPrimaryId=detail.guests[0]?.guestId;
const cancelledCabins=new Set(cancelledGuests.map(guest=>guest.cabin));
const fullPricing=priceDetail(detail);
const currentFareRows=guestFareRows(detail,fullPricing);
const remainingRowsById=new Map(detail.guests.map((guest,index)=>[guest.guestId,currentFareRows[index]]).filter(([guestId])=>!cancelledIds.has(guestId)));
const paidBefore=Math.max(0,roundMoney(fullPricing.paidToDate));
const remainingTotal=Math.max(0,roundMoney([...remainingRowsById.values()].reduce((sum,row)=>sum+row.total,0)));
const remainingTaxes=Math.max(0,roundMoney([...remainingRowsById.values()].reduce((sum,row)=>sum+row.taxes,0)));
/* Any paid amount attributed to the cancelled guests leaves the active booking.
   A retained premium or penalty is cancellation revenue, not credit for others. */
const remainingPaid=Math.max(0,roundMoney(paidBefore-q.paid));
const remainingPending=Math.max(0,roundMoney(remainingTotal-remainingPaid));
detail.guests=detail.guests.filter(guest=>!cancelledIds.has(guest.guestId));
/* Cancelling every occupant of a cabin releases that cabin from the active
   booking instead of leaving an empty room allocation behind. */
const releasedCabinIndexes=[...cancelledCabins]
.map(cabin=>b.cabins.indexOf(cabin))
.filter(index=>index>=0&&!detail.guests.some(guest=>guest.cabin===b.cabins[index]))
.sort((a,b)=>b-a);
releasedCabinIndexes.forEach(cabinIndex=>{
b.cabins.splice(cabinIndex,1);
detail.cabinPlan.splice(cabinIndex,1);
detail.base.cabinCodeBy.splice(cabinIndex,1);
detail.base.roomBy.splice(cabinIndex,1);
});

/* A guest cancellation is a completed transaction, not a pending modification.
   Rebase the remaining party so every subsequent view prices the same guests. */
const remainingSupplements=detail.guests.reduce((sum,g)=>sum+suppValue(g.supps,g.pkg),0);
const nights=detail.info.nights||5;
const remainingPackages=detail.guests.reduce((sum,g)=>sum+(g.pkg&&PKG_BY_ID[g.pkg]?PKG_BY_ID[g.pkg].rate*nights:0),0);
const remainingInsured=detail.guests.filter(g=>g.insurance).length;
const remainingInsurance=remainingInsured*INSURANCE_RATE;
const remainingCabinFare=Math.max(0,roundMoney([...remainingRowsById.values()].reduce((sum,row)=>sum+row.cabinFare,0)));
const remainingDiscount=Math.max(0,roundMoney([...remainingRowsById.values()].reduce((sum,row)=>sum-Math.min(0,row.promotion),0)));
detail.base.cabinFare=remainingCabinFare;
detail.base.taxes=remainingTaxes;
detail.base.supplements=remainingSupplements;
detail.base.insurance=remainingInsurance;
detail.base.discount=remainingDiscount;
detail.base.total=remainingTotal;
detail.base.pending=remainingPending;
detail.base.paidToDate=remainingPaid;
detail.base.units=detail.guests.reduce((sum,g)=>sum+suppCount(g.supps),0);
detail.base.insured=remainingInsured;
detail.base.suppsBy=detail.guests.map(g=>({...g.supps}));
detail.base.pkgBy=detail.guests.map(g=>g.pkg||null);
detail.base.supplementsBy=detail.guests.map(g=>suppCount(g.supps));
detail.base.insuranceBy=detail.guests.map(g=>g.insurance!==false);
detail.base.cabinCodeBy=detail.cabinPlan.map(c=>c.code);
detail.base.roomBy=detail.cabinPlan.map(c=>String(c.room));
detail.base.cabinBy=detail.guests.map(g=>g.cabin);
detail.base.profileBy=detail.guests.map(g=>({...g.profile}));
/* Preserve each surviving passenger's current cent allocation as the new sold
   baseline. This retains cabin floors and committed promotion credits exactly. */
detail.guests.forEach(g=>{
const row=remainingRowsById.get(g.guestId);
g.baseCabinFare=Math.max(0,roundMoney(row?.cabinFare||0));
g.baseGovtTax=Math.max(0,roundMoney(row?.govtTax||0));
g.baseCruiseFee=Math.max(0,roundMoney(row?.cruiseFee||0));
g.basePromotion=Math.max(0,roundMoney(-(row?.promotion||0)));
});
detail.base.newGuestCabinFare=roundMoney(detail.base.cabinFare/Math.max(detail.guests.length,1));
detail.base.guests=detail.guests.map(cloneGuestState);
detail.base.origGuestCount=detail.guests.length;
detail.promo=null;

b.value=remainingTotal;
b.pending=remainingPending;
b.paidToDate=remainingPaid;
if(cancelledIds.has(originalPrimaryId)&&detail.guests[0])b.name=detail.guests[0].name;
b.guests=detail.guests.slice(1).map(g=>g.name);
const partyKeys=["adult","youngAdult","child","infant"];
cancelledGuests.forEach(guest=>{
if(b.party&&partyKeys[guest.band])b.party[partyKeys[guest.band]]=Math.max(0,(b.party[partyKeys[guest.band]]||0)-1);
});
/* Persist the rebased roster with source-stable identities. This prevents a
   later rebuild from shifting positional IDs onto the wrong guest. */
GUEST_ROSTERS[b.id]=detail.guests.map(g=>({
guestId:g.guestId,name:g.name,dob:g.dob,cabin:g.cabin,
supplements:suppCount(g.supps),supps:{...g.supps},pkg:g.pkg||null,
insurance:g.insurance!==false,profile:{...g.profile}
}));
b.recordVersion=(b.recordVersion??1)+1;
/* Keep the completed cancellation's exact component split with the in-memory
   booking record. Reopening the booking must not recalculate taxes from a new
   total and silently move money between cabin fare and tax. */
b.pricingBase={
recordVersion:b.recordVersion,
cabinFare:detail.base.cabinFare,taxes:detail.base.taxes,
insurance:detail.base.insurance,discount:detail.base.discount||0,newGuestCabinFare:detail.base.newGuestCabinFare,
cabinPlan:detail.cabinPlan.map(c=>({num:c.num,room:String(c.room),code:c.code})),
guests:detail.guests.map(g=>({
guestId:g.guestId,baseCabinFare:g.baseCabinFare,
baseGovtTax:g.baseGovtTax,baseCruiseFee:g.baseCruiseFee,
basePromotion:g.basePromotion||0,
supps:{...g.supps},pkg:g.pkg||null,insurance:g.insurance!==false,
profile:{...g.profile}
}))
};
clearDetailDraft(b.id);
cancellationReturnDetail=null;

b.events=b.events||[];
const auditDetails=[
`Reason: ${cx.reason}`,
cx.note.trim()?`Note: ${cx.note.trim()}`:"",
cx.noShow?"No-show policy applied":"",
cx.keepInsurance?"Travel protection retained":"",
cx.overrideOn?`Refund overridden: ${cx.overrideReason.trim()}`:""
].filter(Boolean);
b.events.unshift({time:stamp,title:cancelledGuests.length>1?"Guest Cancellations Completed":"Guest Cancellation Completed",
desc:`${cancelledGuests.map(guest=>guest.name).join(", ")} · ${fmt(q.refund)} refund queued to ${dest} · ${auditDetails.join(" · ")} · Ref ${ref}`});
persistCommittedCancellation(b,detail.guests,"partial");
cx.done={scope:"guest",guestName:cancelledGuests[0].name,guestNames:cancelledGuests.map(guest=>guest.name),amount:q.refund,dest,reason:cx.reason,ref};
renderCancellationExperience();
renderDetail();
if(document.getElementById("viewModify").classList.contains("active"))renderModify();
render();
focusCancellationTarget("#cancelDoneTitle");
}
function commitCancel(){
const b=detail.b;
const selectedGuests=cancellationGuests(detail);
const expectedGuestCount=Array.isArray(cx.guestIds)&&cx.guestIds.length?cx.guestIds.length:(cx.guestId?1:0);
const partialSelectionInvalid=cx.entry==="partial"&&(
selectedGuests.length!==expectedGuestCount
||!selectedGuests.length
||selectedGuests.some(guest=>!guest.pendingRemoval)
||activeGuests(detail).length<1);
/* An irreversible cancellation must apply to the exact booking snapshot the
   agent reviewed. Fail closed if another transaction changed the record or if
   any selected guest no longer resolves by stable identity. */
if(Number(b.recordVersion??1)!==Number(cx.sourceRecordVersion??1)
||(cx.scope==="guest"&&(!selectedGuests.length||partialSelectionInvalid))){
cx.versionError=true;
renderCancellationWithFocus("#cancellationVersionError");
return;
}
const q=cancelQuote();
if(cx.entry==="partial"&&cx.scope==="guest"&&!partialCancellationDecisionReady(q,cx.supplementAllocations)){
returnToPartialSupplementAllocation();
return;
}
const dest=cancelDestLabel(q);
const ref="RF-"+String(seedOf(b.id+"|"+q.refund.toFixed(2))%900000+100000);
const stamp=fmtDateShort(new Date())+" · "+new Date().toTimeString().slice(0,5);
if(cx.scope==="guest"){commitGuestCancellation(q,b,dest,ref,stamp);return;}
b.status="cancelled";
/* b.pending is deliberately left intact: it is what "paid to date" is derived
   from, and zeroing it would misreport the guest as having paid in full. A
   cancelled booking simply has nothing collectable, which the UI states. */
b.cancel={reason:cx.reason,note:cx.note,noShow:cx.noShow,keptInsurance:cx.keepInsurance,
overridden:cx.overrideOn,overrideReason:cx.overrideReason,
penaltyPct:q.tier.pct,refund:q.refund,dest,ref,source:cx.source,paidAtCancel:q.paid};
b.paidToDate=q.paid;
b.events=b.events||[];
b.events.unshift({time:stamp,title:"Refund queued",
desc:fmt(q.refund)+" · "+dest+" · Ref "+ref});
b.events.unshift({time:stamp,title:"Booking Cancelled",
desc:cx.reason+(cx.noShow?" · No-show":"")+" · "+Math.round(q.tier.pct*100)+"% penalty"
+(cx.keepInsurance?" · protection retained":"")
+(cx.overrideOn?" · refund overridden: "+cx.overrideReason:"")
+(cx.note.trim()?" · "+cx.note.trim():"")});
b.recordVersion=(b.recordVersion??1)+1;
/* A prior partial cancellation may already have established an exact pricing
   baseline. It remains authoritative for the now-cancelled record, so advance
   its version with the full-booking transaction instead of making it stale. */
if(b.pricingBase)b.pricingBase={...b.pricingBase,recordVersion:b.recordVersion};
clearDetailDraft(b.id);
cancellationReturnDetail=null;
persistCommittedCancellation(b,detail.guests,"full");
cx.done={scope:"booking",amount:q.refund,dest,reason:cx.reason,ref};
renderCancellationExperience();
renderDetail();
render();
focusCancellationTarget("#cancelDoneTitle");
}
/* once cancelled the booking is read-only: the actions that would change money
   or itinerary are removed rather than left clickable */
function applyCancelledUi(){
const b=detail.b,cancelled=b.status==="cancelled",c=b.cancel;
document.getElementById("sStatusBadge").innerHTML=statusBadgeHtml(b);
document.querySelector(".ov-side-actions").hidden=cancelled;
document.getElementById("modifyBookingBtn").hidden=cancelled;
document.querySelector(".ov-promo-block").hidden=cancelled;
const note=document.getElementById("cancelledNote");
note.hidden=!cancelled;
const badge=document.getElementById("payDueIn");
if(!cancelled||!c){
/* renderPricePanel owns the badge text and figures but not these, so they are
   restored here or they leak onto the next booking viewed */
badge.classList.remove("cancelled");
document.getElementById("ppTitle").textContent="Payment summary";
return;
}
note.innerHTML=`<span class="ov-cn-t">This booking is cancelled</span>
<span class="ov-cn-s">${esc(c.reason)} &middot; ${fmt(c.refund)} refund queued to ${esc(c.dest)} &middot; Ref ${esc(c.ref)}</span>`;
/* a cancelled booking has no balance and no payment due date — the headline
   figure becomes the queued refund, not what is owed */
badge.textContent="Cancelled";
badge.classList.remove("paid");badge.classList.add("cancelled");
document.getElementById("ppTitle").textContent="Refund queued";
document.getElementById("pBalance").textContent=fmt(c.refund);
const dueLine=document.getElementById("pDueDate");
dueLine.textContent="Expected to "+c.dest+" in 5–10 business days";
dueLine.closest(".ov-due-line").classList.add("settled");
}
function statusBadgeHtml(b){
const label=b.status==="pending"?"Pending":b.status==="cancelled"?"Cancelled":"Booked";
return `<span class="status ${b.status}"><span class="dot" aria-hidden="true"></span>${label}</span>`;
}
document.getElementById("tableBody").addEventListener("click",e=>{
const tr=e.target.closest("tr[data-id]");
if(!tr)return;
if(e.target.closest("a.booking-id"))e.preventDefault();
const b=bookings.find(x=>x.id===tr.dataset.id);
if(b)openDetail(b);
});
document.getElementById("detailClose").addEventListener("click",closeDetail);

/* ============ modification flow (Figma 534:7285) ============ */
const MOD_STEPS=[
{label:"Cabin modification",title:"Cabin modification",sub:"Update stateroom assignments and fare positions."},
{label:"Supplements",title:"Supplements",sub:"Review onboard extras and change eligible guest assignments."},
{label:"Guest details",title:"Guest details",sub:"Review and update each guest's identity and contact information."},
{label:"Review & save",title:"Review & save",sub:"Confirm every staged update and its combined booking impact."}
];
const MOD_FLOWS={
unified:{label:"Booking modification",steps:[0,1,2,3]}
};
const IMPACT_SECTION_KEYS=["cabins","guests","supplements","extras","other"];
function newModState(flow="unified"){
const selected=MOD_FLOWS[flow]||MOD_FLOWS.unified;
return{flow:MOD_FLOWS[flow]?flow:"unified",step:selected.steps[0],open:-1,guestCollapsedCabinIndexes:null,editCabin:-1,pendingCode:null,pendingRoom:null,roomDeck:null,roomCategoryOpen:false,roomNotice:"",catFilter:"All",locFilter:"All",roomFilters:{crib:false,rollaway:false,accessible:false,connecting:false},guestMenu:null,addGuestCabin:-1,addGuestStep:0,newGuestDraft:null,addGuestError:false,guestSearch:"",addGuestSuppSearch:"",addGuestSuppCat:null,removeGuestIdx:-1,suppSearch:"",suppCat:null,suppExpanded:null,selectedSuppsCollapsed:true,currentSuppExpanded:null,pkgExpanded:null,pkgSectionOpen:false,expandedFareCabin:-1,expandedFareContext:"modify",previewOpen:false,impactCollapsedSectionKeys:new Set(IMPACT_SECTION_KEYS),reviewSupplementExpandedIds:new Set()};
}
let mod=newModState();
function modStepIds(){return(MOD_FLOWS[mod.flow]||MOD_FLOWS.unified).steps;}
function modFlowIndex(){const index=modStepIds().indexOf(mod.step);return index<0?0:index;}
function resetPicker(){mod.pendingCode=null;mod.pendingRoom=null;mod.roomDeck=null;mod.roomCategoryOpen=false;mod.roomNotice="";mod.catFilter="All";mod.locFilter="All";mod.roomFilters={crib:false,rollaway:false,accessible:false,connecting:false};}
const SVG_CARET='<svg class="i12 mf-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>';
const SVG_CHEV='<svg class="mf-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>';
const SVG_CHEV_RIGHT='<svg class="mf-supp-action-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>';
const SVG_TICK='<svg class="i12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
const SVG_INFO='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/></svg>';
const SVG_CLIPBOARD_LIST='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4M12 16h4M8 11h.01M8 16h.01"/></svg>';
const SVG_RECEIPT='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 2v20l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2V2l-2 2-2-2-2 2-2-2-2 2-2-2-2 2Z"/><path d="M16 8h-6M16 12h-6M13 16h-3"/></svg>';
const SVG_ARROW='<svg class="i16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>';
/* x-circle, matching Figma 573:8664 */
const SVG_X='<svg class="i16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
const CABIN_TYPE_COLOR={"Interior Stateroom":"#F59E0B","Ocean View":"#F97316","Balcony Stateroom":"#3B82F6","Suite":"#8B5CF6"};
const SVG_SPARKLES='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M5 3v4M3 5h4M19 17v4M17 19h4"/></svg>';
const SVG_PENCIL='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>';
const SVG_BED='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>';
const SVG_USERS='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>';
const SVG_PACKAGE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>';
const SVG_ACCESSIBLE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/></svg>';
const SVG_LINK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
const ROOM_FILTERS=[{k:"crib",label:"Crib",title:"Crib available",icon:"👶"},{k:"rollaway",label:"Rollaway",title:"Rollaway bed",icon:"🛏️"},{k:"accessible",label:"Accessible",title:"Accessible stateroom",icon:"♿"},{k:"connecting",label:"Connecting",title:"Connecting room",icon:"🔗"}];
const STATEROOM_DECKS=[3,4,5,6,7,8];
const ROOMS_PER_DECK=28;
const ROW_ROOM_BANDS={I6:100,I7:130,I8:160,O4:200,O5:230,I8G:300,B2:330,B3:360,S1:400,S3:430,S5:460};
const SVG_SWAP='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>';
const SVG_PLUS='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
const SVG_EXPAND='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H3v5M16 3h5v5M21 16v5h-5M8 21H3v-5"/></svg>';
/* Lucide Undo 2 icon — ISC licensed: https://lucide.dev/icons/undo-2 */
const SVG_UNDO='<svg class="lucide lucide-undo-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>';
const SVG_SEARCH='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
const SVG_CHECK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
const SVG_TRASH='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v5M14 11v5"/></svg>';
function roomTypeAbbr(type){return type.replace("Stateroom","Sto.").toUpperCase();}
/* A dense, deterministic room pool adapted from the supplied stateroom
   component. Category-specific number bands keep physical room numbers unique
   across fare rows; each deck deliberately exposes only a few rooms so the
   prototype demonstrates both selectable and unavailable inventory states. */
function roomOptionsFor(bookingId,entry){
const band=ROW_ROOM_BANDS[entry.code]||100;
return STATEROOM_DECKS.flatMap(deck=>Array.from({length:ROOMS_PER_DECK},(_,index)=>{
const ordinal=index+1,num=String(deck)+String(band+ordinal).padStart(3,"0");
const availabilityOffset=seedOf(bookingId+"|"+entry.code+"|"+deck)%6;
return{num,deck,loc:index<10?"Forward":index<19?"Mid Ship":"Aft Ship",
crib:ordinal%4===0||ordinal%9===0,rollaway:ordinal%3===0,
accessible:ordinal%11===0,connecting:ordinal%7===0,
available:(ordinal+availabilityOffset)%6===0};
}));
}
function roomDeckFromNumber(room,fallback=STATEROOM_DECKS[0]){
const deck=Number(String(room||"").charAt(0));
/* Legacy bookings can contain retained rooms on Deck 1 or 2. Keep their
   physical deck accurate while the normalized discovery pool stays on 3–8. */
return Number.isInteger(deck)&&deck>0?deck:fallback;
}
/* Keep an existing assignment visible even when it predates the normalized
   room pool. If it collides with another category's generated band, it is
   excluded there so the same physical room never appears under two categories. */
function roomOptionsForCabin(d,idx,entry){
const plan=d.cabinPlan[idx],ownRoom=String(plan.room),originalRoom=String(d.base.roomBy[idx]);
const retainedRoom=entry.code===plan.code?ownRoom:entry.code===d.base.cabinCodeBy[idx]?originalRoom:"";
let rooms=roomOptionsFor(d.b.id,entry);
if(entry.code!==plan.code){
const collision=rooms.findIndex(r=>r.num===ownRoom);
if(collision>=0){
const original=rooms[collision],band=ROW_ROOM_BANDS[entry.code]||100;
const used=new Set([...rooms.map(r=>r.num),...d.cabinPlan.map(c=>String(c.room))]);
const replacement=[ROOMS_PER_DECK+1,ROOMS_PER_DECK+2].map(offset=>String(original.deck)+String(band+offset).padStart(3,"0")).find(num=>!used.has(num));
rooms=rooms.map((room,i)=>i===collision&&replacement?{...room,num:replacement}:room).filter(room=>room.num!==ownRoom);
}
}
if(retainedRoom&&!rooms.some(r=>r.num===retainedRoom)){
const deck=roomDeckFromNumber(retainedRoom,entry.deck);
const replacement=rooms.map(r=>({...r}));
const replaceAt=replacement.map(r=>r.deck).lastIndexOf(deck);
const legacy={num:retainedRoom,deck,loc:entry.loc||"Mid Ship",crib:false,rollaway:false,accessible:false,connecting:false,available:true,legacy:true};
if(replaceAt>=0)replacement[replaceAt]=legacy;else replacement.push(legacy);
rooms=replacement;
}
return rooms.sort((a,b)=>a.deck-b.deck||a.num.localeCompare(b.num,undefined,{numeric:true}));
}
function categoryPartyAvailability(d,idx,entry,bucketKey){
let available=Number((d.inventory.find(row=>row.code===entry.code)||entry).occ?.[bucketKey]||0);
d.cabinPlan.forEach((plan,otherIdx)=>{
const other=cabinGroups(d)[otherIdx],currentBucket=occBucketFor(other?.guests||[]).key;
const cabinId=d.b.cabins[otherIdx];
const originalGuests=(d.base.guests||[]).filter(g=>g.cabin===cabinId).map(g=>({g}));
const originalBucket=occBucketFor(originalGuests).key;
const startedInCategory=d.base.cabinCodeBy[otherIdx]===entry.code;
const remainsInCategory=plan.code===entry.code;
if(startedInCategory&&(!remainsInCategory||originalBucket!==currentBucket)&&originalBucket===bucketKey)available++;
if(remainsInCategory&&(!startedInCategory||originalBucket!==currentBucket)&&currentBucket===bucketKey)available--;
});
return Math.max(0,available);
}
function initials(name){const p=name.trim().split(/\s+/);return((p[0]||"")[0]||"")+((p[1]||"")[0]||"");}
function ageBadge(band){return{label:AGE_CATEGORIES[band].singular,cls:band<2?"adult":band===2?"child":"infant"};}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");}
function guestLabelFor(d,g){
const position=activeGuests(d).findIndex(candidate=>candidate.guestId===g.guestId)+1;
return "Guest "+Math.max(1,position)+(isPrimaryGuest(d,g)?" (Primary)":"");
}

function renderSteps(summary=modificationSummary()){
const ids=modStepIds(),current=modFlowIndex(),flow=MOD_FLOWS[mod.flow]||MOD_FLOWS.unified;
const steps=document.getElementById("mfSteps");
const hasProgress=ids.length>1;
steps.hidden=!hasProgress;
if(!hasProgress){
steps.removeAttribute("aria-label");
steps.innerHTML="";
return;
}
steps.setAttribute("aria-label",flow.label+" steps");
steps.innerHTML=ids.map((stepId,i)=>{
const s=MOD_STEPS[stepId],state=i<current?"done":i===current?"active":"todo";
/* the connector leading into a step is "done" once we've reached it,
   so progress reads left-to-right across the bar */
const line=i>0?`<span class="mf-step-line${i<=current?" done":""}"></span>`:"";
return `${line}<button class="mf-step ${state}" data-step="${stepId}"${i===current?' aria-current="step"':""}>
<span class="mf-step-circle">${i+1}</span>
<span class="mf-step-text">${s.label}</span>
</button>`;}).join("");
}

/* A reconciled per-guest view of the booking price. The cabin matrix uses
   these values instead of inventing display-only fares, so passenger totals,
   cabin totals and the payment rail continue to describe the same booking. */
function guestFareRows(d,p){
const raw=d.guests.map((g,i)=>{
const before=baseGuestFor(d,g);
const original=Boolean(before);
if(!isGuestActive(g))return{active:false,original,baseCabin:0,cabinUpgrade:0,cabinFare:0,govtTax:0,cruiseFee:0,taxes:0,onboard:0,protection:0,enhancements:0,basePromotion:0,subtotal:0};
const cabinIdx=d.b.cabins.indexOf(g.cabin);
const baseCabin=original?before.baseCabinFare:newGuestCabinFare(d,g,cabinIdx);
const cabinUpgrade=cabinIdx>=0?cabinAdjustmentForGuest(d,g,cabinIdx,p.perHeadFare):0;
const addedTax=original?null:newGuestTaxComponents(d,g);
const govtTax=original?before.baseGovtTax:addedTax.govtTax;
const cruiseFee=original?before.baseCruiseFee:addedTax.cruiseFee;
const onboard=p.perGuestSupp[i]||0;
const protection=g.insurance?INSURANCE_RATE:0;
const cabinFare=baseCabin+cabinUpgrade;
const subtotal=roundMoney(cabinFare+govtTax+cruiseFee+onboard+protection);
const basePromotion=original?-Math.max(0,before.basePromotion||0):0;
return{active:true,original,baseCabin,cabinUpgrade,cabinFare,govtTax,cruiseFee,taxes:roundMoney(govtTax+cruiseFee),onboard,protection,enhancements:roundMoney(onboard+protection),basePromotion,subtotal};
});
const cabinOnlyPromo=d.promo&&PROMO_CODES[d.promo]?.type==="pct";
const promoShares=p.promoAmt?allocateMoney(p.promoAmt,raw.map(row=>Math.max(0,cabinOnlyPromo?row.cabinFare:row.subtotal+row.basePromotion))):raw.map(()=>0);
return raw.map((row,i)=>{
const promotion=roundMoney(row.basePromotion-promoShares[i]);
return{...row,promotion,total:roundMoney(row.subtotal+promotion)};
});
}

function farePositionHtml(d,g){
const originalPosition=originalCabinFarePosition(d,g);
if(g.pendingRemoval){
const removedPosition=g.pendingRemoval.farePosition||originalPosition||1;
return `<del>FP-${removedPosition}</del><span class="sr-only">, pending cancellation</span>`;
}
const activePosition=activeCabinFarePosition(d,g);
if(!originalPosition||baseGuestFor(d,g)?.cabin!==g.cabin)return `FP-${activePosition}`;
if(originalPosition===activePosition)return `FP-${activePosition}`;
const status=activePosition<originalPosition?'<small class="mf-fare-position-status">Promoted</small>':"";
return `<span class="mf-fare-position-old">FP-${originalPosition}</span><span class="mf-fare-position-arrow" aria-hidden="true">→</span><strong>FP-${activePosition}</strong>${status}`;
}

function cabinFareMatrix(d,p,c,rows,inModal=false,options={}){
const context=options.context||"modify";
const allowGuestAdd=options.allowGuestAdd??true;
const allowGuestRemove=options.allowGuestRemove??false;
const modificationGuestActions=Boolean(options.modificationGuestActions);
const columns=c.allGuests||c.guests;
const hasModificationGuestAction=modificationGuestActions&&columns.some(({g})=>!isBaseGuest(d,g));
const newlyAddedGuests=columns.filter(({g})=>!isBaseGuest(d,g)&&!g.pendingRemoval).map(({g})=>g);
const guestAdditionBanner=newlyAddedGuests.length
?`<div class="mf-fare-addition-banner" role="status" aria-live="polite"><span class="mf-fare-addition-banner-icon" aria-hidden="true">${SVG_TICK}</span><span><strong>${newlyAddedGuests.length===1?"New guest added to this cabin":`${newlyAddedGuests.length} new guests added to this cabin`}</strong><small>${newlyAddedGuests.length===1?`${esc(newlyAddedGuests[0].name)} now appears in the fare breakdown below.`:"The new guests now appear in the fare breakdown below."}</small></span></div>`
:"";
const displayRow=(g,i)=>g.pendingRemoval?{...rows[i],...fareSnapshot(g.pendingRemoval.fare),active:false}:rows[i];
const displayRows=columns.map(({g,i})=>displayRow(g,i));
const fares=c.guests.map(({i})=>rows[i]);
const guestCells=render=>columns.map(({g,i})=>`<td class="${g.pendingRemoval?"mf-fare-cell-removing":""}">${render(g,i,displayRow(g,i))}</td>`).join("");
const componentRow=(label,key,cls="",formatter=fmt)=>`<tr class="${cls}"><th scope="row">${label}</th>${guestCells((g,i,row)=>{
const value=formatter(row[key]);
return g.pendingRemoval&&key==="total"?`<del>${value}</del><span class="sr-only">, excluded from the active cabin total</span>`:value;
})}</tr>`;
const retainedProtection=roundMoney(columns.reduce((sum,{g})=>sum+pendingProtection(d,g),0));
const cabinTotal=roundMoney(fares.reduce((sum,row)=>sum+row.total,0)+retainedProtection);
const removingCount=columns.length-c.guests.length;
const partial=context==="partialCancellation";
const stagedGuests=partial?columns.filter(({g})=>Boolean(g.pendingRemoval)).map(({g})=>g):[];
const totalStagedGuests=partial?d.guests.filter(g=>Boolean(g.pendingRemoval)).length:0;
const guestColumnWidth=partial||hasModificationGuestAction?190:170;
const tableMinWidth=Math.max(780,210+columns.length*guestColumnWidth);
const shellPrefix=context==="partialCancellation"?"cx-fare-table":"mf-fare-table";
const title=partial?(stagedGuests.length?`${stagedGuests.length} guest${stagedGuests.length===1?"":"s"} selected in this cabin`:"Select guests to cancel"):inModal?"Manage cabin guests":"Guest fare breakdown";
const subtitle=partial
?(stagedGuests.length?"Highlighted columns show the guests and fare changes currently staged.":totalStagedGuests?"You can select additional guests from this cabin.":"Review the guest and fare details, then use the remove-guest icon.")
:modificationGuestActions
?"Only guests added during this modification can be removed here."
:(inModal?"Review the complete fare breakdown before adding a guest.":"Compare fares and manage the guests assigned to this cabin.");
const toolbarAction=inModal
?(allowGuestAdd?`<button type="button" class="mf-guest-add mf-fare-add" data-newguestcabin="${c.idx}" aria-label="Add guest to Cabin ${c.idx+1}">${SVG_PLUS}<span>Add guest</span></button>`:"")
:`<button type="button" class="mf-fare-expand" data-expand-fare="${c.idx}" data-fare-context="${context}" aria-haspopup="dialog" aria-controls="fareTableModal" aria-label="Expand fare table for Cabin ${c.idx+1}">${SVG_EXPAND}<span>Expand table</span></button>`;
return `<div class="mf-fare-table-shell${partial?" cx-partial-fare":""}" id="${shellPrefix}-${c.idx}${inModal?"-modal":""}" data-fare-cabin="${c.idx}" data-fare-context="${context}"${hasModificationGuestAction?' data-modification-guest-actions="true"':""}>
<div class="mf-fare-table-toolbar">
<div class="mf-fare-table-title"><strong>${title}</strong><span>${subtitle}</span></div>
${toolbarAction?`<div class="mf-fare-table-actions">${toolbarAction}</div>`:""}
</div>
${guestAdditionBanner}
<div class="mf-fare-table-wrap" tabindex="0" aria-label="Scrollable guest fare breakdown">
<table class="mf-fare-table" style="min-width:${tableMinWidth}px">
<caption class="sr-only">Guest and fare breakdown for Cabin ${c.idx+1}, Room ${esc(c.room)}</caption>
<thead><tr>
<th scope="col">Fare details</th>
${columns.map(({g,i},position)=>{
const isNew=!isBaseGuest(d,g);
const removing=Boolean(g.pendingRemoval);
const canRemove=!removing&&activeGuests(d).length>1;
const guestNumber=originalCabinFarePosition(d,g)||activeCabinFarePosition(d,g)||position+1;
const action=allowGuestRemove
?(modificationGuestActions
?(isNew
?`<button type="button" class="mf-fare-remove cx-fare-cancel-action mf-new-guest-remove-action" data-guestremove="${i}"${canRemove?"":" disabled"} aria-label="Remove newly added guest: ${esc(g.name)}" title="${canRemove?"Remove "+esc(g.name)+" from this modification":"At least one guest must remain on the booking"}"><i class="cx-fare-cancel-glyph" data-lucide="trash-2" aria-hidden="true">${SVG_TRASH}</i></button>`
:"")
:removing
?`<button type="button" class="mf-fare-restore cx-fare-restore-action" data-guestrestore="${i}" aria-label="Undo cancellation for ${esc(g.name)}" title="Undo cancellation for ${esc(g.name)}"><i data-lucide="undo-2" aria-hidden="true">${SVG_UNDO}</i></button>`
:`<button type="button" class="mf-fare-remove cx-fare-cancel-action" data-cancelguest="${i}"${canRemove?"":" disabled"} aria-label="Cancel guest: ${esc(g.name)}" title="${canRemove?"Cancel guest: "+esc(g.name):"At least one guest must remain on the booking"}"><i class="cx-fare-cancel-glyph" data-lucide="trash-2" aria-hidden="true">${SVG_TRASH}</i></button>`)
:"";
return `<th scope="col" class="mf-fare-guest-head${removing?" is-removing":""}">
<span class="mf-fare-guest-top"><span class="mf-fare-guest-number">Guest ${guestNumber}</span><span class="mf-fare-guest-tags">${isPrimaryGuest(d,g)?'<em>Primary</em>':""}${isNew?'<em class="new">New</em>':""}${removing?'<em class="removing">Cancelling</em>':""}</span>${action}</span>
</th>`;}).join("")}
</tr></thead>
<tbody>
<tr class="mf-fare-guest-details"><th scope="row">Guest</th>${guestCells(g=>{
const age=ageAt(g.dobDate,d.sail);
const passengerLabel=PASSENGER_TYPE[g.band].replace(" Passenger","");
return `<div class="mf-fare-guest-profile"><strong>${esc(g.name)}</strong><span><span>${esc(g.dob)} (${age})</span><abbr class="mf-fare-guest-type" title="${esc(passengerLabel)}" aria-label="${esc(passengerLabel)}">${PASSENGER_ABBR[g.band]}</abbr></span></div>`;
})}</tr>
<tr class="mf-fare-position"><th scope="row">Fare position</th>${guestCells(g=>farePositionHtml(d,g))}</tr>
${componentRow("Cabin fare","cabinFare","mf-fare-parent")}
${componentRow("Base cabin fare","baseCabin","mf-fare-child")}
${displayRows.some(row=>Math.abs(row.cabinUpgrade)>.005)?componentRow("Stateroom adjustment","cabinUpgrade","mf-fare-child",fmtSigned):""}
${componentRow("Taxes, fees &amp; port expenses","taxes","mf-fare-parent")}
${componentRow("Government taxes &amp; fees","govtTax","mf-fare-child")}
${componentRow("Required cruise fees &amp; expenses","cruiseFee","mf-fare-child")}
${componentRow("Enhancements","enhancements","mf-fare-parent")}
${componentRow("Supplements &amp; packages","onboard","mf-fare-child")}
<tr class="mf-fare-child mf-fare-protection">
<th scope="row"><span>Travel Protection Plus</span><small>Required for every guest</small></th>
${guestCells((g,i,row)=>`<span class="mf-fare-protection-value">${fmt(row.protection)}</span>${g.pendingRemoval?'<small class="mf-fare-protection-note">Non-refundable</small>':""}<span class="sr-only"> for ${esc(g.name)}</span>`)}
</tr>
${displayRows.some(row=>Math.abs(row.promotion)>.005)?componentRow("Promotion","promotion","mf-fare-credit",fmtSigned):""}
${componentRow("Passenger total","total","mf-fare-passenger-total")}
</tbody>
</table>
</div>
${columns.length>4?'<div class="mf-fare-scroll-hint"><span aria-hidden="true">&harr;</span> Scroll horizontally to view every guest</div>':""}
<div class="mf-fare-total" role="group" aria-label="Cabin total">
<strong class="mf-fare-total-label">Cabin total</strong>
<div class="mf-fare-total-value"><span>${c.guests.length} active guest${c.guests.length===1?"":"s"}${removingCount?` · ${removingCount} cancellation${removingCount===1?"":"s"} staged`:""}${retainedProtection>.005?` · ${fmt(retainedProtection)} protection retained`:""}</span><strong>${fmt(cabinTotal)}</strong></div>
</div>
</div>`;
}

function mfCabinBody(options={}){
const context=options.context||"modify";
const partial=context==="partialCancellation";
const allowRoomChange=options.allowRoomChange??true;
const allowGuestAdd=options.allowGuestAdd??true;
const modificationGuestActions=options.modificationGuestActions??context==="modify";
const allowGuestRemove=options.allowGuestRemove??(partial||modificationGuestActions);
const d=detail,groups=cabinGroups(d);
const pricing=priceDetail(d),fareRows=guestFareRows(d,pricing);
return `<div class="mf-stack mf-cabin-stack">${groups.map((c,idx)=>{
const plan=d.cabinPlan[idx];
const original=catEntry(d.base.cabinCodeBy[idx]);
const originalRoom=String(d.base.roomBy[idx]),currentRoom=String(c.room);
const roomChanged=currentRoom!==originalRoom,categoryChanged=plan.code!==d.base.cabinCodeBy[idx];
const cabinImpact=cabinAdjustmentForCode(d,idx,plan.code,pricing.perHeadFare);
const others=d.b.cabins.map((num,oi)=>({num,oi})).filter(o=>o.oi!==idx);
const roster=partial?(c.allGuests||c.guests).map(({g})=>g):c.guests.map(({g})=>g);
const rosterCounts=roster.reduce((counts,guest)=>{counts[guest.band]=(counts[guest.band]||0)+1;return counts;},[0,0,0]);
const occupancy=rosterCounts.map((count,band)=>count?`${count} ${AGE_CATEGORIES[band][count===1?"singular":"plural"].toLowerCase()}`:"").filter(Boolean).join(" &middot; ");
const stagedCount=partial?roster.filter(guest=>guest.pendingRemoval).length:0;
const cabinActions=[
allowGuestAdd?`<button type="button" class="mf-guest-add mf-fare-add mf-cab-add-guest" data-newguestcabin="${idx}" data-cabin-add="${idx}" aria-haspopup="dialog" aria-controls="addGuestModal" aria-label="Add guest to Cabin ${idx+1}">${SVG_PLUS}<span>Add guest</span></button>`:"",
allowRoomChange?`<button type="button" class="mf-cab-cta" data-change-room="${idx}" aria-label="Change room for Cabin ${idx+1}">${SVG_PENCIL}<span>Change room</span></button>`:""
].filter(Boolean).join("");
return `<section class="mf-cab-card" aria-label="Cabin ${idx+1} fare table">
<div class="mf-cab-head">
<div class="mf-cab-type">
<div class="mf-cab-meta">
<span class="mf-cab-id">Cabin ${idx+1}${roomChanged?`<span class="mf-cab-room-change" aria-label="Room changed from ${esc(originalRoom)} to ${esc(currentRoom)}"><span class="mf-cab-room-old">Room ${esc(originalRoom)}</span><span class="mf-cab-change-arrow" aria-hidden="true">&rarr;</span><span class="mf-cab-room-new">Room ${esc(currentRoom)}</span></span>`:`<span class="mf-cab-room">Room ${esc(currentRoom)}</span>`}</span>
<span class="mf-cab-sub">${categoryChanged?`<span class="mf-cab-category-old">${esc(original.name)}</span><span class="mf-cab-change-arrow" aria-hidden="true">&rarr;</span><span class="mf-cab-category-new">${esc(c.catName)}</span>`:esc(c.catName)} &bull; Deck ${c.deck} &bull; ${roster.length} guest${roster.length===1?"":"s"}${stagedCount?` &bull; <em class="mf-cab-cancelling">${stagedCount} cancelling</em>`:""}${Math.abs(cabinImpact)>.005?` &bull; <em class="mf-cab-adj">${fmtSigned(cabinImpact)}</em>`:""}</span>
</div>
</div>
${cabinActions?`<div class="mf-cab-actions">${cabinActions}</div>`:""}
</div>
<div class="mf-cab-guests-label"><span>Guests in this cabin</span><span class="mf-cab-guests-summary">${occupancy}</span></div>
${cabinFareMatrix(d,pricing,c,fareRows,false,{context,allowGuestAdd,allowGuestRemove,modificationGuestActions})}
</section>`;}).join("")}</div>`;
}

/* ---- Change room -------------------------------------------------------
   This is the single-cabin adapter for the supplied Assign Stateroom panel.
   The booking already owns its cabin slot and guest roster, so the modal keeps
   the component's category switcher, filters, deck tabs and room states while
   omitting its multi-cabin quantity and guest-distribution controls. */
function roomOwnerIndex(d,idx,roomNum){
return d.cabinPlan.findIndex((plan,otherIdx)=>otherIdx!==idx&&String(plan.room)===String(roomNum));
}
function roomMatchesCurrentFilters(room){
const active=ROOM_FILTERS.filter(f=>mod.roomFilters[f.k]);
return(mod.locFilter==="All"||room.loc===mod.locFilter)&&active.every(f=>room[f.k]);
}
function roomCanBeSelected(d,idx,entry,room,bucketKey){
if(!room||roomOwnerIndex(d,idx,room.num)>=0)return false;
const partySize=cabinGroups(d)[idx]?.guests.length||0;
if(partySize<1||partySize>PROTOTYPE_MAX_CABIN_GUESTS)return false;
const plan=d.cabinPlan[idx];
const isCurrent=entry.code===plan.code&&String(room.num)===String(plan.room);
const isOriginal=entry.code===d.base.cabinCodeBy[idx]&&String(room.num)===String(d.base.roomBy[idx]);
/* The cabin already owns one fare unit in its current category, so a lateral
   physical-room swap does not require newly sellable category inventory. */
return isCurrent||isOriginal||(room.available!==false&&(entry.code===plan.code||categoryPartyAvailability(d,idx,entry,bucketKey)>0));
}
function selectedRoomValidation(d,idx,code,roomNum){
const group=cabinGroups(d)[idx],bucket=occBucketFor(group.guests);
if(!group.guests.length)return{valid:false,message:"Assign at least one guest to this cabin before changing its room."};
if(bucket.over)return{valid:false,message:"This cabin has more than four guests. Move guests or arrange connecting cabins before changing its room."};
if(!code||!roomNum)return{valid:false,message:"Select an available room to continue."};
const entry=catEntry(code);
const room=roomOptionsForCabin(d,idx,entry).find(candidate=>candidate.num===String(roomNum));
if(!room)return{valid:false,message:"That room is not part of the selected category."};
const owner=roomOwnerIndex(d,idx,room.num);
if(owner>=0)return{valid:false,message:`Room ${room.num} is already assigned to Cabin ${owner+1}.`};
if(!roomCanBeSelected(d,idx,entry,room,bucket.key))return{valid:false,message:"That room is no longer available for this cabin."};
return{valid:true,room};
}
function openRoomModal(idx){
const plan=detail?.cabinPlan[idx];
if(!plan)return;
const host=document.getElementById("roomModal");
host.dataset.returnFocus=`[data-change-room="${idx}"]`;
resetPicker();mod.editCabin=idx;mod.pendingCode=plan.code;mod.pendingRoom=String(plan.room);
mod.roomDeck=roomDeckFromNumber(plan.room,catEntry(plan.code).deck);
mod.addGuestCabin=-1;mod.addGuestStep=0;mod.newGuestDraft=null;mod.addGuestError=false;mod.guestSearch="";mod.addGuestSuppSearch="";mod.addGuestSuppCat=null;renderModify();
}
function renderRoomModal(){
const host=document.getElementById("roomModal");
if(!detail||mod.editCabin<0||mod.step!==0){hideAccessibleModal(host);return;}
const d=detail,idx=mod.editCabin,group=cabinGroups(d)[idx],plan=d.cabinPlan[idx],pricing=priceDetail(d);
if(!group||!plan){closeRoomModal();return;}
const heads=group.guests.length,bucket=occBucketFor(group.guests),currentEntry=catEntry(plan.code);
const selectedEntry=catEntry(mod.pendingCode||plan.code),currentRoom=String(plan.room);
const pendingRoom=mod.pendingRoom==null?"":String(mod.pendingRoom);
const rooms=roomOptionsForCabin(d,idx,selectedEntry);
const availableDecks=[...new Set([...STATEROOM_DECKS,...rooms.map(room=>room.deck)])].sort((a,b)=>a-b);
if(!availableDecks.includes(mod.roomDeck))mod.roomDeck=roomDeckFromNumber(pendingRoom,selectedEntry.deck);
const currentBookingDelta=cabinAdjustmentForCode(d,idx,plan.code,pricing.perHeadFare);
const bookingDelta=cabinAdjustmentForCode(d,idx,selectedEntry.code,pricing.perHeadFare);
const actionDelta=roundMoney(bookingDelta-currentBookingDelta);
const selection=selectedRoomValidation(d,idx,selectedEntry.code,pendingRoom);
const partyIssue=heads===0?"Assign at least one guest to this cabin before changing its room.":bucket.over?`This cabin carries ${heads} guests. Move guests or arrange connecting cabins before selecting a room.`:"";
const hasChange=selectedEntry.code!==plan.code||pendingRoom!==currentRoom;
const ready=hasChange&&selection.valid;
const categoryOpen=mod.roomCategoryOpen;
const takenRooms=new Map(d.cabinPlan.map((other,otherIdx)=>[String(other.room),otherIdx]).filter(([,otherIdx])=>otherIdx!==idx));
const activeFilters=ROOM_FILTERS.filter(f=>mod.roomFilters[f.k]);
const filtersActive=mod.locFilter!=="All"||activeFilters.length>0;
const selectedDeck=pendingRoom?roomDeckFromNumber(pendingRoom,selectedEntry.deck):null;
const activeDeck=mod.roomDeck;
const activeDeckRooms=rooms.filter(room=>room.deck===activeDeck);
const visibleRooms=activeDeckRooms.filter(room=>roomMatchesCurrentFilters(room)||room.num===pendingRoom||(selectedEntry.code===plan.code&&room.num===currentRoom)||takenRooms.has(room.num));
const selectableRooms=rooms.filter(room=>roomCanBeSelected(d,idx,selectedEntry,room,bucket.key));
const selectableMatches=rooms.filter(room=>roomMatchesCurrentFilters(room)&&roomCanBeSelected(d,idx,selectedEntry,room,bucket.key));
const activeSelectable=activeDeckRooms.filter(room=>roomMatchesCurrentFilters(room)&&roomCanBeSelected(d,idx,selectedEntry,room,bucket.key));
const roomStatus=partyIssue?{title:"Room change unavailable",copy:partyIssue,tone:"pending"}
:!pendingRoom?{title:"Select a room",copy:"Choose from any available deck.",tone:"pending"}
:ready?{title:`Room ${pendingRoom} selected`,copy:"Ready to apply this change.",tone:"ready"}
:!hasChange?{title:`Room ${pendingRoom} current`,copy:"This is the existing assignment.",tone:"current"}
:{title:`Room ${pendingRoom} selected`,copy:selection.message,tone:"pending"};
const categoryOptions=d.inventory.map(entry=>{
const available=categoryPartyAvailability(d,idx,entry,bucket.key);
const isCurrent=entry.code===plan.code,isOriginal=entry.code===d.base.cabinCodeBy[idx],isSelected=entry.code===selectedEntry.code;
const usable=available>0||isCurrent||isOriginal||isSelected;
const delta=roundMoney(cabinAdjustmentForCode(d,idx,entry.code,pricing.perHeadFare)-currentBookingDelta);
return `<button type="button" role="menuitemradio" aria-checked="${isSelected}" class="mf-room-category-option${isSelected?" selected":""}${usable?"":" sold"}"${usable?` data-selectcode="${esc(entry.code)}"`:" disabled"}>
<span class="mf-room-category-dot" style="background:${CABIN_TYPE_COLOR[entry.type]}" aria-hidden="true"></span>
<span class="mf-room-category-option-copy"><strong>${esc(entry.name)}</strong><small>${esc(entry.type)} &middot; ${esc(entry.loc)}</small></span>
<span class="mf-room-category-option-meta"><strong>${fmt(entry.price)}</strong><small class="${available||isCurrent||isOriginal?"available":"sold"}">${isCurrent?(available?`Current &middot; ${available} additional for ${esc(bucket.label)}`:"Current allocation retained"):isOriginal?"Original allocation available":available?`${available} available for ${esc(bucket.label)}`:"Sold out for "+esc(bucket.label)}</small></span>
<span class="mf-room-category-option-delta${delta<0?" credit":""}">${Math.abs(delta)<=.005?"No fare change":fmtSigned(delta)}</span>
${isCurrent?'<span class="mf-room-category-badge">Current</span>':isOriginal?'<span class="mf-room-category-badge">Original</span>':isSelected?`<span class="mf-room-category-check" aria-label="Selected">${SVG_TICK}</span>`:""}
</button>`;
}).join("");
const tabs=availableDecks.map(deck=>{
const deckRooms=rooms.filter(room=>room.deck===deck);
const available=deckRooms.filter(room=>roomCanBeSelected(d,idx,selectedEntry,room,bucket.key)).length;
const matches=deckRooms.filter(room=>roomMatchesCurrentFilters(room)&&roomCanBeSelected(d,idx,selectedEntry,room,bucket.key)).length;
const selected=deck===activeDeck,containsSelection=deck===selectedDeck;
return `<button type="button" class="mf-room-tab${selected?" active":""}" id="room-tab-${idx}-${deck}" role="tab" aria-selected="${selected}"${selected?` aria-controls="room-panel-${idx}-${deck}"`:""} tabindex="${selected?0:-1}" data-roomdeck="${deck}">
<span><strong>Deck ${deck}</strong><em>${filtersActive?`${matches}/${available}`:available}</em></span>
<small>${containsSelection?`${pendingRoom===currentRoom&&selectedEntry.code===plan.code?"Current":"Selected"} room`:filtersActive?`${matches} matching`:`${available} available`}</small>
</button>`;
}).join("");
const selectedVisible=visibleRooms.find(room=>room.num===pendingRoom&&roomCanBeSelected(d,idx,selectedEntry,room,bucket.key));
const roomTabStop=selectedVisible?.num||visibleRooms.find(room=>roomCanBeSelected(d,idx,selectedEntry,room,bucket.key))?.num||"";
const cards=visibleRooms.map(room=>{
const selected=room.num===pendingRoom;
const current=selectedEntry.code===plan.code&&room.num===currentRoom;
const owner=takenRooms.get(room.num);
const selectable=roomCanBeSelected(d,idx,selectedEntry,room,bucket.key);
const state=selected?"selected":current?"current":owner!==undefined?"taken":selectable?"available":"unavailable";
const status=selected?(current?"Current":"Selected"):current?"Current":owner!==undefined?`Cabin ${owner+1}`:selectable?"Available":"Unavailable";
const features=ROOM_FILTERS.filter(feature=>room[feature.k]);
const featureText=features.map(feature=>feature.title).join(", ");
const outsideFilters=!roomMatchesCurrentFilters(room)&&(selected||current||owner!==undefined);
return `<button type="button" class="mf-room-card ${state}${current?" is-current":""}${outsideFilters?" outside-filter":""}" role="radio" aria-checked="${selected}" tabindex="${selectable&&room.num===roomTabStop?0:-1}"${selectable?` data-selectroom="${esc(room.num)}"`:" disabled"} aria-label="Room ${esc(room.num)}, Deck ${room.deck}, ${esc(room.loc)}, ${esc(status)}${featureText?", "+esc(featureText):""}">
<span class="mf-room-card-top"><span class="mf-room-num">${esc(room.num)}</span><span class="mf-room-status ${state}"><i aria-hidden="true"></i>${esc(status)}</span></span>
<span class="mf-room-location-text">${esc(room.loc)}${outsideFilters?" · Outside filters":""}</span>
<span class="mf-room-features">${features.length?features.map(feature=>`<span title="${esc(feature.title)}"><i aria-hidden="true">${feature.icon}</i>${esc(feature.label)}</span>`).join(""):`<span class="standard">${room.legacy?"Previously assigned":"Standard room"}</span>`}</span>
</button>`;
}).join("");
const locCounts=LOC_FILTERS.slice(1).map(loc=>`${activeDeckRooms.filter(room=>room.loc===loc).length} ${loc}`).join(" &middot; ");
const changeTitle=hasChange&&pendingRoom?`${esc(currentEntry.code)} Room ${esc(currentRoom)} <span aria-hidden="true">&rarr;</span> ${esc(selectedEntry.code)} Room ${esc(pendingRoom)}`:"Select a different room or category to continue";
const changeFare=hasChange&&pendingRoom?(Math.abs(actionDelta)<=.005?"No fare change":`${fmtSigned(actionDelta)} for this change`):`Current booking adjustment ${Math.abs(bookingDelta)<=.005?fmt(0):fmtSigned(bookingDelta)}`;
host.innerHTML=`<div class="mf-modal-backdrop" data-rpcancel></div>
<div class="mf-modal-card mf-modal-room" role="dialog" aria-modal="true" aria-labelledby="roomModalTitle" aria-describedby="roomModalDescription">
<header class="mf-room-modal-head">
<div class="mf-room-title-row"><div class="mf-modal-title"><h2 class="mf-modal-h" id="roomModalTitle">Change room</h2><span class="mf-modal-sub" id="roomModalDescription">Cabin ${idx+1} &middot; ${heads} guest${heads===1?"":"s"} &middot; current room ${esc(currentRoom)}</span></div>
<button type="button" class="mf-modal-x" data-rpcancel aria-label="Close Change room">${SVG_X}</button></div>
<div class="mf-room-summary" role="group" aria-label="Room change settings">
<div class="mf-room-category-wrap">
<button type="button" class="mf-room-category-trigger" data-room-category-toggle aria-haspopup="menu" aria-controls="roomCategoryMenu" aria-expanded="${categoryOpen}">
<span class="mf-room-category-dot" style="background:${CABIN_TYPE_COLOR[selectedEntry.type]}" aria-hidden="true"></span>
<span class="mf-room-category-trigger-copy"><small>Stateroom category</small><strong>${esc(selectedEntry.name)}</strong><span>${esc(selectedEntry.type)} &middot; ${esc(selectedEntry.loc)}</span></span>
<span class="mf-room-category-chevron" aria-hidden="true">${SVG_CARET}</span>
</button>
${categoryOpen?`<div class="mf-room-category-menu" id="roomCategoryMenu" role="menu" aria-label="Switch stateroom category"><span class="mf-room-category-menu-label">Switch to another category</span>${categoryOptions}</div>`:""}
</div>
<div class="mf-room-summary-stat"><small>Fare per guest</small><strong>${fmt(selectedEntry.price)}</strong><span>${heads===0?"No guests assigned":bucket.over?`${heads} guests &middot; over capacity`:`${esc(bucket.label)} occupancy`}</span></div>
<div class="mf-room-summary-stat"><small>Booking fare change</small><strong class="${bookingDelta<0?"credit":bookingDelta>0?"charge":""}">${Math.abs(bookingDelta)<=.005?"No change":fmtSigned(bookingDelta)}</strong><span>Compared with original booking</span></div>
<div class="mf-room-selection-status ${roomStatus.tone}" role="status" aria-live="polite"><span aria-hidden="true">${roomStatus.tone==="ready"?SVG_TICK:roomStatus.tone==="current"?"•":"!"}</span><div><strong>${esc(roomStatus.title)}</strong><small>${esc(roomStatus.copy)}</small></div></div>
</div>
</header>
<div class="mf-modal-body mf-room-modal-body">
${partyIssue?`<div class="mf-rp-hint mf-rp-hint-blocking" role="alert">${esc(partyIssue)}</div>`:""}
<section class="mf-room-inventory" aria-labelledby="roomInventoryTitle">
<div class="mf-room-inventory-head"><div><h3 id="roomInventoryTitle">Available rooms</h3><p>${filtersActive?`${selectableMatches.length} matching rooms across ${availableDecks.length} decks`:`${selectableRooms.length} selectable rooms across ${availableDecks.length} decks`} &middot; ${esc(selectedEntry.name)}</p></div><span><strong>${selection.valid&&pendingRoom?"1":"0"} / 1</strong><small>Room selected</small></span></div>
<div class="mf-room-toolbar">
<button type="button" class="mf-room-auto" data-autoassign${activeSelectable.some(room=>room.num!==currentRoom||selectedEntry.code!==plan.code)?"":" disabled"}>${SVG_SPARKLES}<span>Auto-select room</span></button>
<span class="mf-room-control-divider" aria-hidden="true"></span>
<div class="mf-room-filter-group"><span class="mf-room-control-label">Ship position</span><div class="mf-room-segments">${LOC_FILTERS.map(loc=>`<button type="button" class="${mod.locFilter===loc?"active":""}" data-roomloc="${esc(loc)}" aria-pressed="${mod.locFilter===loc}">${esc(loc)}</button>`).join("")}</div></div>
<span class="mf-room-control-divider" aria-hidden="true"></span>
<div class="mf-room-filter-group"><span class="mf-room-control-label">Features</span><div class="mf-room-filters"><button type="button" class="mf-room-filter-all${activeFilters.length?"":" active"}" data-roomfilterall aria-pressed="${!activeFilters.length}">All</button>${ROOM_FILTERS.map(feature=>`<button type="button" class="mf-room-filter${mod.roomFilters[feature.k]?" active":""}" data-roomfilter="${feature.k}" title="${esc(feature.title)}" aria-pressed="${mod.roomFilters[feature.k]}"><span aria-hidden="true">${feature.icon}</span>${esc(feature.label)}</button>`).join("")}</div></div>
${filtersActive?'<button type="button" class="mf-room-clear" data-roomclear>Clear filters</button>':""}
</div>
<div class="mf-room-tabs" role="tablist" aria-label="Available decks">${tabs}</div>
<section class="mf-room-deck-panel" id="room-panel-${idx}-${activeDeck}" role="tabpanel" aria-labelledby="room-tab-${idx}-${activeDeck}">
<div class="mf-room-deck-panel-head"><div><strong>Deck ${activeDeck}</strong><span>${activeSelectable.length} available${filtersActive?` &middot; ${visibleRooms.length} shown`:""}</span></div><small>${locCounts}</small></div>
${visibleRooms.length?`<div class="mf-room-grid" role="radiogroup" aria-label="Rooms on Deck ${activeDeck}">${cards}</div>`:`<div class="mf-room-empty" role="status"><strong>No rooms match on Deck ${activeDeck}</strong><span>Choose another deck or clear the current filters.</span><button type="button" data-roomclear>Clear filters</button></div>`}
</section>
</section>
</div>
<footer class="mf-modal-foot mf-room-modal-foot">
<div class="mf-room-change-summary"><strong>${changeTitle}</strong><span>${changeFare}</span>${mod.roomNotice?`<em role="alert">${esc(mod.roomNotice)}</em>`:""}</div>
<div class="mf-rp-actions"><button type="button" class="mf-rp-cancel" data-rpcancel>Cancel</button><button type="button" class="mf-rp-confirm" data-rpconfirm="${idx}"${ready?"":" disabled"}>Apply room change</button></div>
</footer>
</div>`;
showAccessibleModal(host,".mf-room-category-trigger");
}
function closeRoomModal(){mod.editCabin=-1;resetPicker();renderModify();}
/* ---- remove guest confirmation modal ---- */
function renderRemoveGuestModal(){
const host=document.getElementById("removeGuestModal");
if(!detail||mod.removeGuestIdx<0){hideAccessibleModal(host);return;}
const idx=mod.removeGuestIdx,g=detail.guests[idx];
if(!g||isBaseGuest(detail,g)){mod.removeGuestIdx=-1;hideAccessibleModal(host);return;}
const cabinIdx=detail.b.cabins.indexOf(g.cabin);
const room=detail.cabinPlan[cabinIdx]?.room||g.cabin;
const farePosition=activeCabinFarePosition(detail,g);
/* Quote the same staged price change the review will show after removal. The
   guest fare table is an allocation view and can include fixed sold-booking
   amounts that the modification engine does not currently reverse. */
const beforeRemoval=priceDetail(detail).total;
const projectedDetail={...detail,guests:detail.guests.filter((_,guestIdx)=>guestIdx!==idx)};
const removalDelta=priceDetail(projectedDetail).total-beforeRemoval;
const initials=g.name.split(/\s+/).filter(Boolean).slice(0,2).map(part=>part[0]).join("").toUpperCase();
host.innerHTML=`<div class="mf-modal-backdrop" data-rmcancel></div>
<div class="mf-modal-card mf-modal-remove" role="dialog" aria-modal="true" aria-labelledby="removeGuestTitle" aria-describedby="removeGuestDescription removeGuestAssurance">
<div class="mf-modal-head">
<div class="mf-rm-title-row">
<span class="mf-rm-icon" aria-hidden="true">${SVG_TRASH}</span>
<div class="mf-modal-title">
<h2 class="mf-modal-h" id="removeGuestTitle">Remove added guest?</h2>
<span class="mf-modal-sub" id="removeGuestDescription">${esc(g.name)} will be removed only from this staged modification.</span>
</div>
</div>
<button class="mf-modal-x" type="button" data-rmcancel aria-label="Close">${SVG_X}</button>
</div>
<div class="mf-modal-body">
<div class="mf-rm-assurance" id="removeGuestAssurance" role="note">
<span class="mf-rm-assurance-icon" aria-hidden="true">${SVG_CHECK}</span>
<div><strong>Current booking stays unchanged</strong><span>${esc(g.name)} is not on the saved booking. This action affects only the unsaved guest addition.</span></div>
</div>
<div class="mf-rm-guest">
<span class="mf-rm-avatar" aria-hidden="true">${esc(initials)}</span>
<div class="mf-rm-guest-copy"><span>New guest addition</span><strong>${esc(g.name)}</strong><small>${esc(PASSENGER_TYPE[g.band])} &middot; Cabin ${cabinIdx+1} &middot; Room ${esc(room)} &middot; FP-${farePosition}</small></div>
</div>
<div class="mf-rm-scope" aria-label="Result of removing this guest addition">
<section class="mf-rm-scope-discard" aria-labelledby="removeGuestDiscardTitle">
<h3 id="removeGuestDiscardTitle">This action discards</h3>
<ul><li>Guest addition and selected extras</li><li><span>Staged booking total</span><strong>${Math.abs(removalDelta)<=.005?"$0.00":fmtSigned(removalDelta)}</strong></li></ul>
</section>
</div>
</div>
<div class="mf-modal-foot">
<button class="mf-rm-keep" type="button" data-rmcancel>Keep guest</button>
<button class="mf-rp-confirm mf-confirm-remove" type="button" data-rmconfirm>${SVG_TRASH}<span>Discard guest addition</span></button>
</div>
</div>`;
showAccessibleModal(host,".mf-modal-x");
}

/* ---- "Add Guest" modal: a two-step guest + optional supplements task ----
   The candidate stays entirely in modal state until the final action. This
   keeps Cancel and Back reversible and lets the canonical price engine quote
   the guest, category adjustment, protection, supplements and promotion once. */
function clearAddGuestModalState(){
mod.addGuestCabin=-1;mod.addGuestStep=0;mod.newGuestDraft=null;mod.addGuestError=false;
mod.guestSearch="";mod.addGuestSuppSearch="";mod.addGuestSuppCat=null;
}
function addGuestDOBDate(d){
const value=String(d?.dob||"");
if(!/^\d{4}-\d{2}-\d{2}$/.test(value))return null;
const[y,m,day]=value.split("-").map(Number),dobDate=new Date(value+"T00:00:00");
if(Number.isNaN(dobDate.getTime())||dobDate.getFullYear()!==y||dobDate.getMonth()!==m-1||dobDate.getDate()!==day)return null;
if(detail?.sail&&dobDate>detail.sail)return null;
return dobDate;
}
function addGuestValidationMessage(d){
if(!d?.first?.trim()||!d?.last?.trim()||!d?.dob)return"Enter first name, last name, and date of birth to continue.";
if(!addGuestDOBDate(d))return"Enter a valid date of birth on or before the sailing date to continue.";
return"";
}
function normalizeAddGuestSupps(source,guest){
const supps={};
Object.entries(source||{}).forEach(([id,raw])=>{
const sup=SUPP_BY_ID[id],numeric=Number(raw),quantity=Math.floor(numeric);
if(!sup||!Number.isFinite(numeric)||quantity<=0||!suppAllowed(sup,guest))return;
supps[id]=quantity;
});
return supps;
}
function createAddGuestCandidate(d,idx,suppSource=d?.supps,guestId="preview:add-guest"){
if(!detail||!d||idx<0||idx>=detail.b.cabins.length)return null;
const dobDate=addGuestDOBDate(d);
if(!dobDate)return null;
const profile={first:d.first.trim(),middle:d.middle.trim(),last:d.last.trim(),iso:d.iso,email:d.email.trim(),phone:d.phone.trim(),
gender:d.gender,address:d.address.trim(),city:d.city.trim(),zip:d.zip.trim(),state:d.state.trim()};
const guest={guestId,name:profileDisplayName(profile)||"New guest",dob:fmtDOB(dobDate),dobDate,
band:ageBand(ageAt(dobDate,detail.sail)),cabin:detail.b.cabins[idx],supplements:0,supps:{},pkg:null,insurance:true,profile};
guest.supps=normalizeAddGuestSupps(suppSource,guest);
guest.supplements=suppCount(guest.supps);
return guest;
}
function addGuestQuote(candidate,idx){
const before=priceDetail(detail),projected={...detail,guests:[...detail.guests,candidate]},after=priceDetail(projected);
const cabinFare=Math.max(0,roundMoney(newGuestCabinFare(projected,candidate,idx)+cabinAdjustmentForGuest(projected,candidate,idx,before.perHeadFare)));
const taxes=newGuestTaxComponents(projected,candidate);
return{
before,after,cabinFare,taxes,
supplements:roundMoney(suppValue(candidate.supps,null)),
promotion:Math.max(0,roundMoney(after.promoAmt-before.promoAmt)),
estimatedFare:roundMoney(after.total-before.total)
};
}
function showAddGuestValidationError(message){
mod.addGuestError=message;mod.addGuestStep=0;renderAddGuestModal();
requestAnimationFrame(()=>document.querySelector('#addGuestModal [aria-invalid="true"]')?.focus({preventScroll:true}));
}
function advanceAddGuest(){
const message=addGuestValidationMessage(mod.newGuestDraft);
if(message){showAddGuestValidationError(message);return;}
const candidate=createAddGuestCandidate(mod.newGuestDraft,mod.addGuestCabin);
if(!candidate){showAddGuestValidationError("Review the guest details and try again.");return;}
mod.newGuestDraft.supps={...candidate.supps};
mod.addGuestError=false;mod.addGuestStep=1;renderAddGuestModal();
requestAnimationFrame(()=>document.querySelector('#addGuestModal [data-agsuppsearch], #addGuestModal [data-agskip]')?.focus({preventScroll:true}));
}
function confirmAddGuest(includeSupplements=true){
if(!detail||!mod.newGuestDraft||mod.addGuestCabin<0)return;
const message=addGuestValidationMessage(mod.newGuestDraft);
if(message){showAddGuestValidationError(message);return;}
const selected=includeSupplements?mod.newGuestDraft.supps:{};
const candidate=createAddGuestCandidate(mod.newGuestDraft,mod.addGuestCabin,selected,addedGuestId(detail.b.id));
if(!candidate){showAddGuestValidationError("Review the guest details and try again.");return;}
detail.guests.push(candidate);
clearAddGuestModalState();
refresh();
}
function openAddGuestModal(idx){
mod.editCabin=-1;resetPicker();
document.getElementById("addGuestModal").dataset.returnFocus=`[data-newguestcabin="${idx}"]`;
mod.addGuestCabin=idx;mod.addGuestStep=0;
mod.newGuestDraft={first:"",middle:"",last:"",email:"",phone:"",iso:"US",gender:"Male",dob:"",address:"",city:"",zip:"",state:"",insurance:true,supps:{}};
mod.addGuestError=false;mod.guestSearch="";mod.addGuestSuppSearch="";mod.addGuestSuppCat=null;
renderModify();
}
function closeAddGuestModal(){clearAddGuestModalState();renderModify();}
/* rendered on its own so live typing can refresh just the list, leaving the
   search input untouched and the caret where the agent left it */
function addGuestResultsHtml(){
const q=mod.guestSearch||"";
if(q.trim().length<2)return"";
const hits=searchDirectory(q);
if(!hits.length)return'<div class="mf-gs-empty">No matching guest profiles found.</div>';
return hits.map((p,n)=>`<button type="button" class="mf-gs-item" data-agpick="${n}">
<span class="mf-gs-avatar">${initials(directoryFullName(p))}</span>
<span class="mf-gs-det">
<span class="mf-gs-name">${esc(directoryFullName(p))}</span>
<span class="mf-gs-meta">${esc(p.email)} &middot; ${esc(p.city)}, ${esc(p.state)}</span>
</span>
</button>`).join("");
}
function addGuestSupplementRowsHtml(candidate){
const query=(mod.addGuestSuppSearch||"").trim().toLowerCase();
const rows=SUPP_CATALOG.filter(sup=>(!mod.addGuestSuppCat||sup.cat===mod.addGuestSuppCat)&&(!query||`${sup.name} ${sup.cat}`.toLowerCase().includes(query)));
if(!rows.length)return'<div class="mf-supp-empty" role="status">No supplements match your filters.</div>';
return rows.map(sup=>{
const allowed=suppAllowed(sup,candidate),quantity=(candidate.supps||{})[sup.id]||0,selected=quantity>0;
return `<article class="mf-supp-row mf-ag-supp-row${selected?" assigned":""}${allowed?"":" is-unavailable"}" aria-labelledby="add-guest-supp-name-${sup.id}">
<div class="mf-supp-main">
<span class="mf-supp-emoji-box" aria-hidden="true"><span class="mf-supp-emoji">${sup.emoji}</span></span>
<span class="mf-supp-det">
<span class="mf-supp-category">${esc(sup.cat)}</span>
<span class="mf-supp-title"><span class="mf-supp-name" id="add-guest-supp-name-${sup.id}">${esc(sup.name)}</span>${sup.minAge?`<span class="mf-supp-age">${sup.minAge}+</span>`:""}</span>
<span class="mf-supp-meta">${allowed?(selected?`<span class="mf-supp-assigned">${SVG_CHECK}${quantity} selected</span>`:'<span class="mf-supp-unassigned">Optional for this guest</span>'):'<span class="mf-ag-supp-ineligible">Not available for this guest</span>'}</span>
</span>
<span class="mf-ag-supp-right">
<span class="mf-supp-price"><span class="mf-supp-price-label">Per guest</span><span class="mf-supp-amt">${fmt(sup.pricePP)}</span></span>
<span class="mf-qty${allowed?"":" off"}">
<button type="button" class="mf-qty-btn" data-agsuppqty="${sup.id}" data-dir="-1"${!allowed||quantity===0?" disabled":""} aria-label="Decrease ${esc(sup.name)} quantity">&minus;</button>
<output class="mf-qty-val" aria-label="${esc(sup.name)} quantity ${quantity}">${quantity}</output>
<button type="button" class="mf-qty-btn plus" data-agsuppqty="${sup.id}" data-dir="1"${!allowed?" disabled":""} aria-label="Increase ${esc(sup.name)} quantity">+</button>
</span>
</span>
</div>
</article>`;
}).join("");
}
function addGuestSupplementSummaryHtml(candidate){
const selected=SUPP_CATALOG.map(sup=>({sup,quantity:(candidate.supps||{})[sup.id]||0})).filter(item=>item.quantity>0);
const units=suppCount(candidate.supps),subtotal=roundMoney(suppValue(candidate.supps,null));
return `<aside class="mf-ag-supp-summary" aria-labelledby="addGuestSelectedSupplementsTitle">
<div class="mf-ag-supp-summary-head"><div><span>Selection</span><h3 id="addGuestSelectedSupplementsTitle">Selected supplements</h3></div><strong>${units}</strong></div>
${selected.length?`<ul class="mf-ag-supp-summary-list">${selected.map(({sup,quantity})=>`<li><span><strong>${esc(sup.name)}</strong><small>Quantity ${quantity}</small></span><em>${fmt(roundMoney(sup.pricePP*quantity))}</em></li>`).join("")}</ul>`:`<div class="mf-ag-supp-summary-empty"><strong>No supplements selected</strong><span>Choose extras from the list, or skip this step and add the guest.</span></div>`}
<div class="mf-ag-supp-subtotal"><span>Supplements subtotal</span><strong>${fmt(subtotal)}</strong></div>
<p>You can manage supplements later from the booking details page.</p>
</aside>`;
}
function renderAddGuestModal(){
const host=document.getElementById("addGuestModal");
if(!detail||mod.addGuestCabin<0){hideAccessibleModal(host);return;}
const idx=mod.addGuestCabin,d=mod.newGuestDraft,c=COUNTRIES[d.iso]||COUNTRIES.US,step=mod.addGuestStep===1?1:0;
const entry=catEntry(detail.cabinPlan[idx].code);
let candidate=createAddGuestCandidate(d,idx);
if(candidate)d.supps={...candidate.supps};
if(!candidate){
const fallbackYear=detail.sail.getFullYear()-30;
candidate=createAddGuestCandidate({...d,first:d.first||"New",last:d.last||"Guest",dob:`${fallbackYear}-01-01`},idx,{},"preview:add-guest");
}
const quote=addGuestQuote(candidate,idx),selectedUnits=suppCount(candidate.supps);
const taxesSummary=` + taxes & port fees ${fmt(quote.taxes.taxes)}`;
const taxesAria=` plus taxes, fees and port expenses ${fmt(quote.taxes.taxes)}`;
const supplementSummary=quote.supplements?` + supplements ${fmt(quote.supplements)}`:"";
const supplementAria=quote.supplements?` plus supplements ${fmt(quote.supplements)}`:"";
const promoSummary=quote.promotion?` &minus; promotion ${fmt(quote.promotion)}`:"";
const promoAria=quote.promotion?` less promotion ${fmt(quote.promotion)}`:"";
const field=(label,inner,required,span)=>`<label class="mf-field ${span}"><span class="mf-flabel">${label}${required?' <em class="mf-req">*</em>':""}</span>${inner}</label>`;
const text=(key,val,extra)=>{
const required=key==="first"||key==="last";
const invalid=mod.addGuestError&&required&&!val.trim();
return `<input class="mf-input${invalid?" error":""}" data-ag="${key}" value="${esc(val)}"${required?" required":""}${invalid?' aria-invalid="true" aria-describedby="addGuestError"':""}${extra||""}>`;
};
const sailInputDate=`${detail.sail.getFullYear()}-${String(detail.sail.getMonth()+1).padStart(2,"0")}-${String(detail.sail.getDate()).padStart(2,"0")}`;
const dobInvalid=Boolean(mod.addGuestError)&&!addGuestDOBDate(d);
const detailsBody=`<section class="mf-ag-card mf-ag-lookup-card" aria-labelledby="addGuestLookupTitle">
<div class="mf-ag-section-head">
<div><h3 id="addGuestLookupTitle">Returning guest</h3><p>Search a saved profile to fill the guest details automatically.</p></div>
<span class="mf-ag-optional">Optional</span>
</div>
<div class="mf-gs">
<label class="mf-gs-label" for="addGuestSearch">Search guest profiles</label>
<div class="mf-gs-box">${SVG_SEARCH}<input class="mf-gs-input" id="addGuestSearch" data-agsearch value="${esc(mod.guestSearch)}" placeholder="Search by name or email&hellip;" autocomplete="off" aria-describedby="addGuestSearchHint"></div>
<p class="mf-gs-hint" id="addGuestSearchHint">Enter at least 2 characters to see matching profiles.</p>
<div class="mf-gs-results" data-agresults>${addGuestResultsHtml()}</div>
</div>
</section>
<div class="mf-ag-divider" role="separator"><span>or enter details manually</span></div>
<section class="mf-ag-card mf-ag-details-card" aria-labelledby="addGuestDetailsTitle">
<div class="mf-ag-section-head">
<div><h3 id="addGuestDetailsTitle">Guest details</h3><p>Review a matched profile or enter the required information.</p></div>
<span class="mf-ag-required"><em>*</em> Required fields</span>
</div>
${mod.addGuestError?`<p class="mf-rp-hint mf-ag-error" id="addGuestError" role="alert">${esc(mod.addGuestError)}</p>`:""}
<fieldset class="mf-ag-fieldset"><legend>Identity</legend><div class="mf-form-grid">
${field("First name",text("first",d.first),true,"mf-span-2")}
${field("Middle name",text("middle",d.middle),false,"mf-span-2")}
${field("Last name",text("last",d.last),true,"mf-span-2")}
${field("Date of birth",`<input class="mf-input${dobInvalid?" error":""}" type="date" data-ag="dob" value="${esc(d.dob)}" max="${sailInputDate}" required${dobInvalid?' aria-invalid="true" aria-describedby="addGuestError"':""}>`,true,"mf-span-3")}
${field("Gender",`<span class="mf-select"><select data-agsel="gender">${GENDERS.map(x=>`<option${x===d.gender?" selected":""}>${x}</option>`).join("")}</select>${SVG_CARET}</span>`,false,"mf-span-3")}
</div></fieldset>
<fieldset class="mf-ag-fieldset"><legend>Contact</legend><div class="mf-form-grid">
${field("Email address",text("email",d.email,' type="email"'),false,"mf-span-3")}
${field("Phone number",`<span class="mf-phone">
<span class="mf-cc"><span class="mf-flag mf-flag-${d.iso.toLowerCase()}" aria-hidden="true"></span><span class="mf-cc-code">${c.code}</span>${SVG_CARET}
<select data-agsel="iso" aria-label="Country code">${Object.entries(COUNTRIES).map(([k,v])=>`<option value="${k}"${k===d.iso?" selected":""}>${v.name} (${v.code})</option>`).join("")}</select></span>
<input class="mf-phone-num" data-ag="phone" value="${esc(d.phone)}" inputmode="tel" aria-label="Phone number">
</span>`,false,"mf-span-3")}
</div></fieldset>
<fieldset class="mf-ag-fieldset"><legend>Address</legend><div class="mf-form-grid">
${field("Zip code",text("zip",d.zip),false,"mf-span-2")}
${field("City",`<input class="mf-input" data-agcity value="${esc(d.city)}" placeholder="From zip" readonly>`,false,"mf-span-2")}
${field("State",`<input class="mf-input" data-agstate value="${esc(d.state)}" placeholder="From zip" readonly>`,false,"mf-span-2")}
${field("Address",text("address",d.address),false,"mf-span-6")}
</div></fieldset>
<div class="mf-ag-protection" role="note">
<span class="mf-ag-protection-icon" aria-hidden="true">${SVG_TICK}</span>
<span class="mf-ag-protection-copy"><strong>Travel Protection Plus</strong><span>Required for every guest and included in the estimated fare.</span></span>
<span class="mf-ag-protection-price"><strong>${fmt(INSURANCE_RATE)}</strong><small>per guest</small></span>
</div>
</section>`;
const preferredCats=["Wellness","Food & Drink","Activities","Connectivity","Experiences","Services"];
const categories=["All",...preferredCats.filter(cat=>SUPP_CATS.includes(cat)),...SUPP_CATS.filter(cat=>!preferredCats.includes(cat))];
const supplementBody=`<div class="mf-ag-supp-guest">
<span class="mf-rm-avatar" aria-hidden="true">${esc(initials(candidate.name))}</span>
<span><small>Adding to Cabin ${idx+1} &middot; Room ${esc(detail.cabinPlan[idx].room)}</small><strong>${esc(candidate.name)}</strong><em>${esc(PASSENGER_TYPE[candidate.band])}</em></span>
</div>
<div class="mf-ag-supp-layout">
<section class="mf-ag-card mf-ag-supp-catalog" aria-labelledby="addGuestSupplementsTitle">
<div class="mf-ag-section-head"><div><h3 id="addGuestSupplementsTitle">Choose optional supplements</h3><p>Select onboard extras for this guest, or skip and add them without supplements.</p></div><span class="mf-ag-optional">Optional</span></div>
<div class="mf-supp-search">${SVG_SEARCH}<input type="search" class="mf-supp-searchin" data-agsuppsearch value="${esc(mod.addGuestSuppSearch)}" placeholder="Search supplements&hellip;" autocomplete="off" aria-label="Search supplements for ${esc(candidate.name)}"></div>
<div class="mf-supp-pills" aria-label="Filter supplements by category">${categories.map(cat=>{const value=cat==="All"?"":cat,on=(mod.addGuestSuppCat||"")===value;return `<button type="button" class="mf-pill${on?" on":""}" data-agsuppcat="${esc(value)}" aria-pressed="${on}">${esc(cat)}</button>`;}).join("")}</div>
<div class="mf-supp-list mf-ag-supp-list" data-agsupplist>${addGuestSupplementRowsHtml(candidate)}</div>
</section>
${addGuestSupplementSummaryHtml(candidate)}
</div>`;
const progress=`<ol class="mf-ag-steps" aria-label="Add guest progress">
<li class="mf-ag-step${step===0?" is-current":" is-complete"}"${step===0?' aria-current="step"':""}><span class="mf-ag-step-number">${step===1?SVG_TICK:"1"}</span><span>Guest details</span></li>
<li class="mf-ag-step${step===1?" is-current":""}"${step===1?' aria-current="step"':""}><span class="mf-ag-step-number">2</span><span>Optional supplements</span></li>
</ol>`;
const footerActions=step===0
?`<div class="mf-rp-actions"><button type="button" class="mf-rp-cancel" data-agcancel>Cancel</button><button type="button" class="mf-rp-confirm" data-agnext>Next</button></div>`
:`<div class="mf-rp-actions mf-ag-step-two-actions"><button type="button" class="mf-rp-cancel" data-agback>Back</button>${selectedUnits
?'<button type="button" class="mf-rp-confirm" data-agconfirm>Add guest</button>'
:'<button type="button" class="mf-rp-confirm" data-agskip>Skip supplements &amp; add guest</button>'}</div>`;
host.innerHTML=`<div class="mf-modal-backdrop" data-agcancel></div>
<div class="mf-modal-card mf-modal-addguest" role="dialog" aria-modal="true" aria-labelledby="addGuestTitle" aria-describedby="addGuestDescription">
<div class="mf-modal-head">
<div class="mf-modal-title">
<h2 class="mf-modal-h" id="addGuestTitle">Add guest</h2>
<span class="mf-modal-sub" id="addGuestDescription">Cabin ${idx+1} &middot; Room ${esc(detail.cabinPlan[idx].room)} &middot; ${esc(entry.type)}</span>
</div>
<button type="button" class="mf-modal-x" data-agcancel aria-label="Close add guest dialog">${SVG_X}</button>
</div>
${progress}
<div class="mf-modal-body mf-ag-body">
${step===0?detailsBody:supplementBody}
</div>
<div class="mf-modal-foot mf-ag-foot">
<div class="mf-ag-fare-summary" role="group" aria-label="Estimated added fare ${fmt(quote.estimatedFare)}. Cabin fare ${fmt(quote.cabinFare)}${taxesAria} plus Travel Protection Plus ${fmt(INSURANCE_RATE)}${supplementAria}${promoAria}.">
<span>Estimated added fare</span><strong>${fmt(quote.estimatedFare)}</strong><small>Cabin fare ${fmt(quote.cabinFare)}${taxesSummary} + travel protection ${fmt(INSURANCE_RATE)}${supplementSummary}${promoSummary}</small>
</div>
${footerActions}
</div>
</div>`;
showAccessibleModal(host,mod.addGuestError?'[aria-invalid="true"]':step===0?'[data-agsearch]':'[data-agsuppsearch], [data-agskip]');
}

/* ---- third stage: guest details (Figma 538:8588) ---- */
function guestProfileComplete(g){
const profile=g?.profile||{};
return Boolean(g?.dob&&profile.first?.trim()&&profile.last?.trim()&&profile.email?.trim()&&profile.phone?.trim()&&profile.address?.trim()&&profile.zip?.trim()&&profile.city?.trim()&&profile.state?.trim());
}
function guestProfileChanged(g){
const before=baseGuestFor(detail,g);
return Boolean(before&&!sameProfile(g.profile,before.profile));
}
function guestReviewMeta(g){
const dob=g.dobDate instanceof Date?g.dobDate:new Date(g.dobDate||g.dob);
const age=!Number.isNaN(dob.getTime())?ageAt(dob,detail.sail):null;
const passengerType=String(PASSENGER_TYPE[g.band]||"Guest").replace(/\s+Passenger$/i,"");
return `${passengerType}${Number.isFinite(age)?` · ${age} ${age===1?"year":"years"}`:""} · FP-${activeCabinFarePosition(detail,g)}`;
}
function guestReviewHeader(g,i,expanded){
const isNew=!isBaseGuest(detail,g),primary=isPrimaryGuest(detail,g),changed=guestProfileChanged(g),complete=guestProfileComplete(g);
const guestNumber=activeGuests(detail).findIndex(candidate=>candidate.guestId===g.guestId)+1;
return `<button class="mf-head" data-toggle="${i}" aria-expanded="${String(expanded)}" aria-controls="guest-profile-${i}">
<span class="mf-guest-row-index">Guest ${Math.max(1,guestNumber)}</span>
<span class="mf-guest-row-copy"><span class="mf-name">${esc(g.name)}${primary?'<span class="mf-tag-primary">Primary</span>':""}${isNew?'<span class="mf-tag-new">New</span>':changed?'<span class="mf-tag-new">Updated</span>':""}</span><small>${esc(guestReviewMeta(g))}</small></span>
<span class="mf-head-right"><span class="mf-guest-row-status${complete?" is-complete":" is-attention"}">${complete?SVG_TICK:"!"}${complete?"Complete":"Needs attention"}</span>${SVG_CHEV}</span>
</button>`;
}
function mfGuestsBody(){
const entries=activeGuestEntries(detail);
const groups=detail.cabinPlan.map((plan,ci)=>({
ci,plan,entry:catEntry(plan.code),
guests:entries.filter(({g})=>g.cabin===detail.b.cabins[ci])
})).filter(group=>group.guests.length);
const reviewEntries=entries.filter(({g})=>!isBaseGuest(detail,g)||guestProfileChanged(g));
if(!(mod.guestCollapsedCabinIndexes instanceof Set)){
const reviewCabins=new Set(reviewEntries.map(({g})=>detail.b.cabins.indexOf(g.cabin)).filter(index=>index>=0));
const defaultOpenCabin=reviewCabins.size?[...reviewCabins][0]:groups[0]?.ci;
mod.guestCollapsedCabinIndexes=new Set(groups.map(group=>group.ci).filter(ci=>ci!==defaultOpenCabin));
mod.open=reviewEntries.find(({g})=>detail.b.cabins.indexOf(g.cabin)===defaultOpenCabin)?.i??-1;
}
const newCount=entries.filter(({g})=>!isBaseGuest(detail,g)).length;
const updatedCount=entries.filter(({g})=>guestProfileChanged(g)).length;
const completeCount=entries.filter(({g})=>guestProfileComplete(g)).length;
const allComplete=completeCount===entries.length;
const groupHtml=groups.map(group=>{
const collapsed=mod.guestCollapsedCabinIndexes.has(group.ci);
const newGuests=group.guests.filter(({g})=>!isBaseGuest(detail,g)).length;
const updatedGuests=group.guests.filter(({g})=>guestProfileChanged(g)).length;
const cabinComplete=group.guests.filter(({g})=>guestProfileComplete(g)).length;
const changeCopy=newGuests?`${newGuests} new guest${newGuests===1?"":"s"}`:updatedGuests?`${updatedGuests} updated guest${updatedGuests===1?"":"s"}`:"No profile changes";
const panelId=`mf-guest-cabin-${group.ci}`;
return `<section class="mf-guest-cabin${collapsed?" is-collapsed":" is-open"}" aria-labelledby="mf-guest-cabin-title-${group.ci}">
<button class="mf-guest-cabin-head" type="button" data-guest-cabin-toggle="${group.ci}" aria-expanded="${String(!collapsed)}" aria-controls="${panelId}">
<span class="mf-guest-cabin-icon" aria-hidden="true">${SVG_BED}</span>
<span class="mf-guest-cabin-copy"><strong id="mf-guest-cabin-title-${group.ci}">Cabin ${group.ci+1} · Room ${esc(group.plan.room)}</strong><small>${esc(group.entry.type)} · ${group.guests.length} guest${group.guests.length===1?"":"s"}</small></span>
<span class="mf-guest-cabin-meta"><em${newGuests||updatedGuests?' class="has-changes"':""}>${esc(changeCopy)}</em><small>${cabinComplete}/${group.guests.length} complete</small></span>
<span class="mf-guest-cabin-chevron" aria-hidden="true">${SVG_CHEV}</span>
</button>
<div class="mf-guest-cabin-list" id="${panelId}"${collapsed?" hidden":""}>${group.guests.map(({g,i})=>i===mod.open?mfGuestOpen(g,i):mfGuestShut(g,i)).join("")}</div>
</section>`;
}).join("");
const reviewCopy=[newCount?`${newCount} new`:"",updatedCount?`${updatedCount} updated`:""].filter(Boolean).join(" · ")||"No profile changes";
return `<div class="mf-step-surface"><div class="mf-workspace-editor"><section class="mf-workspace-subsection mf-guest-review" aria-labelledby="mfGuestDetailsTitle">
<header class="mf-workspace-subsection-head"><span aria-hidden="true">${SVG_USERS}</span><div><h2 id="mfGuestDetailsTitle">Guest details</h2><p>Review identity and contact information by cabin.</p></div></header>
<div class="mf-guest-review-summary" role="group" aria-label="${entries.length} guest profiles across ${groups.length} cabins; ${completeCount} complete">
<span class="mf-guest-review-summary-icon${allComplete?" is-complete":" is-attention"}" aria-hidden="true">${allComplete?SVG_TICK:"!"}</span>
<span class="mf-guest-review-summary-copy"><strong>${entries.length} guest profile${entries.length===1?"":"s"}</strong><small>${groups.length} cabin${groups.length===1?"":"s"} · ${esc(reviewCopy)}</small></span>
<span class="mf-guest-review-summary-status${allComplete?" is-complete":" is-attention"}">${completeCount}/${entries.length} complete</span>
</div>
<div class="mf-guest-cabin-stack">${groupHtml}</div>
</section></div></div>`;
}
function mfGuestShut(g,i){
const isNew=!isBaseGuest(detail,g);
return `<div class="mf-item${isNew?" is-new":""}">
${guestReviewHeader(g,i,false)}
<div id="guest-profile-${i}" hidden></div>
</div>`;
}
function mfGuestOpen(g,i){
const pr=g.profile,c=COUNTRIES[pr.iso];
const isNew=!isBaseGuest(detail,g);
const field=(label,inner,span)=>`<label class="mf-field ${span}"><span class="mf-flabel">${label}</span>${inner}</label>`;
const text=(key,val,extra)=>`<input class="mf-input" data-p="${key}" data-g="${i}" value="${esc(val)}"${extra||""}>`;
return `<div class="mf-item open${isNew?" is-new":""}">
${guestReviewHeader(g,i,true)}
<div class="mf-body" id="guest-profile-${i}">
<div class="mf-guest-detail-head"><strong>Identity &amp; contact information</strong><small>Protection details appear below.</small></div>
<div class="mf-form-grid">
${field("First name",text("first",pr.first),"mf-span-2")}
${field("Middle name",text("middle",pr.middle||""),"mf-span-2")}
${field("Last name",text("last",pr.last),"mf-span-2")}
${field("Date of birth",`<input class="mf-input" value="${esc(g.dob)}" readonly>`,"mf-span-3")}
${field("Gender",`<span class="mf-select"><select data-p="gender" data-g="${i}">${GENDERS.map(x=>`<option${x===pr.gender?" selected":""}>${x}</option>`).join("")}</select>${SVG_CARET}</span>`,"mf-span-3")}
${field("Email address",text("email",pr.email,' type="email"'),"mf-span-3")}
${field("Phone number",`<span class="mf-phone">
<span class="mf-cc"><span class="mf-flag mf-flag-${pr.iso.toLowerCase()}" aria-hidden="true"></span><span class="mf-cc-code">${c.code}</span>${SVG_CARET}
<select data-p="iso" data-g="${i}" aria-label="Country code">${Object.entries(COUNTRIES).map(([k,v])=>`<option value="${k}"${k===pr.iso?" selected":""}>${v.name} (${v.code})</option>`).join("")}</select></span>
<input class="mf-phone-num" data-p="phone" data-g="${i}" value="${esc(pr.phone)}" inputmode="tel" aria-label="Phone number">
</span>`,"mf-span-3")}
${field("Zip code",text("zip",pr.zip),"mf-span-2")}
${field("City",`<input class="mf-input" data-pcity="${i}" value="${esc(pr.city)}" placeholder="From zip" readonly>`,"mf-span-2")}
${field("State",`<input class="mf-input" data-pstate="${i}" value="${esc(pr.state)}" placeholder="From zip" readonly>`,"mf-span-2")}
${field("Address",text("address",pr.address),"mf-span-6")}
</div>
<div class="mf-hr"></div>
<div class="mf-prot" role="status" aria-label="Travel Protection Plus is required and active for ${esc(g.name)}">
<div class="mf-prot-row">
<div class="mf-prot-det"><span class="mf-prot-title">Travel Protection Plus</span><span class="mf-prot-price">${fmt0(INSURANCE_RATE)} per guest</span></div>
</div>
<p class="mf-prot-note">Mandatory for every guest. Covers trip cancellation, medical emergencies, and lost baggage up to $50,000.</p>
</div>
</div>
</div>`;
}

/* ---- second stage: packages & supplements ----
   supplement-major: one row per catalogue item that expands into a per-cabin guest
   assignment panel. the alternative (guest-major) would render 18 controls per guest. */

/* guests grouped by cabin — the grouping both assignment panels share */
function suppCabinGroups(){
return detail.cabinPlan.map((c,ci)=>({
ci,room:c.room,
list:activeGuestEntries(detail).filter(x=>x.g.cabin===detail.b.cabins[ci]).map(({g,i})=>({g,gi:i}))
})).filter(grp=>grp.list.length>0);
}

/* package cards: the catalogue view. clicking one opens its assignment panel. */
function mfPkgCards(p){
return PKG_CATALOG.map(pk=>{
const heads=activeGuests(detail).filter(g=>g.pkg===pk.id).length;
const open=mod.pkgExpanded===pk.id;
const on=heads>0;
return `<div class="mf-pkg${on?" on":""}${open?" open":""}" data-pkgcard="${pk.id}" role="button" tabindex="0"
aria-expanded="${open}" aria-label="${esc(pk.name)} package">
<div class="mf-pkg-check">${on?SVG_CHECK:""}</div>
<div class="mf-pkg-top"><span class="mf-pkg-emoji" aria-hidden="true">${pk.emoji}</span><span class="mf-pkg-name">${esc(pk.name)}</span></div>
<div class="mf-pkg-tag">${esc(pk.tagline)}</div>
<div class="mf-pkg-items">${pk.includedSupps.map(id=>`<div class="mf-pkg-item">
<span class="mf-pkg-tick">${SVG_CHECK}</span><span>${esc(SUPP_BY_ID[id].name)}</span>
</div>`).join("")}</div>
<div class="mf-pkg-foot">
<div class="mf-pkg-rate"><span>Per guest / night</span><span class="mf-pkg-num">+${fmt(pk.rate)}</span></div>
<div class="mf-pkg-rate"><span class="mf-pkg-strong">${on?`${heads} guest${heads===1?"":"s"}`:"Not assigned"}</span>
<span class="mf-pkg-num">${on?"+"+fmt(pk.rate*p.nights*heads):"—"}</span></div>
</div>
</div>`;
}).join("");
}

/* package assignment: checkbox per guest, plus an apply-all control per cabin.
   that cabin-level control is the "whole cabin takes this package" path. */
function mfPkgAssign(pkId){
const pk=PKG_BY_ID[pkId],groups=suppCabinGroups();
return `<div class="mf-assign">
<div class="mf-assign-hint">Assign <strong>${esc(pk.name)}</strong> to guests. ${fmt(pk.rate)} per guest / night.</div>
<div class="mf-assign-box">${groups.map(grp=>{
const eligible=grp.list.filter(({g})=>packageAllowed(pk,g,detail.sail));
const all=eligible.length>0&&eligible.every(({g})=>g.pkg===pkId);
return `<div class="mf-assign-grp">
<div class="mf-assign-ghead">
<span class="mf-assign-glabel">Cabin ${grp.ci+1} &middot; Room ${esc(grp.room)}</span>
<button class="mf-assign-all${all?" on":""}" data-pkgall="${pkId}" data-cabin="${grp.ci}" aria-pressed="${all}"${eligible.length?"":" disabled"}>
${all?"Remove from cabin":"Apply to whole cabin"}</button>
</div>
${grp.list.map(({g,gi})=>{
const blocked=!packageAllowed(pk,g,detail.sail),mine=g.pkg===pkId,other=g.pkg&&!mine;
const infantBlocked=blocked&&(g.band===3||ageAt(g.dobDate,detail.sail)<2);
return `<label class="mf-assign-row${other||blocked?" muted":""}">
<span class="mf-assign-who">
<input type="checkbox" data-pkgguest="${pkId}" data-g="${gi}"${mine?" checked":""}${blocked?" disabled":""}>
<span class="mf-assign-name">${esc(g.name)}</span>
<span class="mf-assign-age">${PASSENGER_TYPE[g.band].replace(" Passenger","")}</span>
</span>
${blocked?`<span class="mf-assign-note">${infantBlocked?"Supplements unavailable for infants":"Package age requirements not met"}</span>`:other&&PKG_BY_ID[g.pkg]?`<span class="mf-assign-note">On ${esc(PKG_BY_ID[g.pkg].name)}</span>`:""}
</label>`;
}).join("")}
</div>`;
}).join("")}</div>
<div class="mf-assign-foot"><button class="mf-assign-done" data-pkgdone>Done</button></div>
</div>`;
}

/* supplement assignment: a quantity stepper per guest, gated by age and by whatever
   that guest's package already covers */
function mfSuppAssign(sup){
const groups=suppCabinGroups();
const ageLabels=["Age 21+","Age 13\u201320","Age 2\u201312","Under 2"];
if(!groups.length)return `<div class="mf-supp-modal-empty" role="status"><strong>No guests available</strong><span>Add a guest to the booking before assigning this supplement.</span></div>`;
return `<div class="mf-assign mf-supp-assign-panel" data-supp-assignment-panel="${sup.id}" role="region" aria-label="Manage ${esc(sup.name)} guest assignments" tabindex="-1">
<div class="mf-supp-cabin-grid">${groups.map(grp=>{
const eligible=grp.list.filter(({g})=>{
const covered=Boolean(g.pkg&&PKG_BY_ID[g.pkg]?.includedSupps.includes(sup.id));
return !covered&&suppAllowed(sup,g);
});
const assigned=eligible.filter(({g})=>((g.supps||{})[sup.id]||0)>0).length;
return `<section class="mf-supp-cabin-card" aria-label="Cabin ${grp.ci+1}, room ${esc(grp.room)} supplement allotment">
<div class="mf-supp-cabin-head">
<h4>Cabin ${grp.ci+1} <span>&middot; Room ${esc(grp.room)}</span></h4>
<span>${grp.list.length} guest${grp.list.length===1?"":"s"}</span>
</div>
<div class="mf-supp-guest-list">
${grp.list.map(({g,gi})=>{
const covered=Boolean(g.pkg&&PKG_BY_ID[g.pkg]?.includedSupps.includes(sup.id));
const blocked=!suppAllowed(sup,g);
const infantBlocked=blocked&&(g.band===3||ageAt(g.dobDate,detail.sail)<2);
const qty=(g.supps||{})[sup.id]||0;
return `<div class="mf-assign-row mf-supp-guest-row${covered||blocked?" muted":""}">
<span class="mf-assign-who">
<span class="mf-assign-name">${esc(g.name)}</span>
<span class="mf-assign-age">${ageLabels[g.band]}</span>
${blocked?`<span class="mf-assign-warn">${infantBlocked?"Infants cannot receive supplements":"Age requirement not met"}</span>`:""}
</span>
${covered
?`<span class="mf-assign-inc">Included in ${esc(PKG_BY_ID[g.pkg]?.name||"package")}</span>`
:`<span class="mf-qty${blocked?" off":""}">
<button class="mf-qty-btn" data-suppqty="${sup.id}" data-g="${gi}" data-dir="-1"${blocked||qty===0?" disabled":""} aria-label="Decrease ${esc(sup.name)} quantity for ${esc(g.name)}">&minus;</button>
<output class="mf-qty-val" aria-live="polite" aria-label="${esc(sup.name)} quantity ${qty} for ${esc(g.name)}">${qty}</output>
<button class="mf-qty-btn plus" data-suppqty="${sup.id}" data-g="${gi}" data-dir="1"${blocked?" disabled":""} aria-label="Increase ${esc(sup.name)} quantity for ${esc(g.name)}">+</button>
</span>`}
</div>`;
}).join("")}
</div>
<div class="mf-supp-cabin-actions">
<button class="mf-supp-bulk remove" data-suppremoveall="${sup.id}" data-cabin="${grp.ci}"${assigned===0?" disabled":""} aria-label="Remove ${esc(sup.name)} from every guest in Cabin ${grp.ci+1}">Remove all</button>
<button class="mf-supp-bulk assign" data-suppall="${sup.id}" data-cabin="${grp.ci}"${eligible.length===0||assigned===eligible.length?" disabled":""} aria-label="Assign ${esc(sup.name)} to every eligible guest in Cabin ${grp.ci+1}">Assign to all</button>
</div>
</section>`;
}).join("")}</div>
</div>`;
}

/* One current-state aggregate powers both the compact booking inventory and
   catalogue rows. Package entitlements remain visible but never inflate the
   direct-supplement subtotal. */
function supplementMetricsForGuests(sup,guests){
let heads=0,qty=0,covered=0;
const assignments=[];
(guests||[]).forEach(g=>{
const pkg=g.pkg&&PKG_BY_ID[g.pkg]?PKG_BY_ID[g.pkg]:null;
const included=Boolean(pkg?.includedSupps.includes(sup.id));
const units=Math.max(0,Number((g.supps||{})[sup.id])||0);
if(!included&&units<=0)return;
const workingGuest=detail.guests.find(candidate=>candidate.guestId===g.guestId&&isGuestActive(candidate))||g;
const cabinIdx=detail.b.cabins.indexOf(workingGuest.cabin);
const room=cabinIdx>=0?detail.cabinPlan[cabinIdx]?.room:workingGuest.cabin;
if(included)covered++;
else{heads++;qty+=units;}
assignments.push({
guestId:g.guestId,name:g.name,cabinIdx,room:String(room??""),quantity:included?1:units,
covered:included,packageId:included?pkg.id:null,packageName:included?pkg.name:"",
amount:included?0:roundMoney(units*sup.pricePP)
});
});
return{sup,heads,qty,covered,guestCount:assignments.length,unitCount:qty+covered,amount:roundMoney(qty*sup.pricePP),assignments};
}
function supplementMetrics(sup){return supplementMetricsForGuests(sup,activeGuests(detail));}
function supplementSelectionSignature(sup,guests){
return(guests||[]).map(g=>{
const pkg=g.pkg&&PKG_BY_ID[g.pkg]?PKG_BY_ID[g.pkg]:null;
const included=Boolean(pkg?.includedSupps.includes(sup.id));
const units=Math.max(0,Number((g.supps||{})[sup.id])||0);
if(!included&&units<=0)return"";
return`${g.guestId}:${included?`package:${pkg.id}`:"direct"}:${units}`;
}).filter(Boolean).sort().join("|");
}
function currentSupplementMetrics(){
/* A staged guest cancellation belongs to the cancellation workflow, not to
   supplement inventory. Compare only retained sold guests, plus any new guests
   in the working roster, so a cancellation never creates false supplement rows. */
const retainedBaseIds=new Set(activeGuests(detail).filter(g=>isBaseGuest(detail,g)).map(g=>g.guestId));
const comparableBase=(detail.base.guests||[]).filter(g=>retainedBaseIds.has(g.guestId));
return SUPP_CATALOG.map(sup=>{
const current=supplementMetrics(sup);
const before=supplementMetricsForGuests(sup,comparableBase);
const changed=supplementSelectionSignature(sup,activeGuests(detail))!==supplementSelectionSignature(sup,comparableBase);
const stageStatus=!changed?null:!before.guestCount?"Added":!current.guestCount?"Removal staged":"Updated";
return{...current,before,stageStatus,displayAssignments:current.guestCount?current.assignments:before.assignments};
}).filter(item=>item.guestCount>0||item.before.guestCount>0&&item.stageStatus==="Removal staged");
}
function currentSupplementAssignmentHtml(item,slot){
const removing=item.stageStatus==="Removal staged";
const assignments=item.displayAssignments;
return `<div class="mf-current-supp-details mf-current-supp-slot-${slot}" id="current-supp-details-${item.sup.id}" role="region" aria-labelledby="current-supp-toggle-${item.sup.id}"${mod.currentSuppExpanded===item.sup.id?"":" hidden"}>
<div class="mf-current-supp-details-head"><span>${removing?"Assignments being removed":"Guest assignments"}</span><span>${assignments.length}</span></div>
<ul>${assignments.map(assignment=>{
const cabin=assignment.cabinIdx>=0?`Cabin ${assignment.cabinIdx+1}${assignment.room?` \u00b7 Room ${esc(assignment.room)}`:""}`:"Cabin assignment unavailable";
const detail=assignment.covered?`Included in ${esc(assignment.packageName)} package`:`Quantity ${reviewQuantity(assignment.quantity)} \u00b7 ${fmt(item.sup.pricePP)} per unit`;
return `<li><span class="mf-current-supp-guest"><strong>${esc(assignment.name)}</strong><small>${cabin}</small></span><span class="mf-current-supp-assignment">${detail}</span><strong class="mf-current-supp-line-amount">${assignment.covered?"Included":fmt(assignment.amount)}</strong></li>`;
}).join("")}</ul>
</div>`;
}
function currentSupplementInventoryItemHtml(item,slot){
const open=mod.currentSuppExpanded===item.sup.id;
const display=item.guestCount?item:item.before;
const meta=[];
if(item.stageStatus==="Removal staged")meta.push(`${display.guestCount} assignment${display.guestCount===1?"":"s"} being removed`);
else{
meta.push(`${display.guestCount} guest${display.guestCount===1?"":"s"}`);
if(display.unitCount!==display.guestCount)meta.push(`${reviewQuantity(display.unitCount)} units`);
if(display.covered)meta.push(`${display.covered} included`);
}
const amountCopy=item.stageStatus==="Removal staged"?`<strong>$0.00</strong><small>${item.before.amount>0?`was ${fmt(item.before.amount)}`:"previously included"}</small>`:item.amount>0?`<strong>${fmt(item.amount)}</strong>`:`<strong>Included</strong>`;
const stageClass=item.stageStatus?`is-${item.stageStatus.toLowerCase().replace(/\s+/g,"-")}`:"";
const status=item.stageStatus?`<span class="mf-current-supp-status ${stageClass}">${esc(item.stageStatus)}</span>`:"";
return `<article class="mf-current-supp mf-current-supp-slot-${slot}">
<h3><button type="button" class="mf-current-supp-toggle" id="current-supp-toggle-${item.sup.id}" data-current-supp-toggle="${item.sup.id}" aria-expanded="${open}" aria-controls="current-supp-details-${item.sup.id}"><span class="sr-only" data-current-supp-toggle-label>${open?"Hide":"View"} guest assignments for </span>
<span class="mf-current-supp-emoji" aria-hidden="true">${item.sup.emoji}</span>
<span class="mf-current-supp-copy"><span class="mf-current-supp-title">${esc(item.sup.name)}${status}</span><small>${meta.join(" \u00b7 ")}</small></span>
<span class="mf-current-supp-amount">${amountCopy}</span>${SVG_CHEV}
</button></h3>
</article>`;
}
function mfCurrentSupplements(){
const items=currentSupplementMetrics();
const currentItems=items.filter(item=>item.guestCount>0);
const assignments=currentItems.reduce((sum,item)=>sum+item.guestCount,0);
const units=currentItems.reduce((sum,item)=>sum+item.unitCount,0);
const amount=roundMoney(currentItems.reduce((sum,item)=>sum+item.amount,0));
const staged=items.some(item=>item.stageStatus);
const summary=[`${currentItems.length} type${currentItems.length===1?"":"s"}`,`${assignments} guest assignment${assignments===1?"":"s"}`];
if(units!==assignments)summary.push(`${reviewQuantity(units)} units`);
const rows=[];
for(let index=0;index<items.length;index+=2)rows.push(items.slice(index,index+2));
return `<section class="mf-current-supps" aria-labelledby="currentSuppsTitle">
<header class="mf-current-supps-head">
<div class="mf-current-supps-heading"><h2 id="currentSuppsTitle">Current supplements</h2><p role="status" aria-live="polite" aria-atomic="true">${summary.join(" \u00b7 ")}${staged?` <span class="mf-current-supps-staged">Includes staged changes</span>`:""}</p></div>
<div class="mf-current-supps-actions"><span class="mf-current-supps-total"><small>Direct supplement subtotal</small><strong>${fmt(amount)}</strong></span></div>
</header>
${items.length?`<div class="mf-current-supps-list">${rows.map(pair=>`<div class="mf-current-supp-row">${pair.map((item,index)=>`${currentSupplementInventoryItemHtml(item,index+1)}${currentSupplementAssignmentHtml(item,index+1)}`).join("")}</div>`).join("")}</div>`:`<div class="mf-current-supps-empty"><strong>No supplements on this booking yet</strong><span>Use the catalogue below to add one for an eligible guest.</span></div>`}
</section>`;
}

/* One grouped list is the source of truth for both booked and available
   supplements. This keeps assignment, price and staged status in one scan path. */
function mfSuppRow(sup,item){
const open=mod.suppExpanded===sup.id;
const current=supplementMetrics(sup);
const removing=item?.stageStatus==="Removal staged";
const display=removing?item.before:current;
const assigned=Boolean(item);
const meta=[];
if(removing){
meta.push(`${display.guestCount} assignment${display.guestCount===1?"":"s"} being removed`);
if(display.amount>0)meta.push(`Was ${fmt(display.amount)}`);
}else if(assigned){
meta.push(`${display.guestCount} guest${display.guestCount===1?"":"s"}`);
if(display.unitCount!==display.guestCount)meta.push(`${reviewQuantity(display.unitCount)} units`);
if(display.covered)meta.push(`${display.covered} included in package`);
}else meta.push("No guests assigned");
const priceLabel=removing?"After change":current.amount>0?"Current total":current.covered>0?"Booking":"Per guest";
const priceValue=removing?fmt(0):current.amount>0?fmt(current.amount):current.covered>0?"Included":fmt(sup.pricePP);
const actionLabel=assigned?"Manage guests":"Assign guests";
const stageClass=item?.stageStatus?`is-${item.stageStatus.toLowerCase().replace(/\s+/g,"-")}`:"";
const status=item?.stageStatus?`<span class="mf-supp-stage ${stageClass}">${esc(item.stageStatus)}</span>`:"";
return `<article class="mf-supp-row${assigned?" assigned":""}${removing?" is-removing":""}" id="supplement-row-${sup.id}" data-supp-row="${sup.id}" aria-labelledby="supplement-name-${sup.id}">
<div class="mf-supp-main">
<span class="mf-supp-emoji-box" aria-hidden="true"><span class="mf-supp-emoji">${sup.emoji}</span></span>
<span class="mf-supp-det">
<span class="mf-supp-category">${esc(sup.cat)}</span>
<span class="mf-supp-title"><span class="mf-supp-name" id="supplement-name-${sup.id}">${esc(sup.name)}</span>${status}<span class="mf-supp-info"><button type="button" class="mf-supp-info-btn" aria-label="About ${esc(sup.name)}" aria-describedby="supp-tip-${sup.id}">${SVG_INFO}</button><span class="mf-supp-tooltip" id="supp-tip-${sup.id}" role="tooltip"><strong>About this supplement</strong><span>${esc(sup.info)}</span></span></span>${sup.minAge?`<span class="mf-supp-age">${sup.minAge}+</span>`:""}</span>
<span class="mf-supp-meta">${assigned&&!removing?`<span class="mf-supp-assigned">${SVG_CHECK}Selected</span>`:""}<span class="${assigned?"mf-supp-selection-copy":"mf-supp-unassigned"}">${meta.join(" \u00b7 ")}</span></span>
</span>
<span class="mf-supp-right">
<span class="mf-supp-price"><span class="mf-supp-price-label">${priceLabel}</span><span class="mf-supp-amt">${priceValue}</span></span>
<button class="mf-supp-assign" data-suppassign="${sup.id}" aria-haspopup="dialog" aria-expanded="${open}" aria-controls="supplementAssignModal" aria-label="${actionLabel} for ${esc(sup.name)}"><span>${actionLabel}</span>${SVG_CHEV_RIGHT}</button>
</span>
</div>
</article>`;
}

function mfSupplementGroup(label,description,rows,className,itemById,collapsible=false,total=null){
const collapsed=collapsible&&mod.selectedSuppsCollapsed;
const titleId=`mf-supp-${className}-title`,rowsId=`mf-supp-${className}-rows`;
const head=collapsible?`<header class="mf-supp-group-head"><button type="button" class="mf-supp-group-toggle" data-selected-supp-toggle aria-expanded="${!collapsed}" aria-controls="${rowsId}">
<span class="mf-supp-group-toggle-copy"><h3 id="${titleId}">${label}</h3><small>${description}</small></span>
<span class="mf-supp-group-toggle-meta">${total!==null?`<span class="mf-supp-group-toggle-total"><small>Supplement total</small><b>${fmt(total)}</b></span>`:""}<strong aria-label="${rows.length} selected products">${rows.length}</strong><i aria-hidden="true">${SVG_CHEV}</i></span>
</button></header>`:`<header class="mf-supp-group-head"><span><h3 id="${titleId}">${label}</h3><small>${description}</small></span><strong>${rows.length}</strong></header>`;
const content=rows.length?rows.map(sup=>mfSuppRow(sup,itemById.get(sup.id))).join(""):`<div class="mf-supp-group-empty">No supplements selected yet.</div>`;
return `<section class="mf-supp-group ${className}${collapsed?" is-collapsed":""}" aria-labelledby="${titleId}">${head}<div class="mf-supp-group-rows" id="${rowsId}"${collapsed?" hidden":""}>${content}</div></section>`;
}

/* Search and category filters intentionally apply only to discovery. Selected
   products remain stable above the controls so users never search them away. */
function mfSuppRows(){
const q=(mod.suppSearch||"").trim().toLowerCase();
const itemById=new Map(currentSupplementMetrics().map(item=>[item.sup.id,item]));
const available=SUPP_CATALOG.filter(sup=>!itemById.has(sup.id)&&(!mod.suppCat||sup.cat===mod.suppCat)&&(!q||`${sup.name} ${sup.cat}`.toLowerCase().includes(q)));
if(!available.length)return `<div class="mf-supp-empty" role="status"><strong>No available supplements found</strong><span>Try another search or category.</span></div>`;
return mfSupplementGroup("Available supplements","Choose a product, then assign eligible guests",available,"available",itemById);
}

function mfSelectedSupplements(){
const items=currentSupplementMetrics();
const itemById=new Map(items.map(item=>[item.sup.id,item]));
const selected=SUPP_CATALOG.filter(sup=>itemById.has(sup.id));
const current=items.filter(item=>item.guestCount>0);
const assignments=current.reduce((sum,item)=>sum+item.guestCount,0);
const amount=roundMoney(current.reduce((sum,item)=>sum+item.amount,0));
const staged=items.some(item=>item.stageStatus);
const description=`${assignments} guest assignment${assignments===1?"":"s"}${staged?" · Includes staged changes":""}`;
return mfSupplementGroup("Selected supplements",description,selected,"selected",itemById,true,amount);
}

function mfSuppBody(){
const preferredCats=["Wellness","Food & Drink","Activities","Connectivity","Experiences","Services"];
const cats=["All",...preferredCats.filter(cat=>SUPP_CATS.includes(cat)),...SUPP_CATS.filter(cat=>!preferredCats.includes(cat))];
return `<div class="mf-sup-wrap">
<div class="mf-sec mf-supp-sections">
<section class="mf-supp-catalog" id="mfSuppCatalog" aria-labelledby="manageSupplementsTitle">
${mfSelectedSupplements()}
<div class="mf-supp-catalog-head">
<div><h2 id="manageSupplementsTitle">Find and assign supplements</h2><p>Search available products, then assign them to eligible guests.</p></div>
</div>
<div class="mf-supp-search">${SVG_SEARCH}<input type="search" class="mf-supp-searchin" data-suppsearch value="${esc(mod.suppSearch||"")}" placeholder="Search supplements&hellip;" autocomplete="off" aria-label="Search supplements"></div>
<div class="mf-supp-pills" role="group" aria-label="Supplement category filters">${cats.map(c=>{
const on=c==="All"?!mod.suppCat:mod.suppCat===c;
return `<button class="mf-pill${on?" on":""}" data-suppcat="${c==="All"?"":esc(c)}" aria-pressed="${on}">${esc(c)}</button>`;
}).join("")}</div>
<div class="mf-supp-list mf-supp-groups" data-supplist>${mfSuppRows()}</div>
</section>
</div>
</div>`;
}

function modificationWorkspaceState(){
const summary=modificationSummary();
const bookingKinds=new Set(["room-change","guest-added","guest-moved","guest-updated","protection-change"]);
const supplementKinds=new Set(["package-change","supplement-change"]);
const bookingChanges=summary.items.filter(item=>bookingKinds.has(item.kind)).length;
const supplementChanges=summary.items.filter(item=>supplementKinds.has(item.kind)).length;
const supplementItems=currentSupplementMetrics().filter(item=>item.guestCount>0);
const supplementAssignments=supplementItems.reduce((sum,item)=>sum+item.guestCount,0);
return{summary,bookingChanges,supplementChanges,supplementItems:supplementItems.length,supplementAssignments};
}
function modificationReviewOutcomeHtml(summary,titleId="mfReviewOutcomeTitle"){
const reconciliation=summary.reconciliation;
const impactCopy=reconciliation.pricingNet===0?fmt(0):fmtSigned(reconciliation.pricingNet);
const impactClass=reconciliation.pricingNet>0?" charge":reconciliation.pricingNet<0?" credit":"";
const existingPosition=reconciliation.existingUnpaid>.005
?`<div class="existing-balance"><dt>Existing unpaid balance</dt><dd>${fmt(reconciliation.existingUnpaid)}</dd></div>`
:reconciliation.existingCredit>.005
?`<div class="credit"><dt>Existing account credit</dt><dd>−${fmt(reconciliation.existingCredit)}</dd></div>`
:"";
const paymentOutcome=reconciliation.creditDue>.005
?{label:"Credit after saving",value:fmt(reconciliation.creditDue),className:"balance credit",note:"Credit created after these changes"}
:reconciliation.balanceDue>.005
?{label:"Total balance due after saving",value:fmt(reconciliation.balanceDue),className:"balance",note:`Final payment due ${reconciliation.paymentDueDate}`}
:{label:"Payment status after saving",value:"Paid in full",className:"balance paid",note:"No payment will be due"};
return `<section class="mf-review-outcome${reconciliation.balanced?"":" is-unbalanced"}" aria-labelledby="${titleId}">
<div class="mf-review-outcome-head"><span>Projected outcome</span><h3 id="${titleId}">Financial summary after saving</h3><p>See the updated booking total and remaining payment position before you confirm.</p></div>
<div class="mf-review-outcome-layout">
<div class="mf-review-total-hero">
<div class="mf-review-total-label"><span>Updated booking total</span><em>Projected</em></div>
<strong>${fmt(reconciliation.updatedTotal)}</strong>
<p>After all staged changes are saved</p>
<dl class="mf-review-total-facts" aria-label="Booking total comparison">
<div><dt>Current booking total</dt><dd>${fmt(reconciliation.startingTotal)}</dd></div>
<div class="${impactClass.trim()}"><dt>Net price change</dt><dd>${impactCopy}</dd></div>
</dl>
</div>
<section class="mf-review-payment-position" aria-labelledby="${titleId}-payment-title">
<header><span id="${titleId}-payment-title">Payment position</span><small>Existing payments included</small></header>
<dl class="mf-review-calculation">
<div><dt>Paid to date</dt><dd>${fmt(reconciliation.paidToDate)}</dd></div>
${existingPosition}
<div class="price-change${impactClass}"><dt>New price change</dt><dd>${impactCopy}</dd></div>
<div class="${paymentOutcome.className}"><dt><strong>${paymentOutcome.label}</strong><small>${paymentOutcome.note}</small></dt><dd>${paymentOutcome.value}</dd></div>
</dl>
</section>
</div>
${reconciliation.balanced?"":`<div class="mf-review-integrity-warning"><strong>These prices do not reconcile.</strong><span>The itemized changes differ from the updated booking total by ${fmt(Math.abs(reconciliation.variance))}. Saving is disabled until pricing is refreshed.</span></div>`}
</section>`;
}
function modificationReviewRailHtml(summary,context="inline"){
const reconciliation=summary.reconciliation;
const modalContext=context==="modal";
const impactCopy=reconciliation.pricingNet===0?fmt(0):fmtSigned(reconciliation.pricingNet);
const impactClass=reconciliation.pricingNet>0?" charge":reconciliation.pricingNet<0?" credit":"";
const existingPosition=reconciliation.existingUnpaid>.005
?`<div class="existing-balance"><dt>Existing unpaid balance</dt><dd>${fmt(reconciliation.existingUnpaid)}</dd></div>`
:reconciliation.existingCredit>.005
?`<div class="credit"><dt>Existing account credit</dt><dd>−${fmt(reconciliation.existingCredit)}</dd></div>`
:"";
const paymentOutcome=reconciliation.creditDue>.005
?{label:"Credit after saving",value:fmt(reconciliation.creditDue),className:"balance credit",note:"Credit created after these changes"}
:reconciliation.balanceDue>.005
?{label:"Total balance due after saving",value:fmt(reconciliation.balanceDue),className:"balance",note:`Final payment due ${reconciliation.paymentDueDate}`}
:{label:"Payment status after saving",value:"Paid in full",className:"balance paid",note:"No payment will be due"};
return `<aside class="mf-review-financial-rail" aria-labelledby="mfReviewFinancialRailTitle">
<section class="mf-review-financial-card${reconciliation.balanced?"":" is-unbalanced"}">
<header class="mf-review-financial-card-head"><span>Projected outcome</span><h3 id="mfReviewFinancialRailTitle">Financial summary after saving</h3><p>Review the updated booking total and remaining payment position before you confirm.</p></header>
<section class="mf-review-rail-total" aria-labelledby="mfReviewRailTotalTitle">
<div class="mf-review-rail-total-label"><span id="mfReviewRailTotalTitle">Updated booking total</span><em>Projected</em></div>
<strong>${fmt(reconciliation.updatedTotal)}</strong>
<p>After all staged changes are saved</p>
<dl class="mf-review-rail-total-facts" aria-label="Booking total comparison">
<div><dt>Current booking total</dt><dd>${fmt(reconciliation.startingTotal)}</dd></div>
<div class="${impactClass.trim()}"><dt>Net price change</dt><dd>${impactCopy}</dd></div>
</dl>
</section>
<section class="mf-review-rail-payment" aria-labelledby="mfReviewRailPaymentTitle">
<header><span id="mfReviewRailPaymentTitle">Payment position</span><small>Existing payments included</small></header>
<dl class="mf-review-rail-calculation">
<div><dt>Paid to date</dt><dd>${fmt(reconciliation.paidToDate)}</dd></div>
${existingPosition}
<div class="price-change${impactClass}"><dt>New price change</dt><dd>${impactCopy}</dd></div>
<div class="${paymentOutcome.className}"><dt><strong>${paymentOutcome.label}</strong><small>${paymentOutcome.note}</small></dt><dd>${paymentOutcome.value}</dd></div>
</dl>
</section>
${reconciliation.balanced?"":`<div class="mf-review-rail-integrity"><strong>Pricing needs attention</strong><span>The staged totals differ by ${fmt(Math.abs(reconciliation.variance))}.</span></div>`}
<div class="mf-review-rail-actions">
<button type="button" class="mf-review-save" ${modalContext?"data-mod-save":"data-review-save"}${reconciliation.balanced?"":" disabled"}>Save changes</button>
<button type="button" class="mf-review-discard" ${modalContext?"data-mod-discard":"data-review-discard"}>Discard staged changes</button>
</div>
</section>
</aside>`;
}
function mfUnifiedBody(summary=modificationSummary()){
if(mod.step===0){
return `<div class="mf-step-workspace" aria-label="Cabins and fares">
${mfCabinBody()}
</div>`;
}
if(mod.step===1){
return `<div class="mf-step-workspace" aria-label="Supplements">
<div class="mf-step-surface"><div class="mf-workspace-editor"><section class="mf-workspace-subsection mf-workspace-supplement-subsection" aria-labelledby="mfSupplementAssignmentsTitle">
<header class="mf-workspace-subsection-head"><span aria-hidden="true">${SVG_PACKAGE}</span><div><h2 id="mfSupplementAssignmentsTitle">Supplements</h2><p>Review current supplement products and manage eligible guest assignments.</p></div></header>
${mfSuppBody()}
</section></div></div></div>`;
}
if(mod.step===2){
return `<div class="mf-step-workspace" aria-label="Guest details">
${mfGuestsBody()}
</div>`;
}
const affectedAreaCount=reviewChangeGroupModels(summary.items).length;
return `<div class="mf-step-workspace mf-review-step" aria-label="Review and save">
<div class="mf-review-step-body">
<div class="mf-review-workspace">
<section class="mf-review-changes-section" aria-labelledby="mfReviewChangesTitle">
<header><div><span>Staged updates</span><h3 id="mfReviewChangesTitle">What will change</h3><p>Review the before-and-after details for every affected guest, cabin, and supplement.</p></div><em>${affectedAreaCount} affected area${affectedAreaCount===1?"":"s"}</em></header>
<div class="mf-preview-side-mount" id="mfInlineReviewSideMount"></div>
</section>
${modificationReviewRailHtml(summary)}
</div>
</div>
</div>`;
}

function renderSupplementAssignModal(){
const host=document.getElementById("supplementAssignModal");
const sup=detail&&mod.step===1&&mod.suppExpanded?SUPP_BY_ID[mod.suppExpanded]:null;
if(!sup){hideAccessibleModal(host);return;}
const {qty,covered,guestCount,amount}=supplementMetrics(sup);
const assigned=qty>0||covered>0;
const amountLabel=qty>0?`+${fmt(amount)}`:covered>0?"Included":fmt(sup.pricePP);
const priceLabel=assigned?"Assigned total":"Per guest";
const assignmentCopy=guestCount
?`${guestCount} guest${guestCount===1?"":"s"}${qty!==guestCount&&qty>0?` \u00b7 ${qty} units`:""}${covered?` \u00b7 ${covered} included`:""}`
:"No guests assigned";
if(!host.dataset.returnFocus)host.dataset.returnFocus=`[data-suppassign="${sup.id}"], [data-suppsearch]`;
host.innerHTML=`<div class="mf-modal-backdrop" data-supp-assignment-close></div>
<section class="mf-modal-card mf-modal-supplement" role="dialog" aria-modal="true" aria-labelledby="supplementAssignTitle" aria-describedby="supplementAssignDescription">
<header class="mf-modal-head mf-supp-modal-head">
<div class="mf-supp-modal-product">
<span class="mf-supp-modal-emoji" aria-hidden="true">${sup.emoji}</span>
<div class="mf-modal-title"><span class="mf-supp-category">${esc(sup.cat)}</span><h2 class="mf-modal-h" id="supplementAssignTitle">${esc(sup.name)}${sup.minAge?` <span class="mf-supp-age">${sup.minAge}+</span>`:""}</h2><span class="mf-modal-sub" id="supplementAssignDescription">Assign quantities to eligible guests, grouped by cabin.</span></div>
</div>
<div class="mf-supp-modal-summary"><span>${priceLabel}</span><strong>${amountLabel}</strong><small>${assignmentCopy}</small></div>
<button type="button" class="mf-modal-x" data-supp-assignment-close aria-label="Close ${esc(sup.name)} guest assignments">${SVG_X}</button>
</header>
<div class="mf-modal-body mf-supp-modal-body">${mfSuppAssign(sup)}</div>
<footer class="mf-modal-foot mf-supp-modal-foot"><span>Changes are reflected in the booking total immediately.</span><button type="button" class="ov-btn-solid" data-supp-assignment-close>Done</button></footer>
</section>`;
showAccessibleModal(host,".mf-modal-x");
}
function openSupplementAssignModal(id){
if(!detail||mod.step!==1||!SUPP_BY_ID[id])return;
mod.suppExpanded=id;mod.pkgExpanded=null;
document.querySelectorAll(`[data-suppassign="${CSS.escape(id)}"]`).forEach(button=>button.setAttribute("aria-expanded","true"));
renderSupplementAssignModal();
}
function closeSupplementAssignModal(){
const id=mod.suppExpanded;
mod.suppExpanded=null;
if(id)document.querySelectorAll(`[data-suppassign="${CSS.escape(id)}"]`).forEach(button=>button.setAttribute("aria-expanded","false"));
hideAccessibleModal(document.getElementById("supplementAssignModal"));
}

function renderFareTableModal(){
const host=document.getElementById("fareTableModal");
const context=mod.expandedFareContext||"modify";
const validContext=context==="partialCancellation"
?document.getElementById("viewCancellation").classList.contains("active")&&cx?.entry==="partial"&&cx?.scope===null
:document.getElementById("viewModify").classList.contains("active")&&mod.step===0;
if(!detail||!validContext||mod.expandedFareCabin<0){hideAccessibleModal(host);return;}
const d=detail,c=cabinGroups(d)[mod.expandedFareCabin];
if(!c){mod.expandedFareCabin=-1;hideAccessibleModal(host);return;}
const pricing=priceDetail(d),fareRows=guestFareRows(d,pricing);
const removingCount=(c.allGuests||c.guests).length-c.guests.length;
const partial=context==="partialCancellation";
host.innerHTML=`<div class="mf-modal-backdrop" data-fare-table-close></div>
<div class="mf-modal-card mf-modal-fare" role="dialog" aria-modal="true" aria-labelledby="fareTableModalTitle" aria-describedby="fareTableModalSub">
<header class="mf-modal-head"><div class="mf-modal-title"><h2 class="mf-modal-h" id="fareTableModalTitle">Cabin ${c.idx+1} fare breakdown</h2><span class="mf-modal-sub" id="fareTableModalSub">Room ${esc(c.room)} &middot; ${esc(c.type)} &middot; Deck ${c.deck} &middot; ${c.guests.length} active guest${c.guests.length===1?"":"s"}${removingCount?` &middot; ${removingCount} cancellation${removingCount===1?"":"s"} staged`:""}</span></div><button type="button" class="mf-modal-x" data-fare-table-close aria-label="Close fare breakdown">${SVG_X}</button></header>
<div class="mf-modal-body">${cabinFareMatrix(d,pricing,c,fareRows,true,{context,allowGuestAdd:!partial,allowGuestRemove:true,modificationGuestActions:!partial})}</div>
<footer class="mf-modal-foot mf-fare-modal-foot"><span>All fare components shown per guest.</span><button type="button" class="ov-btn-solid" data-fare-table-close>Done</button></footer>
</div>`;
showAccessibleModal(host,".mf-modal-x");
if(partial)hydrateCancellationIcons(host);
}
function openFareTableModal(index,focusSelector=null,returnSelector=null,context="modify"){
const host=document.getElementById("fareTableModal");
const shellPrefix=context==="partialCancellation"?"cx-fare-table":"mf-fare-table";
host.dataset.returnFocus=returnSelector||`#${shellPrefix}-${index} [data-expand-fare="${index}"]`;
mod.expandedFareCabin=index;
mod.expandedFareContext=context;
renderFareTableModal();
if(focusSelector)requestAnimationFrame(()=>{
const target=host.querySelector(focusSelector);
if(!target)return;
target.focus({preventScroll:true});
const wrap=target.closest(".mf-fare-table-wrap");
if(wrap){
const targetRect=target.getBoundingClientRect(),wrapRect=wrap.getBoundingClientRect();
if(targetRect.left<wrapRect.left||targetRect.right>wrapRect.right)wrap.scrollLeft+=targetRect.left-wrapRect.left-(wrapRect.width-targetRect.width)/2;
}
});
}
function closeFareTableModal(){
mod.expandedFareCabin=-1;
mod.expandedFareContext="modify";
hideAccessibleModal(document.getElementById("fareTableModal"));
}

/* Modification work uses purpose-built context rather than the booking-detail
   payment rail. Keep the shared rail parked until Review changes opens, then
   reuse it in the dialog so the complete ledger still has one source of truth. */
function placeModificationSidePanel(){
const layout=document.getElementById("modLayout");
const side=document.querySelector(".ov-side");
layout.classList.remove("mf-preview-mode");
if(mod.previewOpen)return;
document.getElementById("modSideMount").appendChild(side);
}
function restoreInlineModificationReview(){
const mount=document.getElementById("mfInlineReviewSideMount");
const changeBox=mount?.querySelector("#changeBox");
if(changeBox)document.getElementById("detailPendingChangesSlot").appendChild(changeBox);
const side=mount?.querySelector(".ov-side");
if(!side)return;
restoreSideCardOrder();
document.getElementById("modSideMount").appendChild(side);
}
function reviewPricingReconciliation(d,pricing,items){
const startingTotal=roundMoney(d.base.total);
const charges=roundMoney(items.reduce((sum,item)=>sum+(item.amt>.005?item.amt:0),0));
const credits=roundMoney(items.reduce((sum,item)=>sum+(item.amt<-.005?Math.abs(item.amt):0),0));
const itemNet=roundMoney(charges-credits);
const pricingNet=roundMoney(pricing.total-startingTotal);
const itemizedUpdatedTotal=roundMoney(startingTotal+itemNet);
const variance=roundMoney(pricing.total-itemizedUpdatedTotal);
const existingPaymentPosition=roundMoney(startingTotal-pricing.paidToDate);
return{
startingTotal,charges,credits,itemNet,pricingNet,itemizedUpdatedTotal,
updatedTotal:roundMoney(pricing.total),variance,balanced:Math.abs(variance)<=.005,
paidToDate:pricing.paidToDate,
existingUnpaid:Math.max(0,existingPaymentPosition),
existingCredit:Math.max(0,roundMoney(-existingPaymentPosition)),
balanceDue:pricing.pending,creditDue:pricing.creditDue,
paymentDueDate:fmtDateShort(addDays(d.sail,-5))
};
}
function modificationSummary(){
if(!detail)return{dirty:false,pricing:null,items:[],count:0,delta:0,total:0,reconciliation:null};
const pricing=priceDetail(detail),dirty=isDirty(detail);
const items=dirty?changeItems(pricing):[];
const reconciliation=reviewPricingReconciliation(detail,pricing,items);
return{dirty,pricing,items,count:stagedChangeUnitCount(items),recordCount:items.length,delta:Math.abs(pricing.delta)<=.005?0:pricing.delta,total:pricing.total,reconciliation};
}
const MODIFICATION_IMPACT_PRIORITY={
"guest-added":0,"guest-removed":0,"guest-moved":1,"guest-updated":2,
"package-change":3,"supplement-change":4
};
function modificationImpactSections(items){
const indexed=items.map((item,index)=>({item,index}));
const consumed=new Set();
const sections=[];
const cabinItems=indexed.filter(({item})=>item.kind==="room-change");
if(cabinItems.length){
cabinItems.forEach(({index})=>consumed.add(index));
sections.push({
key:"cabins",reviewKey:"cabin",title:"Cabin changes",icon:reviewChangeGroupIcon("cabin"),
description:"Room and stateroom category assignments",
groups:cabinItems.map(({item})=>({key:`cabin:${item.cabinChange?.cabinIndex??reviewChangeItemTitle(item)}`,type:"cabin",items:[item]}))
});
}
const guestGroups=[],guestById=new Map();
indexed.forEach(({item,index})=>{
if(consumed.has(index)||!item.subjectGuestId||!["guest-added","guest-removed","guest-moved","guest-updated","protection-change"].includes(item.kind))return;
const key=String(item.subjectGuestId);
let group=guestById.get(key);
if(!group){group={key:`guest:${key}`,type:"guest",items:[]};guestById.set(key,group);guestGroups.push(group);}
group.items.push(item);
consumed.add(index);
});
if(guestGroups.length){
const primaryKinds=guestGroups.map(group=>[...group.items].sort((a,b)=>(MODIFICATION_IMPACT_PRIORITY[a.kind]??10)-(MODIFICATION_IMPACT_PRIORITY[b.kind]??10))[0]?.kind);
const allAdded=primaryKinds.every(kind=>kind==="guest-added");
const allRemoved=primaryKinds.every(kind=>kind==="guest-removed");
sections.push({
key:"guests",reviewKey:allAdded?"guest-addition":allRemoved?"guest-cancellation":"guest-update",
title:allAdded?`Guest addition${guestGroups.length===1?"":"s"}`:allRemoved?`Guest cancellation${guestGroups.length===1?"":"s"}`:"Guest changes",
icon:reviewChangeGroupIcon(allAdded?"guest-addition":allRemoved?"guest-cancellation":"guest-update"),
description:allAdded?"New guests, assigned fare, and protection":allRemoved?"Staged cancellations and fare credits":"Cabin transfers and guest details",groups:guestGroups
});
}
const supplements=indexed.filter(({index,item})=>!consumed.has(index)&&["package-change","supplement-change"].includes(item.kind));
if(supplements.length){
const standaloneSupplements=[];
let addedGuestSupplementCount=0;
supplements.forEach(({item,index})=>{
consumed.add(index);
if(!item.subjectGuestId){standaloneSupplements.push({item,index});return;}
const guestGroup=guestById.get(String(item.subjectGuestId));
const belongsToAddedGuest=guestGroup?.items.some(guestItem=>guestItem.kind==="guest-added");
if(!belongsToAddedGuest){standaloneSupplements.push({item,index});return;}
guestGroup.items.push(item);
if(!guestGroup.relatedSupplements)guestGroup.relatedSupplements=[];
guestGroup.relatedSupplements.push(item);
addedGuestSupplementCount++;
});
if(addedGuestSupplementCount){
const guestSection=sections.find(section=>section.key==="guests"&&section.reviewKey==="guest-addition");
if(guestSection)guestSection.description="New guests, assigned fare, protection, and supplements";
}
if(standaloneSupplements.length)sections.push({key:"supplements",reviewKey:"supplements",title:"Supplement changes",icon:reviewChangeGroupIcon("supplements"),description:"Supplement products assigned to existing guests",groups:[{key:"supplement:summary",type:"supplement",items:standaloneSupplements.map(({item})=>item)}]});
}
const extras=indexed.filter(({index,item})=>!consumed.has(index)&&["protection-change","promo-change"].includes(item.kind));
if(extras.length){
extras.forEach(({index})=>consumed.add(index));
sections.push({key:"extras",reviewKey:"extras",title:"Extras & offers",icon:reviewChangeGroupIcon("extras"),description:"Travel protection and promotions",groups:extras.map(({item,index})=>({key:`extra:${index}`,type:"standard",items:[item]}))});
}
const other=indexed.filter(({index})=>!consumed.has(index));
if(other.length)sections.push({key:"other",reviewKey:"other",title:"Other changes",icon:reviewChangeGroupIcon("other"),description:"Additional staged booking updates",groups:other.map(({item,index})=>({key:`other:${index}`,type:"standard",items:[item]}))});
return sections;
}
function modificationImpactGroupLabel(item){
if(item.kind==="guest-added")return"Guest added";
if(item.kind==="guest-removed")return"Guest cancellation";
if(item.kind==="guest-moved"||item.kind==="guest-updated")return"Guest updated";
if(item.kind==="package-change")return"Package updated";
if(item.kind==="supplement-change")return"Supplements updated";
return REVIEW_CHANGE_KIND_LABELS[item.kind]||"Booking update";
}
function modificationImpactLineLabel(item){
if(item.kind==="guest-added")return"Fare, taxes & protection";
if(item.kind==="guest-removed")return"Guest fare credit";
if(item.kind==="guest-moved")return"Cabin transfer";
if(item.kind==="guest-updated")return"Guest details";
if(item.kind==="room-change")return"Cabin fare";
if(item.kind==="supplement-change")return"Selected supplements";
return REVIEW_CHANGE_KIND_LABELS[item.kind]||"Booking update";
}
function modificationImpactAmountClass(amount){
return amount<-.005?" credit":Math.abs(amount)<=.005?" flat":"";
}
function modificationImpactCabinHtml(item){
const change=item.cabinChange||{};
const cabinNumber=Number(change.cabinIndex)+1||reviewChangeItemTitle(item).match(/\d+/)?.[0]||"—";
const guestCount=Number(change.guestCount)||0;
return `<article class="mf-impact-cabin-row">
<header><span><strong>Cabin ${esc(cabinNumber)}</strong><small>${guestCount} active guest${guestCount===1?"":"s"}</small></span><em class="mf-supp-impact-change-amount${modificationImpactAmountClass(item.amt)}">${fmtSigned(item.amt)}</em></header>
<div class="mf-impact-cabin-compare">
<div class="mf-impact-cabin-before"><small>Before</small>${reviewCabinAssignmentHtml(change,"before")}</div>
<i aria-hidden="true">&rarr;</i>
<div class="mf-impact-cabin-after"><small>After change</small>${reviewCabinAssignmentHtml(change,"after")}</div>
</div>
</article>`;
}
function modificationImpactGuestSupplementReference(items){
const products=new Map();
const add=(key,product)=>{
const existing=products.get(key);
if(existing){
existing.quantity+=product.quantity;
existing.amount=roundMoney(existing.amount+product.amount);
return;
}
products.set(key,{...product});
};
(items||[]).forEach(item=>{
const review=item.review||{};
if(review.type==="supplements"){
(review.lines||[]).filter(line=>line.afterQty>0&&(line.beforeQty!==line.afterQty||Math.abs(line.delta)>.005)).forEach(line=>{
add(`supplement:${line.id||line.name}`,{name:line.name,kind:"Supplement",quantity:Number(line.afterQty)||0,amount:Number(line.delta)||0,detail:line.afterCoverage?`Included in ${line.afterCoverage.name}`:"Assigned directly"});
});
}
if(review.type==="packages"){
(review.lines||[]).filter(line=>line.afterQty>0).forEach(line=>{
add(`package:${line.id||line.name}`,{name:line.name,kind:"Package",quantity:Number(line.afterQty)||0,amount:Number(line.delta)||0,detail:line.nights?`${line.nights} nights`:"Assigned package"});
});
}
});
if(!products.size)return{html:"",total:0};
const total=roundMoney([...products.values()].reduce((sum,product)=>sum+product.amount,0));
const productRows=[...products.values()].map(product=>{
const quantity=reviewQuantity(product.quantity);
const amountClass=modificationImpactAmountClass(product.amount);
const amountDisplay=Math.abs(product.amount)<=.005&&/^Included in /.test(product.detail)?"Included":fmtSigned(product.amount);
return `<li><span><strong>${esc(product.name)}</strong><small>${esc(product.kind)} · ${quantity} unit${Number(product.quantity)===1?"":"s"} · ${esc(product.detail)}</small></span><strong class="mf-supp-impact-change-amount${amountClass}">${esc(amountDisplay)}</strong></li>`;
}).join("");
return{total,html:`<section class="mf-impact-guest-supplement-reference" aria-label="Assigned supplements">
<header><strong>Assigned supplements</strong><span class="mf-impact-guest-supplement-total"><small>${products.size} product${products.size===1?"":"s"}</small><strong>${fmtSigned(total)}</strong></span></header>
<ul>${productRows}</ul>
<p>Added with this guest and counted once in the booking total.</p>
</section>`};
}
function modificationImpactGuestHtml(group,showSubtotal=false){
const items=[...group.items].sort((a,b)=>(MODIFICATION_IMPACT_PRIORITY[a.kind]??10)-(MODIFICATION_IMPACT_PRIORITY[b.kind]??10));
const primary=items[0];
const total=roundMoney(items.reduce((sum,item)=>sum+item.amt,0));
const isAddition=primary.kind==="guest-added";
const relatedSupplements=isAddition?modificationImpactGuestSupplementReference(group.relatedSupplements):{html:"",total:0};
let contextFacts=(primary.facts||[]).filter(fact=>["Guest details","Assigned cabin","Cabin","Fare position"].includes(fact.label));
let priceLines=items.map(item=>({label:modificationImpactLineLabel(item),amount:item.amt}));
if(isAddition){
const guest=detail?.guests?.find(candidate=>String(candidate.guestId)===String(primary.subjectGuestId));
const assignedFact=(primary.facts||[]).find(fact=>fact.label==="Assigned cabin");
const positionFact=(primary.facts||[]).find(fact=>fact.label==="Fare position");
const ledgerLines=primary.fareLedger?.lines||[];
const ledgerAmount=label=>Number(ledgerLines.find(line=>line.label===label)?.amount)||0;
const protectionAmount=ledgerAmount("Travel Protection Plus");
if(guest){
const dob=guest.dobDate instanceof Date?guest.dobDate:new Date(guest.dobDate||guest.dob);
const age=detail?.sail instanceof Date&&!Number.isNaN(dob.getTime())?ageAt(dob,detail.sail):null;
const guestType=String(PASSENGER_TYPE[guest.band]||"Guest").replace(/\s+Passenger$/i,"");
contextFacts=[
{label:"Guest type",value:`${guestType}${Number.isFinite(age)?` · ${age} years`:""}`},
{label:"Date of birth",value:guest.dob||"Not provided"},
...(assignedFact?[assignedFact]:[]),
...(positionFact?[positionFact]:[]),
{label:"Protection",value:guest.insurance===false?"Not active":`Active · Required · ${fmt(Math.abs(protectionAmount||INSURANCE_RATE))}`}
];
}
priceLines=[
{label:"Cabin fare",amount:ledgerAmount("Cabin fare")},
{label:"Taxes & port fees",amount:ledgerAmount("Taxes, fees & port expenses")},
{label:"Travel Protection Plus",amount:protectionAmount}
];
priceLines.push({label:relatedSupplements.total?"Guest total · includes supplements":"Guest total",amount:total,total:true});
}
const priceLinesHtml=priceLines.map(line=>{
const amountClass=modificationImpactAmountClass(line.amount).trim();
return `<div${line.total?' class="is-total"':""}><dt>${esc(line.label)}</dt><dd${amountClass?` class="${amountClass}"`:""}>${esc(line.display||fmtSigned(line.amount))}</dd></div>`;
}).join("");
return `<article class="mf-impact-guest-row ov-change-item ${esc(primary.kind||"")}">
<header><span class="mf-impact-guest-copy"><span class="mf-review-change-kind">${esc(modificationImpactGroupLabel(primary))}</span><strong class="ov-change-item-label">${esc(reviewChangeItemTitle(primary))}</strong></span>${showSubtotal&&!isAddition?`<em class="mf-supp-impact-change-amount${modificationImpactAmountClass(total)}">${fmtSigned(total)}</em>`:""}</header>
${contextFacts.length?changeItemFactsHtml({...primary,facts:contextFacts}):primary.sub?`<p class="mf-impact-guest-context">${esc(primary.sub)}</p>`:""}
${relatedSupplements.html}
<dl class="mf-impact-change-lines" aria-label="Price impact for ${esc(reviewChangeItemTitle(primary))}">${priceLinesHtml}</dl>
</article>`;
}
function modificationImpactSupplementHtml(group){
const buckets=new Map();
const add=(key,line)=>{
let bucket=buckets.get(key);
if(!bucket){bucket={...line,guests:new Set(),quantity:0,amount:0};buckets.set(key,bucket);}
bucket.guests.add(line.guest);
bucket.quantity+=line.quantity;
bucket.amount=roundMoney(bucket.amount+line.amount);
};
group.items.forEach(item=>{
const review=item.review||{},guest=review.guest||reviewChangeItemTitle(item);
if(review.type==="supplements"){
(review.lines||[]).filter(line=>line.beforeQty!==line.afterQty||Math.abs(line.delta)>.005).forEach(line=>{
const quantity=(Number(line.afterQty)||0)-(Number(line.beforeQty)||0);
const action=quantity>0?"added":quantity<0?"removed":"updated";
add(`supplement:${line.name}:${action}`,{label:line.name,category:line.category||"Supplement",action,guest,quantity,amount:line.delta,kind:"Supplement"});
});
}
if(review.type==="packages"){
(review.lines||[]).forEach(line=>{
const quantity=(Number(line.afterQty)||0)-(Number(line.beforeQty)||0);
const action=quantity>0?"added":quantity<0?"removed":"updated";
add(`package:${line.name}:${action}`,{label:line.name,category:"Package",action,guest,quantity,amount:line.delta,kind:"Package",nights:line.nights||0});
});
}
});
if(!buckets.size)return group.items.map(item=>modificationImpactStandardHtml({items:[item]})).join("");
const lines=[...buckets.values()];
const lineHtml=lines.map(line=>{
const guestCount=line.guests.size;
const guestCopy=guestCount===1?[...line.guests][0]:`${guestCount} guests`;
const quantity=Math.abs(line.quantity);
const unitCopy=line.kind==="Package"?`${line.action}${line.nights?` · ${line.nights} nights`:""}`:line.action==="updated"?"Assignments updated":`${reviewQuantity(quantity)} unit${quantity===1?"":"s"} ${line.action}`;
const amountClass=modificationImpactAmountClass(line.amount);
return `<div class="mf-impact-supplement-product">
<span class="mf-impact-supplement-product-copy"><small>${esc(line.category)} · ${esc(line.action)}</small><strong>${esc(line.label)}</strong><em>${esc(guestCopy)} · ${esc(unitCopy)}</em></span>
<strong class="mf-supp-impact-change-amount${amountClass}">${fmtSigned(line.amount)}</strong>
</div>`;
}).join("");
return `<article class="mf-impact-supplement-summary" aria-label="Supplement changes by product">${lineHtml}</article>`;
}
function modificationImpactStandardHtml(group){
const item=group.items[0];
return `<article class="mf-impact-standard-row"><span><strong>${esc(reviewChangeItemTitle(item))}</strong>${item.sub?`<small>${esc(item.sub)}</small>`:""}</span><em class="mf-supp-impact-change-amount${modificationImpactAmountClass(item.amt)}">${fmtSigned(item.amt)}</em></article>`;
}
function modificationImpactSectionHtml(section){
const items=section.groups.flatMap(group=>group.items);
const total=roundMoney(items.reduce((sum,item)=>sum+item.amt,0));
const collapsed=Boolean(mod.impactCollapsedSectionKeys?.has(section.key));
const panelId=`mf-impact-area-body-${section.key}`;
return `<li class="mf-impact-area mf-impact-area-${esc(section.key)} mf-review-change-group${collapsed?" is-collapsed":""}" data-review-change-group="${esc(section.reviewKey||section.key)}">
<header class="mf-review-change-group-head">
<span class="mf-review-change-group-icon" aria-hidden="true">${section.icon}</span>
<span class="mf-review-change-group-copy"><h4>${esc(section.title)}</h4><small>${esc(section.description)}</small></span>
<button class="mf-impact-area-toggle" type="button" data-impact-section-toggle="${esc(section.key)}" data-impact-section-label="${esc(section.title)}" aria-controls="${esc(panelId)}" aria-expanded="${String(!collapsed)}" aria-label="${collapsed?"Expand":"Collapse"} ${esc(section.title)}">${SVG_CHEV}</button>
<span class="mf-review-change-group-summary"><span class="mf-review-change-group-impact${modificationImpactAmountClass(total)}"><small>Net impact</small><strong>${fmtSigned(total)}</strong></span></span>
</header>
<div class="mf-impact-area-body" id="${esc(panelId)}"${collapsed?" hidden":""}>${section.groups.map(group=>group.type==="cabin"?modificationImpactCabinHtml(group.items[0]):group.type==="guest"?modificationImpactGuestHtml(group,section.groups.length>1):group.type==="supplement"?modificationImpactSupplementHtml(group):modificationImpactStandardHtml(group)).join("")}</div>
</li>`;
}
function modificationImpactSectionSummary(sections,changeCount){
if(!changeCount)return"No staged changes";
return `${changeCount} total`;
}
function renderSupplementImpact(summary=modificationSummary()){
const host=document.getElementById("mfSuppImpact");
const available=mod.flow==="unified"&&Boolean(detail)&&mod.step!==3;
host.hidden=!available;
if(!available||!summary?.pricing)return;
const pricing=summary.pricing;
const hasCredit=pricing.creditDue>.005;
const settled=!hasCredit&&pricing.pending<=.005;
const impactSections=summary.dirty?modificationImpactSections(summary.items):[];
const impactCopy=summary.delta===0?fmt(0):fmtSigned(summary.delta);
const setText=(id,value)=>{const node=document.getElementById(id);if(node)node.textContent=value;};
const existingPending=Math.max(0,roundMoney(detail.base.pending||0));
const pendingRow=document.getElementById("mfImpactOutcomePendingRow");
pendingRow.hidden=existingPending<=.005;
setText("mfImpactOutcomePending",fmt(existingPending));
setText("mfImpactOutcomeBalanceLabel",hasCredit?"Credit due":settled?"Payment status":"Balance due");
setText("mfImpactOutcomeBalanceHint",hasCredit
?"After existing payments and price change"
:settled?"No payment required"
:existingPending>.005?"Existing balance + price change":"From this price change");
const outcomeBalance=document.getElementById("mfImpactOutcomeBalance");
outcomeBalance.textContent=settled?"Paid in full":fmt(hasCredit?pricing.creditDue:pricing.pending);
outcomeBalance.classList.toggle("credit",hasCredit);
outcomeBalance.classList.toggle("paid",settled);
setText("mfSuppImpactBeforeTotal",fmt(detail.base.total));
setText("mfSuppImpactAfterTotal",fmt(summary.total));
document.getElementById("mfSuppImpactEmpty").hidden=summary.dirty;
const itemList=document.getElementById("mfSuppImpactItems");
itemList.hidden=!summary.dirty;
itemList.innerHTML=summary.dirty?impactSections.map(modificationImpactSectionHtml).join(""):"";
const impact=document.getElementById("mfImpactOutcomeDelta");
impact.textContent=impactCopy;
impact.classList.toggle("charge",summary.delta>0);
impact.classList.toggle("credit",summary.delta<0);
impact.classList.toggle("flat",summary.delta===0);
setText("mfSuppImpactCount",modificationImpactSectionSummary(impactSections,summary.count));
document.getElementById("mfImpactOutcome").hidden=!summary.dirty;
host.classList.toggle("has-changes",summary.dirty);
host.classList.toggle("is-settled",settled);
host.classList.toggle("has-credit",hasCredit);
}
function updateModificationPreviewState(){
const trigger=document.getElementById("mfPreview");
const available=mod.flow==="unified";
trigger.hidden=true;
if(!available)return null;
const summary=modificationSummary();
const reconciled=summary.reconciliation?.balanced!==false;
trigger.disabled=!summary.dirty;
trigger.setAttribute("aria-label",summary.dirty
?`Review ${summary.count} booking change${summary.count===1?"":"s"}`
:"Review changes unavailable, no staged changes");
trigger.setAttribute("aria-expanded",String(mod.previewOpen));
const next=document.getElementById("mfNext");
next.disabled=!reconciled;
next.title=reconciled?"":"Pricing totals must reconcile before this modification can continue";
return summary;
}
function arrangePreviewSideCard(summary){
const card=document.querySelector(".ov-side-card");
if(!card)return;
const side=card.closest(".ov-side");
if(side){side.removeAttribute("aria-labelledby");side.setAttribute("aria-label","Staged booking changes");}
const changesMenu=document.querySelector(".ov-changes-menu");
if(changesMenu)changesMenu.open=false;
card.querySelector(".mf-review-payment-heading")?.remove();
[".ov-ledger",".ov-preview-status-group",".ov-payment-draft",".ov-total-payable",".ov-promo-block",".ov-side-actions","#cancelledNote"].forEach(selector=>{
const node=card.querySelector(selector);
if(node)card.appendChild(node);
});
}
function restoreSideCardOrder(){
const card=document.querySelector(".ov-side-card");
if(!card)return;
const side=card.closest(".ov-side");
if(side){side.removeAttribute("aria-label");side.setAttribute("aria-labelledby","ppTitle");}
const changesMenu=document.querySelector(".ov-changes-menu");
if(changesMenu)changesMenu.open=false;
card.querySelector(".mf-review-payment-heading")?.remove();
[".ov-preview-status-group",".ov-payment-draft",".ov-promo-block",".ov-ledger",".ov-total-payable",".ov-side-actions","#cancelledNote"].forEach(selector=>{
const node=card.querySelector(selector);
if(node)card.appendChild(node);
});
}
function openModificationPreview(event){
if(!detail||!MOD_FLOWS[mod.flow]||mod.previewOpen||!isDirty(detail))return;
/* Profile edits save in place without a full page refresh, so sync the shared
   pricing/change rail immediately before presenting the review surface. */
renderPricePanel(priceDetail(detail));
const host=document.getElementById("modPreviewModal");
const originId=event?.currentTarget?.id;
host.dataset.previewOrigin=document.getElementById("viewDetail").classList.contains("active")?"detail":"modify";
host.dataset.returnFocus=originId?`#${originId}`:"#mfPreview";
const summary=modificationSummary();
const affectedAreaCount=reviewChangeGroupModels(summary.items).length;
host.innerHTML=`<div class="mf-modal-backdrop" data-mod-preview-close></div>
<section class="mf-modal-card mf-modal-preview" role="dialog" aria-modal="true" aria-labelledby="modPreviewTitle" aria-describedby="modPreviewSub">
<header class="mf-modal-head"><div class="mf-modal-title"><h2 class="mf-modal-h" id="modPreviewTitle" tabindex="-1">Review changes</h2><span class="mf-modal-sub" id="modPreviewSub">Confirm what changed and how it affects the booking total.</span></div><button type="button" class="mf-modal-x" data-mod-preview-close aria-label="Close change review">${SVG_X}</button></header>
<div class="mf-preview-body">
<div class="mf-review-workspace mf-modal-review-workspace">
<section class="mf-review-changes-section" aria-labelledby="modPreviewChangesTitle">
<header><div><span>Staged updates</span><h3 id="modPreviewChangesTitle">What will change</h3><p>Review the before-and-after details for every affected guest, cabin, and supplement.</p></div><em>${affectedAreaCount} affected area${affectedAreaCount===1?"":"s"}</em></header>
<div class="mf-preview-side-mount" id="modPreviewSideMount"></div>
</section>
${modificationReviewRailHtml(summary,"modal")}
</div>
</div>
</section>`;
mod.previewOpen=true;
document.getElementById("detailReviewChanges").setAttribute("aria-expanded","true");
document.getElementById("modPreviewSideMount").appendChild(document.getElementById("changeBox"));
const groupedChanges=host.querySelector("#changesItems");
if(groupedChanges)groupedChanges.innerHTML=groupedChangeItemsHtml(summary.items);
renderSupplementImpact(updateModificationPreviewState());
showAccessibleModal(host,"#modPreviewTitle");
}
function closeModificationPreview(){
const host=document.getElementById("modPreviewModal");
if(!mod.previewOpen&&host.hidden)return;
const side=host.querySelector(".ov-side")||document.querySelector(".ov-side");
const previewOrigin=host.dataset.previewOrigin||"modify";
mod.previewOpen=false;
if(!isDirty(detail))host.dataset.returnFocus=previewOrigin==="detail"?"#modifyBookingBtn":"#mfNext";
restoreSideCardOrder();
const changeBox=host.querySelector("#changeBox")||document.getElementById("changeBox");
if(changeBox)document.getElementById("detailPendingChangesSlot").appendChild(changeBox);
(previewOrigin==="detail"?document.getElementById("detailLayout"):document.getElementById("modSideMount")).appendChild(side);
setPaymentMenu(false);
hideAccessibleModal(host);
delete host.dataset.previewOrigin;
renderPricePanel(priceDetail(detail));
renderSupplementImpact(updateModificationPreviewState());
}

function modificationContextHtml(){
const guests=activeGuests(detail).length,cabins=detail.cabinPlan.length;
return `<div><dt>Booking ID</dt><dd>#${esc(detail.b.id)}</dd></div>
<div><dt>Farecode</dt><dd>${esc(farecodeFor(detail.b))}</dd></div>
<div class="mf-page-context-sailing"><dt>Sailing</dt><dd>${esc(detail.info?.shipSub||detail.b.itin)}</dd></div>
<div><dt>Departs</dt><dd>${esc(detail.b.date)}</dd></div>
<div><dt>Working booking</dt><dd>${guests} guests · ${cabins} cabin${cabins===1?"":"s"}</dd></div>`;
}
function renderModify(){
restoreInlineModificationReview();
syncGuestDerivedFields(detail);
let summary=modificationSummary();
const flow=MOD_FLOWS[mod.flow]||MOD_FLOWS.unified;
const view=document.getElementById("viewModify");
view.classList.remove("is-supplement-flow");
view.classList.add("is-unified-flow");
view.classList.toggle("is-review-step",mod.step===3);
document.getElementById("mfFlowLabel").textContent=flow.label;
document.getElementById("mfTitle").textContent="Modify booking";
document.getElementById("mfSub").textContent="Complete each stage in order, or move between steps without losing your staged changes.";
document.getElementById("mfContext").innerHTML=modificationContextHtml();
document.getElementById("mfBody").innerHTML=mfUnifiedBody(summary);
const prev=document.getElementById("mfPrev");
prev.hidden=mod.step===0;
prev.textContent=mod.step===3?"Back to guest details":mod.step===2?"Back to supplements":"Back to cabins";
renderSteps(summary);
renderRoomModal();
renderFareTableModal();
renderAddGuestModal();
renderRemoveGuestModal();
renderSupplementAssignModal();
summary=updateModificationPreviewState();
renderSupplementImpact(summary);
const next=document.getElementById("mfNext");
if(mod.step===0)next.textContent="Continue to supplements";
else if(mod.step===1)next.textContent="Continue to guest details";
else if(mod.step===2)next.textContent="Continue to review & save";
else next.textContent="Save changes";
const reconciled=summary?.reconciliation?.balanced!==false;
next.disabled=!reconciled||(mod.step===3&&!summary?.dirty);
next.title=!reconciled?"Pricing totals must reconcile before this modification can continue":mod.step===3&&!summary?.dirty?"Stage a change before saving":"";
if(mod.step===3&&summary?.dirty){
renderPricePanel(priceDetail(detail));
const mount=document.getElementById("mfInlineReviewSideMount");
const changeBox=document.getElementById("changeBox");
if(mount&&changeBox){
mount.appendChild(changeBox);
const groupedChanges=mount.querySelector("#changesItems");
if(groupedChanges)groupedChanges.innerHTML=groupedChangeItemsHtml(summary.items);
}
}
document.body.classList.toggle("modal-open",mod.editCabin>=0||mod.addGuestCabin>=0||mod.removeGuestIdx>=0||mod.expandedFareCabin>=0||mod.previewOpen||Boolean(mod.suppExpanded));
}
/* the price rail is shared with the detail view, so both always re-render */
function refresh(){
saveDetailDraft();
renderDetail();
if(document.getElementById("viewModify").classList.contains("active"))renderModify();
if(document.getElementById("viewCancellation").classList.contains("active"))renderCancellationPage();
}

const modifyBookingBtn=document.getElementById("modifyBookingBtn");

function openModify(){
if(!detail)return;
mod=newModState("unified");
const existingItems=isDirty(detail)?changeItems(priceDetail(detail)):[];
const onlySupplementChanges=existingItems.length&&existingItems.every(item=>item.kind==="package-change"||item.kind==="supplement-change");
if(onlySupplementChanges)mod.step=1;
document.getElementById("mfBookingId").textContent="#"+detail.b.id;
placeModificationSidePanel();
document.getElementById("viewDetail").classList.remove("active");
document.getElementById("viewModify").classList.add("active");
renderModify();
document.querySelector(".main").scrollTop=0;
}
function closeModify(){
closeModificationPreview();
closeFareTableModal();
closeSupplementAssignModal();
restoreInlineModificationReview();
document.getElementById("detailLayout").appendChild(document.querySelector(".ov-side"));
document.getElementById("modLayout").classList.remove("mf-preview-mode");
renderDetail();
document.getElementById("viewModify").classList.remove("active");
document.getElementById("viewDetail").classList.add("active");
document.querySelector(".main").scrollTop=0;
requestAnimationFrame(()=>modifyBookingBtn.focus());
}
function goStep(stepId){
if(!modStepIds().includes(stepId))return;
restoreInlineModificationReview();closeModificationPreview();closeFareTableModal();closeSupplementAssignModal();mod.step=stepId;renderModify();document.querySelector(".main").scrollTop=0;
}
function moveModStep(delta){
const ids=modStepIds(),target=modFlowIndex()+delta;
if(target>=0&&target<ids.length)goStep(ids[target]);
}

/* A staged addition is not yet part of the booking, so removing it stays in
   modification. Existing guests use the separate cancellation handoff. */
function openNewGuestRemoval(guestIdx,cabinIdx,returnSelector=null){
const guest=detail?.guests[guestIdx];
if(!guest||isBaseGuest(detail,guest)||guest.pendingRemoval||activeGuests(detail).length<=1)return;
const resolvedCabin=cabinIdx>=0?cabinIdx:detail.b.cabins.indexOf(guest.cabin);
if(resolvedCabin<0)return;
mod.removeGuestIdx=guestIdx;
const host=document.getElementById("removeGuestModal");
host.dataset.returnFocus=returnSelector||`#mf-fare-table-${resolvedCabin} [data-guestremove="${guestIdx}"], #mf-fare-table-${resolvedCabin} [data-expand-fare="${resolvedCabin}"]`;
renderRemoveGuestModal();
}

function stageGuestRemoval(guestIdx){
const guest=detail?.guests[guestIdx];
if(!guest||guest.pendingRemoval)return;
if(!isBaseGuest(detail,guest)){
detail.guests.splice(guestIdx,1);
return;
}
const cabinIdx=detail.b.cabins.indexOf(guest.cabin);
const pricing=priceDetail(detail);
const row=guestFareRows(detail,pricing)[guestIdx];
guest.pendingRemoval={
farePosition:activeCabinFarePosition(detail,guest),
cabinIdx,room:String(detail.cabinPlan[cabinIdx]?.room||guest.cabin),fare:fareSnapshot(row)
};
}
function restoreGuestRemoval(guestIdx){
const guest=detail?.guests[guestIdx];
if(!guest?.pendingRemoval)return;
guest.pendingRemoval=null;
mod.removeGuestIdx=-1;
refresh();
}

modifyBookingBtn.addEventListener("click",openModify);

/* Cancellation is a scope choice, not an immediate destructive action. The
   menu mirrors the keyboard model used by Modify booking, then routes to a
   dedicated page for either the entire booking or selected guests. */
const cancellationBtn=document.getElementById("cancellationBtn");
const cancellationMenu=document.getElementById("cancellationMenu");
const cancellationMenuWrap=cancellationBtn.closest(".ov-cancellation-menu-wrap");
function cancellationGuestCount(){
return detail?activeGuests(detail).length:0;
}
function confirmedCancellationGuestCount(){
return detail?(detail.base.guests||[]).length:0;
}
function setCancellationMenu(open,focusItem=null){
const partialOption=cancellationMenu.querySelector('[data-cancellation-flow="partial"]');
const canCancelPartially=Boolean(detail)&&confirmedCancellationGuestCount()>1&&detail.b.status!=="cancelled";
if(partialOption){
partialOption.disabled=!canCancelPartially;
partialOption.setAttribute("aria-disabled",String(!canCancelPartially));
const helper=partialOption.querySelector(".ov-cancellation-option-copy > span");
if(helper)helper.textContent=canCancelPartially
?"Cancel one or more guests while the booking stays active"
:"Requires at least two active guests";
}
cancellationMenu.hidden=!open;
cancellationBtn.setAttribute("aria-expanded",String(open));
cancellationMenuWrap.classList.toggle("open",open);
if(open&&focusItem!==null){
const items=[...cancellationMenu.querySelectorAll('[role="menuitem"]:not(:disabled)')];
(focusItem==="last"?items.at(-1):items[0])?.focus();
}
}
function partialCancellationSelectionState(){
return{presentation:"page",entry:"partial",scope:null,guestId:null,guestIds:[],guestIdx:-1,
sourceRecordVersion:Number(detail?.b?.recordVersion??1),
partialStage:"select",supplementAllocations:[],
supplementDecisionOpen:null,supplementDecisionDraft:null,supplementBulkOpen:false,supplementBulkDraft:null,supplementDecisionModes:{},confirmRemoveAll:false,impactGuestsOpen:false,
supplementGroupsOpen:{},supplementSectionOpen:true,cancellationInfoOpen:false,
step:"select",reason:"",note:"",noShow:false,keepInsurance:false,
overrideOn:false,overrideAmt:"",overrideReason:"",overrideConfirmed:false,source:"original",
walletId:"",walletState:"idle",walletCreated:null,chequePayee:"",chequeAddr:"",
chequePayeeTouched:false,chequeAddrTouched:false,
splitCard:"",splitWallet:"",done:null};
}
function focusCancellationHeading(){
requestAnimationFrame(()=>document.getElementById("cancellationPageTitle")?.focus({preventScroll:true}));
}
function cancellationRoot(){
return cx?.presentation==="page"
?document.getElementById("cancellationPageContent")
:document.getElementById("cancelModal");
}
function focusCancellationTarget(selector="#cancellationStepTitle"){
requestAnimationFrame(()=>{
const target=cancellationRoot()?.querySelector(selector);
if(target)target.focus({preventScroll:true});
});
}
function renderCancellationWithFocus(selector="#cancellationStepTitle"){
renderCancellationExperience();
focusCancellationTarget(selector);
}
function openCancellationPage(mode){
if(!detail)return;
if(mode==="partial"&&confirmedCancellationGuestCount()<=1){setCancellationMenu(false);return;}
setCancellationMenu(false);
setPaymentMenu(false);
closeFareTableModal();
/* Cancellation is its own transaction and always starts from the confirmed
   booking. Any modification draft is paused intact and restored on Back. */
cancellationReturnDetail=isDirty(detail)?detail:null;
if(cancellationReturnDetail)detail=buildDetailState(detail.b);
cx=mode==="partial"
?partialCancellationSelectionState()
:createCancellationState({presentation:"page",entry:"full"});
document.getElementById("viewList").classList.remove("active");
document.getElementById("viewDetail").classList.remove("active");
document.getElementById("viewModify").classList.remove("active");
document.getElementById("viewHistory").classList.remove("active");
document.getElementById("viewCancellation").classList.add("active");
renderCancellationPage();
document.querySelector(".main").scrollTop=0;
focusCancellationHeading();
}
function closeCancellationPage(){
closePartialSupplementAssignModal();
closeRemoveAllSupplementsModal();
closeFareTableModal();
const completed=Boolean(cx?.done);
if(!completed&&cx?.entry==="partial"){
detail?.guests.forEach(guest=>{guest.pendingRemoval=null;});
}
/* Going back is non-destructive: restore the exact working modification that
   was paused on entry. A completed cancellation intentionally replaces it. */
if(!completed&&cancellationReturnDetail)detail=cancellationReturnDetail;
cancellationReturnDetail=null;
cx=null;
document.getElementById("cancellationPageContent").innerHTML="";
document.getElementById("viewCancellation").classList.remove("active");
document.getElementById("detailLayout").appendChild(document.querySelector(".ov-side"));
renderDetail();
document.getElementById("viewDetail").classList.add("active");
document.querySelector(".main").scrollTop=0;
requestAnimationFrame(()=>{
const target=completed?document.getElementById("detailClose"):cancellationBtn;
(target?.offsetParent?target:document.getElementById("detailClose"))?.focus({preventScroll:true});
});
}
function showPartialCancellationSelection(){
closePartialSupplementAssignModal();
closeRemoveAllSupplementsModal();
detail?.guests.forEach(guest=>{guest.pendingRemoval=null;});
cx=partialCancellationSelectionState();
renderCancellationPage();
document.querySelector(".main").scrollTop=0;
focusCancellationHeading();
}
function stagePartialGuestCancellation(guestIdx){
const guest=detail?.guests[guestIdx];
if(!guest||!isGuestActive(guest)||activeGuests(detail).length<=1)return;
if(isBaseGuest(detail,guest))stageGuestRemoval(guestIdx);
else{
const cabinIdx=detail.b.cabins.indexOf(guest.cabin);
const pricing=priceDetail(detail);
const row=guestFareRows(detail,pricing)[guestIdx];
guest.pendingRemoval={farePosition:activeCabinFarePosition(detail,guest),
cabinIdx,room:String(detail.cabinPlan[cabinIdx]?.room||guest.cabin),fare:fareSnapshot(row)};
}
cx.guestIds=[...new Set([...(cx.guestIds||[]),guest.guestId])];
cx.guestId=cx.guestIds[0]||null;
cx.guestIdx=detail.guests.findIndex(candidate=>candidate.guestId===cx.guestId);
cx.partialStage="select";
cx.supplementAllocations=(cx.supplementAllocations||[]).filter(allocation=>cx.guestIds.includes(allocation.sourceGuestId));
renderCancellationPage();
focusCancellationTarget(`[data-guestrestore="${guestIdx}"]`);
}
function restorePartialGuestCancellation(guestIdx){
const guest=detail?.guests[guestIdx];
if(!guest?.pendingRemoval)return;
guest.pendingRemoval=null;
cx.guestIds=(cx.guestIds||[]).filter(guestId=>guestId!==guest.guestId);
cx.guestId=cx.guestIds[0]||null;
cx.guestIdx=cx.guestId?detail.guests.findIndex(candidate=>candidate.guestId===cx.guestId):-1;
cx.partialStage="select";
cx.supplementAllocations=(cx.supplementAllocations||[]).filter(allocation=>allocation.sourceGuestId!==guest.guestId);
renderCancellationPage();
focusCancellationTarget(`[data-cancelguest="${guestIdx}"]`);
}
function seedPartialChequeDefaults(guest){
if(!guest)return;
if(!cx.chequePayeeTouched)cx.chequePayee=guest.name;
if(!cx.chequeAddrTouched){
const prof=guest.profile;
cx.chequeAddr=prof?prof.address+", "+prof.city+", "+prof.state+" "+prof.zip:"";
}
}
function openPartialSupplementAllocation(){
const guests=partialSelectedGuests(detail).filter(guest=>guest.pendingRemoval);
if(!guests.length||activeGuests(detail).length<1)return;
ensurePartialSupplementAllocations();
const guest=guests[0];
seedPartialChequeDefaults(guest);
cx.partialStage="supplements";
renderCancellationPage();
document.querySelector(".main").scrollTop=0;
focusCancellationTarget("#cancellationStepTitle");
}
function backToPartialGuestSelection(){
closeRemoveAllSupplementsModal();
cx.scope=null;
cx.partialStage="select";
cx.step="select";
renderCancellationPage();
document.querySelector(".main").scrollTop=0;
focusCancellationTarget(`[data-guestrestore="${cx.guestIdx}"]`);
}
function returnToPartialSupplementAllocation(focusSelector="#cancellationStepTitle"){
cx.scope=null;
cx.partialStage="supplements";
cx.step="select";
renderCancellationPage();
document.querySelector(".main").scrollTop=0;
focusCancellationTarget(focusSelector);
}
function beginPartialGuestCancellation(){
closeRemoveAllSupplementsModal();
const guests=partialSelectedGuests(detail).filter(guest=>guest.pendingRemoval);
if(!guests.length||activeGuests(detail).length<1)return;
const allocations=ensurePartialSupplementAllocations();
const q=cancelQuote();
if(!partialCancellationDecisionReady(q,allocations))return;
cx.scope="guest";
cx.partialStage="refund";
cx.guestIds=guests.map(guest=>guest.guestId);
const guest=guests[0];
cx.guestId=guest.guestId;
cx.guestIdx=detail.guests.findIndex(candidate=>candidate.guestId===guest.guestId);
cx.step=0;
seedPartialChequeDefaults(guest);
renderCancellationPage();
document.querySelector(".main").scrollTop=0;
focusCancellationHeading();
}
function closeCancellationExperience(){
if(cx?.presentation!=="page"){closeCancelModal();return;}
if(cx.entry==="partial"&&cx.scope==="guest"&&!cx.done){
returnToPartialSupplementAllocation();return;
}
closeCancellationPage();
}
cancellationBtn.addEventListener("click",e=>{
e.stopPropagation();
setCancellationMenu(cancellationMenu.hidden);
});
cancellationBtn.addEventListener("keydown",e=>{
if(e.key==="Enter"||e.key===" "||e.key==="ArrowDown"||e.key==="ArrowUp"){
e.preventDefault();setCancellationMenu(true,e.key==="ArrowUp"?"last":"first");
}else if(e.key==="Escape"){
e.preventDefault();e.stopPropagation();setCancellationMenu(false);
}
});
cancellationMenu.addEventListener("click",e=>{
const option=e.target.closest("[data-cancellation-flow]");
if(option)openCancellationPage(option.dataset.cancellationFlow);
});
cancellationMenu.addEventListener("keydown",e=>{
const items=[...cancellationMenu.querySelectorAll('[role="menuitem"]:not(:disabled)')],index=items.indexOf(document.activeElement);
if(e.key==="Escape"){
e.preventDefault();e.stopPropagation();setCancellationMenu(false);cancellationBtn.focus();return;
}
if(e.key==="Home"||e.key==="End"||e.key==="ArrowDown"||e.key==="ArrowUp"){
e.preventDefault();
const next=e.key==="Home"?0:e.key==="End"?items.length-1:e.key==="ArrowDown"?(index+1)%items.length:(index-1+items.length)%items.length;
items[next]?.focus();
}
});
cancellationMenuWrap.addEventListener("focusout",e=>{
if(!cancellationMenuWrap.contains(e.relatedTarget))setCancellationMenu(false);
});
document.addEventListener("click",e=>{if(!cancellationMenuWrap.contains(e.target))setCancellationMenu(false);});
document.getElementById("cancellationBack").addEventListener("click",closeCancellationPage);
document.getElementById("modifyBack").addEventListener("click",closeModify);
document.getElementById("mfPrev").addEventListener("click",()=>moveModStep(-1));
document.getElementById("mfPreview").addEventListener("click",openModificationPreview);
document.getElementById("detailReviewChanges").addEventListener("click",openModificationPreview);
document.getElementById("mfNext").addEventListener("click",()=>{
if(mod.step===0){goStep(1);return;}
if(mod.step===1){goStep(2);return;}
if(mod.step===2){goStep(3);return;}
if(mod.step===3&&isDirty(detail)&&commitModification())closeModify();
});
document.getElementById("mfSteps").addEventListener("click",e=>{
const btn=e.target.closest("[data-step]");
if(btn)goStep(+btn.dataset.step);
});
document.getElementById("mfSuppImpactItems").addEventListener("click",e=>{
const toggle=e.target.closest("[data-impact-section-toggle]");
if(!toggle)return;
const panel=document.getElementById(toggle.getAttribute("aria-controls"));
if(!panel)return;
const opening=toggle.getAttribute("aria-expanded")!=="true";
const key=toggle.dataset.impactSectionToggle;
if(!(mod.impactCollapsedSectionKeys instanceof Set))mod.impactCollapsedSectionKeys=new Set();
if(opening)mod.impactCollapsedSectionKeys.delete(key);
else mod.impactCollapsedSectionKeys.add(key);
toggle.setAttribute("aria-expanded",String(opening));
toggle.setAttribute("aria-label",`${opening?"Collapse":"Expand"} ${toggle.dataset.impactSectionLabel}`);
panel.hidden=!opening;
toggle.closest(".mf-impact-area")?.classList.toggle("is-collapsed",!opening);
});
const mfBody=document.getElementById("mfBody");
mfBody.addEventListener("click",e=>{
const fareExpand=e.target.closest("[data-expand-fare]");
if(fareExpand){openFareTableModal(+fareExpand.dataset.expandFare,null,null,fareExpand.dataset.fareContext||"modify");return;}
const cr=e.target.closest("[data-change-room]");
if(cr){openRoomModal(+cr.dataset.changeRoom);return;}
const guestCabinToggle=e.target.closest("[data-guest-cabin-toggle]");
if(guestCabinToggle){
const cabinIndex=+guestCabinToggle.dataset.guestCabinToggle;
if(!(mod.guestCollapsedCabinIndexes instanceof Set))mod.guestCollapsedCabinIndexes=new Set();
const opening=mod.guestCollapsedCabinIndexes.has(cabinIndex);
if(opening)mod.guestCollapsedCabinIndexes.delete(cabinIndex);
else{
mod.guestCollapsedCabinIndexes.add(cabinIndex);
const openGuest=detail.guests[mod.open];
if(openGuest&&detail.b.cabins.indexOf(openGuest.cabin)===cabinIndex)mod.open=-1;
}
renderModify();
requestAnimationFrame(()=>mfBody.querySelector(`[data-guest-cabin-toggle="${cabinIndex}"]`)?.focus({preventScroll:true}));
return;
}
const head=e.target.closest("[data-toggle]");
if(head){const i=+head.dataset.toggle;mod.open=mod.open===i?-1:i;renderModify();return;}
const guestRestore=e.target.closest("[data-guestrestore]");
if(guestRestore){restoreGuestRemoval(+guestRestore.dataset.guestrestore);return;}
const gr=e.target.closest("[data-guestremove]");
if(gr){
if(gr.disabled)return;
const guestIdx=+gr.dataset.guestremove;
const guest=detail.guests[guestIdx];
const cabinIdx=guest?detail.b.cabins.indexOf(guest.cabin):-1;
if(cabinIdx<0)return;
openNewGuestRemoval(guestIdx,cabinIdx);
return;
}
const ngc=e.target.closest("[data-newguestcabin]");
if(ngc){
const cabinIdx=+ngc.dataset.newguestcabin;
openAddGuestModal(cabinIdx);
return;
}
/* ---- packages & supplements ---- */
const selectedSuppToggle=e.target.closest("[data-selected-supp-toggle]");
if(selectedSuppToggle){
mod.selectedSuppsCollapsed=!mod.selectedSuppsCollapsed;
renderModify();
requestAnimationFrame(()=>mfBody.querySelector("[data-selected-supp-toggle]")?.focus({preventScroll:true}));
return;
}
const currentSuppToggle=e.target.closest("[data-current-supp-toggle]");
if(currentSuppToggle){
const id=currentSuppToggle.dataset.currentSuppToggle;
const wasOpen=mod.currentSuppExpanded===id;
const previousId=mod.currentSuppExpanded;
if(previousId){
const previousToggle=mfBody.querySelector(`[data-current-supp-toggle="${CSS.escape(previousId)}"]`);
const previousPanel=mfBody.querySelector(`#current-supp-details-${CSS.escape(previousId)}`);
previousToggle?.setAttribute("aria-expanded","false");
if(previousToggle?.querySelector("[data-current-supp-toggle-label]"))previousToggle.querySelector("[data-current-supp-toggle-label]").textContent="View guest assignments for ";
if(previousPanel)previousPanel.hidden=true;
}
mod.currentSuppExpanded=wasOpen?null:id;
if(!wasOpen){
currentSuppToggle.setAttribute("aria-expanded","true");
const label=currentSuppToggle.querySelector("[data-current-supp-toggle-label]");
if(label)label.textContent="Hide guest assignments for ";
const panel=mfBody.querySelector(`#current-supp-details-${CSS.escape(id)}`);
if(panel)panel.hidden=false;
}
return;
}
const ps=e.target.closest("[data-pkgsection]");
if(ps){mod.pkgSectionOpen=!mod.pkgSectionOpen;if(!mod.pkgSectionOpen)mod.pkgExpanded=null;renderModify();return;}
const pc=e.target.closest("[data-pkgcard]");
if(pc){const id=pc.dataset.pkgcard;mod.pkgExpanded=mod.pkgExpanded===id?null:id;mod.suppExpanded=null;renderModify();return;}
if(e.target.closest("[data-pkgdone]")){mod.pkgExpanded=null;renderModify();return;}
const pa=e.target.closest("[data-pkgall]");
if(pa){
const id=pa.dataset.pkgall,ci=+pa.dataset.cabin,pk=PKG_BY_ID[id];
const list=activeGuests(detail).filter(g=>g.cabin===detail.b.cabins[ci]&&packageAllowed(pk,g,detail.sail));
if(!list.length)return;
/* toggle the whole cabin: clear if they all already have it, otherwise apply to all */
const all=list.every(g=>g.pkg===id);
list.forEach(g=>{g.pkg=all?null:id;});
refresh();return;
}
const sa=e.target.closest("[data-suppassign]");
if(sa){
sa.focus();
openSupplementAssignModal(sa.dataset.suppassign);
return;
}
const pill=e.target.closest("[data-suppcat]");
if(pill){
const category=pill.dataset.suppcat||null;
mod.suppCat=category;
mod.suppExpanded=null;
renderModify();
requestAnimationFrame(()=>mfBody.querySelector(`[data-suppcat="${CSS.escape(category||"")}"]`)?.focus({preventScroll:true}));
return;
}
});
mfBody.addEventListener("change",e=>{
const t=e.target;
/* package assignment is a checkbox, so it arrives as change rather than click */
const pg=t.closest("[data-pkgguest]");
if(pg){
const g=detail.guests[+pg.dataset.g],pk=PKG_BY_ID[pg.dataset.pkgguest];
if(!g||!packageAllowed(pk,g,detail.sail)){pg.checked=false;return;}
g.pkg=pg.checked?pg.dataset.pkgguest:null;
refresh();return;
}
if(t.dataset.p==="iso"){detail.guests[+t.dataset.g].profile.iso=t.value;refresh();}
});

/* The handoff treats guest assignment as one focused dialog. All mutations
   continue to update the booking's guest-level supplement map; the dialog is
   only a view over that shared state. */
const supplementAssignModal=document.getElementById("supplementAssignModal");
function refreshSupplementAssignment(focusSelector){
const previousBody=supplementAssignModal.querySelector(".mf-modal-body");
const scrollTop=previousBody?previousBody.scrollTop:0;
refresh();
requestAnimationFrame(()=>{
const nextBody=supplementAssignModal.querySelector(".mf-modal-body");
if(nextBody)nextBody.scrollTop=scrollTop;
supplementAssignModal.querySelector(focusSelector)?.focus({preventScroll:true});
});
}
supplementAssignModal.addEventListener("click",e=>{
if(e.target.closest("[data-supp-assignment-close]")){closeSupplementAssignModal();return;}
const assignAll=e.target.closest("[data-suppall]");
if(assignAll){
const id=assignAll.dataset.suppall,ci=+assignAll.dataset.cabin,sup=SUPP_BY_ID[id];
const group=suppCabinGroups().find(g=>g.ci===ci);
if(group)group.list.forEach(({g})=>{
const covered=Boolean(g.pkg&&PKG_BY_ID[g.pkg]?.includedSupps.includes(id));
if(covered||!suppAllowed(sup,g))return;
if(!g.supps)g.supps={};
if(!g.supps[id])g.supps[id]=1;
g.supplements=suppCount(g.supps);
});
refreshSupplementAssignment(`[data-suppremoveall="${id}"][data-cabin="${ci}"]`);
return;
}
const removeAll=e.target.closest("[data-suppremoveall]");
if(removeAll){
const id=removeAll.dataset.suppremoveall,ci=+removeAll.dataset.cabin;
const group=suppCabinGroups().find(g=>g.ci===ci);
if(group)group.list.forEach(({g})=>{
if(g.supps)delete g.supps[id];
g.supplements=suppCount(g.supps);
});
refreshSupplementAssignment(`[data-suppall="${id}"][data-cabin="${ci}"]`);
return;
}
const qtyButton=e.target.closest("[data-suppqty]");
if(qtyButton){
if(qtyButton.disabled)return;
const id=qtyButton.dataset.suppqty,guestIndex=+qtyButton.dataset.g,guest=detail.guests[guestIndex],sup=SUPP_BY_ID[id],direction=+qtyButton.dataset.dir;
if(!guest||!suppAllowed(sup,guest,detail.sail))return;
const next=Math.max(0,Math.floor(Number((guest.supps||{})[id])||0)+direction);
if(!guest.supps)guest.supps={};
if(next===0)delete guest.supps[id];else guest.supps[id]=next;
guest.supplements=suppCount(guest.supps);
const focusDirection=direction<0&&next===0?1:direction;
refreshSupplementAssignment(`[data-suppqty="${id}"][data-g="${guestIndex}"][data-dir="${focusDirection}"]`);
}
});

/* ---- room modal events ---- */
const roomModal=document.getElementById("roomModal");
function focusRoomControl(selector,scrollState=null,reveal=false){
requestAnimationFrame(()=>{
const body=roomModal.querySelector(".mf-room-modal-body"),tabs=roomModal.querySelector(".mf-room-tabs");
if(scrollState){if(body)body.scrollTop=scrollState.body;if(tabs)tabs.scrollLeft=scrollState.tabs;}
const target=roomModal.querySelector(selector);
if(!target)return;
target.focus({preventScroll:true});
if(!reveal)return;
const tabTarget=tabs?.contains(target)?target:tabs?.querySelector('[role="tab"][aria-selected="true"]');
if(tabs&&tabTarget){
const left=tabTarget.offsetLeft,right=left+tabTarget.offsetWidth;
if(left<tabs.scrollLeft)tabs.scrollLeft=Math.max(0,left-8);
else if(right>tabs.scrollLeft+tabs.clientWidth)tabs.scrollLeft=right-tabs.clientWidth+8;
}
if(body&&body.contains(target)){
const bodyRect=body.getBoundingClientRect(),targetRect=target.getBoundingClientRect();
if(targetRect.top<bodyRect.top+8)body.scrollTop-=bodyRect.top+8-targetRect.top;
else if(targetRect.bottom>bodyRect.bottom-8)body.scrollTop+=targetRect.bottom-bodyRect.bottom+8;
}
});
}
function rerenderRoomModalWithFocus(selector,reveal=false){
const body=roomModal.querySelector(".mf-room-modal-body"),tabs=roomModal.querySelector(".mf-room-tabs");
const scrollState={body:body?.scrollTop||0,tabs:tabs?.scrollLeft||0};
renderRoomModal();focusRoomControl(selector,scrollState,reveal);
}
roomModal.addEventListener("click",e=>{
if(e.target.closest("[data-rpcancel]")){closeRoomModal();return;}
if(mod.roomCategoryOpen&&!e.target.closest(".mf-room-category-wrap")){
mod.roomCategoryOpen=false;mod.roomNotice="";rerenderRoomModalWithFocus("[data-room-category-toggle]");return;
}
const categoryToggle=e.target.closest("[data-room-category-toggle]");
if(categoryToggle){
mod.roomCategoryOpen=!mod.roomCategoryOpen;mod.roomNotice="";
rerenderRoomModalWithFocus(mod.roomCategoryOpen?`[data-selectcode="${CSS.escape(mod.pendingCode)}"]`:"[data-room-category-toggle]");return;
}
const sc=e.target.closest("[data-selectcode]");
if(sc){
const code=sc.dataset.selectcode,idx=mod.editCabin,plan=detail.cabinPlan[idx],entry=detail.inventory.find(row=>row.code===code);
if(!entry)return;
if(code!==mod.pendingCode){
const original=code===detail.base.cabinCodeBy[idx];
mod.pendingCode=code;mod.pendingRoom=code===plan.code?String(plan.room):original?String(detail.base.roomBy[idx]):null;
mod.roomDeck=code===plan.code?roomDeckFromNumber(plan.room,entry.deck):original?roomDeckFromNumber(detail.base.roomBy[idx],entry.deck):STATEROOM_DECKS[0];
mod.locFilter="All";mod.roomFilters={crib:false,rollaway:false,accessible:false,connecting:false};
}
mod.roomCategoryOpen=false;mod.roomNotice="";rerenderRoomModalWithFocus("[data-room-category-toggle]");return;
}
const auto=e.target.closest("[data-autoassign]");
if(auto){
const idx=mod.editCabin,plan=detail.cabinPlan[idx],entry=catEntry(mod.pendingCode),bucket=occBucketFor(cabinGroups(detail)[idx].guests);
const options=roomOptionsForCabin(detail,idx,entry).filter(room=>room.deck===mod.roomDeck&&roomMatchesCurrentFilters(room)&&roomCanBeSelected(detail,idx,entry,room,bucket.key)&&!(entry.code===plan.code&&room.num===String(plan.room)));
if(options.length){mod.pendingRoom=options[0].num;mod.roomNotice=`Room ${options[0].num} selected automatically.`;}
else mod.roomNotice=`No alternative rooms match on Deck ${mod.roomDeck}. Choose another deck or clear filters.`;
rerenderRoomModalWithFocus("[data-autoassign]");return;
}
const roomLoc=e.target.closest("[data-roomloc]");
if(roomLoc){const loc=roomLoc.dataset.roomloc;mod.locFilter=loc;mod.roomNotice="";rerenderRoomModalWithFocus(`[data-roomloc="${CSS.escape(loc)}"]`);return;}
if(e.target.closest("[data-roomfilterall]")){mod.roomFilters={crib:false,rollaway:false,accessible:false,connecting:false};mod.roomNotice="";rerenderRoomModalWithFocus("[data-roomfilterall]");return;}
const rfilt=e.target.closest("[data-roomfilter]");
if(rfilt){const k=rfilt.dataset.roomfilter;mod.roomFilters[k]=!mod.roomFilters[k];mod.roomNotice="";rerenderRoomModalWithFocus(`[data-roomfilter="${CSS.escape(k)}"]`);return;}
if(e.target.closest("[data-roomclear]")){mod.locFilter="All";mod.roomFilters={crib:false,rollaway:false,accessible:false,connecting:false};mod.roomNotice="";rerenderRoomModalWithFocus("[data-roomfilterall]");return;}
const deckButton=e.target.closest("[data-roomdeck]");
if(deckButton){mod.roomDeck=+deckButton.dataset.roomdeck;mod.roomNotice="";rerenderRoomModalWithFocus(`[data-roomdeck="${mod.roomDeck}"]`,true);return;}
const sr=e.target.closest("[data-selectroom]");
if(sr){mod.pendingRoom=String(sr.dataset.selectroom);mod.roomNotice=`Room ${mod.pendingRoom} selected.`;rerenderRoomModalWithFocus(`[data-selectroom="${CSS.escape(mod.pendingRoom)}"]`,true);return;}
const rf=e.target.closest("[data-rpconfirm]");
if(rf){
const idx=+rf.dataset.rpconfirm,plan=detail.cabinPlan[idx];
const entry=detail.inventory.find(row=>row.code===mod.pendingCode);
const validation=entry?selectedRoomValidation(detail,idx,entry.code,mod.pendingRoom):{valid:false,message:"The selected category is no longer available."};
const hasChange=entry&&(entry.code!==plan.code||String(mod.pendingRoom)!==String(plan.room));
if(!hasChange||!validation.valid){mod.roomNotice=validation.message||"Select a different room or category to continue.";renderRoomModal();return;}
plan.code=entry.code;plan.room=String(validation.room.num);
mod.editCabin=-1;resetPicker();refresh();
}
});
roomModal.addEventListener("keydown",e=>{
const tab=e.target.closest("[data-roomdeck]");
if(tab&&(e.key==="ArrowLeft"||e.key==="ArrowRight"||e.key==="Home"||e.key==="End")){
e.preventDefault();
const deckButtons=[...roomModal.querySelectorAll("[data-roomdeck]")],index=deckButtons.indexOf(tab);
const nextButton=e.key==="Home"?deckButtons[0]:e.key==="End"?deckButtons[deckButtons.length-1]:e.key==="ArrowRight"?deckButtons[(index+1)%deckButtons.length]:deckButtons[(index-1+deckButtons.length)%deckButtons.length];
mod.roomDeck=+nextButton.dataset.roomdeck;mod.roomNotice="";rerenderRoomModalWithFocus(`[data-roomdeck="${mod.roomDeck}"]`,true);return;
}
const roomButton=e.target.closest("[data-selectroom]");
if(roomButton&&(e.key==="ArrowLeft"||e.key==="ArrowRight"||e.key==="ArrowUp"||e.key==="ArrowDown"||e.key==="Home"||e.key==="End")){
e.preventDefault();
const roomButtons=[...roomModal.querySelectorAll(".mf-room-grid [data-selectroom]:not([disabled])")],index=roomButtons.indexOf(roomButton);
const grid=roomButton.closest(".mf-room-grid");
const columns=Math.max(1,getComputedStyle(grid).gridTemplateColumns.split(" ").filter(Boolean).length);
let nextIndex=e.key==="Home"?0:e.key==="End"?roomButtons.length-1:e.key==="ArrowLeft"?index-1:e.key==="ArrowRight"?index+1:e.key==="ArrowUp"?index-columns:index+columns;
nextIndex=Math.max(0,Math.min(roomButtons.length-1,nextIndex));
const nextRoom=roomButtons[nextIndex]?.dataset.selectroom;
if(nextRoom){mod.pendingRoom=String(nextRoom);mod.roomNotice=`Room ${mod.pendingRoom} selected.`;rerenderRoomModalWithFocus(`[data-selectroom="${CSS.escape(mod.pendingRoom)}"]`,true);}return;
}
if(mod.roomCategoryOpen&&e.target.closest(".mf-room-category-menu")&&(e.key==="ArrowDown"||e.key==="ArrowUp"||e.key==="Home"||e.key==="End")){
e.preventDefault();
const options=[...roomModal.querySelectorAll(".mf-room-category-menu [data-selectcode]:not([disabled])")];
const index=options.indexOf(document.activeElement);
const next=e.key==="Home"?0:e.key==="End"?options.length-1:e.key==="ArrowDown"?(index+1)%options.length:(index-1+options.length)%options.length;
options[next]?.focus({preventScroll:true});
}
});

/* ---- add-guest modal events ---- */
const addGuestModal=document.getElementById("addGuestModal");
function rerenderAddGuestModal(focusSelector,preserveScroll=true){
const previousBody=addGuestModal.querySelector(".mf-modal-body"),scrollTop=previousBody?.scrollTop||0;
renderAddGuestModal();
requestAnimationFrame(()=>{
const nextBody=addGuestModal.querySelector(".mf-modal-body");
if(preserveScroll&&nextBody)nextBody.scrollTop=scrollTop;
addGuestModal.querySelector(focusSelector)?.focus({preventScroll:true});
});
}
addGuestModal.addEventListener("click",e=>{
if(e.target.closest("[data-agcancel]")){closeAddGuestModal();return;}
const pick=e.target.closest("[data-agpick]");
if(pick){
const p=searchDirectory(mod.guestSearch)[+pick.dataset.agpick];
/* identity fills from the directory; mandatory insurance remains active */
if(p)mod.newGuestDraft={...mod.newGuestDraft,first:p.first,middle:p.middle,last:p.last,
dob:p.dob,gender:p.gender,iso:p.iso,email:p.email,phone:p.phone,
zip:p.zip,city:p.city,state:p.state,address:p.address};
mod.guestSearch="";mod.addGuestError=false;
renderModify();
requestAnimationFrame(()=>addGuestModal.querySelector('[data-ag="first"]')?.focus({preventScroll:true}));
return;
}
if(e.target.closest("[data-agnext]")){advanceAddGuest();return;}
if(e.target.closest("[data-agback]")){
mod.addGuestStep=0;mod.addGuestError=false;renderAddGuestModal();
requestAnimationFrame(()=>addGuestModal.querySelector('[data-ag="first"]')?.focus({preventScroll:true}));
return;
}
if(e.target.closest("[data-agskip]")){confirmAddGuest(false);return;}
if(e.target.closest("[data-agconfirm]")){confirmAddGuest(true);return;}
const category=e.target.closest("[data-agsuppcat]");
if(category){
mod.addGuestSuppCat=category.dataset.agsuppcat||null;
rerenderAddGuestModal(`[data-agsuppcat="${CSS.escape(category.dataset.agsuppcat||"")}"]`);
return;
}
const quantityButton=e.target.closest("[data-agsuppqty]");
if(quantityButton){
if(quantityButton.disabled||mod.addGuestStep!==1)return;
const id=quantityButton.dataset.agsuppqty,sup=SUPP_BY_ID[id],candidate=createAddGuestCandidate(mod.newGuestDraft,mod.addGuestCabin);
if(!sup||!candidate||!suppAllowed(sup,candidate))return;
const direction=+quantityButton.dataset.dir,current=Math.max(0,Math.floor(Number((mod.newGuestDraft.supps||{})[id])||0)),next=Math.max(0,current+direction);
if(!mod.newGuestDraft.supps)mod.newGuestDraft.supps={};
if(next===0)delete mod.newGuestDraft.supps[id];else mod.newGuestDraft.supps[id]=next;
const focusDirection=direction<0&&next===0?1:direction;
rerenderAddGuestModal(`[data-agsuppqty="${CSS.escape(id)}"][data-dir="${focusDirection}"]`);
}
});
addGuestModal.addEventListener("input",e=>{
const t=e.target;
if(t.dataset.agsearch!==undefined){
/* refresh only the results list so the caret stays put while typing */
mod.guestSearch=t.value;
addGuestModal.querySelector("[data-agresults]").innerHTML=addGuestResultsHtml();
return;
}
if(t.dataset.agsuppsearch!==undefined){
mod.addGuestSuppSearch=t.value;
const candidate=createAddGuestCandidate(mod.newGuestDraft,mod.addGuestCabin);
const list=addGuestModal.querySelector("[data-agsupplist]");
if(candidate&&list)list.innerHTML=addGuestSupplementRowsHtml(candidate);
return;
}
if(!t.dataset.ag)return;
mod.newGuestDraft[t.dataset.ag]=t.value;
mod.addGuestError=false;
if(t.dataset.ag==="zip"){
const hit=ZIP_LOOKUP[t.value.trim()];
mod.newGuestDraft.city=hit?hit.city:"";
mod.newGuestDraft.state=hit?hit.state:"";
addGuestModal.querySelector("[data-agcity]").value=mod.newGuestDraft.city;
addGuestModal.querySelector("[data-agstate]").value=mod.newGuestDraft.state;
}
});
addGuestModal.addEventListener("change",e=>{
const t=e.target;
if(t.dataset.ag==="dob"){
const candidate=createAddGuestCandidate(mod.newGuestDraft,mod.addGuestCabin);
if(candidate)mod.newGuestDraft.supps={...candidate.supps};
rerenderAddGuestModal('[data-ag="dob"]');
return;
}
if(t.dataset.agsel==="gender"){mod.newGuestDraft.gender=t.value;return;}
if(t.dataset.agsel==="iso"){
const bodyScroll=addGuestModal.querySelector(".mf-modal-body")?.scrollTop||0;
mod.newGuestDraft.iso=t.value;renderModify();
requestAnimationFrame(()=>{
const nextBody=addGuestModal.querySelector(".mf-modal-body");
if(nextBody)nextBody.scrollTop=bodyScroll;
addGuestModal.querySelector('[data-agsel="iso"]')?.focus({preventScroll:true});
});
}
});

/* ---- remove guest modal events ---- */
const removeGuestModal=document.getElementById("removeGuestModal");
removeGuestModal.addEventListener("click",e=>{
if(e.target.closest("[data-rmcancel]")){mod.removeGuestIdx=-1;renderModify();return;}
if(e.target.closest("[data-rmconfirm]")){
const idx=mod.removeGuestIdx;
stageGuestRemoval(idx);
mod.removeGuestIdx=-1;
refresh();
}
});

mfBody.addEventListener("input",e=>{
const t=e.target;
if(t.dataset.suppsearch!==undefined){
/* refresh only the row list so the caret stays in the search field */
mod.suppSearch=t.value;
mod.suppExpanded=null;
mfBody.querySelector("[data-supplist]").innerHTML=mfSuppRows();
return;
}
/* profile edits carry no price impact, so the model updates without a re-render
   and the caret stays where the user left it */
if(!t.dataset.p||t.dataset.p==="iso")return;
const i=+t.dataset.g,profile=detail.guests[i].profile;
profile[t.dataset.p]=t.value;
if(t.dataset.p==="first"||t.dataset.p==="middle"||t.dataset.p==="last"){
const nextName=profileDisplayName(profile);
if(nextName)detail.guests[i].name=nextName;
}
if(t.dataset.p==="zip"){
const hit=ZIP_LOOKUP[t.value.trim()];
profile.city=hit?hit.city:"";
profile.state=hit?hit.state:"";
mfBody.querySelector(`[data-pcity="${i}"]`).value=profile.city;
mfBody.querySelector(`[data-pstate="${i}"]`).value=profile.state;
}
saveDetailDraft();
const summary=updateModificationPreviewState();
renderSteps(summary);
const next=document.getElementById("mfNext");
if(mod.step===2){
next.textContent="Continue to review & save";
next.disabled=summary?.reconciliation?.balanced===false;
next.title=next.disabled?"Pricing totals must reconcile before this modification can continue":"";
}
renderSupplementImpact(summary);
});
document.getElementById("historyBtn").addEventListener("click",openHistory);
document.getElementById("taxesToggle").addEventListener("click",()=>{
const btn=document.getElementById("taxesToggle"),bd=document.getElementById("taxesBreakdown");
const opening=bd.hidden;
bd.hidden=!opening;
btn.setAttribute("aria-expanded",String(opening));
});
document.getElementById("historyBack").addEventListener("click",closeHistory);
/* ---- promo code: default / applied / error states ---- */
function showPromoMsg(text,kind){
const el=document.getElementById("promoMsg");
el.hidden=false;el.textContent=text;
el.classList.toggle("error",kind==="error");
el.classList.toggle("ok",kind==="ok");
}
document.getElementById("promoApply").addEventListener("click",()=>{
if(!detail)return;
const input=document.getElementById("promoInput");
const code=input.value.trim().toUpperCase();
if(!code){input.classList.add("error");showPromoMsg("Enter a promo code to continue.","error");return;}
if(!PROMO_CODES[code]){input.classList.add("error");showPromoMsg(`"${code}" is not a valid promo code.`,"error");return;}
if((detail.base.discount||0)>.005){input.classList.add("error");showPromoMsg("A promotion is already part of the confirmed booking.","error");return;}
if(detail.promo===code){showPromoMsg("This code is already applied.","error");return;}
input.classList.remove("error");
detail.promo=code;
showPromoMsg("Applied: "+PROMO_CODES[code].label,"ok");
refresh();
});
document.getElementById("promoInput").addEventListener("input",e=>{
e.target.classList.remove("error");
document.getElementById("promoMsg").hidden=true;
});
function discardAllStagedChanges(){
if(!detail)return;
document.querySelector(".ov-changes-menu")?.removeAttribute("open");
const previewWasOpen=mod.previewOpen;
clearDetailDraft(detail.b.id);
/* Restore complete immutable guest snapshots, including anyone removed from
   the working roster. Stable guest IDs prevent positional data from shifting. */
detail.guests=(detail.base.guests||[]).map(cloneGuestState);
detail.cabinPlan.forEach((c,i)=>{c.code=detail.base.cabinCodeBy[i];c.room=detail.base.roomBy[i];});
resetPicker();mod.editCabin=-1;mod.addGuestCabin=-1;mod.addGuestStep=0;mod.newGuestDraft=null;mod.addGuestError=false;mod.removeGuestIdx=-1;mod.guestSearch="";mod.addGuestSuppSearch="";mod.addGuestSuppCat=null;
mod.suppSearch="";mod.suppCat=null;mod.suppExpanded=null;mod.selectedSuppsCollapsed=true;mod.currentSuppExpanded=null;mod.pkgExpanded=null;mod.pkgSectionOpen=false;
mod.impactCollapsedSectionKeys=new Set(IMPACT_SECTION_KEYS);
mod.reviewSupplementExpandedIds.clear();
detail.promo=null;detail.selected=null;
const input=document.getElementById("promoInput");
input.value="";input.classList.remove("error");
document.getElementById("promoMsg").hidden=true;
refresh();
if(previewWasOpen)closeModificationPreview();
}
document.getElementById("resetChanges").addEventListener("click",discardAllStagedChanges);
/* Cancellation renders in either the legacy dialog or the new routed page.
   Both surfaces share one event controller so policy, validation and refund
   calculations cannot drift between the two entry points. */
const cancelModal=document.getElementById("cancelModal");
const cancellationPageContent=document.getElementById("cancellationPageContent");
function handleCancellationClick(e){
if(!cx)return;
const guestRestore=e.target.closest("[data-guestrestore]");
if(guestRestore&&cx.entry==="partial"&&cx.scope===null){
restorePartialGuestCancellation(+guestRestore.dataset.guestrestore);
return;
}
const cancelGuest=e.target.closest("[data-cancelguest]");
if(cancelGuest){
if(cancelGuest.disabled)return;
stagePartialGuestCancellation(+cancelGuest.dataset.cancelguest);
return;
}
const fareExpand=e.target.closest("[data-expand-fare]");
if(fareExpand){
openFareTableModal(+fareExpand.dataset.expandFare,null,null,fareExpand.dataset.fareContext||"partialCancellation");
return;
}
if(e.target.closest("[data-cxchooseanother]")){backToPartialGuestSelection();return;}
if(e.target.closest("[data-cxpartialcontinue]")){openPartialSupplementAllocation();return;}
if(e.target.closest("[data-cxsuppback]")){backToPartialGuestSelection();return;}
if(e.target.closest("[data-cxsuppbulkassign]")){openPartialSupplementBulkAssignModal();return;}
const supplementChange=e.target.closest("[data-cxsuppchange]");
if(supplementChange){
const sourceId=supplementChange.dataset.cxsuppsource;
const suppId=supplementChange.dataset.cxsuppdest;
openPartialSupplementAssignModal(sourceId,suppId);return;
}
const supplementRemove=e.target.closest("[data-cxsuppremove]");
if(supplementRemove){
const sourceId=supplementRemove.dataset.cxsuppsource;
const suppId=supplementRemove.dataset.cxsuppdest;
const allocation=ensurePartialSupplementAllocations().find(item=>item.sourceGuestId===sourceId);
const line=allocation?.lines.find(item=>item.suppId===suppId);
if(line){
line.destination="remove";
cx.supplementDecisionModes[`${sourceId}::${suppId}`]="remove";
}
cx.supplementDecisionOpen=null;cx.supplementDecisionDraft=null;cx.confirmRemoveAll=false;
renderCancellationWithFocus(`[data-cxsuppundo][data-cxsuppsource="${CSS.escape(sourceId)}"][data-cxsuppdest="${CSS.escape(suppId)}"]`);return;
}
const supplementUndo=e.target.closest("[data-cxsuppundo]");
if(supplementUndo){
const sourceId=supplementUndo.dataset.cxsuppsource;
const suppId=supplementUndo.dataset.cxsuppdest;
const allocation=ensurePartialSupplementAllocations().find(item=>item.sourceGuestId===sourceId);
const line=allocation?.lines.find(item=>item.suppId===suppId);
const primary=activeGuests(detail)[0]||null;
if(line&&primary&&partialAllocationRecipients(detail,line).some(guest=>guest.guestId===primary.guestId)){
line.destination=primary.guestId;
cx.supplementDecisionModes[`${sourceId}::${suppId}`]="primary";
}
cx.supplementDecisionOpen=null;cx.supplementDecisionDraft=null;cx.confirmRemoveAll=false;
renderCancellationWithFocus(`[data-cxsuppchange][data-cxsuppsource="${CSS.escape(sourceId)}"][data-cxsuppdest="${CSS.escape(suppId)}"]`);return;
}
if(e.target.closest("[data-cxsuppprimary]")){
const allocations=ensurePartialSupplementAllocations(),primary=activeGuests(detail)[0]||null;
cx.supplementDecisionModes={};cx.supplementDecisionOpen=null;cx.supplementDecisionDraft=null;cx.confirmRemoveAll=false;
allocations.forEach(allocation=>allocation.lines.forEach(line=>{
const eligible=primary&&partialAllocationRecipients(detail,line).some(guest=>guest.guestId===primary.guestId);
line.destination=eligible?primary.guestId:null;
cx.supplementDecisionModes[`${allocation.sourceGuestId}::${line.suppId}`]=eligible?"primary":"other";
}));
renderCancellationWithFocus("#partialSupplementAllocationTitle");return;
}
if(e.target.closest("[data-cxsuppremoveall]")){
openRemoveAllSupplementsModal();return;
}
if(e.target.closest("[data-cxsuppcontinue]")){
if(!partialCancellationDecisionReady(cancelQuote(),ensurePartialSupplementAllocations()))return;
beginPartialGuestCancellation();return;
}
if(e.target.closest("[data-cxreviewback]")){returnToPartialSupplementAllocation();return;}
if(e.target.closest("[data-cxclose]")){closeCancellationExperience();return;}
if(e.target.closest("[data-cxnext]")){cx.step=1;renderCancellationWithFocus();return;}
if(e.target.closest("[data-cxfullreview]")){
if(cx.entry!=="full"||cx.presentation!=="page"||!cancelStep1Ready()||!cancelDestReady(cancelQuote()))return;
cx.step=1;renderCancellationWithFocus("#cancellationPageTitle");return;
}
if(e.target.closest("[data-cxback]")){
cx.step=cx.entry==="full"&&cx.presentation==="page"?Math.max(0,(Number(cx.step)||0)-1):0;
renderCancellationWithFocus();return;
}
if(e.target.closest("[data-cxconfirm]")){commitCancel();return;}
if(e.target.closest("[data-cxnoshow]")){cx.noShow=!cx.noShow;renderCancellationWithFocus("[data-cxnoshow]");return;}
if(e.target.closest("[data-cxkeepins]")){cx.keepInsurance=!cx.keepInsurance;renderCancellationWithFocus("[data-cxkeepins]");return;}
if(e.target.closest("[data-cxoverride]")){
cx.overrideOn=!cx.overrideOn;
/* Seeding the field with the calculated figure makes the override an edit
   rather than a blank slate, so a mistyped amount is easier to spot. */
if(cx.overrideOn){cx.overrideAmt=cancelQuote().capped.toFixed(2);cx.overrideConfirmed=false;}
else{cx.overrideAmt="";cx.overrideReason="";cx.overrideConfirmed=false;}
renderCancellationWithFocus(cx.overrideOn?"#cancellationOverrideAmount":"[data-cxoverride]");return;
}
if(e.target.closest("[data-cxconfirmoverride]")){
if(!cancelOverrideDraftReady(cancelQuote()))return;
cx.overrideConfirmed=true;syncCancelMoney();return;
}
const src=e.target.closest("[data-cxsrc]");
if(src){cx.source=src.dataset.cxsrc;renderCancellationWithFocus(`[data-cxsrc="${cx.source}"]`);return;}
if(e.target.closest("[data-cxwalletcheck]")){
const activeCancellation=cx;
cx.walletState="checking";renderCancellationWithFocus("[data-cxwalletcheck]");
const want=walletFor(detail.b).id;
setTimeout(()=>{
if(cx!==activeCancellation)return;
cx.walletState=cx.walletId.trim().toUpperCase()===want?"valid":"invalid";
renderCancellationWithFocus(cx.walletState==="valid"?"[data-cxwalletreset]":"#cancellationWalletId");
},450);
return;
}
if(e.target.closest("[data-cxwalletlookup]")){
cx.walletId=walletFor(detail.b).id;cx.walletState="valid";renderCancellationWithFocus("[data-cxwalletreset]");return;
}
if(e.target.closest("[data-cxwalletreset]")){
cx.walletState="idle";cx.walletId="";cx.walletCreated=null;renderCancellationWithFocus("#cancellationWalletId");return;
}
if(e.target.closest("[data-cxwalletcreate]")){
const seed=seedOf("newwallet|"+detail.b.id);
cx.walletCreated="MVW-"+(100000+seed%900000);
cx.walletId=cx.walletCreated;cx.walletState="valid";renderCancellationWithFocus("[data-cxwalletreset]");return;
}
if(e.target.closest("[data-cxsplitrest]")){
const q=cancelQuote();
cx.splitWallet=Math.max(0,q.refund-money(cx.splitCard)).toFixed(2);
renderCancellationWithFocus("[data-cxsplitrest]");return;
}
}
function handleCancellationChange(e){
if(!cx)return;
if(e.target.closest("[data-cxreason]")){cx.reason=e.target.value;renderCancellationWithFocus("#cancellationReason");}
}
function handleCancellationKeydown(e){
const source=e.target.closest("[data-cxsrc]");
if(!source||!(e.key==="ArrowRight"||e.key==="ArrowDown"||e.key==="ArrowLeft"||e.key==="ArrowUp"||e.key==="Home"||e.key==="End"))return;
e.preventDefault();
const current=Math.max(0,CX_SOURCES.findIndex(item=>item.id===source.dataset.cxsrc));
const next=e.key==="Home"?0:e.key==="End"?CX_SOURCES.length-1
:(e.key==="ArrowRight"||e.key==="ArrowDown")?(current+1)%CX_SOURCES.length
:(current-1+CX_SOURCES.length)%CX_SOURCES.length;
cx.source=CX_SOURCES[next].id;
renderCancellationWithFocus(`[data-cxsrc="${cx.source}"]`);
}
/* Text and amount inputs update state in place. A full re-render here would
   drop the caret while an agent is typing. */
function handleCancellationInput(e){
if(!cx)return;
const t=e.target;
if(t.matches("[data-cxnote]")){cx.note=t.value;syncCancelMoney();return;}
if(t.matches("[data-cxovamt]")){cx.overrideAmt=t.value;cx.overrideConfirmed=false;syncCancelMoney();return;}
if(t.matches("[data-cxovreason]")){cx.overrideReason=t.value;cx.overrideConfirmed=false;syncCancelMoney();return;}
if(t.matches("[data-cxpayee]")){cx.chequePayee=t.value;if(cx.entry==="partial")cx.chequePayeeTouched=true;syncCancelMoney();return;}
if(t.matches("[data-cxaddr]")){cx.chequeAddr=t.value;if(cx.entry==="partial")cx.chequeAddrTouched=true;syncCancelMoney();return;}
if(t.matches("[data-cxsplitcard]")){cx.splitCard=t.value;syncCancelMoney();return;}
if(t.matches("[data-cxsplitwallet]")){cx.splitWallet=t.value;syncCancelMoney();return;}
if(t.matches("[data-cxwalletid]")){
cx.walletId=t.value;
if(cx.walletState!=="idle")cx.walletState="idle";
const root=e.currentTarget;
const st=root.querySelector("[data-cxwalletstatus]");
if(st)st.innerHTML=cxWalletStatusHtml();
const btn=root.querySelector("[data-cxwalletcheck]");
if(btn)btn.disabled=!cx.walletId.trim();
t.classList.remove("error");
syncCancelMoney();
}
}
[cancelModal,cancellationPageContent].forEach(root=>{
root.addEventListener("click",handleCancellationClick);
root.addEventListener("change",handleCancellationChange);
root.addEventListener("input",handleCancellationInput);
root.addEventListener("keydown",handleCancellationKeydown);
});
cancellationPageContent.addEventListener("toggle",e=>{
const disclosure=e.target.closest?.("[data-cximpactguests]");
if(disclosure&&cx?.entry==="partial")cx.impactGuestsOpen=disclosure.open;
const cancellationInfo=e.target.closest?.("[data-cxcancellationinfo]");
if(cancellationInfo&&cx?.entry==="partial"){
cx.cancellationInfoOpen=cancellationInfo.open;
if(cancellationInfo.open){
const supplementSection=cancellationPageContent.querySelector("[data-cxsupplementsection]");
if(supplementSection?.open)supplementSection.open=false;
cx.supplementSectionOpen=false;
}
}
const supplementSection=e.target.closest?.("[data-cxsupplementsection]");
if(supplementSection&&cx?.entry==="partial"){
cx.supplementSectionOpen=supplementSection.open;
if(supplementSection.open){
const infoSection=cancellationPageContent.querySelector("[data-cxcancellationinfo]");
if(infoSection?.open)infoSection.open=false;
cx.cancellationInfoOpen=false;
}
}
const allocationSource=e.target.closest?.("[data-cxallocationsource]");
if(allocationSource&&cx?.entry==="partial"){
if(!cx.supplementGroupsOpen)cx.supplementGroupsOpen={};
cx.supplementGroupsOpen[allocationSource.dataset.cxallocationsource]=allocationSource.open;
}
},true);
const removeAllSupplementsModal=document.getElementById("removeAllSupplementsModal");
removeAllSupplementsModal.addEventListener("click",e=>{
if(e.target.closest("[data-cxsuppremoveallconfirm]")){confirmRemoveAllSupplements();return;}
if(e.target.closest("[data-cxsuppremoveallcancel]"))closeRemoveAllSupplementsModal();
});
const partialSupplementAssignModal=document.getElementById("partialSupplementAssignModal");
partialSupplementAssignModal.addEventListener("click",e=>{
if(e.target.closest("[data-cxsuppbulkconfirm]")){confirmPartialSupplementBulkAssignment();return;}
if(e.target.closest("[data-cxsuppmodalconfirm]")){confirmPartialSupplementAssignment();return;}
if(e.target.closest("[data-cxsuppmodalcancel]"))closePartialSupplementAssignModal();
});
partialSupplementAssignModal.addEventListener("change",e=>{
const bulkRecipient=e.target.closest("[data-cxsuppbulkrecipient]");
if(bulkRecipient&&cx){
cx.supplementBulkDraft=bulkRecipient.value;
const confirm=partialSupplementAssignModal.querySelector("[data-cxsuppbulkconfirm]");
if(confirm)confirm.disabled=false;
return;
}
const recipient=e.target.closest("[data-cxsupprecipient]");
if(!recipient||!cx)return;
cx.supplementDecisionDraft=recipient.value;
const confirm=partialSupplementAssignModal.querySelector("[data-cxsuppmodalconfirm]");
if(confirm)confirm.disabled=false;
});
document.getElementById("sendEmailBtn").addEventListener("click",()=>alert("Send booking email clicked"));
document.getElementById("itineraryBtn").addEventListener("click",openItineraryModal);
document.getElementById("itineraryModal").addEventListener("click",e=>{if(e.target.closest("[data-itinerary-close]"))closeItineraryModal();});
const paymentMenuBtn=document.getElementById("paymentMenuBtn");
const paymentMenu=document.getElementById("paymentMenu");
function setPaymentMenu(open){paymentMenu.classList.toggle("open",open);paymentMenuBtn.setAttribute("aria-expanded",String(open));}
paymentMenuBtn.addEventListener("click",e=>{e.stopPropagation();setPaymentMenu(!paymentMenu.classList.contains("open"));});
document.querySelectorAll(".ov-payment-menu-item").forEach(item=>{
item.addEventListener("click",()=>{
setPaymentMenu(false);
});
});
document.addEventListener("click",e=>{if(!e.target.closest(".ov-payment-dropdown"))setPaymentMenu(false);});
document.addEventListener("click",e=>{
if(mod.guestMenu&&!e.target.closest(".mf-guest-pill")){mod.guestMenu=null;renderModify();}
});
document.getElementById("fareTableModal").addEventListener("click",e=>{
if(e.target.closest("[data-fare-table-close]")){closeFareTableModal();return;}
const cancelGuest=e.target.closest("[data-cancelguest]");
if(cancelGuest){
if(cancelGuest.disabled)return;
const guestIdx=+cancelGuest.dataset.cancelguest;
closeFareTableModal();
stagePartialGuestCancellation(guestIdx);
return;
}
const guestRestore=e.target.closest("[data-guestrestore]");
if(guestRestore&&mod.expandedFareContext==="partialCancellation"){
const guestIdx=+guestRestore.dataset.guestrestore;
closeFareTableModal();
restorePartialGuestCancellation(guestIdx);
return;
}
if(guestRestore){restoreGuestRemoval(+guestRestore.dataset.guestrestore);return;}
const ngc=e.target.closest("[data-newguestcabin]");
if(ngc){
const cabinIdx=+ngc.dataset.newguestcabin;
closeFareTableModal();
openAddGuestModal(cabinIdx);
return;
}
const gr=e.target.closest("[data-guestremove]");
if(gr){
if(gr.disabled)return;
const guestIdx=+gr.dataset.guestremove;
const cabinIdx=mod.expandedFareCabin;
closeFareTableModal();
openNewGuestRemoval(guestIdx,cabinIdx,`#mf-fare-table-${cabinIdx} [data-guestremove="${guestIdx}"], #mf-fare-table-${cabinIdx} [data-expand-fare="${cabinIdx}"]`);
}
});
document.addEventListener("click",e=>{
const reviewSave=e.target.closest("[data-review-save]");
if(reviewSave){if(!reviewSave.disabled)document.getElementById("mfNext")?.click();return;}
const reviewDiscard=e.target.closest("[data-review-discard]");
if(reviewDiscard){discardAllStagedChanges();return;}
const groupToggle=e.target.closest("[data-review-group-toggle]");
if(groupToggle){
const panel=document.getElementById(groupToggle.getAttribute("aria-controls"));
if(!panel)return;
const opening=groupToggle.getAttribute("aria-expanded")!=="true";
groupToggle.setAttribute("aria-expanded",String(opening));
groupToggle.setAttribute("aria-label",`${opening?"Collapse":"Expand"} ${groupToggle.querySelector(".mf-review-change-group-title")?.textContent||"change details"}`);
panel.hidden=!opening;
groupToggle.closest(".mf-review-change-group")?.classList.toggle("is-collapsed",!opening);
return;
}
const supplementView=e.target.closest("[data-review-supplement-view]");
if(supplementView){
const review=supplementView.closest(".mf-review-supplement-review");
if(!review)return;
const selected=supplementView.dataset.reviewSupplementView;
review.querySelectorAll("[data-review-supplement-view]").forEach(button=>button.setAttribute("aria-pressed",String(button===supplementView)));
review.querySelectorAll("[data-review-supplement-panel]").forEach(panel=>{panel.hidden=panel.dataset.reviewSupplementPanel!==selected;});
return;
}
const itemToggle=e.target.closest("[data-review-item-toggle]");
if(!itemToggle)return;
const panel=document.getElementById(itemToggle.getAttribute("aria-controls"));
if(!panel)return;
const opening=itemToggle.getAttribute("aria-expanded")!=="true";
const title=itemToggle.querySelector(".ov-change-item-label")?.textContent||"change";
if(opening){
itemToggle.closest(".mf-review-change-group")?.querySelectorAll('[data-review-item-toggle][aria-expanded="true"]').forEach(openToggle=>{
if(openToggle===itemToggle)return;
const openPanel=document.getElementById(openToggle.getAttribute("aria-controls"));
const openTitle=openToggle.querySelector(".ov-change-item-label")?.textContent||"change";
openToggle.setAttribute("aria-expanded","false");
openToggle.setAttribute("aria-label",`Expand details for ${openTitle}`);
if(openPanel)openPanel.hidden=true;
openToggle.closest(".has-collapsible-detail")?.classList.add("is-collapsed");
});
}
itemToggle.setAttribute("aria-expanded",String(opening));
itemToggle.setAttribute("aria-label",`${opening?"Collapse":"Expand"} details for ${title}`);
panel.hidden=!opening;
itemToggle.closest(".has-collapsible-detail")?.classList.toggle("is-collapsed",!opening);
});
document.getElementById("modPreviewModal").addEventListener("click",e=>{
if(e.target.closest("[data-mod-discard]")){
discardAllStagedChanges();return;
}
if(e.target.closest("[data-mod-save]")){
if(e.target.closest("[data-mod-save]").disabled)return;
if(commitModification()){closeModificationPreview();closeModify();}return;
}
const toggle=e.target.closest("[data-review-supplement-toggle]");
if(toggle){
const host=e.currentTarget,panel=document.getElementById(toggle.getAttribute("aria-controls"));
if(!panel||!host.contains(panel))return;
const opening=toggle.getAttribute("aria-expanded")!=="true";
const key=toggle.dataset.reviewSupplementToggle;
toggle.setAttribute("aria-expanded",String(opening));
panel.hidden=!opening;
toggle.closest(".is-supplement-accordion")?.classList.toggle("is-collapsed",!opening);
const state=toggle.querySelector("[data-review-supplement-state]");
if(state)state.textContent=opening?"Hide details":"Show details";
if(!(mod.reviewSupplementExpandedIds instanceof Set))mod.reviewSupplementExpandedIds=new Set();
if(opening)mod.reviewSupplementExpandedIds.add(key);
else mod.reviewSupplementExpandedIds.delete(key);
return;
}
if(e.target.closest("[data-mod-preview-close]"))closeModificationPreview();
});
document.addEventListener("keydown",e=>{
if(trapActiveDialogFocus(e))return;
if(e.key==="Escape"){
if(!cancellationMenu.hidden){setCancellationMenu(false);cancellationBtn.focus();return;}
if(paymentMenu.classList.contains("open")){setPaymentMenu(false);paymentMenuBtn.focus();return;}
if(!document.getElementById("itineraryModal").hidden){closeItineraryModal();return;}
if(!document.getElementById("modPreviewModal").hidden){closeModificationPreview();return;}
if(!document.getElementById("fareTableModal").hidden){closeFareTableModal();return;}
if(!document.getElementById("supplementAssignModal").hidden){closeSupplementAssignModal();return;}
if(!document.getElementById("partialSupplementAssignModal").hidden){closePartialSupplementAssignModal();return;}
if(!document.getElementById("removeAllSupplementsModal").hidden){closeRemoveAllSupplementsModal();return;}
if(cx?.presentation==="modal"){closeCancelModal();return;}
if(mod.guestMenu){mod.guestMenu=null;renderModify();return;}
if(mod.addGuestCabin>=0){closeAddGuestModal();return;}
if(mod.removeGuestIdx>=0){mod.removeGuestIdx=-1;renderModify();return;}
if(!document.getElementById("roomModal").hidden){
if(mod.roomCategoryOpen){mod.roomCategoryOpen=false;renderRoomModal();focusRoomControl("[data-room-category-toggle]");return;}
closeRoomModal();return;
}
if(document.getElementById("viewModify").classList.contains("active")){closeModify();return;}
/* Full-page workflows use their explicit Back action. Escape is reserved for
   transient surfaces so entered cancellation details cannot disappear. */
if(document.getElementById("viewCancellation").classList.contains("active"))return;
if(document.getElementById("viewHistory").classList.contains("active")){closeHistory();return;}
if(document.getElementById("viewDetail").classList.contains("active"))closeDetail();
}
});
render();
setTimeout(updateScrollHint,50);

/* cabin card accordion: #sCabinCards' contents are replaced wholesale on every
   render, so bind once here via delegation rather than re-attaching per card */
document.getElementById("sCabinCards").addEventListener("click",e=>{
	const btn=e.target.closest(".ov-cc-accordion-btn");
	if(!btn)return;
	e.preventDefault();
	const card=btn.closest(".ov-cabin-card");
	const isCollapsed=card.classList.toggle("collapsed");
	btn.setAttribute("aria-expanded",!isCollapsed);
	const panel=document.getElementById(btn.getAttribute("aria-controls"));
	if(panel)panel.hidden=isCollapsed;
	const cabinIndex=Number(card.dataset.cabinIndex);
	if(isCollapsed)expandedCabinIndexes.delete(cabinIndex);
	else expandedCabinIndexes.add(cabinIndex);
});
