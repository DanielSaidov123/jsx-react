# Controlled Inputs ב־React

## עיקרון

ה־input נשלט ע"י state.

``` javascript
const [text, setText] = useState("");

<input
  value={text}
  onChange={e => setText(e.target.value)}
/>
```

------------------------------------------------------------------------

## למה זה חשוב?

-   ולידציה
-   שליטה בערכים
-   סנכרון UI

------------------------------------------------------------------------

## Checkbox

``` javascript
<input
  type="checkbox"
  checked={checked}
  onChange={e => setChecked(e.target.checked)}
/>
```
