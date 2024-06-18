import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {

  constructor(private http: HttpClient) { }

  addition(num1: number, num2: number): Observable<number> {
    const para={num1,num2}
    return this.http.post<number>('http://localhost:8080/arithimatic/add',para);
  }

  subtraction(num1: number, num2: number): Observable<number> {
     const para={num1,num2}
    return this.http.post<number>('http://localhost:8080/arithimatic/sub',para);
  }

  multiplication(num1: number, num2: number): Observable<number> {
   const para={num1,num2}
    return this.http.post<number>('http://localhost:8080/arithimatic/mult',para);
  }

  division(num1: number, num2: number): Observable<number> {
   const para={num1,num2}
    return this.http.post<number>('http://localhost:8080/arithimatic/div', para);
  }
}
