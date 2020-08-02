console.log("Starting..");

// Finds a random number using 0 as min and arraylength - 1 as max. 
// This is to reflect the indexes. Ex. (1, 2 will actually be indexes 0, 1.)
function getRandomNumber(min, max)
{
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

// Creates the array of numbers.
function createArrayOfNumbers(start, end)
{
    let myArray = [];
    
    for (let i = start; i <= end; i++) 
        {
            myArray.push(i);
        }
    
    return myArray;
}

// Set up connection to Twitter API via Twit package:
var Twit = require('twit');

var config = require('./config');
// console.log(config); 
var T = new Twit(config);
var fs = require('fs');

let numbersArray = createArrayOfNumbers(1, 365);

//*****************************************//
// Populate array with images/gifs here! 
//*****************************************//

// tweet();
// Run Tweet function once a day (in milliseconds):
setInterval(tweet, 86400000); 

function tweet() {

    var countdown = numbersArray.length;
    if (numbersArray.length == 0)
            {
                console.log("No more random numbers.");
                return;
            } 
        else
            {
                console.log(countdown);
                // Gets a randomIndex to choose from, creates a variable of that number's actual value, and splices it from array. 
                let randomIndex = getRandomNumber(0, numbersArray.length - 1);
                let randomNumber = numbersArray[randomIndex];
                numbersArray.splice(randomIndex, 1);
                
                
var b64content = fs.readFileSync(randomNumber, { encoding: 'base64' })

// Upload the media (DOESN'T post yet)
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // Assign alternate text and collect media ID:
  var mediaIdStr = data.media_id_string
  var altText = " ";
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

  // Actually post the tweet:
  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
    console.log("Run successful.");
   // console.log(randomNumber); 
    
    var text = countdown + ' days until ________!';
      var params = { status: text, media_ids: [mediaIdStr] }
      
      T.post('statuses/update', params, function (err, data, response) {
        console.log(data) })
        countdown--;
    } else {
         console.log("Didn't work."); } 
  })
        })
    }
} 