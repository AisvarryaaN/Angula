import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent { 

  @Input()
  name : String|undefined;

  @Output()
  valueToParent = new EventEmitter <String> ();

  goTo()
  {
    this.valueToParent.emit("Hello parent, this is from child!")
  }
  ngOnChanges():void{
    console.log("ngOnChanges Called!")
  }
  ngOnDestroy():void{
    console.log("ngOnDestroy Called!")
  }
}
  