import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
//=================================================================================
//            **controls the nagivation through the httml ural**
//=================================================================================

// sets all the possible paths here  

const routes: Routes = [ 
  // set the default rout
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  //hero path
  { path: 'heroes', component: HeroesComponent        },
  //dashboared path 
  { path: 'dashboard', component: DashboardComponent  },
  // hero details 
  { path: 'detial/:id', component: HeroDetailComponent}
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
