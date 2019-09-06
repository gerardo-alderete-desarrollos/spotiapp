import { Component, OnInit, HostListener } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeService } from '../../home/home.service';

@Component({ 
  selector: 'app-modal-bottom',
  templateUrl: './modal-bottom.component.html',
  styleUrls: ['./modal-bottom.component.css']
})
export class ModalBottomComponent  {
  public formGroup: FormGroup;
  hide = true;

  isLogin = false;
  isSignin = false;
  isSelect = false;

  constructor(private bottomSheetRef: MatBottomSheetRef<any>,
    fb: FormBuilder,
    private homeService: HomeService) {
      this.formGroup = fb.group(
        {
        'nombre': ['',  ],
        'email' : ['', Validators.required ],
        'password': ['', Validators.required ]
      });
    }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
  login() {
    const { email , password } = this.formGroup.value;
    this.homeService.auth( email, password);
    this.bottomSheetRef.dismiss();

  }
  signIn() {
    this.homeService.signIn( this.formGroup.value );
    this.bottomSheetRef.dismiss();
  }
  enter() {
    console.log('enter');
  }


}
