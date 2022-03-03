import { Component, OnInit } from '@angular/core';
import { login } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private servico: LoginService,
  ) { }

  signup: boolean = false;
  usuario = new login();
  usuarios = new Array<login>();


  ngOnInit(): void {
    this.servico.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios
      console.log('this.usuarios:', this.usuarios)
    }

    )
  }

  verificar(cpf: string, senha: string) {
    !this.usuarios.find(a => a.cpf == cpf) ? alert('CPF inválido') : console.log('cpf ok')
    !this.usuarios.find(a => a.senha == senha) ? alert('senha inválida') : console.log('senha ok')
  }

  teste() {
    if (document.getElementsByClassName('cubeRotate').length > 0) {
      document.getElementById('teste')?.classList.remove("cubeRotate")
    } else document.getElementById('teste')?.classList.add("cubeRotate")
  }

}
