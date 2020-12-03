// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  messagingSenderId: "857003352893",
  apiKey: "AIzaSyBDgGNe8mHxALM5A59-dMqdF5dFji2EfXU",
  authDomain: "test-notification-297507.firebaseapp.com",
  projectId: "test-notification-297507",
  storageBucket: "test-notification-297507.appspot.com",
  messagingSenderId: "857003352893",
  appId: "1:857003352893:web:a975a132d6ff9cff919b54",
  measurementId: "G-FVJWRCN2P3",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
