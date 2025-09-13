import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';

@Component({
    selector: 'app-about-us',
    standalone: true,
    imports: [CommonModule, GalleryModule, RouterModule],
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
    public images: GalleryItem[] = [
        new ImageItem({ src: '/assets/galeria4/1.jpg' }),
        new ImageItem({ src: '/assets/galeria4/2.jpg' }),
        new ImageItem({ src: '/assets/galeria4/3.jpg' }),
        new ImageItem({ src: '/assets/galeria4/4.jpg' }),
        new ImageItem({ src: '/assets/galeria4/5.jpg' }),
        new ImageItem({ src: '/assets/galeria4/6.jpg' }),
        new ImageItem({ src: '/assets/galeria4/7.jpg' }),
        new ImageItem({ src: '/assets/galeria4/8.jpg' }),
        new ImageItem({ src: '/assets/galeria4/9.jpg' }),
        new ImageItem({ src: '/assets/galeria4/10.jpg' }),
        new ImageItem({ src: '/assets/galeria4/11.jpg' }),
        new ImageItem({ src: '/assets/galeria4/12.jpg' }),
    ];

    public images2: string[] = [
        '/assets/galeria2/1.jpg',
        '/assets/galeria2/2.jpg',
        '/assets/galeria2/3.jpg',
        '/assets/galeria2/4.jpg',
        '/assets/galeria2/5.jpg',
        '/assets/galeria2/6.jpg',
    ];

    public images5: GalleryItem[] = [
        new ImageItem({ src: '/assets/galeria5/1.jpg' }),
        new ImageItem({ src: '/assets/galeria5/2.jpg' }),
        new ImageItem({ src: '/assets/galeria5/3.jpg' }),
        new ImageItem({ src: '/assets/galeria5/4.jpg' }),
        new ImageItem({ src: '/assets/galeria5/5.jpg' }),
        new ImageItem({ src: '/assets/galeria5/6.jpg' }),
        new ImageItem({ src: '/assets/galeria5/7.jpg' }),
        new ImageItem({ src: '/assets/galeria5/8.jpg' }),
        new ImageItem({ src: '/assets/galeria5/9.jpg' }),
        new ImageItem({ src: '/assets/galeria5/10.jpg' }),
        new ImageItem({ src: '/assets/galeria5/11.jpg' }),
        new ImageItem({ src: '/assets/galeria5/12.jpg' }),
        new ImageItem({ src: '/assets/galeria5/13.jpg' }),
    ];

    public images6: GalleryItem[] = [
        new ImageItem({ src: '/assets/galeria6/1.jpg' }),
        new ImageItem({ src: '/assets/galeria6/2.jpg' }),
        new ImageItem({ src: '/assets/galeria6/3.jpg' }),
        new ImageItem({ src: '/assets/galeria6/4.jpg' }),
        new ImageItem({ src: '/assets/galeria6/5.jpg' }),
        new ImageItem({ src: '/assets/galeria6/6.jpg' }),
        new ImageItem({ src: '/assets/galeria6/7.jpg' }),
        new ImageItem({ src: '/assets/galeria6/8.jpg' }),
        new ImageItem({ src: '/assets/galeria6/9.jpg' }),
        new ImageItem({ src: '/assets/galeria6/10.jpg' }),
        new ImageItem({ src: '/assets/galeria6/11.jpg' }),
        new ImageItem({ src: '/assets/galeria6/12.jpg' }),
        new ImageItem({ src: '/assets/galeria6/13.jpg' }),
        new ImageItem({ src: '/assets/galeria6/14.jpg' }),
        new ImageItem({ src: '/assets/galeria6/15.jpg' }),
        new ImageItem({ src: '/assets/galeria6/16.jpg' }),
        new ImageItem({ src: '/assets/galeria6/17.jpg' }),
        new ImageItem({ src: '/assets/galeria6/18.jpg' }),
        new ImageItem({ src: '/assets/galeria6/19.jpg' }),
        new ImageItem({ src: '/assets/galeria6/20.jpg' }),
        new ImageItem({ src: '/assets/galeria6/21.jpg' }),
        new ImageItem({ src: '/assets/galeria6/22.jpg' }),
        new ImageItem({ src: '/assets/galeria6/23.jpg' }),
        new ImageItem({ src: '/assets/galeria6/24.jpg' }),
        new ImageItem({ src: '/assets/galeria6/25.jpg' }),
        new ImageItem({ src: '/assets/galeria6/26.jpg' }),
        new ImageItem({ src: '/assets/galeria6/27.jpg' }),
    ];
}
