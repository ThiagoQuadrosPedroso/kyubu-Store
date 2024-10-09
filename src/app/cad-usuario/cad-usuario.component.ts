import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrl: './cad-usuario.component.scss'
})
export class CadUsuarioComponent {

  constructor(private usuarioService:UsuarioService){}

  formulario = new FormGroup({
  id : new FormControl(''),
  nome : new FormControl(''),
  sobrenome : new FormControl(''),
  idade : new FormControl(''),
  telefone : new FormControl(''),
  email : new FormControl(''),
  tipo : new FormControl('')
  })

  onSave(){
    //chama o serviço para gravar as informações no banco de dados//
    let dados = this.formulario.value
    this.usuarioService.salvar(dados).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(erro)=>{
      console.log(erro)
    }

    })
  }
  onCancelar(){
    this.formulario.reset()
  }


}
