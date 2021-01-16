import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KoreaPageComponent } from 'src/app/korea-page.component';

@Component({
  selector: 'app-korea-division',
  templateUrl: './korea-division.component.html',
  styleUrls: ['./korea-division.component.scss']
})
export class KoreaDivisionComponent extends KoreaPageComponent implements OnInit, OnDestroy {

  constructor(elementRef: ElementRef, renderer: Renderer2, router: Router, activatedRoute: ActivatedRoute) {
    super(elementRef, renderer, router, activatedRoute, {route: 'prehistory', slide: 5}, {route: 'conflict'});
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
