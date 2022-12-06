import { Component, OnInit} from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // constuctor 
  constructor(private heroService: HeroService){}
  //array 
  heroes: Hero[] = [] // array 
  //function 

  ngOnInit():void{
    this.GetHeroes();

  }
  
  GetHeroes() {
    this.heroService.GetHeroes().subscribe(x => this.heroes = x.slice (1, 6)); // selects a few heros from the injecable hero array
    
  }

}
