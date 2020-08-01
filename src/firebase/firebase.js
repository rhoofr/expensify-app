import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_MESSAGING_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

//get values for expenses with some conversion
// database
//   .ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });

// subscribe to changes
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });

//   console.log(expenses);
// });

// Setup "expenses" with three items (description, note, amount, createdAt)
// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763,
// });

// database.ref('expenses').push({
//   description: 'Phone bill',
//   note: '',
//   amount: 5900,
//   createdAt: 976123498763,
// });

// database.ref('expenses').push({
//   description: 'Food',
//   note: '',
//   amount: 1200,
//   createdAt: 976123498763,
// });

// Testing adding notes data
// database
//   .ref('notes')
//   .push({
//     description: 'Coffee',
//     note: '',
//     amount: 234,
//     createdAt: 976123498764,
//   })
//   .then((data) => {
//     console.log(data);
//   });

// database.ref().set({
//   name: 'Bob',
//   age: 44,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google',
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'USA',
//   },
// });

// query data
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// Update assignment
// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//   })
//   .then((data) => console.log('data saved'))
//   .catch((err) => {
//     console.log(err);
//   });

// database.ref().set({
//   name: 'Bobby',
// });

// Set
// database
//   .ref('attributes')
//   .set({
//     height: 71,
//     weight: 191,
//   })
//   .then((data) => console.log('data saved'))
//   .catch((err) => {
//     console.log(err);
//   });

// Remove
// database
//   .ref('attributes/height')
//   .remove()
//   .then(function () {
//     console.log('Remove succeeded.');
//   })
//   .catch(function (error) {
//     console.log('Remove failed: ' + error.message);
//   });

// Update
// database
//   .ref('attributes')
//   .update({
//     height: 72,
//     IQ: 'infinity',
//   })
//   .then((data) => console.log('data saved'))
//   .catch((err) => {
//     console.log(err);
//   });
