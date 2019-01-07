import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticlelistPage } from './articlelist';

@NgModule({
  declarations: [
    ArticlelistPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticlelistPage),
  ],
})
export class ArticlelistPageModule {}
