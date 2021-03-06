import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KoreaPageComponent } from 'src/app/korea-page.component';

@Component({
  selector: 'app-korea-recent',
  templateUrl: './korea-recent.component.html',
  styleUrls: ['./korea-recent.component.scss']
})
export class KoreaRecentComponent extends KoreaPageComponent implements OnInit, OnDestroy {
  constructor(elementRef: ElementRef, renderer: Renderer2, router: Router, activatedRoute: ActivatedRoute) {
    super(elementRef, renderer, router, activatedRoute, {route: 'conflict', slide: 20}, {route: 'north-korea'});
  }

  ngOnInit(): void {
    super.onInit();
  }

  ngOnDestroy(): void {
    super.onDestroy();
  }


  @HostListener('window:scroll', ['$event'])
  onScrollEvent(): void {
    super.emitNextScrollValue();
  }

}
