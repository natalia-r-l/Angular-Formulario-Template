import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultCepService } from '../services/consult-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private consultaCepService: ConsultCepService) { }

  ngOnInit(): void {
  }

 
  consultaCEP(ev: any, form: NgForm) {
    const cep = ev.target.value;
    if(cep !== ''){
      this.consultaCepService.getConsultaCep(cep).subscribe((resultado) =>
      {       
        this.populandoEndereco(resultado, form);
      });
    }
  }

  populandoEndereco(dados: any, form: NgForm) {
    form.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf,
    });
  }
  
  cadastrar(form: NgForm){    
    if(form.valid){
      this.router.navigate(['/sucesso'])
    } else {
      alert('Formulario inválido');
    }     
  }
}
