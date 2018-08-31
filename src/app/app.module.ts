import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AlbumentryComponent } from './components/albumentry/albumentry.component';
import { AlbumdisplayComponent } from './components/albumdisplay/albumdisplay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    AlbumentryComponent,
    AlbumdisplayComponent
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
