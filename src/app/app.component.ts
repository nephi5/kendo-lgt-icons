import { Component, OnInit } from '@angular/core';
import { hyphenate } from 'hyphen/en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'smartbanking-base';

  public longWords = `
  Some of the Longest Words in English:
  Pneumonoultramicroscopicsilicovolcanoconiosis,
  Pseudopseudohypoparathyroidism,
  Floccinaucinihilipilification,
  Antidisestablishmentarianism,
  supercalifragilisticexpialidocious,
  Incomprehensibilities`;

  public longWordsHyphenated: string;

  public ngOnInit(): void {
    hyphenate(this.longWords).then(
      (result) => (this.longWordsHyphenated = result)
    );
  }
}
