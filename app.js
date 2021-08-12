const express = require("express");
const morgan = require("morgan");
const layout = require('./views/layout');
const { db, Page, User } = require('./models');
const wiki = require("./routes/wiki");
const users = require("./routes/users");
const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));


// db.authenticate()
//   .then(() => {
//     console.log('connected to the database');
//   })

app.use("/wiki", wiki);
app.use("/users", users);

app.get("/", (req, res,next) => {
  try{
  res.redirect('/wiki');
  }catch(err){
    throw err;
  }
})


const init = async () => {
  await db.sync({ force: true });
  const PORT = 3000;

  app.listen(PORT, () => {
    console.log('WORKING');
  })
}

init();

