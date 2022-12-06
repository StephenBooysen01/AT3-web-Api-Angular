import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//==================================================================
// Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. 
// They should focus on presenting data and delegate data access to a service.
//==================================================================
//Imports
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroes';
import { MessageService } from './message.service';

//=====================================================================================================
@Injectable({
  providedIn: 'root' //provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it.
})
export class HeroService {


  constructor(private messageService: MessageService, private httpClient: HttpClient) { }

  // function 
   
  GetHeroes():Observable<Hero[]>{
    
   const heroes = this.httpClient.get<Hero[]>('http://127.0.0.1:5000/heroes'); // ports the hero list from the pyton API
   // of(HEROES); // Hard code to get array list
   this.messageService.Add('The Champions have entered the arena. ') 
   return heroes;
  }

  GetHero(id: number): Observable<Hero> {
    const hero = this.httpClient.get<Hero>('http://127.0.0.1:5000/detail/' + id.toString()); // ports the hero list from the pyton API
    // of(HEROES); // Hard code to get array list
    this.messageService.Add('The chosen one is ' + id.toString()) 
    return hero;

  }
  // get function from api 

  UPdate(hero: Hero):Observable<Hero>
  {
    return this.httpClient.post<Hero>('http://127.0.0.1:5000/update', hero);

  }

}
