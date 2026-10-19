import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { POSTS_API_URL } from './PostsModule/posts-api-url.token';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsModule } from './PostsModule/posts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PostsModule],
  providers: [provideHttpClient(),{ provide: POSTS_API_URL, useValue: 'https://asmisalan.github.io/feedgram/posts.json' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
