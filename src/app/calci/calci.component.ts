import { Component } from '@angular/core';

@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})
export class CalciComponent {

  public firstVariable: number;
  public secondVariable: number ;
  public result: number;

  onAdd(){
    this.result = this.firstVariable + this.secondVariable;
  }
  onSub(){
    this.result = this.firstVariable - this.secondVariable;
  }
  onMul(){
    this.result = this.firstVariable * this.secondVariable;
  }
  onDiv(){
    this.result = (this.firstVariable) / (this.secondVariable);
  }


}
