**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first landing page, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.
Primární cíl landing page: prodat účast na webináři.
Sekundární cíl: sběr e-mailových kontaktů rodičů v patičce webu.

**Úkol**
Vytvoř funkční web, který bude obsahovat:
Strukturovaný komentovaný HTML5 kód s validní sémantikou
Responzivní design (mobile-first přístup)
CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp 
Základní JavaScript pro interaktivitu (na jemné oživení stránek)
Dbej na bezpečnost webu (CSP hlavička a nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
Nedávej do soubor .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)

**Znalosti**
Zajisti rychlé načítání a optimalizovaný výkon
Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu


**Základní SEO**
Strukturuj nadpisy H1-H6
Přidej meta title a description na každé stránce
Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
Urči kanonickou url
Obrázkům dej alt popisky
Propoj stránky vnitřními odkazy
Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)


**Optimalizace obrázků**
Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.
**Vizuální hierarchie a čitelnost**
Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
Čitelné fonty s českou diakritikou
Správné řádkování (line-height 1.5-1.8 pro odstavce)
Nikdy nezarovnávej text do bloku
Optimální šířka řádku pro text (max 70% obrazovky)

**Layout**
Šířku celého webu dej na 90% obrazovky
Jasné oddělení sekcí a obsahových celků
Vyvážené použití bílého prostoru (white space)
Intuitivní navigace - logo vlevo, hamburger menu na mobilu pravo
Dej si záležet na patičce webu
Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
Stručné a srozumitelné texty
Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
Vizuální prvky podporující obsah (ikony, obrázky, grafika)
Logické uspořádání informací (nejdůležitější nahoře)
Chybová stránka (místo „404“ dej ikonu <i class="bi bi-emoji-frown"></i> a přidej ji na web pomocí příkazu v souboru .htaccess: ErrorDocument 404 /404.html)
Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

**Konzistence**
Jednotný styl tlačítek, karet a komponent
Stejný padding/margin napříč podobnými elementy
Stejné zaoblení prvků
Konzistentní ikonografie
Stíny karet pouze velmi jemné
Jednotný projev značky (brand voice)
Konzistentní použití barev napříč celým webem
Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

**Barevná paleta**
Omezený počet barev (2-3 hlavní + neutrální)
Primární barva pro CTA (call-to-action) tlačítka
Neutrální jemné barvy pro pozadí 
Pro text #333333
Brand barvy (HEX): 
 Barvy: - #FDCED7\
