import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../data.service";
@Component({
  selector: 'app-hscpaper',
  templateUrl: './hscpaper.component.html',
  styleUrls: ['./hscpaper.component.css']
})
export class HscpaperComponent implements OnInit {

  constructor(private ds: DataService, private link: ActivatedRoute, private route: Router) { }
pdfsrc;
id;
pdfyear;

  ngOnInit() {

     this.id=this.link.snapshot.paramMap.get("id");
this.pdfyear = this.ds.getRecordNotice(this.id)
this.pdfsrc = this.pdfyear.src + "#toolbar=0&navpanes=0&scrollbar=0"

  }

}