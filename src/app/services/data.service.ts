import { Injectable } from "@angular/core";
import { Firestore, collection, collectionData, doc, docData, addDoc } from "@angular/fire/firestore";
// import {collection} from '@firebase/firestore'
import { Observable } from "rxjs";

export interface Note {
    id?: string;
    title: string;
    text: string; 
}


@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private firestore: Firestore) { }
    
    getNotes(): Observable<Note[]> {
        const notesRef = collection(this.firestore, 'notes');
        return collectionData(notesRef,{ idField: 'id'} ) as Observable<Note[]>;
    }

    addNote(note: Note) {
        const notesRef = collection(this.firestore, 'notes');
        return addDoc(notesRef, note);
    }

    
}
