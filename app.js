//api key = c826384687b64b5f9648b6c2123392a1

//let newsURL = "https://agile-meadow-78327.herokuapp.com/newsapi.org/v2/top-headlines?country=us&apiKey=c826384687b64b5f9648b6c2123392a1";
let newsURL ="https://gateway.marvel.com:443/v1/public/comics?apikey=d748f4b2c61c248ec65d5cdc02c1fb61";
fetch(newsURL)
     .then(response=> response.json())
     .then(result=>{
         console.log(result);
         let data = result;
         //now iterate over the data
         Object.keys(data).forEach((item,key)=>{
                console.log(data);
         });
     });
    

