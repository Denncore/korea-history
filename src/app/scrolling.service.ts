import { ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

interface Slide {
  number: number;
  elements: ElementRef[];
}

export interface PageNavigation {
  route: string;
  slide?: number;
}

export class ScrollingService {
  private lastSlide: number;
  private currentSlide = 1;
  private currentlyVisibleElements: ElementRef[] = [];
  private slides: Slide[];
  private subscription: Subscription;
  private readonly scrollBase = 5000000;

  constructor(private element: ElementRef,
              private renderer: Renderer2,
              private router: Router,
              private scrollSubject: Subject<number>,
              private previous?: PageNavigation,
              private next?: PageNavigation) {
    window.scrollTo(0, this.scrollBase);
  }


  public init(currentSlide: number): void {
    this.slides = this.getSlidesFromElements();
    this.currentSlide = currentSlide <= this.slides.length ? currentSlide : this.slides.length - 1;

    this.toggleAnimationClasses();
    this.subscribeToScroll();
  }

  public unsubscribe(): void {
    this.subscription.unsubscribe();
  }

  private getSlidesFromElements(): Slide[] {
    const slides: Slide[] = [];

    this.element.nativeElement.querySelectorAll('.animation-element').forEach((animationElement) => {
      const dataSlides = animationElement.getAttribute('data-slides') + '';
      dataSlides.split(',').map(slideString => parseInt(slideString, 0)).forEach(slideNumber => {
        // get the slide object from the stored array (-1 since the first slide starts with 1)
        let slideObject = slides.filter(slide => slide.number === slideNumber)[0];
        // no slideObject found...
        if (!slideObject) {
          // ...create a new one with an empty array
          slideObject = {number: slideNumber, elements: []};
          slides.push(slideObject);
        }
        // push the animationElements to the elements array since it should be visible on slide 1
        slideObject.elements.push(animationElement);
      });
    });
    this.lastSlide = slides.length - 1;
    return slides;
  }


  private toggleAnimationClasses(): void {
    const subtractArrays = (arr1, arr2) => arr1.filter(el => !arr2.includes(el));
    const elementsShouldBeVisible = this.slides.filter(slide => slide.number === this.currentSlide)[0].elements;
    const elementsToHide = subtractArrays(this.currentlyVisibleElements, elementsShouldBeVisible);
    this.toggleAnimationClass(elementsToHide);
    const elementsToShow = subtractArrays(elementsShouldBeVisible, this.currentlyVisibleElements);
    this.toggleAnimationClass(elementsToShow);
    this.currentlyVisibleElements = elementsShouldBeVisible;
  }

  private toggleAnimationClass(elements): void {
    elements.forEach((element => {
      this.renderer.addClass(element, 'animation-fade');

      const animationClass = element.getAttribute('data-animation');
      if (element.classList.contains(animationClass)) {
        this.renderer.removeClass(element, animationClass);
      } else {
        this.renderer.addClass(element, animationClass);
      }
    }));
  }

  private handleScroll(): void {
    const st = window.scrollY;
    if (st > this.scrollBase) {
      if (this.currentSlide < this.lastSlide) {
        this.currentSlide += 1;
      } else if (this.next) {
        let queryParams;
        if (this.next.slide) {
          queryParams = { queryParams: { slide: this.next.slide } };
        }
        this.router.navigate([this.next.route], queryParams);
      }
    } else if (st < this.scrollBase) {
      if (this.currentSlide > 1) {
        this.currentSlide -= 1;
      } else if (this.previous) {
        let queryParams;
        if (this.previous.slide) {
          queryParams = { queryParams: { slide: this.previous.slide } };
        }
        this.router.navigate([this.previous.route], queryParams);
      }
    }
    window.scrollTo(0, this.scrollBase);
    this.toggleAnimationClasses();
  }

  private subscribeToScroll(): void {
    this.subscription = this.scrollSubject
      .pipe(
        filter(scrollTop => scrollTop !== this.scrollBase),
        debounceTime(50)
      ).subscribe(() => {
        this.handleScroll();
      });
  }
}
