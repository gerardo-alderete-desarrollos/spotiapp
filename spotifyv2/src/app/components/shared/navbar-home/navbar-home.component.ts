import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {
  public formGroup: FormGroup;

  limits  = [
    {value: 5},
    {value: 10},
    {value: 15},
    {value: 20},
    {value: 25},
    {value: 30},
    {value: 35},
    {value: 40},
    {value: 45},
    {value: 50},
  ];
  constructor( fb: FormBuilder,
    private utilities: UtilitiesService
    ) {
      this.formGroup = fb.group({
        'limits' : [10, Validators.required ]}
        );
    }

  ngOnInit() {
  }

  seleccionado( limit ) {
    console.log(limit.value);
    this.utilities.sendLimits(limit.value);
  }

}
