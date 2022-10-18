import { Injectable } from '@angular/core';

export interface RolledCharacterStat {
  name: string;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class SurpriseService {

  constructor() { }

  loadCharacterStats = (): RolledCharacterStat[] => {
    const characterStats = [
      {
        name: 'Strength'
      },
      {
        name: 'Dexterity'
      },
      {
        name: 'Constituion'
      },
      {
        name: 'Intelligence'
      },
      {
        name: 'Wisdom'
      },
      {
        name: 'Charisma'
      }
    ];

    return characterStats.map(x => ({
      ...x,
      value: 0
    }));
  }
}
