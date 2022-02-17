Hello world API

This app starts a server and listens on port 5000 for connections.
The app responds with “Hello World!” in different languages for requests to the root URL's (/English), (/French) and (/Hindi). 
For every other path, it will respond with a 404 Not Found.

to run the app, change to the myapp directory and run the following command:
$ node index.js

Then, load http://localhost:5000/English or http://localhost:5000/French or
http://localhost:5000/Hindi in a browser to see the output.