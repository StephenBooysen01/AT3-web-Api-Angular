import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
// import service companant 
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent{
  
   
  heroes: Hero[] = []; // we no longer set that too the array of heros, we injesct the list instead
  //create a unassiged property '?' at the end of property name means it can be assigned for now
  selectedHero?: Hero;
  // inject array into the contrcutor heroescomponent
  constructor (private heroService: HeroService, private messageService: MessageService) {}

  //functions

  ngOnInit():void{
    this.GetHeroes();
  }
  

  OnSelected(hero: Hero): void{

    console.log(hero); // taesting to see if we get the hero 
    // message
    this.messageService.Add(`you Selected a Champeign with the ID of ${hero.id}, its name is ${hero.name}`);

    this.selectedHero = hero;
    // dispaly message 
    
  }

  GetHeroes(): void{

    this.heroService.GetHeroes()
    .subscribe(x => {console.log(x); // gets the infromation from the observed injected infromation.
      
    this.heroes =x;// set heroes to the information 
    }) 


    // this.heroes = this.heroService.GetHeroes(); // gets the list from the function created in the service
  }
  

  //------ testing 
  // creating  one hero instent
  // snorlax
  // DexNum = '#143';
  // hero: Hero = {
  //   //set
  //   id: 1,
  //   name:'Snorlax'

  // }
  // test 
  //testMoneyValue = 12.5;


  

}
