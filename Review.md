# Review Questions

## What is Node.js?
A headless instance of the V8 js engine
## What is Express?
Express is a framework for Node.JS that lets you respond to http requests
## Mention two parts of Express that you learned about this week.
We learned how to respond with various status codes. We also learned how to parse bodies with express.json()
## What is Middleware?
Middleware is a piece of code that goes in between the input and output of the code 
## What is a Resource?
A piece of data
## What can the API return to help clients know if a request was successful?
200 OK
## How can we partition our application into sub-applications?
Using express's router to split the files down further
## What is express.json() and why do we need it?
It is middleware built into express. It's needed so that the body of requests can be understood by express