# ewb-cbit-react

Multi-page React site (Vite + React Router) for the EWB CBIT chapter.

## Run

```bash
cd e:\ewb\ewb-cbit-react
npm install
npm run dev -- --host
```

Open the URL Vite prints (usually http://localhost:5173).

## Pages

- `/` Home (EWB India overview)
- `/about`
- `/join`
- `/activities`
- `/chapters`
- `/chapter` (CBIT chapter + Instagram embeds)
- `/donors`
- `/donate`
- `/contact`

## Configure content

These JSON files are fetched at runtime from `public/`:

- `public/config/chapter.json`
- `public/config/instagram.json`
- `public/data/ewb-india.json`

## Instagram

Instagram doesn’t allow anonymous scraping of a profile feed.
This site uses Instagram’s official embed for specific post URLs.

Add post URLs to `public/config/instagram.json`:

```json
{
	"profileUrl": "https://www.instagram.com/ewbcbit/?hl=en",
	"postUrls": [
		"https://www.instagram.com/p/POST_ID_1/",
		"https://www.instagram.com/p/POST_ID_2/"
	]
}
```

## Build / Preview

```bash
npm run build
npm run preview -- --host
```

## Deployment note (SPA routing)

This is a single-page app with client-side routes. On static hosting, configure a fallback so
unknown paths (like `/about`) serve `index.html`.
