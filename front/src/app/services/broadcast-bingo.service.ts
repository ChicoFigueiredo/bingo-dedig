import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import * as io from 'socket.io-client';

@Injectable()
export class BroadcastBingoService {

  socket: SocketIOClient.Socket;
  _msgSubject: Subject<string> = new Subject<string>();
  listenMsg() { return this._msgSubject.asObservable(); }

  constructor() {
    this.socket = io.connect('http://localhost:8000');
    this.socket.on('connect', () => {
      this.socket.on('msg', (msg) => {
        console.log('checou', msg);
        this._msgSubject.next(msg);
      });

      this.socket.on('bola-sorteada', (bola) => {
        console.log('checou', bola);
        this._msgSubject.next(bola);
      });

    });
   }

   enviarBola(bola) {
    this.socket.emit('bola-sorteada', bola);
   }

   chat(msg) {
     console.log('chat on', msg);
     this.socket.emit('msg', msg);
   }

}
