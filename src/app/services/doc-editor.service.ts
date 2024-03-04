import {Injectable} from '@angular/core';
import  { io }  from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class DocEditorService {
  private socket = io('http://localhost:8080/document');
  selectedDocument!: any;


  constructor() {
    this.socket.off('documentUpdated').on('documentUpdated', (data) => {
      console.log('Document updated:', data);
      // Update your document content based on the received data
      // For example, if you're using React, you might update the state here
    });
  }

  joinDocument(id: any) {
    const roomName = `document_${id}`; // Construct room name based on document ID
    this.socket.emit('joinDocument', roomName);
  }

  updateDoc(message: string) {
    this.socket.emit('new-message', message);
  }

  getMessages() {
    this.socket.on('new-message', (data: any) => {
     // observer.next(data);
    });

  }

}
