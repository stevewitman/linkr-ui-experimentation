import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  activeAction = '';

  constructor() { }

  ngOnInit(): void {
  }


  startAction(action) {
    console.log('Link Action Clicked:', action);
    this.activeAction = action;
  }
}
