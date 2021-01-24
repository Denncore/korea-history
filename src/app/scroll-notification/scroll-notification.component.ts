import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-notification',
  templateUrl: './scroll-notification.component.html',
  styleUrls: ['./scroll-notification.component.scss']
})
export class ScrollNotificationComponent implements AfterViewInit {

  @Input() center = false;

  @Input() showAfterInSeconds = 10;

  @ViewChild('scrollNavigation') scrollNavigation: ElementRef;
  private timeout: number;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.initTimeout();
  }

  private initTimeout(): void {
    this.timeout = window.setTimeout(() => {
      this.renderer.addClass(this.scrollNavigation.nativeElement, 'blink');
    }, this.showAfterInSeconds * 1000);
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent(): void {
    window.clearTimeout(this.timeout);
    this.renderer.removeClass(this.scrollNavigation.nativeElement, 'blink');
    this.initTimeout();
  }
}
