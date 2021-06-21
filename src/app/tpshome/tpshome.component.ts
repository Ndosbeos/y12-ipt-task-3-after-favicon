import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-tpshome',
  templateUrl: './tpshome.component.html',
  styleUrls: ['./tpshome.component.css']
})
export class TpshomeComponent implements OnInit {

  constructor(private link: ActivatedRoute, private route: Router) { }

  ngOnInit() {
  }
previouspage() {
  this.route.navigate(["home"]);
}
}