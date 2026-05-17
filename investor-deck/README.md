# BESOQ — investor pitch deck

İnvestor təqdimatı üçün üç format. Hansı sənin üçün rahatdırsa, onu istifadə et.

---

## 📄 1. `01-mətn-azərbaycanca.md`

**Tam məzmun sənədi.** Hər slaydın məzmunu, izahı, qeydləri.

**Bunu istifadə et:**
- PowerPoint açırsan və slaydları əl ilə qurursan
- Canva-da template seçirsən və mətni ora yapışdırırsan
- Google Slides-də işləyirsən
- İnvestordan əvvəl məzmunu yoxlamaq istəyirsən

**Plus tərəf:** ən geniş izahatlı, hər slaydın məntiqini başa düşürsən.

---

## 🎨 2. `02-marp-pitch-deck.md` — Marp formatı

**Markdown-dan PowerPoint generasiya etmək üçün.**

**Necə istifadə edirsən:**

### Variant A — VS Code ilə
1. VS Code aç
2. `Marp for VS Code` extension-u quraşdır
3. `02-marp-pitch-deck.md` faylını aç
4. Sağ üst küncdə Marp icon-una bas
5. **Export Slide Deck** → seç:
   - **PowerPoint (.pptx)** — sənin əslən istədiyin
   - **PDF**
   - **HTML**

### Variant B — Komanda sətrindən
```bash
npm install -g @marp-team/marp-cli
marp --pptx 02-marp-pitch-deck.md
```
Çıxış: `02-marp-pitch-deck.pptx`

### Variant C — Online
- https://web.marp.app/ saytına get
- Faylın məzmununu yapışdır
- Sağda canlı preview görəcəksən
- Export seç (PPTX, PDF, HTML)

**Plus tərəf:** real PPTX faylı alırsan, PowerPoint-də açıb redaktə edə bilərsən.

---

## 🌐 3. `03-reveal-pitch-deck.html` — HTML versiyası

**Brauzerdə birbaşa təqdim edə biləcəyin slaydlar.**

**Necə açırsan:**
1. Faylı brauzer-də aç (Chrome, Safari, Firefox — fərqi yoxdur)
2. Klaviatura ilə sürüş:
   - `→` (sağa) — növbəti slayd
   - `←` (sola) — əvvəlki slayd
   - `F` — tam ekran (fullscreen)
   - `S` — speaker notes (qeydlər)
   - `Esc` — bütün slaydları görmək

**Telefonda da açılır.** Investor görüşünə noutbuk götürürsənsə, `03-reveal-pitch-deck.html` faylını masaüstündə saxla, brauzerdə aç, F bas — fullscreen, hazırdır.

**Plus tərəfləri:**
- BESOQ brendinin tam dizaynında (rəng, şrift, ruh)
- Internet bağlantısı olmadan da işləyir (font-lar kompüterindən gəlir)
- Telefonda da gözəl görünür
- PPTX-dən daha "modern" və "tech" hiss verir

---

## 📋 14 slaydın siyahısı

| # | Slayd | Məzmun |
|---|---|---|
| 01 | Üz qabığı | Wordmark + tagline + təqdimatın adı |
| 02 | Böyük sual | "22–32 yaş gənc gündəlik geyim üçün hara gedir?" |
| 03 | Problem | Bazardakı dörd seçim və problemləri |
| 04 | Həll | BESOQ — qısa, açıq |
| 05 | Niyə indi | Bazar artımı statistikası |
| 06 | Hədəf müştəri | Aytac, 26 — persona və TAM/SAM/SOM |
| 07 | Məhsul | Daimi xətt + drop sistemi |
| 08 | Niyə BESOQ | 5 üstünlük |
| 09 | Biznes modeli | Marja cədvəli |
| 10 | Yol xəritəsi | 12 aylıq Q1-Q4 plan |
| 11 | Marketinq | Kanallar və büdcə |
| 12 | Komanda | Qurucu + partnyorlar |
| 13 | Maliyyə | Aylıq sifariş və dövriyyə proqnozu |
| 14 | İnvestisiya təklifi | Məbləğ, istifadə, qarşılıq |

Plus son slayd: çağırış və əlaqə.

---

## ⚠️ MÜHÜM — bunları DƏYİŞMƏLİSƏN

Bu deck **şablon**dur. Aşağıdakı yer tutucuları **mütləq** real məlumatla əvəz et:

### Yer tutucular
- `[ad soyad]` → **Sənin tam adın**
- `[email]` → **Sənin email-in**
- `[telefon]` → **Sənin telefon nömrən**
- `[MƏBLƏĞ]` → **İnvestordan istədiyin pul (məs. 50,000 ₼)**
- `[təcrübən və təhsilin]` → **Sənin gerçək təcrübən**
- `[daha əvvəlki layihələr]` → **Əvvəlki işlərin (varsa)**

### Rəqəmlər
Bütün maliyyə rəqəmləri **təxminidir**. Görüşdən əvvəl:

1. Dostlarının real maya qiymətlərini təsdiqlə
2. Aylıq sifariş proqnozunu öz reallığına uyğunlaşdır
3. Marketinq büdcəsini gerçəkçi et
4. EBITDA hesablanmasını yoxla

Yalnış rəqəmlərlə investor görüşünə getmək — ən böyük səhvdir. İnvestor 10 dəqiqədə hesablar və sənin oxşamadığını görər.

---

## 💼 İnvestor görüşünə hazırlıq

### 1 həftə əvvəl
- [ ] Real rəqəmlərlə deck-i tamamla
- [ ] Hər slayd üçün **2 dəqiqəlik** danışıq hazırla (toplam ~30 dəq)
- [ ] Tez-tez verilən sualları siyahıla:
  - "Niyə dostlarınız özləri brendi etmir?"
  - "Sizin TOBODY-dən fərqiniz nə?"
  - "Marketinq pulunu necə xərcləyəcəksən?"
  - "Konkurent gəlsə nə edəcəksən?"
- [ ] Cavabları hazır saxla

### 1 gün əvvəl
- [ ] Texnologiyanı yoxla (HTML açılır? PPTX işləyir?)
- [ ] Yedək versiya götür (USB, email-də)
- [ ] BESOQ məhsul nümunəsi götür (real t-shirt, hoodie)
- [ ] Vizual material — print nümunəsi, materiallar

### Görüşdə
- [ ] Sakit ol — brendin ruhu sakitdir, sən də belə ol
- [ ] Slayd oxuma — onlara baxan kimi danış
- [ ] Sual cavablandırırsan: dürüst ol. "Bilmirəm" demək — gücdür
- [ ] Sonda **konkret xahiş** et: "Cavabınızı bir həftə ərzində ala bilərəm?"

### Görüşdən sonra (24 saat)
- [ ] Təşəkkür email-i göndər
- [ ] Suallarına yazılı cavab əlavə et
- [ ] Əgər istəyiblərsə — detallı biznes plan göndər

---

## 🎯 Bu deck üçün son söz

İnvestor pitch — sənin brendin haqqında **danışmaq sənətidir**. Slayd kömək edir, amma əsas olan **sən və hekayən**dir.

Slayd bəzəkli deyil — sakit, professional, BESOQ-un brand kit-inə uyğun. Bu, ümumi pitch deck-lərdən fərqlidir, və bu fərq — brendin ruhunu çatdırır.

İnvestor 14 slaydı görəcək. Amma yadda saxlayacağı üç şey:
1. Sən kimsən
2. Brend hansı boşluğu doldurur
3. Niyə indi

Hər slaydın işi — bu üç şeyə xidmət etmək.

— besoq
