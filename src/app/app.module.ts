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

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { BannerAnimationComponent } from './components/banner-animation/banner-animation.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SwiperModule],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
