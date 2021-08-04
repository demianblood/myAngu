// import {Component, OnInit} from '@angular/core';
// import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
//
// @Component({
//   selector: 'app-reactive-form',
//   templateUrl: './reactive-form.component.html',
//   styleUrls: ['./reactive-form.component.scss']
// })
// export class ReactiveFormComponent implements OnInit {
//
//
//
//   username = new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(7),this.customValidator]);
//   password = new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(10)]);
//
//   myForm: FormGroup = new FormGroup({
//     username: this.username,
//     password: this.password
//   })
//
//   constructor() {
//   }
//
//   ngOnInit(): void {
//   }
//
//   save() {
//     console.log(this.myForm)
//   }
//   customValidator(control:AbstractControl){
//     /*duck*/
//     console.log(control.value)
//     if(control.value.includes('duck')){
//       return {achtung:"duck word is present"}
//     }
//     return null;//->errors
//   }
// }
