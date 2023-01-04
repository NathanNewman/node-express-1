This repo is for an Springboard assement. The assement has three parts. The first part is a conceptual exercise where I answered questions in a file named conceptual.md. The second is a Node JS app that runs from the command line named urls.js. The third is a broken Express application that I had to fix.

urls.js uses fs.readFile to read a list of urls from urls.txt. Then it converts them into an array and loops through the array using axios to get the HTML code of the respective websites. Finally it creates new html files containing the HTML data and names the files with respect to their urls. Below is the syntax for running the app in WSL2.

node urls.js urls.txt

In the broken-app fold, there is a app.js file that originally didn't work. I made changes to it to make it work. It gets user data off the GitHub API. You make a post request to the app, the app makes a get request to the GitHub API, and then the app returns information from that API. I used insomnia to test it. The request, url, and data I used in insomnia can be found below.

Post "localhost:3000/"
{ "developers": ["joelburton", "elie"] }