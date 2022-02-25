import { Component, OnDestroy, OnInit } from '@angular/core';
import { PoemIteractionService } from 'src/app/shared/business-services/poem-iteraction.service';
import { Poem } from 'src/app/shared/models/poem.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poem-detail',
  templateUrl: './poem-detail.component.html',
  styleUrls: ['./poem-detail.component.css']
})
export class PoemDetailComponent implements OnInit, OnDestroy {

  poem: Poem | null = null;
  private ngUnSubscribe = new Subject();

  constructor(
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
                  console.log(this.poem);
                } else {
                  this.router.navigate(['/']);
                }
            });
  }

  ngOnDestroy() {
    this.ngUnSubscribe.next();
    this.ngUnSubscribe.complete();
  }

}
