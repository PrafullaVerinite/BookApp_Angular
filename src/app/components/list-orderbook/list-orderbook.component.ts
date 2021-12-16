import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orderbook } from 'src/app/entity/orderbook';
import { OrderBookService } from 'src/app/service/order-book.service';

@Component({
  selector: 'app-list-orderbook',
  templateUrl: './list-orderbook.component.html',
  styleUrls: ['./list-orderbook.component.css']
})
export class ListOrderbookComponent implements OnInit {
  orderBooks: Array<Orderbook> = [];
  // lstOrderBook: Orderbook=new Orderbook;
  // lstOrderBook: Array<Orderbook> = [];

  constructor(public orderbookService: OrderBookService,private router:Router) { }
  lstOrderBook!: Orderbook[];

  ngOnInit() {
    this.orderbookService.getOrderBook().subscribe(
       response =>
      //  {
      //    console.log(response);
      //  }
       this.handleSuccessfulResponse(response)
     );
   }

   handleSuccessfulResponse(response: Orderbook[]) {
     this.lstOrderBook = response;
   }
  //  updateorder(orderId:number){
  //     this.router.navigate(['/update',orderId]);
  //  }
}
