import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { HightlightsComponent } from './components/hightlights/hightlights.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { NewsAndEventsComponent } from './components/news-and-events/news-and-events.component';
import { PennedByOurMindsComponent } from './components/penned-by-our-minds/penned-by-our-minds.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { BannerAnimationComponent } from './components/banner-animation/banner-animation.component';
import { NewsEventsComponent } from './components/news-events/news-events.component';
import { OwlComponent } from './components/owl/owl.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    HightlightsComponent,
    AchievementsComponent,
    NewsAndEventsComponent,
    PennedByOurMindsComponent,
    FooterComponent,
    HeaderComponent,
    BannerAnimationComponent,
    NewsEventsComponent,
    OwlComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, CarouselModule],
  providers: [
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
