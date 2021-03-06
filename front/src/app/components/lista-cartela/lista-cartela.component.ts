import { Component, OnInit } from '@angular/core';
import { BroadcastBingoService } from './../../services/broadcast-bingo.service';
import { cartelas } from '../../models/cards';
// import * as arrayBingo from './generate.array.bingo';

@Component({
  selector: 'bg-lista-cartela',
  templateUrl: './lista-cartela.component.html',
  styleUrls: ['./lista-cartela.component.scss']
})
export class ListaCartelaComponent implements OnInit {

  cartelas: cartelas = [];

  constructor(
    private bingo: BroadcastBingoService
  ) {
    this.bingo.listenMsg().subscribe((msg) => {
      alert(msg);
    });
    // console.log(arrayBingo())
  }

  ngOnInit() {
    this.bingo.getCartelaUsuario().subscribe((c) => {
      this.cartelas = c;
    });
  }

}
