import { Component, OnInit, Input } from '@angular/core';
import { cartela } from '../../models/cards';

@Component({
  selector: 'bg-cartela',
  templateUrl: './cartela.component.html',
  styleUrls: ['./cartela.component.scss']
})
export class CartelaComponent implements OnInit {
  @Input() public cartela: cartela = null;
  constructor() { }

  ngOnInit() {
  }

}
