# סיכום React Hooks – useRef, useContext, useEffect

---

## 1️⃣ useRef

`useRef` הוא קופסה ששומרת ערך **שלא גורם לרינדור מחדש**.

### שימושים

#### 1. שמירה של ערכים בין רינדורים (בלי שהמסך יתעדכן)
```jsx
import { useRef } from "react";

function Example() {
  const countRef = useRef(0);

  function handleClick() {
    countRef.current++;
    console.log(countRef.current); // הערך משתנה, אבל המסך לא
  }

  return <button onClick={handleClick}>לחץ</button>;
}
```

#### 2. גישה ל-DOM
```jsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>פוקוס</button>
    </>
  );
}
```

#### 3. אחסון ערכים זמניים
```jsx
import { useRef, useEffect } from "react";

function Timer() {
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => console.log("tick"), 1000);
    return () => clearInterval(timerId.current);
  }, []);
}
```

---

## 2️⃣ useContext

`useContext` מאפשר לקומפוננטות **למשוך ערכים מ־Provider** בלי להעביר props ידנית.

### יצירת Context
```jsx
import { createContext } from "react";
const MyContext = createContext(null);
```

### מתן ערך ל־Context
```jsx
function App() {
  const user = { name: "דניאל" };

  return (
    <MyContext.Provider value={user}>
      <Dashboard />
    </MyContext.Provider>
  );
}
```

### שימוש ב־useContext
```jsx
import { useContext } from "react";
import { MyContext } from "./MyContext";

function Profile() {
  const user = useContext(MyContext);
  return <div>שלום, {user.name}</div>;
}
```

✅ יתרון: חוסך את הצורך להעביר props דרך קומפוננטות רבות.

---

## 3️⃣ useEffect

`useEffect` מאפשר להריץ קוד **אחרי שהקומפוננטה רנדרה** או כשערכים מסוימים משתנים.

### מבנה בסיסי
```jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("רנדר קרה!");
  return () => console.log("קומפוננטה מתפרקת");
}, [/* תלות */]);
```

### דוגמאות

#### 1. הרצה אחרי כל רינדור
```jsx
useEffect(() => {
  console.log("הקומפוננטה רנדרה");
});
```

#### 2. הרצה פעם אחת (רק אחרי mount)
```jsx
useEffect(() => {
  console.log("רק פעם אחת");
}, []);
```

#### 3. הרצה כשערך משתנה
```jsx
useEffect(() => {
  console.log("הערך השתנה:", count);
}, [count]);
```

#### 4. ניקוי (Cleanup)
```jsx
useEffect(() => {
  const timer = setInterval(() => console.log("tick"), 1000);
  return () => clearInterval(timer); // נוקה כשקומפוננטה מתפרקת
}, []);
```

---

### ⚡ סיכום
- **useRef** – שומר ערך שאינו משפיע על הרינדור, גישה ל-DOM, אחסון זמני.
- **useContext** – מאפשר גישה למידע משותף מ־Provider בלי props.
- **useEffect** – מאפשר להריץ קוד אחרי רינדור או כשערכים משתנים, לטפל ב־side effects.

---

