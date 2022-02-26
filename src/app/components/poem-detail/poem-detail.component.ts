import { Component, OnDestroy, OnInit } from '@angular/core';
import { PoemIteractionService } from 'src/app/shared/business-services/poem-iteraction.service';
import { Poem } from 'src/app/shared/models/poem.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { PoemService } from 'src/app/shared/business-services/poem.service';

@Component({
  selector: 'app-poem-detail',
  templateUrl: './poem-detail.component.html',
  styleUrls: ['./poem-detail.component.css']
})
export class PoemDetailComponent implements OnInit, OnDestroy {

  poem: Poem | null = null;
  private ngUnSubscribe = new Subject();
  isFavorite?: boolean = false;

  constructor(
    private poenService: PoemService,
    private poemInteractionService: PoemIteractionService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPoem();
  }

  getPoem() {
    this.poemInteractionService.getSelectedPoem().pipe(takeUntil(this.ngUnSubscribe))
        .subscribe(poem => {
            if (poem) {
              this.poem = poem;
              this.isFavorite = poem.isFavorite;
              console.log(this.poem);
            } else {
              this.router.navigate(['/']);
            }
        });
  }

  back() {
    this.router.navigate(['/list']);
  }

  addToFavorite() {
    if(this.poem)
      this.poem.isFavorite = !this.poem.isFavorite;

      this.poenService.changePoemFavoriteStatus(this.poem as Poem)
      this.isFavorite = !this.isFavorite;
  }

  ngOnDestroy() {
    this.ngUnSubscribe.next();
    this.ngUnSubscribe.complete();
  }

}
