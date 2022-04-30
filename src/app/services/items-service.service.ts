import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
  items!: Observable<any[]>;
  constructor(private firestore: Firestore) { }
  getItems() {
    const itemsCollection = collection(this.firestore, 'items');
    return this.items = collectionData(itemsCollection);
  }
}
