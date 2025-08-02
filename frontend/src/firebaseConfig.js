// Importa las funciones necesarias del SDK modular de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase que te proporcionó Firebase (tus credenciales únicas)
const firebaseConfig = {
  apiKey: "AIzaSyA4dpT2zbPHEw3VVWukIMb5voKjuFaE5x8",
  authDomain: "aynix-reply.firebaseapp.com",
  projectId: "aynix-reply",
  storageBucket: "aynix-reply.firebasestorage.app",
  messagingSenderId: "686392294021",
  appId: "1:686392294021:web:018c6f8f294041d72b47ec"
};

// Inicializa la app de Firebase con tu configuración
const app = initializeApp(firebaseConfig);

// Inicializa Firestore, la base de datos NoSQL de Firebase, para esta app
const db = getFirestore(app);

// Exporta la instancia de la base de datos para usarla en otros archivos
export { db };
