import { Component, OnInit } from '@angular/core';
import { barbearia } from '../models/barbearia.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: HomeService
  ) { }

  showCadastro: boolean = false
  barbearia: barbearia
  login: any;

  ngOnInit(): void {
    this.login = document.cookie.split(';')[0]
    this.login = this.login.substring("login=".length, this.login.length);
    console.log('this.login:', this.login)
    this.service.read().subscribe(barbearias => {
      this.barbearia = barbearias[0]
      console.log('this.barbearias:', this.barbearia)
    }

    )
  }

  adicionarServico(servico: any) {

    //this.barbearia.servicos.push(servico)
    this.service.readByCpf(this.login).subscribe(res => {
      console.log('res', res)
    })
    // this.barbearia.servicos.push(servico)
    // this.service.postServico(this.barbearia).subscribe(() => {
    //   alert('Serviço adicionado com sucesso!')
    // })
  }
}
