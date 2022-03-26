import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) { }

  signup: boolean = false;
  usuario = new login();
  usuarios = new Array<login>();
  login: any


  ngOnInit(): void {
    this.servico.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios
      console.log('this.usuarios:', this.usuarios)
    })
    if (document.cookie.split(';')[0].includes("login")) this.router.navigate(['/home-colaborador']);
  }

  verificarUsuario() {
    if (this.usuarios.find(a => a.cpf == this.usuario.cpf && a.senha == this.usuario.senha)) {
      return true
    } else return false
  }

  logar() {
    if (this.verificarUsuario()) {
      document.cookie = "login=" + this.usuario.cpf + ";"
      this.router.navigate(['/home-colaborador']);
    } else {
      alert("usuario ou senha incorretos")
    }
  }

  teste() {
    if (document.getElementsByClassName('cubeRotate').length > 0) {
      document.getElementById('teste')?.classList.remove("cubeRotate")
    } else document.getElementById('teste')?.classList.add("cubeRotate")
  }
}
