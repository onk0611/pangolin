import { Component, OnDestroy } from '@angular/core';
import { UserService } from './services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Pangolin';
  subscriptions: Array<Subscription> = [];

  constructor(
    private userService: UserService,
  ) {
    // just testing out our api end point 
    this.subscriptions.push(
      this.userService.test().subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      )
    );
  }
    ngOnDestroy() {
      this.subscriptions.forEach((subscription) => {
        subscription.unsubscribe(); // Close all memory leaks
      });
    }
  
}
