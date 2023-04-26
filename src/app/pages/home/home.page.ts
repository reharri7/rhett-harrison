import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    this.meta.addTags([
      {name: 'description', content: 'Rhett Harrison. Software Engineer based in California. Bachelor\'s ' +
          'Degree in Software Engineering from Arizona State University.'},
      {name: 'author', content: 'Rhett Harrison'},
      {name: 'keywords', content: 'Rhett, Harrison, Software, SoftwareEngineer, ' +
          'Engineer, Angular, Rust, Java, SpringBoot, California, Computer'},
      {name: 'robots', content: 'index, follow'}
    ]);
    this.setTitle('Rhett Harrison');
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

}
