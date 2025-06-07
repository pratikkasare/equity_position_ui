import { Component } from '@angular/core';
import { EquityService } from '../../services/equity-service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-equity-list',
  imports: [RouterLink,NgFor],
  templateUrl: './equity-list.html',
  styleUrl: './equity-list.css'
})
export class EquityList {

  equities: any[] = [];

  constructor(private equityService: EquityService) { }

  ngOnInit(): void {
    this.equityService.getAllEquity().subscribe(data => {
      this.equities = data;
    });
  }

  deleteEquity(id: number) {
    this.equityService.deleteEquity(id).subscribe(() => {
      this.equities = this.equities.filter(equity => equity.id !== id);
    });
  }
}
