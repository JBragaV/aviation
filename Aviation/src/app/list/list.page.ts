import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  public items: Array<{ title: string; ipt: string }> = [];
  constructor() {
    for (let i = 1; i < 31; i++) {
      this.items.push({
        title: 'Vaga ' + i,
        ipt: "<ion-input></ion-input>"
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
