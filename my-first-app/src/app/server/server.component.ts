import { Component } from '@angular/core';

@Component({
selector: 'app-server',
templateUrl: './server.component.html'
})

export class ServerComponent {
// tslint:disable-next-line: ban-types
serverId: Number = 10;
// tslint:disable-next-line: ban-types
serverStatus: String = 'Offline';

getServerStatus() {
  return  this.serverStatus;
}
}
