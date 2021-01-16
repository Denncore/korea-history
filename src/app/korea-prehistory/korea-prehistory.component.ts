import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ScrollingService } from 'src/app/scrolling.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { debounceTime, filter, skip, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-korea-prehistory',
  templateUrl: './korea-prehistory.component.html',
  styleUrls: ['./korea-prehistory.component.scss']
})
export class KoreaPrehistoryComponent implements OnInit, OnDestroy {
  private scrollingService: ScrollingService;
  private scrollSubject: Subject<number> = new Subject<number>();

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private router: Router, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.queryParamMap.pipe(take(1)).subscribe(queryParamMap => {
      const slide: number = queryParamMap.get('slide') ? parseInt(queryParamMap.get('slide'), 0) : 1;
      this.scrollingService = new ScrollingService(this.elementRef, this.renderer, this.router, this.scrollSubject,
        null, {route: 'division'});
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