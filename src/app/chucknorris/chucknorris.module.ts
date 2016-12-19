import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeComponent } from './joke/joke.component';
import { JokeService } from './joke.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [JokeComponent],
  declarations: [JokeComponent],
  providers: [JokeService]
})
export class ChucknorrisModule { }
