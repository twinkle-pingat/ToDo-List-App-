const express=require("express");
const bodyParser=require("body-parser");
var app=express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todo");
const trySchema = new mongoose.Schema({
   name:String

});
const item =mongoose.model("task",trySchema);
const todo1 =new item({
   name:"create some videos"
});

const todo2 =new item({
   name:"Do exercise"
});

const todo3 =new item({
   name:"learn DSA"
});

const todo4 =new item({
   name:"Study for React JS"
});

//todo2.save();
//todo3.save();
//todo4.save();
app.get("/",function(req,res){
 item.find({},function(err,foundItems){
 if(err){
   console.log(err);
}
else{
   res.render("list",{dayej:foundItems});
}
});
});
app.post("/",function(req,res){
   const itemName =req.body.ele1;
   const todo4 = new item({
      name:itemName
   });
   todo4.save();
   res.redirect("/");
});
app.post("/delete",function(req,res){
   const checked=req.body.checkbox1;
   item.findByIdAndRemove(checked,function(err){  //remove items from todo list
      if(!err){
         console.log("deleted");
         res.redirect("/");
      }
   });
});
app.listen("5000",function(){
   console.log("server is running");
});


//var items=[];
//var example="working";
//app.get("/",function(req,res){
 //  res.render("list",{ejes : items})
//});
//app.post("/", function(req,res){
   //var item=req.body.ele1;
   //items.push(item);
  // res.redirect("/");
//})

//app.listen(4000,function(){
    //console.log("server started");
//})