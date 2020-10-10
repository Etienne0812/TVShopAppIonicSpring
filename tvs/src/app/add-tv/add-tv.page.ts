import { ReturnStatement } from '@angular/compiler';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TVServiceService } from '../services/tvservice.service';

@Component({
  selector: 'app-add-tv',
  templateUrl: './add-tv.page.html',
  styleUrls: ['./add-tv.page.scss'],
})
export class AddTvPage implements OnInit {

  tvAddForm: FormGroup;
  

  constructor(public fb: FormBuilder, 
    private TVService: TVServiceService,
    private router: Router) {
    this.tvAddForm = this.fb.group({
      model: ['', [Validators.required, Validators.minLength(4)]],
      brand: ['', [Validators.required, Validators.minLength(4)]], 
      price: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.tvAddForm.valid) {
      return false;
      
    } else {
      let tv = {
        id: null,
        model: this.tvAddForm.value.model,
        brand: this.tvAddForm.value.brand, 
        price: this.tvAddForm.value.price
      }
      this.TVService.addTV(tv)
        .subscribe((res) => {
          this.router.navigateByUrl("/inventory");
        });
    }
  }

}
