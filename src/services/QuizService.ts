import {Injectable} from '@angular/core';

@Injectable()
export class QuizService {
  findAllQuizzes = () =>
    fetch(`http://localhost:3000/api/quizzes`)
    .then(response => response.json())

  findQuizById = (qid) =>
    fetch(`https://localhost:3000/api/quizzes/${qid}`)
    .then(response => response.json())
}
