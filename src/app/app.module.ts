import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorsPickComponent } from './homepage/editors-pick/editors-pick.component';
import { NewsFeedComponent } from './homepage/news-feed/news-feed.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorsPickComponent,
    NewsFeedComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
