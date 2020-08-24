import { Component, OnInit } from '@angular/core';
import { hyphenate } from 'hyphen/en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'kendo-pdf-hyphenation';

  public romeoAndJulietPrologue = `
  Some of the Longest Words in English:
  Pneumonoultramicroscopicsilicovolcanoconiosis,
  Pseudopseudohypoparathyroidism,
  Floccinaucinihilipilification,
  Antidisestablishmentarianism,
  supercalifragilisticexpialidocious,
  Incomprehensibilities`;

  public romeoAndJulietPrologueHypenated: string;

  public ngOnInit(): void {
    hyphenate(this.romeoAndJulietPrologue).then(
      (result) => (this.romeoAndJulietPrologueHypenated = result)
    );
  }
}
