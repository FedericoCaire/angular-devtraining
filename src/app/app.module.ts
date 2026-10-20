import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { POSTS_API_URL } from './PostsModule/posts-api-url.token';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideHttpClient(),{ provide: POSTS_API_URL, useValue: 'https://asmisalan.github.io/feedgram/posts.json' }, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
