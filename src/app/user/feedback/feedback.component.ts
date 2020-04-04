import { Component, OnInit } from '@angular/core';
import * as Question from './Question.json';
import { QuestionBankComponent } from 'src/app/exam/question-bank/question-bank.component';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: any = Question.Quest;


  constructor() { }

  ngOnInit() {
    console.log(Question.Quest);
  }
  checkResult(questionNo: number, option: string) { console.log(questionNo+"-->>"+option) }
}
