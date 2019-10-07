import { Component } from '@angular/core';
import { BeersService } from "../services/beers.service";
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listBeer: Array<any>;
  constructor(
    private _beerService: BeersService,
    private printer: Printer
  ) {
    this.getListBeers()
  }

  getListBeers() {
    this._beerService.getAllBeers().subscribe(response => {
      console.log(response);
      this.listBeer = response;
    });
  }

  print() {
    console.log(this.printer)
    this.printer.isAvailable().then( () => {}, () => {} );
    // this.printer.isAvailable().then(value => {
    //   console.log("isAvailable", value);
    // }).catch(error => {
    //   // cordova_not_available
    //   console.log("ERROR");
    //   console.log(error);
    // });
    
    let name = "My Beers";
    let options: PrintOptions = {
      name: name,
      duplex: true,
      landscape: true,
      bounds: [0, 0, 0, 0]
    };
    let style = `<style>
      table{width:100%;}
      tbody tr{background:rgb(239, 239, 239)!important;}
      .radioB,tbody td{text-align:center}
      .item-md ion-avatar ion-img,
      .item-md ion-avatar
      img{border-radius:50%;overflow:hidden;width:40px;height:40px}
      img{max-width:100%;border:0}
      .item-block ion-avatar{display:none}
      .item-block{display:flex;margin:0;padding:0;text-align:initial;overflow:hidden;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;border:0;font-weight:400;line-height:normal;text-decoration:none;color:inherit}td,th{display:table-cell;vertical-align:inherit}ion-item,ion-list-header{padding-left:0!important}
      .item-inner{border:none!important}
      .radioB{background-color:#f0f5ff!important;border:1px solid #e6e9ee;border-radius:2px;padding:5px}
      td,th{padding:1px 3px;border:1px solid #333}th img{width:70px}td{white-space:nowrap}ion-scroll
      .scroll-content{padding-top:0!important;padding-left:0!important}
      table{font-family:"Trebuchet MS",sans-serif;font-size:18px;font-weight:700;line-height:1em;font-style:normal;border-collapse:separate}
      th{font-size:20px;color:#fff;border:2px solid #FFF;border-bottom:3px solid #fff;background-color:#9DD929;-webkit-border-top-left-radius:5px;-webkit-border-top-right-radius:5px;-moz-border-radius:5px 5px 0 0;border-top-left-radius:5px;border-top-right-radius:5px}th:empty{background:0 0;border:none}
      tbody td{color:#000;padding:1px 4px;border:2px solid #FFF;-moz-border-radius:2px;-webkit-border-radius:2px;border-radius:2px}
      table td ion-item{background:0 0!important}
      ion-label h2{margin:0;}
      </style>`;


    var divToPrint = document.getElementById("listBeer").cloneNode(true);
    //var divToPrint2 = document.getElementById("image").cloneNode(true);
    this.printer.print(style + divToPrint["outerHTML"], options).then(() => { }, () => { });
  }

}
