import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaService } from './services/pessoa.service';
import { Pessoa } from './models/pessoa.model';


@NgModule({
    declarations: [
      PessoaComponent
    ],
    imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, AppComponent, PessoaComponent],
    providers: [PessoaService],
  })
  export class AppModule { }
  
 