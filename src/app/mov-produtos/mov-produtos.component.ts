import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovimentacaoService } from '../movimentacao.service';

@Component({
  selector: 'app-mov-produtos',
  templateUrl: './mov-produtos.component.html',
  styleUrl: './mov-produtos.component.scss'
})
export class MovProdutosComponent {
  constructor(private movimentacaoService:MovimentacaoService){}

  formulario = new FormGroup({
    id : new FormControl(''),
    dtMovimentacao : new FormControl(''),
    produto : new FormControl(''),
    quantidade : new FormControl(''),
    tipo : new FormControl('')

  })

  onSave(){
    //chama mera mera//
    let dados = this.formulario.value
    this.movimentacaoService.salvar(dados).subscribe({
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
