import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crc-surprise',
  templateUrl: './crc-surprise.component.html',
  styleUrls: ['./crc-surprise.component.css']
})
export class CrcSurpriseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  get generateNumber() {
    return Math.floor(Math.random() * ( 18 - 3 + 1) + 3);
  }

  rollStat = () => {
    const rolled = this.generateNumber;
  }

}
