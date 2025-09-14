import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRippleModule } from '@angular/material/core';
import { FooterComponent } from '../components/footer/footer.component';
import { FacebookWidgetComponent } from '../components/facebook/facebook.component';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        MatRippleModule,
        RouterModule,
        HeaderComponent,
        MatSidenavModule,
        FooterComponent,
        FacebookWidgetComponent,
    ],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    protected title = 'grabinet-gracja';
    public isSidenavOpened = false;
    public activatedRoute = inject(ActivatedRoute);
    public router = inject(Router);

    public handleOpen = (isSidenavOpened: boolean): void => {
        this.isSidenavOpened = isSidenavOpened;
    };

    public footerText = signal('© 2025 Gabinet Gracja');

    public isActive = (url: string): boolean => {
        if (url === '') {
            return this.router.url === '/' || this.router.url === '';
        }
        return this.router.url.startsWith('/' + url);
    };

    onSidenavOpened(menuEl: HTMLElement): void {
        this.isSidenavOpened = true;
        menuEl.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
