import { ReturnStatement } from '@angular/compiler';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TVServiceService } from '../services/tvservice.service';

@Component({
  selector: 'app-update-tv',
  templateUrl: './update-tv.page.html',
  styleUrls: ['./update-tv.page.scss'],
})
export class UpdateTvPage implements OnInit {

  tvUpdateForm: FormGroup;
  

  constructor(public fb: FormBuilder, 
    private TVService: TVServiceService,
    private router: Router) {
    this.tvUpdateForm = this.fb.group({
      model: ['', [Validators.required, Validators.minLength(4)]],
      brand: ['', [Validators.required, Validators.minLength(4)]], 
      price: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.tvUpdateForm.valid) {
      return false;
      
    } else {
      let tv = {
        id: null,
        model: this.tvUpdateForm.value.model,
        brand: this.tvUpdateForm.value.brand, 
        price: this.tvUpdateForm.value.price
      }
      this.TVService.addTV(tv)
        .subscribe((res) => {
          this.router.navigateByUrl("/inventory");
        });
    }
  }

}
