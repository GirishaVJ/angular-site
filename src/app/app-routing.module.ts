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
import { PageNotFountComponent } from './pages/page-not-fount/page-not-fount.component';
import { KnowledgeHubComponent } from './pages/knowledge-hub/knowledge-hub.component';
import { IndustriesComponent } from './pages/industries/industries.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'news-and-events', component: NewsAndEventsComponent },
  { path: 'news-details', component: NewsDetailsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'career-details', component: CareerDetailsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'achievments', component: AchievementsComponent },
  { path: 'knowledge-hub', component: KnowledgeHubComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
