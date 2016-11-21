import { Component, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor( @Inject(DOCUMENT) private doc: Document) { }

  ngAfterViewInit() {
    let body = this.doc.getElementsByTagName('body')[0];
    body.removeAttribute('unresolved');
  }
}
