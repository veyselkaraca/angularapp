import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/alertify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private alertify:AlertifyService) { }

  ngOnInit() {
    this.alertify.success("Hoşgeldiniz :)")
  }
  storage(){
    localStorage.setItem("deneme","deneme")
  }

}
