const fs = require("fs");

// fs.readFileSync("./docs/doc.txt", (err, data) => {
//   if (!err) {
//     console.log(data);
//   } else {
//     console.log(err);
//   }
// });

// fs.mkdir("assets", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder is created successfully");
//   }
// });

if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file deleted successfully");
    }
  });
}


