import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-sides',
  templateUrl: './ej-sides.component.html',
  styleUrls: ['./ej-sides.component.css']
})
export class EjSidesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne = 10;
  numberTwo = 90;
  total = 100;

  add = () => this.total = this.numberOne + this.numberTwo;

}
