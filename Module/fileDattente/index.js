const fs = require("fs");

const users = [
    "Flovis",
    "Herve",
    "Jael",
    "Liliane",
    "Atthie",
    "Baki",
    "Zozer",
    "Moise",
    "Aime",
    "Scrum",
    "Dady",
    "Rabbi",
];

fs.writeFile("./file.txt", users.join("\n"), (err) => {
    if (err) throw err;
});

setInterval(() => {
    fs.readFile("./file.txt", "utf-8", (err, data) => {
        if (err) throw err;
        data = data.split("\n").slice(3);
        fs.writeFile("./file.txt", data.join("\n"), (err) => {
            if (err) throw err;
        });
    });
}, 2000);

