# spykey-agent

Unified repository combining the Stitch **spykey-agent** (`1931950447522884555`) and **Unified Media Archive** (`9443297307706650087`) screens, tokens, and `DESIGN.md` specification.

## Routes

| Route | Source Screen | Description |
| --- | --- | --- |
| `/dashboard` (and `/`) | Media Dashboard (`3351923286d94fb5a42d894108e8f7cf`) | Vault media collection grid & category filters |
| `/directory` | Directory (`79d2622cffef4fd89d0a921c50b575e3`) | Talent profiles and collection taxonomy |
| `/uploader` | Media Uploader (`ed108825300b443d868518849336e497`) | Local/remote media ingest & metadata editor |
| `/detail` | Item Detail View (`8ab6d05ba94746e1823ced8f04931474`) | Immersive hero media view & credits sidebar |
| `/checkout` | Media asset library / Maison (`2b0000d3fa4c4514a444905322f5b47a`) | Archival acquisition checkout surface |

## Local Development

```bash
npm run dev
```

Serves the unified application at `http://localhost:4173` (override with `PORT`).

## Archived Stitch Assets

Raw downloaded HTML and PNG exports from both Stitch projects live in `screens/` with provenance recorded in `screens/manifest.json`.
