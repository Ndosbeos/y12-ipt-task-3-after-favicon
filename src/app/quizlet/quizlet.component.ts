import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-quizlet',
  templateUrl: './quizlet.component.html',
  styleUrls: ['./quizlet.component.css']
})
export class QuizletComponent implements OnInit {

  constructor(private link: ActivatedRoute, private route: Router) { }

  ngOnInit() {
  }
previouspage() {
  this.route.navigate(["multimediahome"]);
}
}