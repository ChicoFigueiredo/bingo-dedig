import { Component, OnInit } from '@angular/core';
import { BroadcastBingoService } from './../../services/broadcast-bingo.service';

@Component({
  selector: 'bg-sorteador',
  templateUrl: './sorteador.component.html',
  styleUrls: ['./sorteador.component.scss']
})
export class SorteadorComponent implements OnInit {

  constructor(
    private bingo: BroadcastBingoService
  ) {
    // a
  }

  ngOnInit() {
  }

  enviarMsg(msg) {
    this.bingo.enviarBola(msg);
  }

  chat(msg) {
    console.log(msg);
    this.bingo.chat(msg);
    this.bingo.enviarBola(msg);
  }
}
