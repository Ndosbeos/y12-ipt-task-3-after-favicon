import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-trialpaper',
  templateUrl: './trialpaper.component.html',
  styleUrls: ['./trialpaper.component.css']
})
export class TrialpaperComponent implements OnInit {

  constructor(private link: ActivatedRoute, private route: Router) { }

  ngOnInit() {
  }
previouspage() {
  this.route.navigate(["home"]);
}
}