- #FFA5B7\
- #50343A\
- #FFF0F3\
- akcent #58D0DB

   - text: [#333333]

**Fonty**
Zvol nadpisový font Coiny, obsahový san-serif medium

**Struktura**
Landing page, bez menu
do hlavičky vlevo přidej logo na sirku.jpg

## Struktura landing page

1.  Video sekce s představením webináře\
2.  Hlavní titulek a podtitulek\, s obrázkem obrazky/detskezuby9.jpg, hned na to navazuje video, které zatím nahraď placeholderem, kde bude představený webinář
3.  Sekce „Pro koho je webinář"\
4.  Sekce „Co se naučíš"\
5.  Sekce „Jak webinář probíhá"\
6.  Sekce „O lektorovi"\
7.  FAQ sekce\
8.  Opakovaná CTA tlačítka

## Call to Action

Text tlačítka:\
**Chci vědět, jak na zuby svého dítěte**

Tlačítko použít vícekrát na stránce.

**Design**
Design hero sekce (celého webu) vytvoř podle vzoru, který ti dám před začátkem tvorby ve formátu jpg 

Na zbytku webu používej hravý, zábavný design

**Moderní design**
Layout: Bento grid nebo asymetrické rozvržení s velkým bílým prostorem                               
Typografie: Velké nadpisy na hero sekci
Barvy: Jemné gradienty, plynulé přechody
Prvky: Zaoblené rohy (border-radius 16-24px),  3D prvky
Animace: Mikro interakce na hover, velmi jemné scroll animace 

**obrázky**
Na webu použij fotky, které najdeš ve složce Obrazky

**texty**
Na webu použij tyto texty pro jednotlivé sekce. Drž se jich doslova a nic neměň ani nepřidávej. 

# Zuby bez kazu začínají u mámy, která ví, jak na to

Možná si říkáš:
„Snad to dělám dobře…“
„Nechci, aby moje dítě řešilo kaz tak brzy…“
„Ale nikdo mi pořádně neřekl, jak na to.“

Jako dentální hygienistka vidím každý den děti, které už mají problémy.
Jako máma ale vím, že rodiče nedělají chyby schválně — jen často nemají jasné informace.

Proto jsem vytvořila krátký online webinář pro maminky, které chtějí mít klid v hlavě a jistotu v péči o zuby svých dětí.

Tlačítko: 👉 *Přihlas se na webinář a získej jistotu*

---

# Pro koho je webinář

Pro maminky dětí od narození do 5 let, které:

•  chtějí předejít kazu a problémům se zuby
•  nechtějí boj při čištění
•  chtějí vědět, co opravdu funguje
 chtějí mít jasno v tom, kdy začít a jak postupovat

Součástí webináře je také krátká část věnovaná maminkám samotným --\
jak v každodenním shonu nezapomenout pečovat i o vlastní zuby a zdraví
úst.

Tlačítko: Chci vědět, jak na zuby svého dítěte

**v této sekci použij na místo odrážek ikonky ze složky Ikonky - dej je jako 4 sloupce vedle sebe**

---

# Co se během 30 minut naučíš

•  kdy opravdu začít s péčí o zuby
•  jak správně čistit malé dítě
•  jak snížit riziko kazu
•  jak si vytvořit rutinu, která funguje doma
•  jak si čištění zubů zpříjemnit
•  jaký vliv má výživa a genetika

Získáš jasný plán péče o zuby svého dítěte — bez chaosu a bez dohadů.

Tlačítko: 👉 *Chci mít v péči o zuby jasno*

---

# Jak webinář probíhá

1. Přihlásíš se a zaplatíš symbolickou cenu 85 Kč
2. Ihned ti přijde e-mail s instrukcemi
3. V daný termín se připojíš online
4. Během 30 minut získáš praktické rady, které můžeš začít používat hned

Tlačítko: Chci vědět, jak na zuby svého dítěte

**tady použij timeline**



Součástí webináře je i doporučení kartáčků a past vhodných pro malé děti.

---

# Kdo tě webinářem provede

Jsem dentální hygienistka a zároveň máma dvou dětí.
Denně vidím v ordinaci následky špatné nebo opožděné péče o zuby u malých dětí.

Zároveň ale vím, jak vypadá realita doma s dítětem.
Proto předávám informace tak, aby byly srozumitelné, proveditelné a fungovaly v běžném životě.

**vedle této sekce dej fotku ze složky Obrazky Vendy.jpg**

---

# Časté otázky rodičů

*Musím začít čistit hned od prvního zubu?*
Ano — právě začátek rozhoduje o budoucím zdraví zubů.

*Co když si dítě nechce nechat čistit zuby?*
Ukážu ti postupy, které pomáhají snížit odpor a nastavit rutinu.

*Je genetika silnější než péče?*
Genetika hraje roli, ale správná péče může riziko kazu výrazně snížit.

Tlačítko: Chci vědět, jak na zuby svého dítěte

**toto vytvoř jako rozbalovací záložky, klidně k nim použij ikonky, které jsi nepoužil výše**

---

# Přidej se na webinář

Za cenu jednoho latte můžeš získat jistotu, která ovlivní zdraví zubů tvého dítěte na roky dopředu.

Tlačítko: 👉 *Přihlas se na webinář a měj v péči o zuby jasno*

**tuto sekci dej třeba na 50-60% šířky, měl by tu být ten prodejní simpleshop formulář**

# Patička

**tam dej 4 sloupce - logo v kolecku.png, formulář pro sběr kontaktů ecomailu, odkazy na obchodní podmínky a zásady cookies, které souběžně vytvoř**
