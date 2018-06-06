const https=require('https');
const fs=require('fs');

var data=fs.readFileSync('jsonFile.json','utf8');
var options={
    'host':'api.dialogflow.com',
    'port':443,
    'path':'/v1/entities',
    'method':'POST',
    'headers':{
        'Authorization':'Bearer 27b5948c754346ac96f7e6fc3e4f969b',
        'Content-Type':'application/json'
    }
};

var postRequest= https.request(options,(res)=>{
      console.log('statusCode:', res.statusCode);
      //console.log('headers:', res.headers);

     res.on('data', (d) => {
    process.stdout.write(d);
     
})}
);

for (let i = 0; i < data.length; i++) {
    postRequest.write(data[i])
    
}
postRequest.end();