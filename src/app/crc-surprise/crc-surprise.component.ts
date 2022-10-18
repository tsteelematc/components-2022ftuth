import { Component, OnInit } from '@angular/core';
import { SurpriseService, RolledCharacterStat } from '../surprise.service';

@Component({
  selector: 'app-crc-surprise',
  templateUrl: './crc-surprise.component.html',
  styleUrls: ['./crc-surprise.component.css']
})
export class CrcSurpriseComponent implements OnInit {

  constructor(
    public surpSvc: SurpriseService
  ) { }

  ngOnInit(): void {
    const rs = this.surpSvc.loadCharacterStats();

    this.characterBaseStats = rs;
  }

  characterBaseStats: RolledCharacterStat[] = [];

  get generateNumber() {
    return Math.floor(Math.random() * ( 18 - 3 + 1) + 3);
  }

  generateStats = () => this.
    characterBaseStats = 
      this.characterBaseStats.map(x => ({
    ...x,
    value: this.generateNumber
  }));

  // rollStat = () => {
  //   const rolled = this.generateNumber;
  // }

}
