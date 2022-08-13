import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { JobListComponent } from './components/job-list/job-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    JobCardComponent,
    JobListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
