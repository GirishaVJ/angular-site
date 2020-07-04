import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursorService } from './services/cursor.service';

import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { HightlightsComponent } from './components/hightlights/hightlights.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { PennedByOurMindsComponent } from './components/penned-by-our-minds/penned-by-our-minds.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { BannerAnimationComponent } from './components/banner-animation/banner-animation.component';
import { NewsEventsComponent } from './components/news-events/news-events.component';
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
import { ProductsComponent } from './pages/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    HightlightsComponent,
    AchievementsComponent,
    PennedByOurMindsComponent,
    FooterComponent,
    HeaderComponent,
    BannerAnimationComponent,
    NewsEventsComponent,
    OwlComponent,
    ParallaxDirective,
    NewsAndEventsComponent,
    NewsDetailsComponent,
    CareersComponent,
    CareerDetailsComponent,
    IndustriesComponent,
    ServicesComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [CursorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
