import { Component } from '@angular/core';

@Component({
selector: 'app-server',
templateUrl: './server.component.html',
styles: [`
  .online {
    color: white;
  }
`]

})

export class ServerComponent {
// tslint:disable-next-line: ban-types
serverId: Number = 10;
// tslint:disable-next-line: ban-types
serverStatus: String = 'Offline';

constructor() {
  this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
}

getServerStatus() {
  return  this.serverStatus;
}

getColor() {
  return this.serverStatus === 'online' ? 'green' : 'red';
}
}
