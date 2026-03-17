# Henkilökohtainen portfolio Astro + GitHub Pages

Tämä repo sisältää kevyen, staattisen ja helposti ylläpidettävän portfolio-/markkinointisivuston työllistymisen tueksi.

## Teknologia
- [Astro](https://astro.build/) (staattinen sivusto)
- GitHub Actions (automaattinen deploy GitHub Pagesiin)

## Lokaali kehitys
1. Asenna riippuvuudet:
   ```bash
   npm install
   ```
2. Käynnistä kehityspalvelin:
   ```bash
   npm run dev
   ```
3. Avaa selain osoitteessa `http://localhost:4321`.

## Build ja tarkistus
```bash
npm run build
npm run preview
npm run check
```

## Sisällön päivittäminen
Pääosa sisällöstä löytyy yhdestä tiedostosta:
- `src/data/content.ts`

Päivitä tästä ainakin:
- `profile`: nimi, ydinprofiili, arvolupaus, minusta-teksti, CTA:t
- `skills`: osaamisalueet
- `projects`: projektikortit
- `contact`: sähköposti, GitHub, LinkedIn, CV-linkki
- `seo`: title, description, OG-kuva

## Kuvien ja CV:n vaihto
- Profiilikuva: korvaa `public/images/profile-placeholder.svg`
- Open Graph -kuva: korvaa `public/images/og-placeholder.svg`
- Favicon: korvaa `public/favicon.svg`
- CV: korvaa `public/cv-placeholder.pdf`

## Projektirakenne
```text
src/
  components/   # Header, Footer
  data/         # Sisältödata (helposti päivitettävä)
  layouts/      # BaseLayout + SEO-metat
  pages/        # index + 404
  styles/       # global.css
public/
  images/       # kuvat
.github/workflows/
  deploy.yml    # GitHub Pages deploy
```

## Deploy GitHub Pagesiin
Deploy tapahtuu automaattisesti pushista `main`-haaraan workflowlla:
- `.github/workflows/deploy.yml`

### Ota käyttöön GitHubissa
1. Avaa repo -> **Settings** -> **Pages**.
2. Varmista että lähde on **GitHub Actions**.
3. Push `main`-haaraan.
4. Workflow rakentaa sivun ja julkaisee sen Pagesiin.

## Huomioita
- Ei backendiä.
- Ei lomakeintegraatioita.
- Ei analytiikkaa tai ulkoisia trackereita.
- Placeholder-arvot tulee korvata oikeilla tiedoilla ennen tuotantokäyttöä.
