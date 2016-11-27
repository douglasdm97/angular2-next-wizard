import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  title: string = 'Angular 2 powered Bootstrap';
  constructor(@Inject('title') private titleService) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
