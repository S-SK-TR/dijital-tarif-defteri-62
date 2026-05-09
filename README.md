# 🍳 Dijital Tarif Defteri (Premium PWA)

> **Mutfaktaki yaratıcılığınızı serbest bırakın. En sevdiğiniz tarifleri kaydedin, organize edin ve paylaşın.**

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![Status](https://img.shields.io/badge/status-premium-indigo)
![PWA](https://img.shields.io/badge/pwa-enabled-green)
![Design](https://img.shields.io/badge/design-glassmorphism-pink)

---

## 🌟 Öne Çıkan Özellikler

- **💎 Premium UI/UX**: Glassmorphism ve Bento Grid ile modern ve estetik arayüz.
- **📱 PWA Desteği**: Uygulamayı telefonunuza indirin ve uygulama gibi kullanın.
- **✨ Akıcı Animasyonlar**: Framer Motion ile güçlendirilmiş yumuşak geçişler ve etkileşimler.
- **🛠️ Akıllı Formlar**: Zod ve React Hook Form ile hatasız tarif girişi.
- **🌓 Dark Mode Desteği**: Gece tarifleri için göz yormayan karanlık tema.

---

## 🚀 Hızlı Başlangıç

### Gereksinimler

```bash
node --version  # >= 18.x
npm --version   # >= 9.x
```

### Kurulum

```bash
# Repoyu klonla
git clone [REPO_URL]
cd dijital-tarif-defteri-62

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

---

## 📁 Proje Yapısı

```
├── src/
│   ├── components/
│   │   ├── layout/       # Header, Footer, AppShell
│   │   └── ui/           # BentoGrid, Button, Glass Input vb.
│   ├── features/
│   │   ├── auth/         # Kimlik doğrulama işlemleri
│   │   └── recipes/      # Tarif yönetimi (Cards, Pages, Forms)
│   ├── index.css         # Premium Design Tokens & Global Styles
│   └── App.tsx           # Route konfigürasyonu
├── public/               # PWA Assetleri (İkonlar, Manifest)
└── tailwind.config.ts    # Custom Design System
```

---

## 🛠️ Teknolojiler

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS (Premium Tokens)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **PWA**: vite-plugin-pwa
- **Forms**: React Hook Form + Zod

---

## 📈 Durum & Plan

✅ **Faz 1: Premium UI/UX Geçişi Tamamlandı**
- [x] Glassmorphism tasarımı uygulandı.
- [x] Bento Grid layout eklendi.
- [x] PWA assetleri ve manifest güncellendi.
- [x] Responsive tasarım optimize edildi.

⏳ **Faz 2: Özellik Geliştirme**
- [ ] Firebase/Supabase entegrasyonu.
- [ ] Tarif arama ve filtreleme.
- [ ] Sosyal paylaşım özellikleri.

---

*Bu proje Antigravity AI tarafından Premium UI standartlarında geliştirilmiştir.*
