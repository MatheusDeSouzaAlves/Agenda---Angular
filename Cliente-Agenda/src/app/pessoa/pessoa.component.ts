import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pessoa',
  standalone: true,
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  lista: Pessoa[] = [];
  obj: Pessoa = new Pessoa();
  nome = '';
  mens = '';

  constructor(private api: PessoaService) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this.api.consultar().subscribe((res: Pessoa[]) => {
      this.lista = res;
    });
  }
  
  

  adicionar() {
    this.api.adicionar(this.obj).subscribe({
      next: (pessoa: Pessoa) => {
        this.mens = pessoa.nome + " foi adicionado(a) com sucesso!";
        this.consultar();
      },
      error: (err) => {
        console.error('Erro ao adicionar pessoa:', err);
      }
    });
  }
  

  excluir() {
    this.api.excluir(this.obj.id).subscribe({
      next: () => {
        this.mens = "Pessoa excluída com sucesso";
        this.consultar();
      },
      error: (err) => {
        console.error('Erro ao excluir pessoa:', err);
      }
    });
  }
  

  alterar() {
    this.api.alterar(this.obj.id, this.obj).subscribe((pessoa: Pessoa) => {
      this.mens = pessoa.nome + ' alterado(a) com sucesso';
      this.consultar();
    });
  }
  

  carregarDados(p: Pessoa) {
    this.obj = p;
  }

  limparDados() {
    this.obj = new Pessoa();
  }
}
