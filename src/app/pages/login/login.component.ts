import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AutenticacaoService } from '../../autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 formulario = new FormGroup ({

  login:new FormControl(''),
  senha:new FormControl('')

 })
 onlogin (){
  let dados = this.formulario.value;
  if(dados.login && dados.senha){
    this.autenticacaoService.autenticar(
         dados.login,
         dados.senha
    ).subscribe({
      next:(res)=>{
        if(res.status == 200){
          this.router.navigate(['/home'])
        }
      }
    })
  }
 }
 constructor(
  private autenticacaoService:AutenticacaoService,private router:Router
 ){}






}
