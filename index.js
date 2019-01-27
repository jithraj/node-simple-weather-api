console.log("Hi Welcome to the online world");

const request=require("request");
const yargs=require("yargs");
const geocode=require("./geocode/geocode.js");
const weather=require("./weather/weather.js");
const express=require("express");

const port=process.env.PORT || 3000;

var details={};

const app=express();

app.get("",function(req,res){
   
  if(req.query.q)
  {
    geocode.lang_lat("Pune").then(
  
      (results)=>{
        weather.report_weather(JSON.stringify(results.latitude),JSON.stringify(results.longtitude),function(errors,result){
          
          if(errors)
          {
            console.log(errors);
          }
          else
          {
             details.temparature=result;
             details.longtitude=JSON.stringify(results.longtitude);
             details.latitude=JSON.stringify(results.latitude);
             res.send(details);
          }
        });
    
        console.log(`longtitude  ${JSON.stringify(results.longtitude)}`);
        console.log(`latitude  ${JSON.stringify(results.latitude)}`);

        

        
      },
      (errorMessage)=>{
         console.log(errorMessage);
      }
    
    );
  }
  else
  {
    res.status(404).send({
      staus:"Parameter q is missing",
      error:"Send the parameter q with address of location specified"
    });

  }
  
});

app.listen(port,function(){
  console.log(`Server opens at ${port}`);
});

// const argv=yargs
//            .options({
//              address:{
//                alias:"a",
//                demandOption:true,
//                describe:"Mention your address here in the arguments"
//              }
//            })
//            .help()
//            .argv;







