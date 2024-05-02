const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Productmodel = require("./model/Productmodel");
const Usermodel = require("./model/Usermodel");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// mongoose.connect(' mongodb://0.0.0.0/e-commerce');
// const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/e_commerce");
//api creation

app.get("/",(req,res)=>{
    res.send("Exoress App is running")
})
// image storgae engine
const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})
//creating upload endpoint for images
app.use('/images',express.static("upload/images"))
//data

app.post('/addproduct',async(req,res)=>{
    let products = await Productmodel.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product= last_product_array[0];
        id = last_product.id+1;
    }else{
        id = 1;
    }
    var product = new Productmodel ({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({success:true,
    name:req.body.name})
})
// Creating API for deleting Products
app.post('/removeproduct',async(req,res)=>{
    await Productmodel.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({success:true,
    name:req.body.name})
})
//creating api for getting all products

app.get('/allproducts',async(req,res)=>{
    let products = await Productmodel.find({});
    console.log("all products fetched");
    res.send(products)
})
app.get('/newcollection',async(req,res)=>{
    let products = await Productmodel.find({});
    let newcollection = products.slice(1).slice(-8);
    res.send(newcollection)
})
app.get('/prodctwomen',async(req,res)=>{
    let products = await Productmodel.find({category:"women"});
    let popular_in_women = products.slice(0,4);
    res.send(popular_in_women)
})

//creating middleware to  fetch user
const fetchUser = async(req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"please authentication using valid "})
    }else{
        try {
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors:"please authentication using valid token"})
        }
    }
}

app.post('/addtocart',fetchUser,async(req,res)=>{
    console.log("Added",req.body.itemId);
    let userdata = await Usermodel.findOne({_id:req.user.id});
    userdata.cartData[req.body.itemId] += 1;
    await Usermodel.findOneAndUpdate({_id:req.user.id},{cartData:userdata.cartData});
    res.send("Added")
})
app.post('/removefromcart',fetchUser,async(req,res)=>{
    console.log("Removed",req.body.itemId);
    let userdata = await Usermodel.findOne({_id:req.user.id});
    if(userdata.cartData[req.body.itemId]>0)
    userdata.cartData[req.body.itemId] -= 1;
    await Usermodel.findOneAndUpdate({_id:req.user.id},{cartData:userdata.cartData});
    res.send("Removed")
})
app.post('/getcart',fetchUser,async(req,res)=>{
    console.log("getdata"
    // ,req.body.itemId
);
    let userdata = await Usermodel.findOne({_id:req.user.id});
     res.json(userdata.cartData);
    // if(userdata.cartData[req.body.itemId]>0)
    // userdata.cartData[req.body.itemId] -= 1;
    // await Usermodel.findOneAndUpdate({_id:req.user.id},{cartData:userdata.cartData});
    // res.send("Removed")
})
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Creating endpoint for registration the user
app.post('/signup',async(req,res)=>{
    let check  = await Usermodel.findOne({emil:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"existing user found with same email address"})
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i]=0;
        
    }
    const user = new Usermodel({
        name:req.body.username,
       email:req.body.email,
        password:req.body.password,
        cartData:cart,

    })
    await user.save();
    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})
// creating endpoint for user login
app.post('/login',async(req,res)=>{
    let user = await Usermodel.findOne({email:req.body.email});
    if(user){
        const passcompare = req.body.password === user.password;
        if(passcompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,error:"Wrong password"})
        }
    }
    else{
        res.json({success:false,err:"wrong emailid"})
    }
})
app.listen(port,(err)=>{
    if(!err){
        console.log("server running on port"+port);
    }else
    {
        console.log("Error:"+err)
    }
})
