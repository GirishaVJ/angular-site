import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './pages/home/home.component';
import { OwlComponent } from './components/owl/owl.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { HightlightsComponent } from './components/hightlights/hightlights.component';
import { PennedByOurMindsComponent } from './components/penned-by-our-minds/penned-by-our-minds.component';
import { NewsAndEventsComponent } from './components/news-and-events/news-and-events.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OwlComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    AchievementsComponent,
    HightlightsComponent,
    PennedByOurMindsComponent,
    NewsAndEventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
