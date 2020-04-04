import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LoginComponent } from './global/login/login.component';
import { SignupComponent } from './global/signup/signup.component';
import { QuizzComponent } from './exam/quizz/quizz.component';
import { QuestionBankComponent } from './exam/question-bank/question-bank.component';
import { FeedbackComponent } from './user/feedback/feedback.component';
import {CodeComponent } from './exam/code/code.component'
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'quizz', component: QuizzComponent },
  { path: 'questionBank', component: QuestionBankComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'codepage', component: CodeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
