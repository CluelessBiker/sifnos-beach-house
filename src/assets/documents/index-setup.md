## SETTING UP INDEX.HTML

1. Navigate to `public` > `index.html`
2. To replace your browser tab favicon:
 - import your desired `favicon-16x16.png` file into the `public` directory.
 - replace the head `<link>` with:
 ```
 <link rel="icon" href="%PUBLIC_URL%/favicon-16x16.png" />
 ```
3. Update the `content` portion of the `<meta>` tage with your site description.
4. If using Bootstrap, make sure to add it as per the [documentation](https://react-bootstrap.github.io/getting-started/introduction):
```
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
```
5. Add `crossorigin="use-credentials"` to the `<link>` tag containing `rel="manifest"`.
6. If using **Google Fonts** in your project, add the `<link>` tag obtained from google:
```
<link
  href="https://fonts.googleapis.com/"
  rel="stylesheet"
/>
```
7. If using **Font Awesome**, add a `<script>` tag & insert your kit number:
```
<script
  src="https://kit.fontawesome.com/your-kit-number.js"
  crossorigin="anonymous">
</script>
```
8. Update the `<title>` tags with your App name:
```
<title>Hello World</title>
```
