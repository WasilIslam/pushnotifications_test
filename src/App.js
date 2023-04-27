import React from 'react'
import { onMessageListener,  getFCMToken  } from './firebase'
const App = () => {

  getFCMToken()
  onMessageListener().then(payload => {
    // setShow(true);
    // setNotification({title: payload.notification.title, body: payload.notification.body})
    console.log(payload);
  }).catch(err => console.log('failed: ', err));

  return (
    <div>App</div>
  )
}

export default App