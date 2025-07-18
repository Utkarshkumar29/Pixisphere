# 📸 Pixisphere - Photographer Listing & Profile Platform

A frontend application built with **Next.js**, **Material UI**, and **Tailwind CSS**, designed to showcase photographers with advanced filters, search, and profile details.

---

## 🚀 Setup Instructions

### 1. **Clone the repository**
```bash
git clone https://github.com/your-username/pixisphere.git
cd pixisphere
```

### 2. **Install dependencies**
```bash
npm install
```

### 3. **Start the frontend server**
```bash
npm run dev
```

### 4. **Start the backend (JSON Server / custom Node server)**

⚠️ In a **separate terminal**, run:
```bash
node server.js
```

Ensure `server.js` serves data at:
```
http://localhost:3001/photographers
```

---

## ⚙️ Features

- 🧭 Responsive layout using **Tailwind CSS**
- 🔍 Search by **name**, **location**, or **tag** with fuzzy logic
- 🧰 Filters:
  - Location (autocomplete)
  - Price range (slider)
  - Rating (radio)
  - Styles (checkboxes: Traditional, Studio, etc.)
  - Sort by: Price | Rating | Recent
- ♻️ Infinite scroll for photographer listing
- 📄 Photographer Profile with full detail and dynamic routing
- 🔁 Reset filters functionality
- 🪄 Debounced search for better performance

---

## 🔍 Filter & Search Logic

### 📌 Filtering
- Filters are managed using React `useState` in the main page and passed as props.
- Filters dynamically update the displayed photographers using `useEffect`.

### 🔄 Debounce
- Search input is debounced to limit updates while typing.
- Prevents rapid API calls and enhances performance.
```js
useEffect(() => {
  const delay = setTimeout(() => {
    // update search/filter logic
  }, 300)
  return () => clearTimeout(delay)
}, [searchTerm])
```

### 🔎 Fuzzy Search
- Searches across:
  - Photographer name
  - City/location
  - Styles/tags
- Case-insensitive and partial match enabled using `.toLowerCase().includes(...)`.

---

## 📁 Project Structure

```
app/
│
├── components/
│   ├── CategoryListing/
│   ├── FilterPanel/
│   ├── ResponsiveFilter/
│   ├── HeroSection/
│   ├── Navbar/
│   └── SearchBar/
│
├── pages/
│   └── photographer/[id]/   ← Dynamic profile pages
│
├── public/
├── server.js                ← Node/JSON server
├── styles/
```

---