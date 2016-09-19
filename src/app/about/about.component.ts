import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title = 'about works!';

  public constructor(private titleService: Title) { }

  public ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
