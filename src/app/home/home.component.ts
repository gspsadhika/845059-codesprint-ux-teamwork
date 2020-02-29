import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.runCarousel();
  }

  runCarousel(){
    setTimeout(()=>{
        $(".carousel").carousel('next')
        setTimeout(()=>{
            $(".carousel").carousel('next')
            this.runCarousel()
        },10000)
    },3000);
}
gotoPlaceOrder(){
  this.router.navigate(["/placeorder"])
}

}
