const fs = require("fs");
const path = require("path");
const fsPromises = require("fs").promises;

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(
            path.join(__dirname, "text.txt"),
            "utf8"
        );
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

fileOps();
// fs.readFile(path.join(__dirname, 'text.txt'), 'utf-8', (err, data) =>{
//     if(err) throw err;
//     console.log(data);
// })

// fs.writeFile(path.join(__dirname, 'write.txt'), 'Hello, i am the boss', (err) =>{
//     if(err) throw err;
//     console.log('the file has been wrote successfully');
// })

// fs.appendFile(path.join(__dirname, 'text.txt'), ' The append text', (err) =>{
//     if(err) throw err;
//     console.log('the file has been appended successfully');
// })
