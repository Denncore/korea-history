import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ScrollingService } from 'src/app/scrolling.service';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { KoreaPageComponent } from 'src/app/korea-page.component';

@Component({
  selector: 'app-korea-conflict',
  templateUrl: './korea-conflict.component.html',
  styleUrls: ['./korea-conflict.component.scss']
})
export class KoreaConflictComponent extends KoreaPageComponent implements OnInit, OnDestroy {

  constructor(elementRef: ElementRef, renderer: Renderer2, router: Router, activatedRoute: ActivatedRoute) {
    super(elementRef, renderer, router, activatedRoute, {route: 'division', slide: 6}, {route: 'recent'});
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
