var request=require("request");

var gecoder=(address)=>{

    return new Promise(
        (resolve,reject)=>{
           request("http:\/\/www.mapquestapi.com/geocoding/v1/address?key=7KAYWP7iZ6bq7Z0TKpzEJ0y09u9Ycu72&location=${address}",(error,response,body)=>{
          
            if(error)
            {
                console.log("Unable to connect to Google server");
            }      
            else if(response.statusCode==200)
            {
                resolve({
                    latitude: JSON.parse(body).results[0].locations[0].latLng.lat,
                    longtitude:JSON.parse(body).results[0].locations[0].latLng.lng
                });
            }
            else{
                reject("Address specified or URL given is wrong");
            }
            
           });
        }
    );

};

gecoder("Pluto").then(
 (message)=>{
    console.log(JSON.stringify(message,undefined,2));
 },
 (error)=>{
   console.log(error);
 }
);