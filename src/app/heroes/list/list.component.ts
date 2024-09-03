import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[]= ['Spiderman', 'Ironman', 'Hulk', 'Strange'];
  public deletedHero?: string;

removeLasthero():void{

this.deletedHero = this.heroNames.pop();
 /* console.log(deleteHero);*/

}


}
