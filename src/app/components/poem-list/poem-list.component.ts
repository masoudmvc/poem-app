import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoemIteractionService } from 'src/app/shared/business-services/poem-iteraction.service';
import { PoemService } from 'src/app/shared/business-services/poem.service';
import { Poem } from 'src/app/shared/models/poem.model';

@Component({
  selector: 'app-poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.css']
})
export class PoemListComponent implements OnInit {

  poemsWithoutFavorite: Poem[] = [];
  favoritePoem: Poem[] = [];
  toggleFlag = false;
  defaultSort: 'title' | 'author' = 'author';

  constructor(
    private poenService: PoemService,
    private poemInteractionService: PoemIteractionService,
    private router: Router) { }

  ngOnInit(): void {
    this.prepareModels();
  }

  prepareModels() {
    if(this.poenService.list?.length > 0) {
      this.poemsWithoutFavorite = this.poenService.list;
      this.favoritePoem = this.poenService.list.filter(x => x.isFavorite);
      this.orderBy(this.defaultSort);
    } else {
      this.router.navigate(['/']);
    }
  }

  showDropdown() {
    this.toggleFlag = !this.toggleFlag;
  }

  orderBy(param: 'title' | 'author') {
    this.toggleFlag = false;
    switch (param) {
      case 'author':
        this.poemsWithoutFavorite = this.poemsWithoutFavorite.sort((a, b) => a.author.localeCompare(b.author));
        this.favoritePoem = this.favoritePoem.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case 'title':
        this.poemsWithoutFavorite = this.poemsWithoutFavorite.sort((a, b) => a.title.localeCompare(b.title));
        this.favoritePoem = this.favoritePoem.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
  }

  selectPoem(poem: Poem) {
    this.poemInteractionService.setSelectedPoem(poem);
    this.router.navigate(['/detail']);
  }

  trackByFn(index: number) {
    return index;
  }

}
