import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsAndEventsComponent } from './pages/news-and-events/news-and-events.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CareerDetailsComponent } from './pages/career-details/career-details.component';
import { ServicesComponent } from './pages/services/services.component';
import { PageNotFountComponent } from './pages/page-not-fount/page-not-fount.component';
import { KnowledgeHubComponent } from './pages/knowledge-hub/knowledge-hub.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContatUsComponent } from './pages/contat-us/contat-us.component';
import { ServicesDetailsComponent } from './pages/services-details/services-details.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AchievmentsDetailsComponent } from './pages/achievments-details/achievments-details.component';
import { PageClientsPreferUsComponent } from './pages/page-clients-prefer-us/page-clients-prefer-us.component';
import { PlatformsComponent } from './pages/platforms/platforms.component';
import { PlatformDetailsComponent } from './pages/platform-details/platform-details.component';
import { WhyClientsPreferUsComponent } from './pages/why-clients-prefer-us/why-clients-prefer-us.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home', breadcrumb: 'Home' },
  },
  {
    path: 'news-and-events',
    component: NewsAndEventsComponent,
    data: { title: 'News and Events', breadcrumb: 'News and Events' },
  },
  {
    path: 'news-and-events/:id',
    component: NewsDetailsComponent,
    data: { title: 'News and Events', breadcrumb: 'News and Events' },
  },
  {
    path: 'careers',
    component: CareersComponent,
    data: { title: 'Careers', breadcrumb: 'Careers' },
  },
  {
    path: 'career-details',
    component: CareerDetailsComponent,
    data: { title: 'Career Details', breadcrumb: 'Career Details' },
  },
  {
    path: 'platforms',
    component: PlatformsComponent,
    data: { title: 'Platforms', breadcrumb: 'Platforms' },
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { title: 'Services', breadcrumb: 'Services' },
  },
  {
    path: 'clients-prefer',
    component: PageClientsPreferUsComponent,
    data: { title: 'Why', breadcrumb: 'Why' },
  },
  {
    path: 'why-client-prefer-us',
    component: WhyClientsPreferUsComponent,
    data: { title: 'Why Client Prefer Us', breadcrumb: 'Why Client Prefer Us' },
  },
  {
    path: 'knowledge-hub',
    component: KnowledgeHubComponent,
    data: { title: 'Knowledge Hum', breadcrumb: 'Knowledge Hub' },
  },
  {
    path: 'industries/:id',
    component: IndustriesComponent,
    data: { title: 'Industries', breadcrumb: 'Industries' },
  },
  {
    path: 'platform-details',
    component: PlatformDetailsComponent,
    data: { title: 'Platform Details', breadcrumb: 'Platform Details' },
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: { title: 'About Us', breadcrumb: 'About Us' },
  },
  {
    path: 'contact-us',
    component: ContatUsComponent,
    data: { title: 'Contact Us', breadcrumb: 'Contact Us' },
  },
  {
    path: 'services-details',
    component: ServicesDetailsComponent,
    data: { title: 'Service Details', breadcrumb: 'Service Details' },
  },
  {
    path: 'chat',
    component: ChatComponent,
    data: { title: 'Chat', breadcrumb: 'Chat' },
  },
  {
    path: 'clients-prefer-us/:id',
    component: AchievmentsDetailsComponent,
    data: { title: 'Client Perfer us', breadcrumb: 'Client Perfer us' },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
