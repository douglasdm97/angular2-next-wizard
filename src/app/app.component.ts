import { Component, AfterViewInit, Inject, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title: string = 'NG Bootstrap Template';

  constructor(private elem: ElementRef,
    private renderer: Renderer,
    @Inject('title') private titleService) { }

  ngAfterViewInit() {
    if (this.elem.nativeElement != null) {
      this.renderer.setElementAttribute(this.elem.nativeElement, 'unresolved', null);
    }
    this.titleService.setTitle(this.title);
  }
}
