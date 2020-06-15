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

  constructor() { 
    setTimeout(() => {
      this.allowServer = true;
    }, 2300);
  }

  ngOnInit() {
  }

  onServerCreated() {
    this.serverCreationStatus = 'Server Was Created! Name is' + this.serverName;
    this.serverCreatd = true;
  }

  onUpdateServerName(event: any) {
   this.serverName = (<HTMLInputElement>event.target).value;
  }
}
