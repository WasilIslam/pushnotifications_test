import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAciUvDwbdlSxVqeORVllCcnwtAuUMsCMU",
    authDomain: "push-notifications-a0.firebaseapp.com",
    projectId: "push-notifications-a0",
    storageBucket: "push-notifications-a0.appspot.com",
    messagingSenderId: "545114913302",
    appId: "1:545114913302:web:1f36d92fb261112c779337",
    measurementId: "G-RSETSJPND8"
};
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
// initializeApp(firebaseConfig);

export const getFCMToken = () => {
    return getToken(messaging, {vapidKey: 'BAW2zRWr_r5aR3tzLXensUbbTtqH-es6sqVF8iYREFGHHc0sykMobCi2svhW6T-D-gp4eMgttDhbUHeRrGdWv3w'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken); 
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }
  export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
}); 