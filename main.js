import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBlahoJjeK0jyO-4tZlAiPRjym6Mxn2P6o",
  authDomain: "insan-cemerlang-59727.firebaseapp.com",
  projectId: "insan-cemerlang-59727",
  storageBucket: "insan-cemerlang-59727.appspot.com",
  messagingSenderId: "839220708273",
  appId: "1:839220708273:web:4d1dde85cf74aebd1d7390",
  measurementId: "G-1VP3D59R0T"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarSiswa () {
  const siswaRef = collection(db, "siswa");
  const q = query(siswaRef, orderBy("nama"));
  const querySnapshot = await getDocs(q);
  
  let retval = [];
  querySnapshot.forEach((doc) => {
    retval.push({ id: doc.id, nama: doc.data().nama });
  });
  
  return retval;
  
}

export async function tambahsiswa(val){
 try {
  const docRef = await addDoc(collection(db,"siswa"), {
    nama: val
  });
  console.log('Berhasil menyimpan dokumen dengan ID:' + docRef.id);
 } catch (e) {
   console.log('Error menambah dokumen'+e);
  }
}

export async function hapusSiswa(docId){
  await deleteDoc(doc(db,"siswa"),docId);
}