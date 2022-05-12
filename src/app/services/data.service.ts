import { Injectable } from "@angular/core";
import { Firestore, collection, collectionData, doc, docData, addDoc, Timestamp } from "@angular/fire/firestore";
import { Observable } from "rxjs";

// Interface for user data and survey answers
export interface MentalShowerAnswers {
    id?: string;
    userId: string;
    gender: number;
    timecode: Timestamp;
    zone: number;
    temperature: number;
    airquality: number;
    humidity: number;
}





@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private firestore: Firestore) { }
    
    // CRUD functionality between app and firestore
    // Add User data to Firestore
    storeAnswers(answer: MentalShowerAnswers) {
        const answerRef = collection(this.firestore, 'mentalshoweranswers');
        return addDoc(answerRef, answer);
    }

    // Get answers from all users
    getAnswers(): Observable<MentalShowerAnswers[]> {
        const answerRef = collection(this.firestore, 'mentalshoweranswers');
        return collectionData(answerRef,{ idField: 'id'} ) as Observable<MentalShowerAnswers[]>;
    }


    



    
}
