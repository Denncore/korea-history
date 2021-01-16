import { ElementRef, Renderer2 } from '@angular/core';
import { PageNavigation, ScrollingService } from 'src/app/scrolling.service';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

export class KoreaPageComponent {
  private scrollingService: ScrollingService;
  protected scrollSubject: Subject<number> = new Subject<number>();

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private previous: PageNavigation,
              private next: PageNavigation) {

  }

  protected onInit(): void {
    this.activatedRoute.queryParamMap.pipe(take(1)).subscribe(queryParamMap => {
      const slide: number = queryParamMap.get('slide') ? parseInt(queryParamMap.get('slide'), 0) : 1;
      this.scrollingService = new ScrollingService(this.elementRef, this.renderer, this.router, this.scrollSubject,
        this.previous, this.next);
      this.scrollingService.init(slide);
    });
  }

  protected onDestroy(): void {
    this.scrollingService.unsubscribe();
  }

  protected emitNextScrollValue(): void {
    const verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
    this.scrollSubject.next(verticalOffset);
  }
}
