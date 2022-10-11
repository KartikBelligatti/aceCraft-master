import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 // cartCount:number=0;
  //cartCount: number=0;

  constructor() {
    
   }
   getCartCount(){
    // this.cartSvc.getCartItems().subscribe (     
    //     (response) =>
    //      {        
    //       this.cartCount=response.length;
    //       console.log(this.cartCount);
    //      }
    //    )
    //  return this.cartCount;
   }
  // c= this.cartSvc.countSubject.subscribe((data) => {
  //   this.cartCount=data;
  //   console.log("Subscriber got data >>>>> "+ this.cartCount);
  // });
auth:boolean=false
cartCount: number=0;
  ngOnInit(): void {  
   
  
    // if(this.auth==true){
    //   this.getCartCount();
    // }
    
    // this.cartSvc.getCartItems().subscribe (     
    //   (response) =>
    //    {        
    //     this.cartCount=response.length;
    //     console.log(this.cartCount);
    //    }
    //  ) 
    // this.cartSvc.countSubject.subscribe (     
    //   (response) =>
    //    {        
    //     this.cartCount=response;
    //     console.log(this.cartCount);
    //    }
    //  ) 
  }
}