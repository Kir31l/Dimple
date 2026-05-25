# 🚌 Dimple Star Transport — Web Booking System

A front-end website for **Dimple Star Transport**, a Philippine bus company serving Metro Manila and Oriental Mindoro since 1993 (originally founded as Napat Transit, rebranded in 2004). The site allows passengers to browse routes, view terminal information, and book tickets entirely in the browser — no backend or database required.

---

## Pages

| File | Description |
|---|---|
| `index.html` | Home page with hero section and quick route search |
| `about.html` | Company history, mission, and vision |
| `terminal.html` | List of all terminals across Metro Manila and Mindoro |
| `routeschedule.html` | Full route and schedule browser |
| `book.html` | Seat selection and ticket booking form |
| `contact.html` | Contact information and inquiry form |
| `signlog.html` | User sign-up and login page |
| `style.css` | Global stylesheet (navy/gold theme) |
| `data.js` | Hardcoded data layer (routes, users, booking helpers) |

---

## Features

- **Quick Route Search** — filter by origin, destination, and bus type from the home page
- **Route & Schedule Browser** — view all 50+ daily trips with departure times and fares
- **Online Booking** — one-way or two-way trips, seat selection, passenger details, and a booking confirmation summary
- **Terminal Directory** — locations across Ali Mall Cubao, Espana, Alabang, Pasay, Cabuyao, San Lazaro, and San Jose (Oriental Mindoro)
- **User Auth** — sign-up and login stored client-side via `sessionStorage`
- **Responsive Design** — mobile-friendly layout with hamburger navigation

---

## Routes Covered

Buses depart from six Metro Manila terminals to **San Jose, Oriental Mindoro**:

- Ali Mall Cubao, Quezon City
- Espana, Manila
- San Lorenzo (Pasay)
- Alabang, Muntinlupa
- Pasay City
- Cabuyao, Laguna *(Head Office)*

**Fares:** ₱300 (Air Conditioned) · ₱200 (Ordinary)

---

## Tech Stack

Pure HTML, CSS, and vanilla JavaScript — no frameworks, no build tools, no server required.

Data (routes, users, bookings) is handled entirely in `data.js` using `sessionStorage` for persistence within a browser tab.

---

## Getting Started

1. Clone or download the repository.
2. Open `index.html` in any modern browser.
3. No installation or setup needed.

```bash
git clone https://github.com/your-username/Dimple-main.git
cd Dimple-main
open index.html
```

---

## Contact

**Dimple Star Transport**
Block 1 Lot 10, Southpoint Subd., Brgy Banay-Banay, Cabuyao, Laguna
📞 0929 209 0712
