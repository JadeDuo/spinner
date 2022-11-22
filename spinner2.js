const fullAni = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ']
let time = 100;
for (let each of fullAni) {
  setTimeout(() => {
    process.stdout.write(each);
  }, time);
  time += 200;
}