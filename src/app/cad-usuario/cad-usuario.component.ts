import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { UsuarioService } from '../usuario.service';
import { TipoService } from '../services/tipo.service';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrl: './cad-usuario.component.scss'
})
export class CadUsuarioComponent {

  constructor(private usuarioService:UsuarioService, 
    private tipoService:TipoService
  ){
    this.buscaTipos()
  }

  formulario = new FormGroup({
  id : new FormControl(''),
  nome : new FormControl(''),
  sobrenome : new FormControl(''),
  dt_nascimento : new FormControl(''),
  login : new FormControl(''),
  telefone : new FormControl(''),
  email : new FormControl(''),
  tipo : new FormControl('')
  })


  mensagem:string = '';

  onSave(){
    //chama o serviço para gravar as informações no banco de dados//
    let dados = this.formulario.value
    this.usuarioService.salvar(dados).subscribe({
    next:(res)=>{
      console.log(res)
      this.mensagem = 'Usuario adicionado com sucesso!';
    },
    error:(erro)=>{
      console.log(erro)
      this.mensagem = 'Erro ao adicionar usuário.';
    }

    })
  }
  onCancelar(){
    this.formulario.reset()
  }
 //Busca os tipo e armazerna numa variavel
 arrTipos:any[] = [];

 buscaTipos(){
  this.tipoService.getTipos().subscribe({
   next:(res)=>{
    this.arrTipos = res.body;
    console.log(this.arrTipos);
   },
   error:(erro)=>{
    console.log(erro);
   }


  })
 }



}
