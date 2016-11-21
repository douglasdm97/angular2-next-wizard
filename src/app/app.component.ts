import { Component, AfterViewInit, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private elem: ElementRef, private renderer: Renderer) { }

  ngAfterViewInit() {
    if (this.elem.nativeElement != null) {
      this.renderer.setElementAttribute(this.elem.nativeElement, 'unresolved', null);
    }
  }
}
