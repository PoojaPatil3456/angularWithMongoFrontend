import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    AddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
