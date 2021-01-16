import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ScrollingService } from 'src/app/scrolling.service';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-korea-conflict',
  templateUrl: './korea-conflict.component.html',
  styleUrls: ['./korea-conflict.component.scss']
})
export class KoreaConflictComponent implements OnInit, OnDestroy {
  private scrollingService: ScrollingService;
  private scrollSubject: Subject<number> = new Subject<number>();

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.pipe(take(1)).subscribe(queryParamMap => {
      const slide: number = queryParamMap.get('slide') ? parseInt(queryParamMap.get('slide'), 0) : 1;
      this.scrollingService = new ScrollingService(this.elementRef, this.renderer, this.router, this.scrollSubject,
        {route: 'division'}, {route: 'recent'});
      this.scrollingService.init(slide);
    });
  }

  ngOnDestroy(): void {
    this.scrollingService.unsubscribe();
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent(): void {
    const verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
    this.scrollSubject.next(verticalOffset);
  }


}
