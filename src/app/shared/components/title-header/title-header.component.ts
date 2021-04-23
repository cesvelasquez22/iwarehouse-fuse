import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchTextService } from '@core/utils/search-text.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-title-header',
  templateUrl: './title-header.component.html',
  styleUrls: ['./title-header.component.scss']
})
export class TitleHeaderComponent implements OnInit, OnDestroy {

  @Input() title: string;
  @Input() icon: string;
  @Input() section: string;
  @Input() color = 'accent';
  @Input() search: boolean;

  //
  // ─── SEARCH TEXT ────────────────────────────────────────────────────────────────
  //
  searchInput: FormControl = new FormControl();

  //
  // ─── UNSUBSCRIBE ALL ────────────────────────────────────────────────────────────
  //
  private unsubscribe$: Subject<any> = new Subject();

  constructor(
    private router: Router,
    private searchTextService: SearchTextService,
    ) 
  {
    if(!this.section){
      let url: string[] = this.router.url.split('/');
      this.section = url[1];
    }
  }

  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(value => {
      this.searchTextService.setValueToFind(value);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
