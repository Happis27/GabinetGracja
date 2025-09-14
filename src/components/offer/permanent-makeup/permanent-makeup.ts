import { Component } from '@angular/core';
import { FaqComponent, FaqItem } from '../../faq/faq.component';

@Component({
    selector: 'app-permanent-makeup',
    imports: [FaqComponent],
    templateUrl: './permanent-makeup.html',
    styleUrl: './permanent-makeup.scss',
})
export class PermanentMakeup {
    public faqItems: FaqItem[] = [
        {
            title: 'Jak długo się utrzymuje?',
            answer: 'W zależności od typu i kolorytu skóry 2-5 lat. Gdy makijaż traci nasycenie, może zostać w każdym czasie odświeżony. Zaletą starego już jasnego makijażu jest możliwość dobrania jego zupełnie nowego wizerunku.',
        },
        {
            title: 'Jakie niesie ze sobą ryzyko?',
            answer: 'Używane przez nas pigmenty i potrzebne akcesoria posiadają dermatologiczne certyfikaty jakości z pozytywnym wynikiem, co oznacza, że używane są zgodnie z przepisami prawnymi i wymaganiami higieny. Nasze medyczne barwniki <b>zdobyły złoty medal</b> na międzynarodowych targach za najwyższą jakość i bezpieczeństwo.',
        },
        {
            title: 'Makijaż permanentny jest rozwiązaniem:',
            answer:
                '– dla wszystkich, którzy najchętniej wcale się nie malują (również sportowców i ludzi odwiedzających saunę), a mimo to chcieliby wyglądać piękniej i bardziej świeżo' +
                '<br/>' +
                '– dla kobiet, które mają mało czasu na makijaż' +
                '<br/>' +
                '– dla kobiet noszących okulary i szkła kontaktowe, które poprzez fakt, że słabo widzą, mają problemy z wykonaniem makijażu' +
                '<br/>' +
                '– dla wszystkich kobiet i mężczyzn z rzadkimi brwiami, małymi oczami, z bladymi ustami, lub ustami o nieregularnym kształcie, z rzadkimi rzęsami' +
                '<br/>' +
                '– dla wszystkich którzy chcieliby dokonać trwałej korekty swojej naturalnej urody',
        },
        {
            title: 'Pielęgnacja cery skłonnej do przebarwień z hiperpigmentacją',
            answer: 'Podczas rozmowy ustalamy kształt i kolor optymalny do typu Twojej urody. Makijaż permanentny powinien być bardzo naturalny i tylko podkreślać Twoją naturalną urodę. Najpierw nanosimy na skórę znieczulający fluid, ostrożnie pigmentujemy i delikatnie cieniujemy kontury aby były one czyste i bez zarzutów. Kontury i cienie są wówczas bardzo delikatne i jasne. Następnie na brwiach malujemy włoski, rzęsy kolorujemy tuż u nasady, a kontur ust lekko lub całkowicie cieniujemy. Zawsze podczas naszej pracy zwracamy uwagę na to, aby makijaż był jak najbardziej naturalny, tzn. zawsze pracujemy na różnych, indywidualne dobranych pigmentach, aby podkreślić naturalność. Oczy mają więcej wyrazu i wyglądają młodziej, usta są pełniejsze, a mimo to naturalne, a brwi, dzięki temu, że narysowaliśmy na nich włoski lub cień po których w rezultacie pozostaje tylko delikatna linia, są równomierne i gęste.',
        },
        {
            title: 'Jak długo się goi?',
            answer: 'Jedyna niedogodność po wykonanym makijażu to złuszczenie się naskórka na 3-4 dzień po zabiegu. Na przyspieszone gojenie ma wpływ odpowiednia pielęgnacja i natłuszczanie.',
        },
        {
            title: 'Technika pigmentu',
            answer:
                'Pracujemy opierając się na wysokiej technice i innowacyjnych metodach PUREBEAU. Pracujemy wyłącznie w obrębie naskórka, w którym nie występują naczynia krwionośne jak i receptory odczuwania bólu. Pracujemy naturalnie i chcemy tylko istniejące piękno poprzez naszą pracę podkreślić, wykorzystując wiedzę z zakresu wizażu twarzy.' +
                '<br/><br/>' +
                'Z naszą delikatną i zrozumiałą techniką wykonujemy następujące zabiegi:' +
                '<br/><br/>' +
                '<b>Tworzenie brwi:</b>' +
                '<br/>' +
                '- system wypełniania włosem (metodą piórkową)' +
                '<br/>' +
                '- system powierzchniowego lekkiego cienia' +
                '<br/><br/>' +
                '<b>Kreska na powiece:</b>' +
                '<br/>' +
                '- górna i dolna powieka' +
                '<br/><br/>' +
                '<b>Kontur ust:</b>' +
                '<br/>' +
                '- przyciemnienie ust' +
                '<br/>' +
                '- korekta ust' +
                '<br/>' +
                '- wypełnienie ust pigmentem',
        },
    ];
}
