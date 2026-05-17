# Hərəkət (motion)

Saytda animasiya qaydaları. Qısa cavab: demək olar ki yoxdur.

## Prinsip

Hərəkət yalnız navigasiyaya kömək edəndə mövcuddur. Bəzək üçün — heç vaxt.

## İcazə verilən hərəkətlər

Saytda yalnız dörd hərəkət var:

**1. Səhifə keçidi** — 200ms fade. Bir səhifədən digərinə keçəndə yumşaq sönmə. Slide yox, push yox.

**2. Hover** — 160ms opacity azalması (0.85). Siçanı məhsul şəklinin üzərinə aparanda azca saydamlaşır. Böyümə yox, zoom yox.

**3. Düymə basma** — 120ms opacity azalması (0.9). Basıldığını hiss etdirmək üçün.

**4. Dropdown açılması** — 160ms fade. Nav menyu açılanda.

## Vaxt və easing

| Token | Vaxt | Harada |
|---|---|---|
| fast | 120ms | Düymə |
| base | 160ms | Hover, dropdown |
| slow | 200ms | Səhifə keçidi |

Easing: `cubic-bezier(0.22, 1, 0.36, 1)` — yalnız bu. Bounce yox, spring yox.

## prefers-reduced-motion

Əgər istifadəçi sistemində "hərəkəti azalt" seçibsə, bütün animasiyalar sıfırlanır. Sayt hələ də işləyir, sadəcə keçidlər anidədir.

## Qadağan

- ❌ Logo animasiyası (giriş effekti, typing effekti)
- ❌ Parallax scroll
- ❌ Scroll-jacking
- ❌ Lottie animasiya
- ❌ 3D rotation
- ❌ Pulsing düymələr
- ❌ Confetti (sifariş təsdiqindən sonra)
- ❌ 240ms-dən uzun heç bir animasiya
- ❌ Skeleton loading animasiyasından başqa loop

Bu siyahı uzundur, çünki çox şey qadağandır. Brendin saytı sakit olmalıdır — hərəkətsiz, sabit, etibarlı.
