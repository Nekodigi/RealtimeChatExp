const functions = require("firebase-functions");
const { app } = require("./handler/handler");
let { setIsDev, envVar } = require("./utils/var");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });



if(process.argv[2] === "dev"){
    envVar.isDev = true;
    app.listen(4000);
}
exports.app = functions.https.onRequest(app);