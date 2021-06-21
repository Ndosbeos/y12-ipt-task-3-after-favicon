import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-multimediapage',
  templateUrl: './multimediapage.component.html',
  styleUrls: ['./multimediapage.component.css']
})
export class MultimediapageComponent implements OnInit {

  constructor(private link: ActivatedRoute, private route: Router) { }

  ngOnInit() {
  }

}