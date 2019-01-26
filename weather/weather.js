const request=require("request");

var report_weather=function(latitude,longtitude,callback){

  request({
               url:`https:\/\/api.darksky.net/forecast/10d8301a05f7efecd83ed955b0bda9bb/${latitude},${longtitude}`,
               json:true
             },function(error,response,body){

                if(error)
                {
                   callback("Unable to find the temperature");
                   //console.log("Unable to find the temperature");
                }
                else if(response.statusCode===400)
                {
                   callback("Unable to PROCESS temperature");
                   //console.log("Unable to PROCESS temperature");
                }
                else
                { 
                  
                   var temp=(body.currently.temperature-32)*(5/9);    
                   //console.log(temp);
                   callback(undefined,temp);
                }
           });

};

module.exports={
  report_weather:report_weather
}
