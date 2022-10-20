import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hk-choose-your-delivery',
  templateUrl: './hk-choose-your-delivery.component.html',
  styleUrls: ['./hk-choose-your-delivery.component.css']
})
export class HkChooseYourDeliveryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedDeliveryMethod = '';
}
