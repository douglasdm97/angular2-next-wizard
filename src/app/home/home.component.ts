import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'home works!';

  public constructor(private titleService: Title) { }

  public ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
