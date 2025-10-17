import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Front-End';

  openMenu: boolean = false;
  toggleMenu() {
    this.openMenu = !this.openMenu;
  }

  download() {
    const link = document.createElement('a');
    link.href = 'assets/curriculo_Ronaldo_Sabino.pdf';
    link.download = 'Curriculo_Ronaldo_Sabino.pdf';
    link.click();
  }
}
