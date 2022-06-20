const express =require ('express');


const hbs =require('hbs');
const path =require ('path');
const port = process.env.PORT || 3000;
const app = express();
//console.log(__dirname);
 const  static_path=path.join(__dirname,"../public");
 //console.log(static_path);
 const template_path =path.join(__dirname,"../templates/views");
 const partial_path =path.join(__dirname,"../templates/partials");
 app.set("view engine","hbs");
 app.set("views ",template_path);
 hbs.registerPartials(partial_path)
//  app.use(express.static(staticPath));
app.use(express.static(path.join(__dirname, 'public')));
 app.get("index",(res,req)=>{
     res.render("index" );

 });
//app.get("/",(res, req)=>{ 
 //res.status(200).write("<h1> this is homepage .</h1>");
//res.send();
//})
app.listen(port,()=>{
console.log(`listion the port ${port}`);



})  