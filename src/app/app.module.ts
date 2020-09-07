import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursorService } from './services/cursor.service';

import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { HightlightsComponent } from './components/hightlights/hightlights.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';

import { BannerAnimationComponent } from './components/banner-animation/banner-animation.component';
import { OwlComponent } from './components/owl/owl.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ParallaxDirective } from './services/parallax.directive';
import { NewsAndEventsComponent } from './pages/news-and-events/news-and-events.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CareerDetailsComponent } from './pages/career-details/career-details.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { ServicesComponent } from './pages/services/services.component';
import { PageNotFountComponent } from './pages/page-not-fount/page-not-fount.component';
import { KnowledgeHubComponent } from './pages/knowledge-hub/knowledge-hub.component';
import { ContatUsComponent } from './pages/contat-us/contat-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesDetailsComponent } from './pages/services-details/services-details.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AchievmentsDetailsComponent } from './pages/achievments-details/achievments-details.component';
import { ClientsPreferUsComponent } from './components/clients-prefer-us/clients-prefer-us.component';
import { SpotlightsComponent } from './components/spotlights/spotlights.component';
import { HomeKnowledgeHubComponent } from './components/home-knowledge-hub/home-knowledge-hub.component';
import { PlatformsComponent } from './pages/platforms/platforms.component';
import { PlatformDetailsComponent } from './pages/platform-details/platform-details.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RoutePartsService } from './services/route-parts.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    HightlightsComponent,
    ClientsPreferUsComponent,
    HomeKnowledgeHubComponent,
    FooterComponent,
    HeaderComponent,
    BannerAnimationComponent,
    SpotlightsComponent,
    OwlComponent,
    ParallaxDirective,
    NewsAndEventsComponent,
    NewsDetailsComponent,
    CareersComponent,
    CareerDetailsComponent,
    IndustriesComponent,
    ServicesComponent,
    PlatformsComponent,
    PageNotFountComponent,
    KnowledgeHubComponent,
    ContatUsComponent,
    PlatformDetailsComponent,
    AboutUsComponent,
    ServicesDetailsComponent,
    ChatComponent,
    AchievmentsDetailsComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [CursorService, RoutePartsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
