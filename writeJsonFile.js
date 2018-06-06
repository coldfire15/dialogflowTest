var https=require('https');
var fs=require('fs');


var data=[{
  "entries": [{
      "synonyms": ["apple", "red apple"],
      "value": "apple"
    },
    {
      "value": "banana"
    }
  ],
  "name": "fruit"
},
{
  "entries": [{
      "synonyms": ["tomate", "tomate rouge"],
      "value": "tomate"
    },
    {
      "value": "carotte"
    }
  ],
  "name": "légume"
}];
fs.writeFile('jsonFile.json',JSON.stringify(data),(err)=>{
  if(err) console.log(err);
});
