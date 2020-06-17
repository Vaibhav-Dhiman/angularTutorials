import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test Server';
  serverCreatd = false;
  servers =  ['test server', 'test server2'];

  constructor() { 
    setTimeout(() => {
      this.allowServer = true;
    }, 2300);
  }

  ngOnInit() {
  }

  onServerCreated() {
    this.serverCreatd = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Was Created! Name is' + this.serverName;
  }

  onUpdateServerName(event: any) {
   this.serverName = (<HTMLInputElement>event.target).value;
  }
}
