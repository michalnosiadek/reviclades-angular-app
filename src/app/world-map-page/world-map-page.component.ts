import { Component } from '@angular/core';

@Component({
  selector: 'app-world-map-page',
  templateUrl: './world-map-page.component.html',
  styleUrls: ['./world-map-page.component.css'],
})
export class WorldMapPageComponent {
  openNavLeft() {
    const elem = document.getElementById('mySidebarLeft');
    const main = document.getElementById('main');
    if (elem) elem.style.width = '450px';
    if (main) main.style.marginLeft = '450px';
  }

  closeNavLeft() {
    const elem = document.getElementById('mySidebarLeft');
    const main = document.getElementById('main');
    if (elem) elem.style.width = '0';
    if (main) main.style.marginLeft = '0';
  }

  openNavRight() {
    const elem = document.getElementById('mySidebarRight');
    const main = document.getElementById('main');
    if (elem) elem.style.width = '450px';
    if (main) main.style.marginRight = '450px';
  }

  closeNavRight() {
    const elem = document.getElementById('mySidebarRight');
    const main = document.getElementById('main');
    if (elem) elem.style.width = '0';
    if (main) main.style.marginRight = '0';
  }
}
