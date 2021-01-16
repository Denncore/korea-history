import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ScrollingService } from 'src/app/scrolling.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-korea-division',
  templateUrl: './korea-division.component.html',
  styleUrls: ['./korea-division.component.scss']
})
export class KoreaDivisionComponent implements OnInit, OnDestroy {
  private scrollingService: ScrollingService;
  private scrollSubject: Subject<number> = new Subject<number>();

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.pipe(take(1)).subscribe(queryParamMap => {
      const slide: number = queryParamMap.get('slide') ? parseInt(queryParamMap.get('slide'), 0) : 1;
      this.scrollingService = new ScrollingService(this.elementRef, this.renderer, this.router, this.scrollSubject,
        {route: 'prehistory', slide: 5}, {route: 'conflict'});
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
