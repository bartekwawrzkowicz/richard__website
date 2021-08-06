import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Jamnik",
        author: "Wikipedia",
        text: "Jamnik – jedna z ras psów pochodząca z Niemiec. Niemiecka nazwa jamnika Dachshund oznacza w dosłownym tłumaczeniu borsuczy pies, etymologia nazwy związana jest z jego zbliżoną do borsuków budową oraz wykorzystywaniem tej rasy do polowania na zwierzęta ryjące nory. Podlega próbom pracy.Jamnik to pies małego wzrostu, o krótkich nogach i wydłużonym tułowiu. Krótkość ich nóg jest spowodowana dziedziczną achondrodystrofią, którą ludzie wykorzystali do stworzenia tej rasy."
    },
    {
        id: 2,
        title: "Rys historyczny",
        author: "Wikipedia",
        text: "Jego pochodzenie budzi wątpliwości, miłośnicy jamników twierdzą, że pochodzi ze starożytnego Egiptu. Wizerunki psów o długich tułowiach i krótkich nogach pojawiły się na ścianach świątyń. Już w starożytnym Egipcie istniały liczne rasy psów, z których część uwieczniono na płaskorzeźbach i posągach świątynnych. Archeolodzy znaleźli rysunki odpowiadające jamnikowi w świątyni w Bescheb. Naukowcy jednak nie są pewni, czy w tym przypadku chodzi o jamnika, czy o podobnego psa. Pierwsze europejskie wzmianki o jamnikach pochodzą ze średniowiecznych Niemiec. W XIV wieku można było przeczytać: Psy o krótkich nogach wchodzą o wiele łatwiej pod ziemię niż inne i są bardziej przydatne do polowań na borsuki. Rozpowszechnienie jamnika w Europie w XVI/XVII wieku zapoczątkowało wielokierunkowy rozwój tej rasy. Jednym z kierunków rozwoju była adaptacja jamnika do warunków zimowych, co objawiło się zmianami we wzorcu (masywniejsze łapy, skrócona kufa, większe uszy), który nie jest akceptowany w wielu krajach europejskich (jedynie w krajach skandynawskich). Jamnik adaptował się z trudem do chłodniejszego klimatu przez wiele dziesięcioleci, co było wynikiem wtórnego, lepszego przystosowania do ciepła. Innym kierunkiem rozwoju jamnika było przystosowanie go do różnego rodzaju polowań. Jamniki zatem były tresowane na: posokowce, psy zaganiające, buszujące, norowce. Zakres ich pracy nie ograniczał się tylko do wypłaszania borsuków z nory, gdzie jamnik był zdany sam na siebie, ale też do zaganiania dzików (jamniki szorstkowłose), buszowania w chaszczach i trzcinie oraz aportowania (długowłose). Obecnie jamniki dość często wykorzystuje się podczas polowań na lisy (potrafią wygonić zwierzę z nory), ale odchodzi się już od polowania przy ich pomocy na borsuki, gdyż są to zwierzęta zbyt niebezpieczne dla jamników."
    },
    {
        id: 3,
        title: "Charakter",
        author: "Wikipedia",
        text: "Jamniki to bardzo radosne, ruchliwe psy znane ze skłonności do ścigania małych zwierząt i ptaków. Cechuje je upór i nieustępliwość, co utrudnia ich tresurę. Szczekają wyjątkowo głośno, dlatego mają predyspozycję do bycia dobrym psem stróżującym. Znane są ze swojego przywiązania i lojalności w stosunku do właściciela. Są towarzyskie, jednak obcych traktują z rezerwą i nieufnością. Charakter jamnika może różnić się w zależności od jego odmiany. Długowłose psy są spokojniejsze. Mają wrodzoną inteligencję odziedziczoną po spanielach. Szorstkowłose natomiast charakteryzuje odwaga terrierów. Duża część jamników nie lubi nieznajomych ludzi i reaguje na nich szczekaniem i warczeniem. Chociaż najczęściej jamniki są bardzo energicznymi zwierzętami, zdarzają się też psy bardzo spokojne. Jamnik wymaga szczególnej troski i zainteresowania właściciela. Psy te mają szczególne wymagania jeśli chodzi o tresurę i rozrywkę. Wymagają dużo uwagi, w przeciwnym razie mogą stać się agresywne i groźne. Niektóre nie tolerują dzieci. Przy odpowiednim ułożeniu jamnik może bardzo zaprzyjaźnić się z dzieckiem."
    },
    {
        id: 4,
        title: "Wygląd ogólny",
        author: "Wikipedia",
        text: "Jamnik występuje w trzech odmianach wielkościowych: króliczej, miniaturowej i standardowej. Wzorzec tej rasy parametry wielkościowe i ciężar opisuje następująco: jamniki standardowe: obwód klatki piersiowej powyżej 35 cm, górna granica masy ciała ok. 9,0 kg. jamniki miniaturowe: obwód klatki piersiowej od 30 do 35 cm, mierzonej w wieku co najmniej 15 miesięcy. jamniki królicze: obwód klatki piersiowej do 30 cm, mierzonej w wieku co najmniej 15 miesięcy. Ze względu na długość i rodzaj sierści jamniki dzieli się w każdej z odmian wielkościowych na: krótkowłose, długowłose i szorstkowłose.Umaszczenie w tej rasie jest dopuszczalne w każdym kolorze, jednak wadą jest maść czysto czarna lub biała bez podpalania. Najczęściej występują jamniki rudobrązowe lub czarne podpalane. Jamniki szorstkowłose mają także umaszczenie dzicze. Waga jamnika standardowego (największej z odmian jamników) nie powinna przekroczyć 10 kg. Przeciętna długość życia osobników tej rasy to 15 lat."
    }
]

const ArticlePage = () => {

    const articlesList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))

    return (
        <div className="home-article">
            {articlesList}
        </div>
    );
}

export default ArticlePage;