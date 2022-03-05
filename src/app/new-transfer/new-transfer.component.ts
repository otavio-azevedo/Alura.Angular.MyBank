import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Transference } from "../models/transference.model";
import { TransferService } from "../services/transfer.service";

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})

export class NewTransferComponent {

  constructor(private service: TransferService, private router: Router) { }

  value: number;
  destiny: string;

  transfer() {
    console.log("New transfer requested");
    const transfernce: Transference = { value: this.value, destiny: this.destiny };

    this.service.add(transfernce).subscribe(
      result => {
        console.log(result);
        this.cleanForm();
        this.router.navigateByUrl('resume');
      },
      error => console.error(error)
    );
  }

  cleanForm() {
    this.value = 0;
    this.destiny = '';
  }

}
