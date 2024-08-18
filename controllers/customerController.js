const User = require("../models/customerSchema")
var moment = require('moment');


const user_index_get=(req, res) => {
    // result ==> array of objects
    User.find()
    .then((result) => {
      res.render("index", {arr:result,moment:moment});  })
    .catch((err)=>{
      console.log(err);
    })
    }


    const user_edit_get=(req, res) => {
        // result ==> array of objects
        User.findById(req.params.id)
        .then((result) => {
          res.render("user/edit", {obj:result,moment:moment});  })
        .catch((err)=>{
          console.log(err);
        })
        }

    const user_view_get= (req, res) => {
        // result ==> array of objects
        User.findById(req.params.id)
        .then((result) => {
          res.render("user/view", {obj:result,moment:moment});  })
        .catch((err)=>{
          console.log(err);
        })
        }
    const user_search_post =(req, res) => {
        const searchText = req.body.searchText.trim()
        User.find({ $or: [{ firstName: searchText }, { lastName: searchText }] })
          .then((result) => {
            res.render("user/search", { arr: result, moment: moment });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    const user_delete=(req, res) => {
        User.findByIdAndDelete(req.params.id).then(() => {
        res.redirect("/");
      }).catch((err)=>{
          console.log(err);
        });
      
      }
    const user_put= (req, res) => {
        User.findByIdAndUpdate(req.params.id,req.body).then(() => {
          res.redirect("/");
        }).catch((err)=>{
          console.log(err);
        });
      }           

    const user_add_get= (req, res) => {
        res.render("user/add")
      }
      
      
    const user_post= (req, res) => {
        User
            .create(req.body)
            .then( () => {
              res.redirect("/")
            })
            .catch( () => {
              console.log(err);
            });
        }  

        module.exports = {
            user_index_get,
            user_edit_get,
            user_view_get,
            user_search_post,
            user_delete,
            user_put,
            user_add_get,
            user_post,
          };