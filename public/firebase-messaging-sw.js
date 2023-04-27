// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyAciUvDwbdlSxVqeORVllCcnwtAuUMsCMU",
    authDomain: "push-notifications-a0.firebaseapp.com",
    projectId: "push-notifications-a0",
    storageBucket: "push-notifications-a0.appspot.com",
    messagingSenderId: "545114913302",
    appId: "1:545114913302:web:1f36d92fb261112c779337",
    measurementId: "G-RSETSJPND8"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});