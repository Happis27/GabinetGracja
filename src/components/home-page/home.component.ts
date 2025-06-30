import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterModule, MatRippleModule, GalleryModule, MatIconModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public images: GalleryItem[] = [
        new ImageItem({ src: '/GabinetGracja/assets/galeria1/1.jpg' }),
        new ImageItem({ src: '/GabinetGracja/assets/galeria1/2.jpg' }),
        new ImageItem({ src: '/GabinetGracja/assets/galeria1/3.jpg' }),
        new ImageItem({ src: '/GabinetGracja/assets/galeria1/4.jpg' }),
        new ImageItem({ src: '/GabinetGracja/assets/galeria1/5.jpg' }),
        new ImageItem({ src: '/GabinetGracja/assets/galeria1/6.jpg' }),
        new ImageItem({ src: '/GabinetGracja/assets/galeria1/7.jpg' }),
        new ImageItem({ src: '/GabinetGracja/assets/galeria1/8.jpg' }),
        new ImageItem({ src: '/GabinetGracja/assets/galeria1/9.jpg' }),
    ];

    public images2: string[] = [
        '/GabinetGracja/assets/galeria2/1.jpg',
        '/GabinetGracja/assets/galeria2/2.jpg',
        '/GabinetGracja/assets/galeria2/3.jpg',
        '/GabinetGracja/assets/galeria2/4.jpg',
        '/GabinetGracja/assets/galeria2/5.jpg',
        '/GabinetGracja/assets/galeria2/6.jpg',
    ];
    public images3: GalleryItem[] = [
        new ImageItem({ src: '/GabinetGracja/assets/galeria3/1.jpg' }),
        new ImageItem({ src: '/GabinetGracja/assets/galeria3/2.jpg' }),
        new ImageItem({ src: '/GabinetGracja/assets/galeria3/3.jpg' }),
        new ImageItem({ src: '/GabinetGracja/assets/galeria3/4.jpg' }),
        new ImageItem({ src: '/GabinetGracja/assets/galeria3/5.jpg' }),
        new ImageItem({ src: '/GabinetGracja/assets/galeria3/6.jpg' }),
        new ImageItem({ src: '/GabinetGracja/assets/galeria3/7.jpg' }),
    ];
}
