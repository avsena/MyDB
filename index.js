
const database = require("./database/db.js");
const usertable = require("./database/user.js")
console.log('Começou!');
database.connect;
let user = { login: "dinho", senha: "la123" }
usertable.insertUser(user).then(resp => {
    console.log(resp)
}).catch(err => {
    console.log(err);
});

