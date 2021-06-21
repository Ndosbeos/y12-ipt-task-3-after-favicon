import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: 'app-hscguide',
  templateUrl: './hscguide.component.html',
  styleUrls: ['./hscguide.component.css']
})
export class HscguideComponent implements OnInit {

  constructor(private ds: DataService, private link: ActivatedRoute, private route: Router) { }
id;
pdfyear;
pdfsrc
  ngOnInit() {
                 this.id=this.link.snapshot.paramMap.get("id");
         this.pdfyear = this.ds.getRecordNotice(this.id)
         this.pdfsrc = this.pdfyear.guide  + "#toolbar=0&navpanes=0&scrollbar=0"
  }

}