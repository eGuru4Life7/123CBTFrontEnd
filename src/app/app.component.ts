import { DOCUMENT } from '@angular/common';
import { Component, OnInit, HostListener, ElementRef, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, RouterState, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'khushiAurKhatoon';
  fadeIns: any;


  constructor(private el: ElementRef, private router: Router,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.handleRouteEvents();
  }

  ngOnInit() {
    this.fadeIns = this.el.nativeElement.querySelectorAll('.fade-in-l');
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
    this.applyFadeIn();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.applyFadeIn();
  }

  applyFadeIn() {
    this.fadeIns.forEach((fadeEl: any) => {
      const rect = fadeEl.getBoundingClientRect();
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      if (rect.top >= 0 && rect.top <= viewHeight) {
        fadeEl.classList.add('fade-in');
      }
    });
  }


  handleRouteEvents() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(this.router.routerState, this.router.routerState.root).join('-');
        this.titleService.setTitle(title);
        gtag('event', 'page_view', {
          page_title: title,
          page_path: event.urlAfterRedirects,
          page_location: this.document.location.href
        })
      }
    });
  }

  getTitle(state: RouterState, parent: ActivatedRoute): string[] {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data['title']) {
      data.push(parent.snapshot.data['title']);
    }
    if (state && parent && parent.firstChild) {
      data.push(...this.getTitle(state, parent.firstChild));
    }
    return data;
  }
}
