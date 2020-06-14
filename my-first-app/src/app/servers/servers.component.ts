import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer = false;
  serverCreationStatus = 'No server was created';

  constructor() { 
    setTimeout(() => {
      this.allowServer = true;
    }, 2300);
  }

  ngOnInit() {
  }

  onServerCreated() {
    this.serverCreationStatus = 'Server Was Created !';
  }

}
