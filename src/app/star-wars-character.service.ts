import { Injectable } from '@angular/core';

export interface characterDisplay {
  name: string;
  movie: number[];
  picture: string;
}

@Injectable({
  providedIn: 'root'
})
export class StarWarsCharacterService {
  
  constructor() { }
  
  loadCharactersInfo = (): characterDisplay[] => {
    const charactersFromWeb = [
      {
        name: 'Boba Fett'
        , movie [4,5,6]
        , picture: 'url'
      }
      , {
        name: 'Darth Vader'
        , movie: 4
        , picture: 'url'
      }
    ];

    return  charactersFromWeb.map(x => ({ ...x }));
  }

}
