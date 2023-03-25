const fs = require('fs');

let a = fs.readdirSync(".");
// console.log(a);

let b = fs.readdir("C://", (error, files) => {
    if (error) {
        console.log(error);
    } else {
        console.log(files);
    }
});
// console.log(a);