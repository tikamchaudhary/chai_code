/****** Immediately invoked function expressions (IIFE) *********/

(function connectDB() {
    // named IIFE
    console.log(`DB Connected ...`);
})();


((DB_name) => {
    console.log(`${DB_name}, data base connected ...`);
})('Mongo DB');