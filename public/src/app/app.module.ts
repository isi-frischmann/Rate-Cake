import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CakeService } from './cake.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
