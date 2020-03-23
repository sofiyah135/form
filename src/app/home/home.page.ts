import { Component } from '@angular/core';
import { SessionService } from '../session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  assessment_id;
  status = "";
  score = "";
  problem = "";
  datetime = "";
  // todo = {}
  constructor(
              private session: SessionService,
              private router: Router
  ) {}

  // testAbc() {
  //   console.log(this.todo)
  // }
  insert() {
    this.session.ajax(this.session.api + "add_problem.php", {
      status: this.status,
      score: this.score,
      problem: this.problem,
    }, true).then((res: any) => {
      if (res.status == true) {
        this.session.showAlert(res.message).then(rs => {
          this.router.navigateByUrl('/home');
        });
      } else {
        this.session.showAlert(res.mwssage);
      }
    }).catch(error => {
      this.session.showAlert(error);
    });
  }
}
