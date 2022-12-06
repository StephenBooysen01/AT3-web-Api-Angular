import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

   hero? : Hero; // declaing a prperty ass an INPUT property 


  // constrauctor 
   constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location){}
   // functions 
   ngOnInit():void{

    this.GetHero();
    

   }
  GetHero() {
     const id = Number(this.route.snapshot.paramMap.get('id'));
     this.heroService.GetHero(id).subscribe(x => this.hero = x);
  }

  GoBack(): void
  {
    this.location.back();

  }

  Save(): void
  {
    if(this.hero)
      this.heroService.UPdate(this.hero).subscribe((itm)=>console.log(itm));
      
  }

    
}
