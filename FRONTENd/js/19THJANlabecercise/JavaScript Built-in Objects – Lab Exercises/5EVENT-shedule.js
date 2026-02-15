// class EventSchedule {
//   constructor() {
//     this.events = new Map();
//   }

//   addEvent(dateStr, name) {
//     try {
//       const date = new Date(dateStr);
//       if (dateStr === "" || Number.isNaN(date.getTime())) {
//         throw new Error("Invalid date key");
//       }
//       const key = date.toISOString().slice(0, 10); // YYYY-MM-DD
//       if (this.events.has(key)) {
//         throw new Error("Duplicate event date");
//       }
//       this.events.set(key, name);
//       console.log("Added:", key, "→", name);
//     } catch (e) {
//       console.log("Error:", e.message);
//     }
//   }

//   getEvent(dateStr) {
//     const key = new Date(dateStr).toISOString().slice(0, 10);
//     console.log(this.events.get(key) ?? "No event found");
//   }

//   listEvents() {
//     for (const [date, name] of this.events) {
//       console.log(date, "→", name);
//     }
//   }
// }


// const schedule = new EventSchedule();
// schedule.addEvent("2026-01-20", "Conference");
// schedule.addEvent("2026-01-20", "Workshop"); 
// schedule.addEvent("bad-date", "Meetup");     
// schedule.getEvent("2026-01-20");
// schedule.listEvents();




{
let events = new Map();

function addEvent(dateStr, name) {
  try {
    let date = new Date(dateStr);
    if (isNaN(date)) throw  new Error("Invalid date");
    if (events.has(dateStr)) throw "Event already exists";

    events.set(dateStr, name);
  } catch (e) {
    console.error("Error:", e.message);
  }
}

addEvent("2025-03-01", "Conference");
console.log(events);
addEvent("2025-03-01", "Another Conference");
}
