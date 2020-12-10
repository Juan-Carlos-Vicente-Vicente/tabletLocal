import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiciosService } from 'src/service/Servicios.service';
import { LoginComponent } from './components/login/login.component';
import { TabletComponent } from './components/tablet/tablet.component';
import { DetallesComponent } from './components/detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TabletComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
