import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Subject } from 'rxjs/Subject';

import * as io from 'socket.io-client';
import { cartelas } from '../models/cards';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const URL_CARDS_BINGO = 'http://localhost:3000/cards'

@Injectable()
export class BroadcastBingoService {
  cartelasUsuario:cartelas;
  socket: SocketIOClient.Socket;
  _msgSubject: Subject<string> = new Subject<string>();
  listenMsg() { return this._msgSubject.asObservable(); }

  constructor(
    private http: HttpClient
  ) {
    this.connectSocket();
   }

   connectSocket(){
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

   getCartelaUsuario(){
     return this.http
        .get(URL_CARDS_BINGO)
        .map()
   }


   enviarBola(bola) {
    this.socket.emit('bola-sorteada', bola);
   }

   chat(msg) {
     console.log('chat on', msg);
     this.socket.emit('msg', msg);
   }

}
