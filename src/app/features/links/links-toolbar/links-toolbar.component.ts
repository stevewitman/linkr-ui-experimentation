import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-links-toolbar',
  templateUrl: './links-toolbar.component.html',
  styleUrls: ['./links-toolbar.component.scss']
})
export class LinksToolbarComponent implements OnInit {
  @Input() activeAction: string;
  @Output() clickedAction = new EventEmitter();
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;

  more = false;

  constructor() { }

  ngOnInit(): void {
  }

  actionClicked(action) {
    this.clickedAction.emit(action);
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 500), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 500), behavior: 'smooth' });
  }


}
