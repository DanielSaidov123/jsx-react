# סיכום React Router

React Router היא ספרייה שמאפשרת לנווט בין מסכים/עמודים בתוך אפליקציית React מבלי לרענן את הדף (SPA).

---

## התקנה

```bash
npm install react-router-dom
```

---

## רכיבים עיקריים

### 1. BrowserRouter
- עוטף את כל האפליקציה  
- מנהל את ההיסטוריה של הדפדפן  

```jsx
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}
```

### 2. Routes + Route
- `Routes` = מכיל את כל הנתיבים  
- `Route` = מגדיר URL וקומפוננטה שתוצג  

```jsx
import { Routes, Route } from "react-router-dom";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  );
}
```

---

### 3. Link
- מחליף `<a>` כדי לנווט בלי רענון דף  

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">בית</Link>
      <Link to="/about">אודות</Link>
    </nav>
  );
}
```

---

### 4. useNavigate
- מאפשר ניווט בתוכנית דרך קוד  

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }

  return <button onClick={handleLogin}>התחבר</button>;
}
```

---

### 5. useParams
- שולף פרמטרים מה-URL  

```jsx
// Route: /profile/:id
import { useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();
  return <div>פרופיל מספר {id}</div>;
}
```

---
דוגמא מלאה של זה:
```jsx
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">בית</Link>
        <Link to="/about">אודות</Link>
        <Link to="/profile/42">פרופיל 42</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>בית</h1>;
}

function About() {
  return <h1>אודות</h1>;
}

function Profile() {
  const { id } = useParams(); // שולף את המספר מהכתובת
  const navigate = useNavigate();

  return (
    <>
      <h1>פרופיל {id}</h1>
      <button onClick={() => navigate("/")}>חזור לבית</button>
    </>
  );
}

```

## זרימת עבודה

1. BrowserRouter עוטף את האפליקציה ומאזין ל-URL  
2. Routes מחפש את ה-Route שתואם לכתובת  
3. Route מציג את הקומפוננטה המתאימה  
4. Link או useNavigate מעדכנים את ה-URL בלי רענון דף  
5. useParams שולף פרמטרים מה-URL אם יש  

---

## סיכום קצר

- **BrowserRouter** – מנהל היסטוריה  
- **Routes + Route** – מגדיר נתיבים ומי מוצג בכל נתיב  
- **Link** – ניווט בלי רענון  
- **useNavigate** – ניווט בקוד  
- **useParams** – פרמטרים מה-URL  

---

## הפעלה

1. התקן: `npm install react-router-dom`  
2. ודא ש־React 18 ומעלה  
3. עוטף את App ב־BrowserRouter  
4. מגדיר Routes + Route  
5. משתמש ב-Link או useNavigate לניווט  
6. useParams לשליפת פרמטרים מה-URL

