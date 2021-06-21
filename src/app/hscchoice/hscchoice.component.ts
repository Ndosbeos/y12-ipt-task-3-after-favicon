import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: 'app-hscchoice',
  templateUrl: './hscchoice.component.html',
  styleUrls: ['./hscchoice.component.css']
})
export class HscchoiceComponent implements OnInit {

  constructor(private ds: DataService, private link: ActivatedRoute, private route: Router) { }
id;
pdfyear;
pdfsample
color
  ngOnInit() {
         this.id=this.link.snapshot.paramMap.get("id");
         this.pdfyear = this.ds.getRecordNotice(this.id)
         this.pdfsample = this.pdfyear.sample
         console.log(this.pdfsample)
         if(this.pdfsample == null){
           this.color = "red"
         }
         
  }
previouspage() {
  this.route.navigate(["hschome"]);
}
}