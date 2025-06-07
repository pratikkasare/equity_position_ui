import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EquityService } from '../../services/equity-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-equity-calc',
   imports: [FormsModule, NgFor,RouterLink],
  templateUrl: './equity-calc.html',
  styleUrl: './equity-calc.css'
})
export class EquityCalc {

   equities: any[] = [];
  
    constructor(private equityService: EquityService) { }
  
    ngOnInit(): void {
      this.equityService.getEquityPositions().subscribe(data => {
        this.equities = data;
      });
    }

}
