import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsAndEventsComponent } from './pages/news-and-events/news-and-events.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CareerDetailsComponent } from './pages/career-details/career-details.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'news-and-events', component: NewsAndEventsComponent },
  { path: 'news-details', component: NewsDetailsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'career-details', component: CareerDetailsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'achievments', component: AchievementsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
