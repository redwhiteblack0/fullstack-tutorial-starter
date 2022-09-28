// ********* YOUR ASSIGNMENT ************
// Below you will see some fetch requests to pull in data
// from your server into the client. Nice!
// However... there's a problem -
// theses fetch requests will fail if you try things with your server now.
// So your first task is to get theses fetch requests working,
// but only by changing code on your server (don't change the code
// in the fetch requests already created here)

// Ok, that's the easy part. Now for the real assignment:

// 1) Create a request handler on your server to handle a PUT request
//    so that I can update any note in the database that I choose to.
//    Then create a fetch request to do this from the client

// 2) Create a request handler on your server to handle a DELETE request
//    so that I can delete any note in the database that I choose to.
//    Then create a fetch request to do this from the client

// 3) Create a request handler on your server to return a filtered set of notes
//    so that if a user searches for a word, then they will only see notes
//    which contain that word. For example: If a user searches for "Cat",
//    then only notes with the word "Cat" in its title and/or description,
//    should be returned (should NOT be case-sensitive, so "cat" = "Cat" = "CAT")
//    So:
//    {id: 192491, title: "The Cat and The Hat", content: "Some book..."} should be returned YES
//    {id: 203123, title: "Animals", content: "Dog, cat, rat"} should be returned YES
//    {id: 539235, title: "Good Bois", content: "This is about dogs"} should NOT be returned NO
//    Return an array of all notes that pass the test.

// 4) Update your DELETE request handler on your server to only
//    allow deleting notes after a user has confirmed that they really want to delete that note.
//    Do this by asking a user to type in the title of the note to be deleted,
//    and if the title matches, then go ahead and allow them to delete the note.
//    For example: If the user want to delete the note {id: 539235, title: "Good Bois", content: "This is about dogs"},
//    then before deleting on your server, ask them "Are you sure?" and ask them to send the name of
//    the note. So if the user sends "Good Bois", then YES delete the note.
//    But if they send "Good Dogs", then NO, don't delete the note
//    and send them the correct error message.
//    (HINT: could you do this in a single request? Or maybe you need more than one...)

// 5) Next, create a new request handler to handle updating all notes
//    so that each old note in the FAKE_NOTES_DB now has an array of tags attached to it.
//    (tags can be things like: "Todo", "Reminder", "New Idea", "Random", etc. You decide)
//    Use any method (Postman, Thunder Client, or from this file) to perform the request.

// 6) Now create a new request handler to handle user creation of new notes.
//    Wait, I thought we already had a request handler for that?
//    You're right! But now we're going to handle adding tags to notes which our old 
//    request handler doesn't do. So we're updating our API to v2!
//    (Make sure to actually make a new request handler and not simply update the old one)

//    So: make a new handler and reject notes that don't contain at least 1 tag.
//    (Make sure to send the right status code for this type of error)
//    Then, if there are tags, save the new note with an array of tags in the FAKE_NOTES_DB.
//    Make sure to only save unique tags though, so
//    if the user passes an array of tags like ["todo", "reminder", "Todo", "new-idea"]
//    then only add ["todo", "reminder", "new-idea"].
//    RULES: tags are unique if their lowercase version is unique, like above

// 7) After all that jazz, create a new request handler to get notes
//    filtered by tag. So if a user wants all notes with the tag "todo"
//    then return all notes in the database where "todo" is included in the tags array.
//    This will be similiar to the previous handler you made for filtering by text.
//    Ignore case when searching here as well

// 8) Now create a request handler that will delete all notes containing
//    one of the following tags: "BAD", "EVIL", "NASTY", "ILLEGAL" and ignore word casing.
//    BUT... make sure that only users who provide the right password can do this.
//    So if a request is sent with a wrong password (or no password at all),
//    then reject the request and send the appropriate error message to the user.
//    AND... The password should NOT be sent in the request body!!!
//    Instead, send the password in the "Authorization" header of your request.
//    The password is: super_secret_password1234 (this time case matters!)

// 9) Lastly, write fetch requests for each of the new route handlers you made here.
//    Make sure that they all work and that they behave as expected.

// * EXTRA CREDIT *
//  Create a set of HTML buttons that correspond to each of the fetch requests you created here.
//  When the user clicks the corresponding button, the fetch request is performed
//  and data appears as an alert to the user.

// Good luck!!!

const noteId = 3;

const newNote = {
    title: "Test Note Title", 
    content: "I'm learning fullstack development!"
}

const getNotes = async () => {
    try {
        const res = await fetch(`http://localhost:3000/note/get-all`);
        const data = await res.json();
        console.log("All note data: ", data);
    } catch (err) {
        console.log("Error getting all notes: ", err.message);
    }
}

getNotes();

const getNoteById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/note/get/${id}`);
        const data = await res.json();
        console.log("All note data: ", data);
    } catch (err) {
        console.log("Error getting all notes: ", err.message);
    }
}

getNoteById(noteId);

const createNote = async (note) => {
    const res = await fetch("http://localhost:3000/note/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })

    const data = await res.json();
    console.log(data);
}

createNote(newNote)
