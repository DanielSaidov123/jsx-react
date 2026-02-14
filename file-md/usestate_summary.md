# סיכום useState ב־React

## מה זה useState?

`useState` הוא Hook של React שמאפשר לשמור **state (מצב פנימי)** בתוך
קומפוננטות פונקציונליות.

תחביר בסיסי:

``` javascript
const [value, setValue] = useState(initialValue);
```

-   `value` -- הערך הנוכחי
-   `setValue` -- פונקציה לעדכון הערך
-   `initialValue` -- הערך ההתחלתי

------------------------------------------------------------------------

## שימוש בסיסי -- מספר

``` javascript
const [count, setCount] = useState(0);

function increase() {
  setCount(count + 1);
}
```

React ירנדר מחדש את הקומפוננטה בכל שינוי state.

עדכון בטוח יותר (מומלץ):

``` javascript
setCount(prev => prev + 1);
```

------------------------------------------------------------------------

## שימוש עם מחרוזת (String)

``` javascript
const [name, setName] = useState("");

<input 
  value={name}
  onChange={e => setName(e.target.value)}
/>
```

זה נקרא **Controlled Component** -- הערך מנוהל ע"י state.

------------------------------------------------------------------------

## שימוש עם Boolean (true/false)

``` javascript
const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(prev => !prev)}>
  Toggle
</button>
```

------------------------------------------------------------------------

## עבודה עם Object

אסור לשנות state ישירות:

❌ לא נכון:

``` javascript
user.name = "Dan";
setUser(user);
```

✅ נכון:

``` javascript
setUser(prev => ({
  ...prev,
  name: "Dan"
}));
```

למה? כי React חייב אובייקט חדש כדי לזהות שינוי.

------------------------------------------------------------------------

## עבודה עם Array

הוספת איבר:

``` javascript
setItems(prev => [...prev, newItem]);
```

מחיקת איבר:

``` javascript
setItems(prev => prev.filter(item => item.id !== id));
```

עדכון איבר:

``` javascript
setItems(prev =>
  prev.map(item =>
    item.id === id ? { ...item, done: true } : item
  )
);
```

------------------------------------------------------------------------

## עדכון שתלוי בערך קודם (חשוב מאוד)

תמיד להשתמש בפונקציית prev כאשר החישוב תלוי בערך הקודם:

``` javascript
setCount(prev => prev + 1);
```

אם לא -- עלולים לקבל ערכים לא צפויים בגלל עדכונים אסינכרוניים.

------------------------------------------------------------------------

## כמה useState באותה קומפוננטה

``` javascript
const [name, setName] = useState("");
const [age, setAge] = useState(0);
const [isOnline, setIsOnline] = useState(false);
```

אין הגבלה -- זה דפוס נפוץ.

------------------------------------------------------------------------

## Lazy Initialization (אתחול עצל)

אם הערך ההתחלתי יקר לחישוב:

``` javascript
const [data, setData] = useState(() => expensiveCalculation());
```

הפונקציה תרוץ רק ברינדור הראשון.

------------------------------------------------------------------------

## כללים חשובים

-   אין לשנות state ישירות
-   כל שינוי state גורם לרינדור מחדש
-   עדכוני state אינם מיידיים (אסינכרוניים)
-   Hooks חייבים להיות בראש הקומפוננטה
-   בעת עבודה עם Object/Array תמיד יוצרים עותק חדש

------------------------------------------------------------------------

## טעות נפוצה

❌

``` javascript
setCount(count + 1);
setCount(count + 1);
```

עלול להעלות רק פעם אחת.

✅

``` javascript
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

יעלה פעמיים בוודאות.
