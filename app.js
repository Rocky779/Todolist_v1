const express = require('express');
const https = require('node:https');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
const _ = require("lodash");

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});

const itemsSchema = new mongoose.Schema({
    name: {type: String, 
           required:[true,"Please check your data entry, no name specified"]
        }
    }
);

const Item = mongoose.model("Item", itemsSchema);
const item1 = new Item({
    name: "Buy food"
});
const item2 = new Item({
    name: "Cook food"
});
const item3 = new Item({
    name: "Eat food"
});
const defaultItems = [item1,item2,item3];
const listSchema = {
    name : String, items : [itemsSchema]
};

const List = mongoose.model("List", listSchema);

app.get('/', function (req, res) {
    Item.find() 
    .then(function(foundItems){
        if (foundItems.length === 0){
            Item.insertMany(defaultItems) 
            .then(function(){
                console.log("Successfully saved all the items to DB");
            })
            .catch(function(err){
                console.log(err);
            });
            res.redirect("/");
        }
        else{res.render("list",{listTitle:"Today" ,newListItems:foundItems});}
    })
});
app.post('/',function(req,res){
    const itemName = req.body.Item;
    const listName = req.body.list;
    const item = new Item({
        name: itemName
    });
    if (listName === "Today"){
        item.save();
        res.redirect("/")
    }
    else{
        List.findOne({name:listName})
        .then(function(foundList){
            foundList.items.push(item);
            foundList.save();
            res.redirect("/"+listName);
        })
        .catch(function(err){
            console.log(err);
        });

    }
   
});
app.post('/delete',function(req,res){
    const checkeditemid = req.body.checkbox;
    const listName1 = req.body.listNamef;
    if(listName1 === "Today"){
        Item.findByIdAndRemove(checkeditemid)
        .then(function(){
            console.log("Successfully removed item from DB");
            res.redirect("/");
        })
        .catch(function(err){
            console.log(err);
        });
    }
    else{
        List.findOneAndUpdate({name:listName1},{$pull:{items:{_id:checkeditemid}}})
        .then(function(foundList){
            //console.log("Successfully removed item from DB");
            res.redirect("/"+listName1);
        })
        .catch(function(err){
            console.log(err);
        });
    }

    
   
});

 app.get("/:customListName",function(req,res){
     const customListName = _.capitalize([string=req.params.customListName]);
     List.findOne({name:customListName})
     .then(function(findList){
         if(!findList){
            const list = new List({
         name:customListName,
         items :defaultItems
 
     });
     list.save(); 
     res.redirect("/"+customListName);
         }
         else{
             res.render("list",{listTitle:findList.name ,newListItems:findList.items});
         }
        
     })
     .catch(function(err){
         console.log(err);
     });
 });

app.get('/about', function (req, res) {
    res.render("about");
});

app.listen(3000,function(){
    console.log("running on server 3000");
});