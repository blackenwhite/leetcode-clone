import './App.css'
import { Landing } from './components/Landing'

import { initializeApp } from "firebase/app";
import { Signin } from './components/Signin';

const firebaseConfig = {
  apiKey: "AIzaSyAwVL1kDwoUea0Fbzbs5Ip6oS08RJmZIp0",
  authDomain: "leetcode-clone-bd90a.firebaseapp.com",
  projectId: "leetcode-clone-bd90a",
  storageBucket: "leetcode-clone-bd90a.appspot.com",
  messagingSenderId: "500910159678",
  appId: "1:500910159678:web:fc1a0d23d4f2c645a75e6f",
  measurementId: "G-KQVD06K0CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {

  return (
    <>
    <div>
      {/* <Landing/> */}
      <Signin/>
    </div>
    </>
  )
}

export default App
