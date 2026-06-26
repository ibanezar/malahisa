# Mala Hiša — Website Template

A clean, responsive one-page website template for **Mala Hiša**, an artisanal
alpine accommodation in **Logarska Dolina, Slovenia**. Built as a self-contained
static site (HTML + CSS + vanilla JS) so it's easy to host and easy to edit.

The design follows the provided brand concept: deep forest green, warm cream and
gold accents, a serif/sans type pairing, and the mountain-and-house logo.

## Preview locally

No build step required. Just open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
.
├── index.html              # All page content & sections
├── assets/
│   ├── css/styles.css      # Styles + brand palette (CSS variables at top)
│   ├── js/main.js          # Mobile nav, scroll reveal, booking date logic
│   └── img/                # Logo + placeholder images (SVG)
└── README.md
```

## Sections

Header · Hero · Booking bar · Our Story · Our Havens · Amenities ·
Experiences · Location · CTA banner · Footer.

## How to customize (the parts you'll change later)

### 1. Swap the photos
Every photo is a placeholder SVG in `assets/img/` labelled "REPLACE WITH PHOTO".
Replace them with your real images. Easiest approach: name your photo the same as
the placeholder (e.g. save the hero photo as `assets/img/hero.jpg`) and update the
matching `src="..."` in `index.html`.

| Slot              | File(s)                                  |
|-------------------|------------------------------------------|
| Hero background   | `hero.svg`                               |
| Havens (rooms)    | `haven-1.svg`, `haven-2.svg`, `haven-3.svg` |
| Our Story collage | `story-1.svg`, `story-2.svg`, `story-3.svg` |
| Amenities         | `amenity-1.svg`, `amenity-2.svg`, `amenity-3.svg` |
| Experiences       | `exp-1.svg`, `exp-2.svg`, `exp-3.svg`    |
| Location          | `map.svg`, `loc-1.svg`…`loc-4.svg`       |

### 2. Edit the text
All copy lives in `index.html` — headings, descriptions, room names, contact
details and footer links are plain text, easy to find and edit.

### 3. Tweak the colors / fonts
Open `assets/css/styles.css` and edit the variables in the `:root` block at the
top (brand green, gold, cream, fonts). Everything else updates automatically.

### 4. Logo
`assets/img/logo.svg` is an editable vector recreation of the mark. Replace it
with the final brand asset when ready.

## Notes
- The booking form is a front-end placeholder. Wire `Check Availability` to your
  booking provider (e.g. Booking.com, Airbnb, or a custom backend) when ready.
- Fonts load from Google Fonts (Cormorant Garamond + Montserrat).
