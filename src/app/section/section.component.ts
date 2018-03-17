import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SectionClass } from '../form-data/form-data.class';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent implements OnInit {
  @Input() sectionData: SectionClass;
  @Input() form: FormGroup;
  colWidth: number;

  ngOnInit() {
    /**
     * As we're using Bootstrap standard 12 column grid, we have to reverse
     * expected column amount to "bootstrap" column width.
     *
     * There's no spec for this task, how many columns can we have, so I'll just go
     * with assumption that we can't have more than 4? Please? ;)
     * But just in case we have a checker here.
     *
     * @type {number}
     */
    if (this.sectionData.columns > 4) {
      this.sectionData.columns = 4;
    }
    this.colWidth = (12 / this.sectionData.columns);

  }

}
