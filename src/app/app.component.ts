import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';

  word: string|undefined;

  getData(e:any)
  {
    this.title = e;
  }
  flag=true;

  changeFlag()
  {
    this.flag=!this.flag;
    this .style="new2";
  }

  arr=[1,2,3]

  style = "new1";

  ngOnInit(): void{
    console.log("ngOnInit Called!")
  }

  ngDoCheck():void{
    console.log("ngDoCheck Called!")
  }


}

