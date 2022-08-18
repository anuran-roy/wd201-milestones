const fs = require("fs");

write = async (fn = () => {}) =>
  await fs.writeFile(
    "sample.txt",
    "Hello World. Welcome to Node.js File System module.",
    function (err) {
      fn();
      if (err) {
        throw err;
      }
      console.log("File created successfully.");
    }
  );

appendData = async (fn = () => {}) =>
  await fs.appendFile(
    "sample.txt",
    "Hello World. Welcome to Node.js File System module",
    function (err) {
      fn();
      if (err) {
        throw err;
      }
      console.log("Data appended successfully.");
    }
  );

rename = async (fn = () => {}) =>
  await fs.rename("sample.txt", "renamed.txt", function (err) {
    fn();
    if (err) {
      throw err;
    }
    console.log("File renamed successfully.");
  });

remove = async (fn = () => {}) =>
  await fs.unlink("renamed.txt", function (err) {
    fn();
    if (err) {
      throw err;
    }
    console.log("File deleted successfully.");
  });

write();
appendData();
rename();
remove();
