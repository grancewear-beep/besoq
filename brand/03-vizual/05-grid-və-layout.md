# Grid və layout

Saytda, Instagram-da, hər yerdə boşluq necə istifadə olunur.

## Əsas prinsip

Boşluq dizayndır. Bir səhifə nə qədər boş yerdən ibarətdirsə, o qədər sakit görünür. BESOQ-un saytı dolu deyil — nəfəs alır.

## Boşluq ölçüsü

Bütün boşluqlar 8px-in qatıdır. Arada 5px, 13px, 21px kimi ölçülər yoxdur.

| Token | Ölçü | Harada |
|---|---|---|
| space-1 | 4px | Çox kiçik ayrılıq |
| space-2 | 8px | Elementlər arası minimum |
| space-3 | 12px | Kiçik padding |
| space-4 | 16px | Kart padding |
| space-5 | 24px | Bölmə arası (kiçik) |
| space-6 | 32px | Bölmə arası (orta) |
| space-7 | 48px | Böyük bölmə arası |
| space-8 | 64px | Səhifə bölmələri arası |
| space-9 | 96px | Hero boşluğu |

## Sayt genişliyi

Kontent heç vaxt 1280px-dən geniş olmur. Böyük ekranlarda kontent ortada qalır, ətrafda boşluq olur.

| Ekran | Kontent eni | Sütun sayı |
|---|---|---|
| Mobil (< 768px) | 100%, padding 16px | 1 |
| Planşet (768px+) | 100%, padding 32px | 2 |
| Desktop (1024px+) | 100%, padding 64px | 3 |
| Geniş (1440px+) | max 1280px | 3 |

## Məhsul grid-i

Saytda məhsullar grid şəklindədir:

- Desktop: sırada 3 məhsul
- Planşet: sırada 2 məhsul
- Mobil: sırada 1 məhsul (ya da 2 kiçik)

Heç vaxt 4 sütun. Çox sıx görünür, sakit deyil.

## Dik ritm

Səhifədəki böyük bölmələr arasında sabit boşluq:

- Mobil: 48px
- Planşet: 64px
- Desktop: 96px

Bu, səhifənin "nəfəs almasıdır."

## Qadağan

- ❌ Karusel (sürüşdürülən banner)
- ❌ Yapışqan banner (sticky promo)
- ❌ Pop-up (email toplamaq üçün belə)
- ❌ Auto-play video
- ❌ Yuvarlaq künclər (bütün künclər düzdür)
- ❌ Kölgə (drop shadow)
- ❌ Parallax scroll
- ❌ Hover-da böyümə (zoom)

## Ana səhifə strukturu

```
┌─────────────────────────────────┐
│ [nav: besoq | shop | haqqında]  │
├─────────────────────────────────┤
│                                 │
│     [bir şəkil, 4:5]           │
│                                 │
├─────────────────────────────────┤
│  drop 01. indi saytda.          │
│  → bax                          │
├─────────────────────────────────┤
│                                 │
│  [3 məhsul grid]               │
│                                 │
├─────────────────────────────────┤
│  azərbaycanda tikilir.          │
│  24 saata hazırdır.             │
│  — besoq                        │
└─────────────────────────────────┘
```

Bu qədər. Ana səhifə bir ekrandır. Scroll minimal.

## Boş hallar (empty state)

Səbət boşdursa:

```
səbət boşdur.
[mağazaya qayıt]
```

İki sətir. Bir link. Ətrafda boşluq. Başqa heç nə.
