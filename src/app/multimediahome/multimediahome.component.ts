import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-multimediahome',
  templateUrl: './multimediahome.component.html',
  styleUrls: ['./multimediahome.component.css']
})
export class MultimediahomeComponent implements OnInit {

  constructor(private link: ActivatedRoute, private route: Router) { }

  ngOnInit() {
  }

previouspage() {
  this.route.navigate(["home"]);
}
}