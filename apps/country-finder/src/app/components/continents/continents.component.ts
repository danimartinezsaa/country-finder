import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Continent } from '@pfc/wbconsumer';
import { Observable } from 'rxjs';
import { ContinentsService } from '../../services/continents.service';

@Component({
  styleUrls: ['./continents.componet.scss'],
  templateUrl: './continents.component.html',
  selector: 'c-finder-continents',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContinentsComponent implements OnInit{
  continents$: Observable<Continent[]>;

  constructor(
    private continensService: ContinentsService,
  ) {}

  ngOnInit(): void {
    this.continents$ = this.continensService.getContinents$();
  }

  selectContinent(continent: Continent): void {
    this.continensService.selectRegion(continent);
  }
}
