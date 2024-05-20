import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  update,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBeCx-gdsrweSb89zO9Hp6IxZpvmbVeFzg",
  authDomain: "realtime-location-tracki-4bf80.firebaseapp.com",
  databaseURL:
    "https://realtime-location-tracki-4bf80-default-rtdb.firebaseio.com",
  projectId: "realtime-location-tracki-4bf80",
  storageBucket: "realtime-location-tracki-4bf80.appspot.com",
  messagingSenderId: "375394092135",
  appId: "1:375394092135:web:af502e5f982097d286c0c2",
  measurementId: "G-M0BNWBDVVC",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
