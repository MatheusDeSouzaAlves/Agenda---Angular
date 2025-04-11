import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PessoaComponent } from './pessoa/pessoa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PessoaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cliente-Agenda';
}
