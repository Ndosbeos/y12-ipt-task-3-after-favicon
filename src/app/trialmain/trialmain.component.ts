import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-trialmain',
  templateUrl: './trialmain.component.html',
  styleUrls: ['./trialmain.component.css']
})
export class TrialmainComponent implements OnInit {

  constructor(private link: ActivatedRoute, private route: Router) { }

  ngOnInit() {
  }
previouspage() {
  this.route.navigate(["home"]);
}
}