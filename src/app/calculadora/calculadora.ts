import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// serve para capturar valores do formulário
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [ FormsModule, CommonModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss'
})
export class Calculadora {
      n1: number = 0;
      n2: number = 0;
      resultado: number = 0;
      // variavel que mostra mensagem diferente conforme o resultado
      mensagem: string = '';

      somarResultado(){
        this.resultado = this.n1 + this.n2;
        this.mensagem = "O resultado da soma é: ";
      }

      subResultado(){
        this.resultado = this.n1 - this.n2;
        this.mensagem = "O resultado da subtração é: ";
      }

      divResultado(){
        this.resultado = this.n1 / this.n2;
        this.mensagem = "O resultado da divisão é: ";
      }

      multResultado(){
        this.resultado = this.n1 * this.n2;
        this.mensagem = "O resultado da multiplicação é: ";
      }
}
