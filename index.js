studentsUtils = require("./students");
const chalk = require("chalk");
const yargs = require("yargs");

// add, remove, list, read

// Add a student
yargs.command({
  command: "add",
  description: "adding a student",
  builder: {
    name: {
      describe: "takes in students fullname",
      demandOption: true,
      type: "string",
    },
    class: {
      describe: "takes in students class",
      demandOption: true,
      type: "number",
    },
    age: {
      describe: "takes in students age",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log("Adding student....");
    studentsUtils.addStudents(argv.name, argv.age, argv.class);
  },
});

// Remove a student
yargs.command({
  command: "remove",
  description: "Removing a student",
  builder: {
    name: {
      describe: "takes in students fullname",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    studentsUtils.removeStudent(argv.name);
  },
});

// Listing all students
yargs.command({
  command: "list",
  description: "Listing all students",
  handler: function () {
    console.log("Listing all students");
    studentsUtils.listStudents();
  },
});

// Reading a student
yargs.command({
  command: "read",
  description: "Reading a student",
  builder: {
    name: {
      describe: "takes in students fullname",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Reading a student");
    studentsUtils.readStudent(argv.name);
  },
});
yargs.argv;

// studentsUtils.getStudents();
