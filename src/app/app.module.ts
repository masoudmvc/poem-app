import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArrayToLinePipe } from './shared/pipes/array-to-line.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PoemListComponent } from './components/poem-list/poem-list.component';
import { PoemDetailComponent } from './components/poem-detail/poem-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArrayToLinePipe,
    AppComponent,
    HomeComponent,
    PoemListComponent,
    PoemDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
