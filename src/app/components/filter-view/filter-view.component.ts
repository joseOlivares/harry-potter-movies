import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-view',
  standalone: true,
  imports: [],
  templateUrl: './filter-view.component.html',
  styleUrl: './filter-view.component.css'
})
export class FilterViewComponent {


  runSearch(term = "", page = 1, event?: Event) {
    event?.preventDefault();
    console.log(term, page);
  }

}
