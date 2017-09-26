import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-question-field',
  templateUrl: './simple-question-field.component.html',
  styleUrls: ['./simple-question-field.component.css']
})
export class SimpleQuestionFieldComponent implements OnInit {

  questions = [
    {
      question: "what is your name?",
    },
    {
      question: "How old are you?"
    },
    {
      question: "What is your profesion?",
    },
    {
      question: "How are you?"
    }
  ]

  responses: Array<Object> = [];

  questionText = "";
  currentQuestion = 0
  finishedQuestions = false;

  constructor() { }

  ngOnInit() {
  }

  onNextQuestion(){
    console.log(this.questions.length);
    console.log(this.currentQuestion + 1);
    console.log(this.questionText);
    if (this.currentQuestion + 1 > this.questions.length - 1){
      this.finishedQuestions = true;
    }else{
      let index: number = this.currentQuestion;
      this.responses.push(
        {
          question: this.questions[index].question,
          response: this.questionText
        }
      )
      this.questionText = "";
      this.currentQuestion +=1;
    }
  }

}
