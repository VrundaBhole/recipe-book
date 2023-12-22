import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'practice';
  // clickedMsg = 'click here to see that';
  // serverCreated = false;
  // serverCratedd = '';
  // toggle = false;
  // log: any[] = [];

  // servers = ['test', 'test', 'tstt'];
  // clicked() {
  //   console.log('hello');
  //   this.clickedMsg = 'Welcome';
  // }
  // secondButton() {
  //   this.serverCreated = true;
  //   this.serverCratedd = 'Server Created succesfully';
  // }
  // getCOlor() {
  //   return 'red';
  // }

  // onToggleDisplay() {
  //   this.toggle = !this.toggle;
  //   this.log.push(this.log.length + 1);
  //   console.log(this.log);
  // }
  // getcolor(index:any){
  //   if(index>=5){
  //     return 'red'
  //   }
  //   else{
  //     return 'green'
  //   }

  // }
  loadedFeature='recipe';

  featureselected(eventdata:string){
    this.loadedFeature=eventdata;
    console.log(eventdata);
    

  }
}





