const request=require("request");


var lang_lat=function(address){

 const geocode_address=encodeURIComponent(address);
 
 return new Promise((resolve,reject)=>{
    
  request(`http:\/\/www.mapquestapi.com/geocoding/v1/address?key=7KAYWP7iZ6bq7Z0TKpzEJ0y09u9Ycu72&location=${address}`, function (error,  response, body) {
    if(error)
    {
      reject("Unable to connect to online servers");
    }  
    else if(JSON.parse(body).info.messages.length===0 && response.statusCode===200)
    {
  
      resolve({
         
        latitude: JSON.parse(body).results[0]["locations"][0].displayLatLng.lat,
        
        longtitude: JSON.parse(body).results[0]["locations"][0].displayLatLng.lng
      });
    }
    else if(JSON.parse(body).info.messages.length>0)
    {
       reject("Error Please cross verify the address");
    }
    //console.log(encodeURIComponent("JITHU RAJAN")); 
  

   });

 }); 
 
//console.log(typeof(JSON.parse(body).items));

};


module.exports={
 lang_lat:lang_lat

}
