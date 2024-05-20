import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  update,
} from "firebase/database";

function App() {
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
  const db = getDatabase(app);
  const [postID, setPostID] = useState("");

  const [currentLocation, setCurrentLocation] = useState([]);

  const fetchdata = async () => {
    const starCountRef = ref(db, "places/", postID, "/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setCurrentLocation(data);
      console.log(data[postID]);
    });
  };

  return (
    <>
      <input
        placeholder="Paste Trip ID"
        type="text"
        onChange={(e) => {
          setPostID(e.target.value);
        }}
        value={postID}
      />
      <button onClick={fetchdata}>Start tracking</button>
    </>
  );
}

export default App;
