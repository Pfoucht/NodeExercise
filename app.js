const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");


const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    notes.logNote(note);
  } else {
    console.log("Note title already exists");
  }

} else if (command === 'list') {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes`);
  console.log("--");
  allNotes.forEach((note) => notes.logNote(note));

} else if (command === "read") {
  let note = notes.readNote(argv.title);
  if (note) {
    notes.logNote(note);
  } else {
    console.log("Note not found");
  }

} else if (command === "remove") {
  let deleteNote = notes.removeNote(argv.title);
  var message = deleteNote ? "Note was deleted" : "No notes with that title were found";
  console.log(message);

} else {
  console.log("No command available");
}
