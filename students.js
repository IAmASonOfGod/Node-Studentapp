const chalk = require("chalk");
const fs = require("fs");

const getStudents = () => {
  console.log("Getting Students");
};

const addStudents = (name, age, Class) => {
  const students = loadStudents();

  const duplicateData = students.filter((student) => {
    return student.name === name;
  });

  if (duplicateData.length === 0) {
    students.push({
      name: name,
      age: age,
      Class: Class,
    });

    saveStudents(students);
    console.log(chalk.green("Added a student"));
  } else {
    console.log("Record already in system");
  }
};

const removeStudent = (name) => {
  const students = loadStudents();

  const newStudents = students.filter((student) => {
    return name !== student.name;
  });

  saveStudents(newStudents);

  if (students.length > newStudents.length) {
    console.log(chalk.green(" Removed " + name));
  } else {
    console.log(chalk.red("No such student found"));
  }
};

const listStudents = () => {
  const students = loadStudents();

  students.forEach((student) => {
    console.log(
      "Name: " +
        student.name +
        ", Class: " +
        student.class +
        "Age: " +
        student.age
    );
  });
};

const loadStudents = () => {
  try {
    const dataBuffer = fs.readFileSync("students.json");
    const JSONdata = JSON.parse(dataBuffer.toString());
    return JSONdata;
  } catch (e) {
    return [];
  }
};

const readStudent = (name) => {
  const students = loadStudents();

  const foundStudent = students.find((student) => {
    return student.name === name;
  });

  if (foundStudent) {
    console.log(chalk.green("Student Found"));
    console.log(
      "Name: " +
        foundStudent.name +
        ", Class: " +
        foundStudent.class +
        "Age: " +
        foundStudent.age
    );
  } else {
    console.log(chalk.red("No student found"));
  }
};

const saveStudents = (students) => {
  const stringData = JSON.stringify(students);
  fs.writeFileSync("students.json", stringData);
};

// console.log(loadStudents());

module.exports = {
  addStudents: addStudents,
  getStudents: getStudents,
  removeStudent: removeStudent,
  listStudents: listStudents,
  readStudent: readStudent,
};
