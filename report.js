const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/47948566-41b87dd4-cc76-4bc3-b5eb-46c0ff0bae41?access_key=${process.env.PMAT_KEY}`,
    // collection:`https://api.postman.com/collections/47948566-da124e8c-ef6f-4ea3-9514-34101819bb23?access_key=${process.env.PMAT_KEY}`,
    // collection:require('./collection/dmoney.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
