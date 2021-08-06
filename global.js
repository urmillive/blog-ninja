// global object

console.log(global);

setTimeout(() => {
  console.log("in time out");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("in time interval");
}, 1000);

console.log(__dirname);
console.log(__filename);
