import { Component, Input, OnInit } from '@angular/core';
import { Transference } from '../models/transference.model';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  transferences: any[] = [];

  constructor(private service: TransferService) { }

  ngOnInit(): void {
    this.service.getAllTransferences().subscribe((transferences: Transference[]) => {
      console.table(transferences);
      this.transferences = transferences;
    });
  }

}
