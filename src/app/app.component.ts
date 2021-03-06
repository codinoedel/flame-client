import { Component, DoCheck } from '@angular/core';
import { ClientTokenService } from './client-token/client-token.service';
import { LockService } from './lock/lock.service';
import { FireService } from './fire/fire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'app';
  lockState;

  constructor(private lock: LockService, private fire: FireService) { }

  handleArmEvent(event): void {
    if (event === 'ARM') this.lock.arm()
    else this.lock.disarm()
  }

  handleFireEvent({ channel, action }): void {
    this.fire.setChannel(channel, action);
  }

  ngDoCheck() {
    this.lockState = this.lock.lockState
  }
}
