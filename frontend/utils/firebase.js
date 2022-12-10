
import { initializeApp } from "firebase/app";
import firebaseConfig from "../secrets/FBSdk.json";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const app = initializeApp(firebaseConfig);
module.exports.app = app;
const db = getFirestore(app);
module.exports.db = db;
const storage = getStorage(app);
module.exports.storage = storage;