import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../data.service";
@Component({
  selector: 'app-hscmain',
  templateUrl: './hscmain.component.html',
  styleUrls: ['./hscmain.component.css']
})
export class HscmainComponent implements OnInit {

  constructor(private link: ActivatedRoute, private route: Router) { }
id;
  ngOnInit() {
         this.id=this.link.snapshot.paramMap.get("id");
  }
previouspage() {
  this.route.navigate(["home"]);
}
}