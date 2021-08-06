const fs = require("fs");
const { WriteStream } = require("tty");

const readStream = fs.createReadStream("./docs/doc.txt", { encoding: "utf8" });
const writestream = fs.createWriteStream("./docs/doc2.txt");

readStream.on("data", (chunk) => {
  console.log("== New chunk==");
  console.log(chunk);
  writestream.write("\n NEW CHUNK \n");
  writestream.write(chunk);
});





