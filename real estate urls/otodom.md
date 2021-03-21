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
https://www.otodom.pl/sprzedaz/dom/q-<OPIS>/?search[description]=1
```

* [https://www.otodom.pl/sprzedaz/dom/q-test/?search[description]=1](https://www.otodom.pl/sprzedaz/dom/q-test/?search[description]=1)

## Zmienne jako query

### Typ rynku

> Opcja dostepna dla sprzedaz

```
?search[filter_enum_market]=<secondary|primary>
```

### Cena od/do

> wystepuje w na sprzedaz i wynajem

```
?search[filter_float_price:from]=<CENA>
&search[filter_float_price:to]=<CENA>
```

### Powierzchnia

> wystepuje w na sprzedaz i wynajem

```
?search[filter_float_m:from]=<METRY>
&search[filter_float_m:to]=<METRY>
```

### Liczba pokoi

> wystepuje w na sprzedaz i wynajem

```
?search[filter_enum_rooms_num][0]=<POKOJE>
```

### Powierzchnia dzialki

> wystepuje w na sprzedaz i wynajem

```
?search[filter_float_terrain_area:from]=<POWIERZCHNIA>
&search[filter_float_terrain_area:to]=<POWIERZCHNIA>
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
?search[filter_enum_building_type][0]=<RODZAJ>
```

### Rok budowy

> Opcja dostepna tylko gdy dom/mieszkanie jest na sprzedaz

```
?search[filter_float_build_year:from]=<YEAR>&search[filter_float_build_year:to]=<YEAR>
```

### Typ dachu

> Opcja dostepna tylko gdy dom/mieszkanie jest na sprzedaz

Rodzaje:
* flat
* diagonal
* notany

```
?search[filter_enum_roof_type][0]=<TYP>
```

### Typy domow/typy ofert

> wystepuje w na sprzedaz i wynajem

```
?search[filter_enum_recreational]=1
?search[private_business]=private
?search[open_day]=1
?search[exclusive_offer]=1
```

### Aktualnosc ogloszenia

> wystepuje w na sprzedaz i wynajem

Typy:
* 24 godziny == 1
* 3 dni == 3
* 7 dni == 7
* 14 dni == 14

```
?search[created_since]=1
?search[created_since]=3
?search[created_since]=7
?search[created_since]=14
```

### Numer ofety

> wystepuje w na sprzedaz i wynajem

```
?search[id]=1
```

### Zdjecia

> wystepuje w na sprzedaz i wynajem

```
?search[photos]=1
```

### Film

> wystepuje w na sprzedaz i wynajem

```
?search[movie]=1
```

### Wirtualny spacer

> wystepuje w na sprzedaz i wynajem

```
?search[walkaround_3dview]=1
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
?search[filter_enum_media_types][0]=<TYP>
```

### Dystans

> wystepuje w na sprzedaz i wynajem

```
search[dist]=<DYSTANS>
```

### Wojewodztwa

> wystepuje w na sprzedaz i wynajem

```
?search[region_id]=<WOJEWODZTWO>
```

### Miasto

> wystepuje w na sprzedaz i wynajem

```
?search[city_id]=<MIASTO>
```

### Powiat

> wystepuje w na sprzedaz i wynajem

```
?search[subregion_id]=<POWIAT>
```