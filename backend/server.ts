import express, { response } from "express";

// Define the port number where our app will listen
// defaults to port 3000
// so visit http://localhost:3000 to access the server
// and replace 3000 with your own port number if you change it here
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to my API server. Please visit /api to access all resources");
});

// Sends JSON with a welcome message along with a status of 200, indicating no errors
app.get("/api/welcome", (req, res) => {
    const responseObject = {
        status: 200,
        message: "This is my API. Make GET and POST requests to other routes in order to build your app",
        data: null
    }
    res.json(responseObject);
});

// ********* YOUR ASSIGNMENT ************

// Your task is to build out an API so that users can see a list of notes
// as well as create new notes that will be added to the list
// we will talk about saving notes to a fake database next time
// but for now, just define the following GET and POST request handlers
// and send back JSON data to the client with a status, message, and data field
// HINT: to send post requests, install the "thunder-client" VSCode extension (look this up)

// Fake NOTES database
const FAKE_NOTES_DB = [
    {
        id: 1,
        title: "First note",
        content: "This is my first note"
    },
    {
        id: 2,
        title: "Note 2",
        content: "Another note..."
    },
    {
        id: 3,
        title: "NOTE CUBED!",
        content: "3rd time's the charm"
    }
];

// 1. Define a route handler for a GET request to get all notes in the db


// 2. Define a route handler for a GET request to get a note based on its ID
//    and return only that one note


// 3. Define a route handler for a POST request to create a new note
// instead of updating the db, simply echo back the data the user passed in
// HINT: look up "express.json" and use the req.body field to access user data
// Also look up how to send a post request using thunder-client



// ********* END ASSIGNMENT ************


// A catch-all route to handle URLs you haven't defined
// If you see this, that means you're trying to visit the wrong URL
// or you haven't defined a route handler for that URL yet
app.get("/*", (req, res) => {
    const responseObject = {
        status: 400,
        message: "ROUTE NOT DEFINED",
        data: null
    }
    res.json(responseObject);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));

