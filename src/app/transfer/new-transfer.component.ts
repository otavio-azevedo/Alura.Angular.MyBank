import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})

export class NewTransferComponent {

  @Output() onTransfer = new EventEmitter<any>(); // component event, can be used to emit objects to other components

  value: number;
  destiny: string;

  transfer() {
    console.log("New transfer requested");
    const object = { value: this.value, destiny: this.destiny };
    this.onTransfer.emit(object);

    this.cleanForm();
  }

  cleanForm(){
    this.value = 0;
    this.destiny = '';
  }

}
