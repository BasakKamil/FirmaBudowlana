const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// const {Storage} =  require("@google-cloud/storage");
// const os = require('os');
// const path = require('path');
// const cors = require('cors')({origin: true});
// const Busboy= require('busboy');
// const http = require('http'); 
// const spawn = require('child-process-promise').spawn;
// const fs = require('fs');

// let gcs = new Storage({
//     projectId: 'karol-budowlanka', 
//     keyFilename:  'https://karol-budowlanka.firebaseio.com' 
// });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello Kamil !");
});

const createNotification = (notification =>{
    return admin.firestore().collection('notification')
           .add(notification)
           .then(doc=>console.log('Powiadomienie dodane', doc));
})


exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    .onCreate(doc =>{
        const project = doc.data();
        const notification = {
            content: 'Nowy projekt został dodany :)',
            user: `${project.firstName} ${project.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    }
)

exports.userJoined = functions.auth.user()
    .onCreate(user=>{
        return admin.firestore().collection('users')
        .doc(user.uid).get().then(doc=>{
            const newUser = doc.data();
            const notification = {
                content: 'Nowy Uzytkownik został dodany ;p',
                user: `${newUser.firstName} ${newUser.lastName}`,
                time: admin.firestore.FieldValue.serverTimestamp()
            }
            return createNotification(notification);
        })
    }
)


// exports.onFileChange = functions.storage.object().onFinalize(event => {
//     console.log(event);
//     const bucket = event.bucket;
//     const contentType = event.contentType;
//     const filePath = event.name;
//     console.log('File Change detected'); 
    
//     if(path.basename(filePath).starsWith('renamed-')){
//         console.log('Zmienilismy nazwe pliku!');
//         return;
//     }

//     if(object.resourceState === 'not_exists'){
//         console.log('usunelismy plik, wyjscie...!');
//         return;
//     }

//     const destBucket = gcs.bucket(bucket);
//     const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
//     const metadeta = { contentType: contentType };

    
//     return destBucket.file(filePath).downlod({
//         destination: tmpFilePath
//     }).then(()=>{
//         return spawn('convert', [tmpFilePath,'-resize', '800x800', tmpFilePath]);
//     }).then(()=>{
//         return destBucket.upload(tmpFilePath,{
//                 destination: 'resized-' + path.basename(filePath),
//                 metadeta: metadeta
//         })
//     });
// });



// exports.uploadFile = functions.https.onRequest((req)=>{
//     cors(req,res,(request, response) => {
//         if(req.method !== 'POST'){
//             return res.status(500).json({
//                     message: 'Nie dozwolony'
//             });
//         }
//         const busboy = new Busboy({headers: request.headers});
//         let uploadData = null;

//         busboy.on('file',(fieldname, file, filename, encoding, mimetype)=>{
//             const filepath = path.join(os.tmpdir(), filename);
//             uploadData = {file: filepath, type: mimetype};
//             file.pipe(fs.createWriteStream(filepath));
//         });

//         busboy.on('finish', () => { 
//             const bucket = gcs.bucket('gs://imajsternowa.appspot.com/');
//             bucket.upload(uploadData.file, {
//                 uploadType: 'media',
//                 metadata: {
//                     metadata: {
//                         contentType: uploadData.type
//                     }
//                 }
//             }).then (()=>{
//                 response.status(200).json({
//                     message: "Działa!"
//             });
//         }).catch(err => {
//                 return response.status(500).json({
//                     error: err
//                 });
//         })
//     });
//     busboy.end(req.rawBody);
// });
// });
