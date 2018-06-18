import {Component, OnInit, ViewChild} from '@angular/core';
import 'rxjs/add/operator/filter';
import {OrdersListItem} from '../classes/ordersListItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pane1: boolean;
  pane2: boolean;
  pane3: boolean;
  pane4: boolean;

  modelOrdersList: any = {};

  ordersList: OrdersListItem[] = [];

  private base64textString: String = '';
  private contentType: any;

  constructor() {
  }

  ngOnInit() {
    this.pane1 = false;
    this.pane2 = true;
    this.pane3 = false;
    this.pane4 = false;
  }

  setPageOne() {
    this.pane1 = true;
    this.pane2 = false;
    this.pane3 = false;
    this.pane4 = false;
  }

  setPageTwo() {
    this.pane1 = false;
    this.pane2 = true;
    this.pane3 = false;
    this.pane4 = false;
  }

  setPageThree() {
    this.pane1 = false;
    this.pane2 = false;
    this.pane3 = true;
    this.pane4 = false;
  }

  setPageFour() {
    this.pane1 = false;
    this.pane2 = false;
    this.pane3 = false;
    this.pane4 = true;
  }


  addOrdersListItem() {
    this.modelOrdersList.date = '2018-06-17';
    this.ordersList.push(this.modelOrdersList);
    this.modelOrdersList = {};
  }

  removeOrdersListItem() {

  }
  downloadPDF() {



  }

  openOrdersFile(base64) {
    const string = 'data:application/pdf;base64,' + base64;
    const iframe = '<iframe width=\'100%\' height=\'100%\' src=\'' + string + '\'></iframe>';
    const x = window.open();
    x.document.open();
    x.document.write(iframe);
    x.document.close();
  }

  ordersFileUpload(event) {

    const files = event.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    this.modelOrdersList.fileBase64 = this.base64textString;
  }

}
