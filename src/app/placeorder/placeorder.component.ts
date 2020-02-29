import { Component, OnInit, ElementRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { onlyText } from '../shared/custom.validator';
import { PlaceOrderService } from '../services/placeorder.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: "app-placeorder",
  templateUrl: "./placeorder.component.html",
  styleUrls: ["./placeorder.component.css"]
})
export class PlaceOrderComponent implements OnInit {
  placeOrderForm: FormGroup;
  disableForm: boolean = false;

  constructor(private formBuilder: FormBuilder, private orderService:PlaceOrderService, private router: Router) {}

  ngOnInit() {
    this.placeOrderForm = this.formBuilder.group({
      id: [],
      amountINR: ["0", Validators.required],
      amountPaise: ["0", [Validators.required, Validators.min(0),Validators.max(99)]],
      rFirstName: ["", [Validators.required, onlyText]],
      rLastName: ["", [Validators.required, onlyText]],
      address: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      country: ["", Validators.required],
      pincode: ["", [Validators.required, Validators.min(100000), Validators.max(999999)]],
      bFirstName: ["", [Validators.required, onlyText]],
      bLastName: ["", [Validators.required, onlyText]],
      phoneNumber: this.formBuilder.group({
        code: ["+91"],
        digit1: ["",[Validators.required,Validators.min(1), Validators.max(9)]],
        digit2: ["",[Validators.required,Validators.min(0), Validators.max(9)]],
        digit3: ["",[Validators.required,Validators.min(0), Validators.max(9)]],
        digit4: ["",[Validators.required,Validators.min(0), Validators.max(9)]],
        digit5: ["",[Validators.required,Validators.min(0), Validators.max(9)]],
        digit6: ["",[Validators.required,Validators.min(0), Validators.max(9)]],
        digit7: ["",[Validators.required,Validators.min(0), Validators.max(9)]],
        digit8: ["",[Validators.required,Validators.min(0), Validators.max(9)]],
        digit9: ["",[Validators.required,Validators.min(0), Validators.max(9)]],
        digit10: ["",[Validators.required,Validators.min(0), Validators.max(9)]]
      }),
      email: ["", [Validators.required, Validators.email]]
    });
  }

  submit(){
    this.disableForm = true;
    this.orderService.saveOrder(this.placeOrderForm.value).subscribe(data => {
      $("#orderPlaceSuccess").modal("show");
      this.placeOrderForm.reset();
    })
    this.disableForm = true;
  }

  changePage(){
    $("#orderPlaceSuccess").modal("hide");
    this.router.navigate(["/home"]);
  }
}
