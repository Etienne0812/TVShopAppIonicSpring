import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TV } from '../models/TV';
import { TVServiceService } from '../services/tvservice.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {

  tvs: TV[];

  constructor(private TVService: TVServiceService, private router: Router) { }

  ngOnInit() {
    this.getAllTVs();
  }

  ionViewWillEnter(){
    this.getAllTVs();
  }

  getAllTVs(){
    this.TVService.getTVs().subscribe( tvs => {
      this.tvs = tvs;
      console.log(tvs);
    });

  }
  
  deleteTV(id: number){
    this.TVService.deleteTV(id).subscribe( () => {
      this.getAllTVs();
    })
  }

  insertTV(){
    this.router.navigateByUrl("/add-tv");
  }

  updateTV(id: number){
    this.TVService.setCurrentTVId(id);
    this.router.navigateByUrl("/update-tv");
  }

}
