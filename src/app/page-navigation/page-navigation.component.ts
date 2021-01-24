import { Component, Input, OnInit } from '@angular/core';

interface NavLink {
  name: string;
  route: string;
  active?: boolean;
  slide?: number;
}

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss']
})
export class PageNavigationComponent implements OnInit {
  @Input() activeLinkPage: number;

  navLinks: NavLink[] = [
    {name: 'vorgeschichte', route: 'prehistory', slide: 2},
    {name: 'spaltung', route: 'division'},
    {name: 'krieg-und-streit', route: 'conflict'},
    {name: 'jüngste ereignisse', route: 'recent'},
    {name: 'leben in nordkorea', route: 'north-korea'},
    {name: 'leben in südkorea', route: 'south-korea'},
    {name: 'impressum', route: 'impressum'}
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.navLinks[this.activeLinkPage - 1].active = true;
  }

}
