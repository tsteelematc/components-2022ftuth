import { Component, OnInit } from '@angular/core';
import { PizzaCrustService, PizzaCrustType } from '../pizza.crust.service';

@Component({
  selector: 'app-pizza-crust-type',
  templateUrl: './pizza-crust-type.component.html',
  styleUrls: ['./pizza-crust-type.component.css']
})
export class PizzaCrustTypeComponent implements OnInit {

  // Magic DI, with TS ctor scoped parameters...
  constructor(
    public pizzaCrustSvc: PizzaCrustService
  ) { }

  ngOnInit(): void {
    const pc = this.pizzaCrustSvc.loadPizzaCrusts();
    console.log(pc);

    this.availablePizzaCrusts = pc;
  }

  availablePizzaCrusts: PizzaCrustType[] = [];

  // TS 'getter' or read-only property.
  get crust() {
    return this.availablePizzaCrusts
      .filter(x => x.checked)
    ;
  };

  toggleAll = (check: boolean) => this.availablePizzaCrusts =
    this.availablePizzaCrusts.map(x => ({
      ...x
      , checked: check
    }));  

}
