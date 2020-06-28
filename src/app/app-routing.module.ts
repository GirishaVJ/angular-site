import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsAndEventsComponent } from './pages/news-and-events/news-and-events.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"news-and-events", component:NewsAndEventsComponent},
  {path:"news-deails", component:NewsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
