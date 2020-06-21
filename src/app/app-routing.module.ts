import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsAndEventsComponent } from './pages/news-and-events/news-and-events.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"news-and-events", component:NewsAndEventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
