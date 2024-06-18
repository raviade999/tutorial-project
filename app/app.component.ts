import { Component } from '@angular/core';
import { CalculatorServiceService } from './calculator-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private calculatorService: CalculatorServiceService) { }

  num1!: number;
  num2!: number;
  result!: number;

  addition() {
    this.calculatorService.addition(this.num1, this.num2).subscribe((res) => {
      this.result = res;
    });
  }

  subtraction() {
    this.calculatorService.subtraction(this.num1, this.num2).subscribe((res) => {
      this.result = res;
    });
  }

   multiplication() {
    this.calculatorService.multiplication(this.num1, this.num2).subscribe((res) => {
      this.result = res;
    });
  }

  division() {
    this.calculatorService.division(this.num1, this.num2).subscribe((res) => {
      this.result = res;
    });
  }
}
