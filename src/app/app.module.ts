import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { POSTS_API_URL } from './PostsModule/posts-api-url.token';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsModule } from './PostsModule/posts.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,RouterModule.forRoot(routes), AppRoutingModule, StoreModule.forRoot({}), EffectsModule.forRoot([]), PostsModule, StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })],
  providers: [provideHttpClient(),{ provide: POSTS_API_URL, useValue: 'https://asmisalan.github.io/feedgram/posts.json' }, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
