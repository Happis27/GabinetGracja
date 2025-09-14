import { Component, Input, OnChanges, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-facebook-widget',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './facebook.component.html',
    styleUrls: ['./facebook.component.scss'],
})
export class FacebookWidgetComponent {
    @Input() pageUrl = 'https://www.facebook.com/p/Gracja-Gabinet-Kosmetyczny-100063517722678/';
}
