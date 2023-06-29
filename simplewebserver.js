var exp=require('express');
var app=exp();
//var mysql=require('mysql2');

//var con=mysql.createConnection({
  //  host:"localhost",
    //user:"root",
  //  password:"root",
  //  database:"test"
//})

//con.connect(function(err){
//    if(!err)
//    {
//        console.log("database connected");
//    }
//    else{
//        console.log("database connection failed");
//    }
//})

app.listen(9000,function(){
    console.log("server 9000 started");
})

//app.use(exp.static('scripts'));

app.get('/login',function(req,res){
    res.sendFile(__dirname+"/public/Index.html");
})

//app.get('/check',function(req,res){
  //  var usid=req.query.uid;
    //con.query("select userid from emp",function(err,result){
    //    if(!err)
    //    {
    //        flag=true;
    //        result.forEach(function(v){
    //            if(v.userid==usid)
    //           {
    //                flag=false;
//
  //              }
               /* if(result[0].userid==usid)
                    res.send("userid not available")
                else
                    res.send("userid available");*/
        
        
    //        })
            
    //        if(flag)
    //        {
    //            res.send("userid available");
    //        }
    //        else{
    //            res.send("userid not available");
    //        }
    //    }
   // })
//});
app.get('/check',(req,res)=>{
    var usid=req.query.uid;
    var pswd=req.query.pwd;
    var str="<p>Userid="+usid+"</P>";
    str+="<p>Password="+pswd+"</p>";
    res.send(str);
})