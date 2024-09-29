// Import the 'fs' module to read files
const fs = require('fs');

// Read the file using the non-blocking method
fs.readFile('lab1.txt', 'utf8', function (err, data) {
    // Check if there's an error
    if (err) {
        console.log('Error reading file');
        return;
    }
    // Print the file content to the terminal
    console.log(data);
});

