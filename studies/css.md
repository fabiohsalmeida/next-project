##

```css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```

Bellow, we make the background black and the text white
```css
html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  background-color: #111;
  color: #bbb;
}
```

The code bellow makes every link lose its blue-style-with-underline: ``text-decoration: none``
The ``color: inherit`` makes it use the parent style.

```css
a {
  text-decoration: none;
  color: inherit;
}
```