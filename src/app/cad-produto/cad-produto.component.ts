import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cad-produto',
  templateUrl: './cad-produto.component.html',
  styleUrl: './cad-produto.component.scss'
})
export class CadProdutoComponent {

  constructor(private produtoservice:ProdutoService){}


  formulario = new FormGroup({
  id : new FormControl(''),
  nome : new FormControl(''),
  tipo : new FormControl(''),
  link : new FormControl(''),
  id_fabricante : new FormControl(''),
  valor : new FormControl(''),
  garantia : new FormControl(''),
  descricao : new FormControl('')
 
})
 onSave(){
  //mera mera//chama seriço para gravar as info no banco de dados//
  let dados = this.formulario.value
  this.produtoservice.salvar(dados).subscribe({
    next:(res)=> {
      console.log
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
