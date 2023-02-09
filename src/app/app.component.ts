import { Component, OnInit } from '@angular/core';
import { SwitchService } from './services/switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  switchModal: boolean = false

  constructor(private RegSwitch:SwitchService) {}

  ngOnInit(): void {
    this.RegSwitch.$LookUpSwitch.subscribe((req) => this.switchModal =req)
  }

  openModal(): void {
    this.switchModal = true
  }
}
