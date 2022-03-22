//endereço do index está correto?
//index permanece dentro da pasta migrations?

const database = require("./database/db.js");
const usertable = require("./database/user.js")
console.log('ComeÃ§ou!');
database.connect;
let user = { login: "dinho", senha: "la123" }
usertable.insertUser(user).then(resp => {
    console.log(resp)
}).catch(err => {
    console.log(err);
});

