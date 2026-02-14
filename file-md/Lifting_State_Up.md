# Lifting State Up ב־React

## מה זה אומר?

כשכמה קומפוננטות צריכות אותו state → מעבירים אותו לאבא.

------------------------------------------------------------------------

## דוגמה

``` javascript
function Parent() {
  const [count, setCount] = useState(0);

  return <Child count={count} setCount={setCount} />;
}
```

------------------------------------------------------------------------

## למה עושים את זה?

-   מקור אמת אחד (Single Source of Truth)
-   סנכרון בין קומפוננטות
