const {getAllBooks, addBook, updateBook, deleteBook} = require('./services');
const http = require('http');



const PORT = 2000;
const HOST_NAME = 'localhost';

// Functions for handling requests
function requestHandler(req, res){
    if(req.url === '/books' && req.method === 'GET'){
        // load and return books
        getAllBooks(req, res);
    }else if(req.url === '/books' && req.method === 'POST'){
        // add a new book
        addBook(req, res);
    }else if(req.url === '/books' && req.method === 'PUT'){
        // update an existing book
        updateBook(req, res);
    }else if(req.url === '/books' && req.method === 'DELETE'){
        // delete a book by id 1234567890
        deleteBook(req, res);
    }
}

// Create and start the server 127.0.0.1:4000
const server = http.createServer(requestHandler);

// Log the server start message 127.0.0.1:4000
server.listen(PORT, HOST_NAME, ()=>{
    console.log(`Server is listening on ${HOST_NAME}:${PORT}`);
});  