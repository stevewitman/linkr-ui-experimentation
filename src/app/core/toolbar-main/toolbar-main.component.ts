import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-toolbar-main',
  templateUrl: './toolbar-main.component.html',
  styleUrls: ['./toolbar-main.component.scss']
})
export class ToolbarMainComponent implements OnInit, OnDestroy {
  user$ = this.authService.user$.subscribe();
  // isOwner = this.authService.user$.

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    console.log('>>>>> ISUSER: ', this.user$);
  }

  ngOnDestroy(): void {
    this.user$.unsubscribe();
  }

}
