import { Component } from '@angular/core';
import { FaqComponent, FaqItem } from '../../faq/faq.component';

@Component({
    selector: 'app-laser-therapy',
    imports: [FaqComponent],
    templateUrl: './laser-therapy.html',
    styleUrl: './laser-therapy.scss',
})
export class LaserTherapy {
    public faqItems: FaqItem[] = [
        {
            title: 'Laseroterapia',
            answer:
                'E-LIGHT – to nowoczesna technika medycyny estetycznej bazująca na tzw. impulsywnym źródle światła. Działanie urządzeń wykorzystywanych w tej technice jest podobne do działania lasera, jednak w przeciwieństwie do lasera (którego światło emituje spójną, skoncentrowaną wiązkę fali o jednej długości fali) emituje wiązki o szerokim spektrum niespójnych fal świetlnych różnej długości. Poszczególne wiązki docierają do różnych partii skóry i w zależności od potrzeby mogą uzyskiwać pożądane zmiany w tkankach. Poprzez zastosowanie odpowiednich filtrów pasmowych istnieje możliwość dotarcia energii świetlnej, która na odpowiednim poziomie (głębokości) zamienia się w energię cieplną i skutecznie leczy schorzenie, osiągając zamierzony efekt. W ten sposób do tkanek może dotrzeć wyłącznie promieniowanie odpowiednie dla danej patologii. Obszary zdrowej skóry nie ulegają uszkodzeniu, wiązka światła nie wnika w głąb organizmu, a jej działanie jest wyłącznie miejscowe. Zabiegi IPL nie mają skutków ubocznych i nie wymagają rezygnacji z normalnego trybu życia po wykonanym zabiegu. Próby kliniczne i kilkuletnie doświadczenia dowodzą iż są to metody zabiegowe bezpieczne i w porównaniu z tradycyjnymi metodami o wiele skuteczniejsze. Powszechnie najlepszą uznana metodą na całym świecie jest technologia IPL laserowa epilacja TBL jest najnowszą inwencją, specjalnie skonstruowaną aby dawać najbezpieczniejsze, najszybsze, najtrwalsze rezultaty w epuacji, leczeniu trądziku naczyniowego i przebarwień.' +
                '<br/><br/>' +
                'W efekcie ultradźwięki sondami wykorzystują wibracje dźwiękowe w celu redukcji zmarszczek czyniąc skórę mocniejszą i gładszą, stymulując mięśnie modelując sylwetkę.' +
                '<br/><br/>' +
                'Ultradźwięki przyspieszają katalizę i metabolizm komórkowy skóry, zamienić PH na zasadowe, złagodzić zapalenie, zakwasy oraz ból. Poprawiają oddychanie błony komórkowej, szybko uwalniają substancje odżywcze z kosmetyków (soneforeza). Idealnie dopełniają i wzmacniają szereg zabiegów dając spektakularne efekty regeneracji i odnowy skóry.',
        },
    ];
}
