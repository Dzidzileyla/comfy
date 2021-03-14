# Link do wyszukiwania informacji w otodom.pl

## Zmienne jako path

### Sprzedarz/wynajem

Opcje:
* sprzedaz
* wynajem

```
https://www.otodom.pl/<TYP>/wroclaw
```

* [https://www.otodom.pl/sprzedaz/wroclaw/](https://www.otodom.pl/sprzedaz/wroclaw/)
* [https://www.otodom.pl/wynajem/wroclaw/](https://www.otodom.pl/sprzedaz/wroclaw/)

### Dom/mieszkanie

> wystepuje w na sprzedaz i wynajem

Opcje:
* dom
* mieszkanie

```
https://www.otodom.pl/sprzedaz/<TYP>/wroclaw
```

* [https://www.otodom.pl/sprzedaz/dom/wroclaw/](https://www.otodom.pl/sprzedaz/dom/wroclaw/)
* [https://www.otodom.pl/sprzedaz/mieszkanie/wroclaw/](https://www.otodom.pl/sprzedaz/mieszkanie/wroclaw/)


### Material budynku

> Opcja dostepna tylko gdy dom/mieszkanie na sprzedaz

* pustak
* cegla
* beton-komorkowy
* beton
* wielka-plyta
* keramzyt
* inne
* silikat
* drewniane

```
https://www.otodom.pl/sprzedaz/dom/pustak--cegla--beton-komorkowy--beton--wielka-plyta--keramzyt--inne--silikat--drewniane
```

* [https://www.otodom.pl/sprzedaz/dom/pustak](https://www.otodom.pl/sprzedaz/dom/pustak)

### Fragment opisu

> wystepuje w na sprzedaz i wynajem

```
https://www.otodom.pl/sprzedaz/dom/q-<OPIS>/?search%5Bdescription%5D=1
```

* [https://www.otodom.pl/sprzedaz/dom/q-test/?search%5Bdescription%5D=1](https://www.otodom.pl/sprzedaz/dom/q-test/?search%5Bdescription%5D=1)

## Zmienne jako query

### Typ rynku

> Opcja dostepna dla sprzedaz

```
?search%5Bfilter_enum_market%5D=<secondary|primary>
```

### Cena od/do

> wystepuje w na sprzedaz i wynajem

```
?search%5Bfilter_float_price%3Afrom%5D=<CENA>
&search%5Bfilter_float_price%3Ato%5D=<CENA>
```

### Powierzchnia

> wystepuje w na sprzedaz i wynajem

```
?search%5Bfilter_float_m%3Afrom%5D=<METRY>
&search%5Bfilter_float_m%3Ato%5D=<METRY>
```

### Liczba pokoi

> wystepuje w na sprzedaz i wynajem

```
?search%5Bfilter_enum_rooms_num%5D%5B0%5D=<POKOJE>
```

### Powierzchnia dzialki

> wystepuje w na sprzedaz i wynajem

```
?search%5Bfilter_float_terrain_area%3Afrom%5D=<POWIERZCHNIA>
&search%5Bfilter_float_terrain_area%3Ato%5D=<POWIERZCHNIA>
```

### Rodzaj zabudowy

> wystepuje w na sprzedaz i wynajem

Rodzaje:
* detached
* semi_detached
* ribbon
* tenement
* residence
* farm

```
?search%5Bfilter_enum_building_type%5D%5B0%5D=<RODZAJ>
```

### Rok budowy

> Opcja dostepna tylko gdy dom/mieszkanie jest na sprzedaz

```
?search%5Bfilter_float_build_year%3Afrom%5D=<YEAR>&search%5Bfilter_float_build_year%3Ato%5D=<YEAR>
```

### Typ dachu

> Opcja dostepna tylko gdy dom/mieszkanie jest na sprzedaz

Rodzaje:
* flat
* diagonal
* notany

```
?search%5Bfilter_enum_roof_type%5D%5B0%5D=<TYP>
```

### Typy domow/typy ofert

> wystepuje w na sprzedaz i wynajem

```
?search%5Bfilter_enum_recreational%5D=1
?search%5Bprivate_business%5D=private
?search%5Bopen_day%5D=1
?search%5Bexclusive_offer%5D=1
```

### Aktualnosc ogloszenia

> wystepuje w na sprzedaz i wynajem

Typy:
* 24 godziny == 1
* 3 dni == 3
* 7 dni == 7
* 14 dni == 14

```
?search%5Bcreated_since%5D=1
?search%5Bcreated_since%5D=3
?search%5Bcreated_since%5D=7
?search%5Bcreated_since%5D=14
```

### Numer ofety

> wystepuje w na sprzedaz i wynajem

```
?search%5Bid%5D=1
```

### Zdjecia

> wystepuje w na sprzedaz i wynajem

```
?search%5Bphotos%5D=1
```

### Film

> wystepuje w na sprzedaz i wynajem

```
?search%5Bmovie%5D=1
```

### Wirtualny spacer

> wystepuje w na sprzedaz i wynajem

```
?search%5Bwalkaround_3dview%5D=1
```

### Media

> Opcja dostepna dla wynajem

Opcje:
* water
* electricity
* sewage
* phone
* gas
* internet
* cesspool
* water_purification
* cable_television

```
?search%5Bfilter_enum_media_types%5D%5B0%5D=<TYP>
```

### Dystans

> wystepuje w na sprzedaz i wynajem

```
search%5Bdist%5D=<DYSTANS>
```

### Wojewodztwa

> wystepuje w na sprzedaz i wynajem

```
?search%5Bregion_id%5D=<WOJEWODZTWO>
```

### Miasto

> wystepuje w na sprzedaz i wynajem

```
?search%5Bcity_id%5D=<MIASTO>
```

### Powiat

> wystepuje w na sprzedaz i wynajem

```
?search%5Bsubregion_id%5D=<POWIAT>
```