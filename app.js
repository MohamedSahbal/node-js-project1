const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(express.static('public'))
var methodOverride = require('method-override')
app.use(methodOverride('_method'))
const routes = require('./routes/allRoutes')
const add = require('./routes/addCustomer')




mongoose.connect("mongodb+srv://mohamedsahbal:hz72Llb99QmxVHyL@cluster0.ofk37q8.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        app.listen(port, () => {
            console.log(`http://localhost:${port}/`)
        })
    })
    .catch((err) => { console.log(err) });

//auto Refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
})
app.use(routes)
app.use("/user/add.html",add)
