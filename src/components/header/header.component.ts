import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    @HostListener('window:scroll', [])
    public onWindowScroll() {
        this.isScrolled = window.scrollY > 0;
    }

    @Output()
    public sidenavToggleEvent = new EventEmitter<void>();

    public isScrolled = false;

    public toggleSidenav = (): void => {
        this.sidenavToggleEvent.emit();
    };

    @Input()
    public sidenavMenu = false;
}
