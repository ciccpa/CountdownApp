# CountdownApp
## Twitter countdown bot that posts once a day for 365 days. 
It can be used for various purposes — counting down to the dates of films, videogames,
sporting events, and so on. Can be altered to count down from any number of days. Code was 
written to be posted along with a randomly selected gif/image along with every tweet.

This was created using JavaScript/Node.js, and "Twit" package via NPM. 
This was done to help learn building with Node.js and to also get familiar with Twitter API. 

## To run this application, you will need to do the following:

### 1. Install node.js
### 2. Create package.json file by executing the command: 

``` npm init``` 

### 3. Install Twit package by executing: 

``` npm install twit —save ```

### 4. Create config.js file with YOUR personal Twitter API key. 
Instructions [here](https://developer.twitter.com/en/docs/labs/filtered-stream/quick-start).
I have included my files as an example of what they should look like. 

### 5. A folder of gifs/images (you choose how many you want) to be randomly selected. 
Gifs/images do NOT repeat, once a gif has been tweeted, it will cycle through until there are none left. ("No random numbers.")
Media attachments not required to get this project to work. Refer to twit package details for more: https://www.npmjs.com/package/twit 

When ready, the project can be deployed to a server such as Heroku or an AWS.
You will only need to run the application once, if using the following commands: 

``` node bot.js``` 
``` forever start```

Additionally, you can stop the bot from running using:
`` forever stopall ```
