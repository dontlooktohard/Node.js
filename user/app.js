const yargs = require("yargs");
const notes = require("./users.js");

yargs.command({
  command: "add",
  described: "add a new user",
  builder: {
    email: {
      described: "User Email",
      demandOption: true,
      type: "string",
    },
    name: {
      described: "User Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.email, argv.name);
  },
});

yargs.command({
  command: "remove",
  described: "remove a User",
  builder: {
    email: {
      described: "User Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.email);
  },
});

yargs.command({
  command: "list",
  described: "Users List",
  handler() {
    notes.notes();
  },
});

yargs.command({
  command: "read",
  described: "read the note",
  builder: {
    email: {
      described: "User Name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.specificNote(argv.email);
  },
});

yargs.command({
  command: "update",
  described: "update the note",
  builder: {
    email: {
      described: "User Email",
      demandOption: true,
      type: "string",
    },
    newEmail: {
      described: "User Name",
      demandOption: false,
      type: "string",
    },
    newName: {
      described: "User Name",
      demandOption: false,
      type: "string",
    },
  },
  handler(argv) {
    notes.update(argv.email, argv.newEmail, argv.newName);
  },
});

yargs.parse();
