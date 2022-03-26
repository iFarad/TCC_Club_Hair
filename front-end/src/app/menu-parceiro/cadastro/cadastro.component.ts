import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HomeService } from '../home/home.service';
import { servico } from '../models/barbearia.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<servico>();

  servico = new servico()

  constructor(
    private service: HomeService
  ) { }

  ngOnInit(): void {
  }

  AdicionarServico() {
    this.newItemEvent.emit(this.servico);
  }

}
