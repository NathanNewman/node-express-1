# Broken App Issues

The variables axios and app should be const instead of let and var.

To use json, the should be an app.use(express.json());

The callback function in app.post('/') should be an async function.

The map function for let results is the wrong use of map. It should be converted to a for of loop. Also, let results should be changed to an array and made a const.

app.listen(3000) could use a callback function to let users running the server in the terminal to know what port it is running in.

Code could be refactored into multiple functions.