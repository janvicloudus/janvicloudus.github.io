importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

   /*Update with yours config*/
 const firebaseConfig = {
   apiKey: "AIzaSyDBQq8MVaCDFoeO-99UeG55vOL-uML_MSc",
   authDomain: "roadfriend-dd657.firebaseapp.com",
   projectId: "roadfriend-dd657",
   storageBucket: "roadfriend-dd657.appspot.com",
   messagingSenderId: "816471214471",
   appId: "1:816471214471:web:fbfe239c32e825ac3d6b22",
   measurementId: "G-4FR11MCNNJ"
 };
  firebase.initializeApp(firebaseConfig);
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