import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

export type FaqItem = { title: string; answer?: string };

@Component({
    selector: 'app-faq',
    standalone: true,
    imports: [CommonModule, MatExpansionModule, MatIconModule],
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
    @Input() items: FaqItem[] = [];

    // {
    //     title: 'Henna pudrowa',
    //     answer:
    //         'title' +
    //         '<br/><br/>' +
    //         'answer' +
    //         '<br/><br/>' +
    //         'answer' +
    //         '<br/><br/>' +
    //         'answer' +
    //         '<br/><br/>' +
    //         'answer',
    // },
}
