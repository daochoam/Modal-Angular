import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  FieldsFoms= [
    {
      Name:'CC',
      Type:'Number',
      Field:'Id'},
    {
      Name:'Name',
      Type:'text',
      Field:'Name'},
    {
      Name:'Last Name',
      Type:'text',
      Field:'LastName'},
    {
      Name:'Email',
      Type:'text',
      Field:'Email'},
    {
      Name:'Password',
      Type:'password',
      Field:'Password'},
    {
      Name:'Phone',
      Type:'Number',
      Field:'Phone'},
  ]

  constructor(private RegSwitch:SwitchService){  }

  ngOnInit(): void { }

  CloseModal(): void {
    this.RegSwitch.$LookUpSwitch.emit(false)
  }

  Guardar(): void {
  }
}
