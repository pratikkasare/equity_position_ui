import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquityService } from '../../services/equity-service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-equity-form',
 imports: [FormsModule, NgFor],
  templateUrl: './equity-form.html',
  styleUrl: './equity-form.css'
})
export class EquityForm {

  equity: any = { tradeId:0,version:0,securityCode: '', quantity: 0 ,crudeType:'',transactionType:'',};
  isEditMode: boolean = false;

   options = [
        { value: 'Buy', label: 'Buy' },
        { value: 'Sell', label: 'Sell' }
      ];
  transactionType: string = 'Buy';

  constructor(private equityService: EquityService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.equityService.getEquityById(Number(id)).subscribe(data => {
        this.equity = data;
      });
    }
  }

  saveEquity() {
    if (this.isEditMode) {
      this.equityService.updateEquity(this.equity.tradeId, this.equity).subscribe(() => {
        this.router.navigate(['/equity']);
      });
    } else {
      this.equityService.createEquity(this.equity).subscribe(() => {
        this.router.navigate(['/equity']);
      });
    }
  }
}
