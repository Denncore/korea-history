import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { KoreaPageComponent } from 'src/app/korea-page.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-korea-live-in-north',
  templateUrl: './korea-live-in-north.component.html',
  styleUrls: ['./korea-live-in-north.component.scss']
})
export class KoreaLiveInNorthComponent extends KoreaPageComponent implements OnInit, OnDestroy {
  constructor(elementRef: ElementRef, renderer: Renderer2, router: Router, activatedRoute: ActivatedRoute) {
    super(elementRef, renderer, router, activatedRoute, {route: 'recent', slide: 6}, {route: 'south-korea'});
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent(): void {
    super.emitNextScrollValue();
  }
}
