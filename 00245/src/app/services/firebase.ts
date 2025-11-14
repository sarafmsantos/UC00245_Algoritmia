import { Injectable } from '@angular/core';
import { key } from './key';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class Firebase {

  private app;
  public auth;
  public firestore;
  public storage;
 
  constructor() {
    const firebaseConfig = {
      apiKey: key,
      authDomain: "uc00245-sarasantos.firebaseapp.com",
      projectId: "uc00245-sarasantos",
      storageBucket: "uc00245-sarasantos.firebasestorage.app",
      messagingSenderId: "914225131520",
      appId: "1:914225131520:web:99f856c5b095596e6f28e5"
    };
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.storage = getStorage(this.app);
  }
}
