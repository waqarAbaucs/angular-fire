import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public usersCollection: AngularFirestoreCollection<any>;
  
  constructor(public afs: AngularFirestore, public storage: AngularFireStorage) { 
    this.usersCollection = this.afs.collection('users');
  }

  addUser(userdata:any) {
    return this.afs.collection('users').add(userdata);
  }

  getAllUsers(): Observable<any[]> {
    return this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getUserById(userId: string): Observable<any> {
    return this.usersCollection.doc(userId).valueChanges();
  }

  deleteUser(userId: string): Promise<void> {
    return this.usersCollection.doc(userId).delete();
  }

  uploadImage(file: File): Promise<string> {
    const filePath = `images/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    return this.storage.upload(filePath, file)
      .then(() => fileRef.getDownloadURL().toPromise())
      .catch(error => {
        console.error('Error uploading image:', error);
        throw error; // Rethrow the error to handle it in the component
      });
  }
}
