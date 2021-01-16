import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KoreaPageComponent } from 'src/app/korea-page.component';

@Component({
  selector: 'app-korea-prehistory',
  templateUrl: './korea-prehistory.component.html',
  styleUrls: ['./korea-prehistory.component.scss']
})
export class KoreaPrehistoryComponent extends KoreaPageComponent implements OnInit, OnDestroy {
  constructor(elementRef: ElementRef, renderer: Renderer2, router: Router, activatedRoute: ActivatedRoute) {
    super(elementRef, renderer, router, activatedRoute, null, {route: 'division'});
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
