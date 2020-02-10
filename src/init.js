const firebase = require('firebase/app')

const config = {
  apiKey: "AIzaSyDZlLeEp_1W-pWTInUkU4YJEJxq8Kg86ds",
  authDomain: "logistics-car.firebaseapp.com",
  databaseURL: "https://logistics-car.firebaseio.com",
  projectId: "logistics-car",
  storageBucket: "logistics-car.appspot.com",
  messagingSenderId: "1032198316609"
}

firebase.initializeApp(config)