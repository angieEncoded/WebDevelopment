# Cascading style sheets 

- Language that describes the appearance of a document
   - Almost everything follows this pattern:
     ```css 
        selector {
           property:value
         }
        ```
- CSS is huge - don't panic!
```css
    background: conic-gradient(red, orange, yellow, green, blue)
```
- Helpful pages 
  - https://html-css-js.com/css/generator/text-shadow/
  - https://cssgradient.io/
  - https://htmlcolorcodes.com/color-picker/
  - https://www.cssfontstack.com/ /* Machine adoption of fonts *?
  - https://coolors.co/palettes/trending
  - https://specificity.keegan.st/
  - https://source.unsplash.com/

- including styles correctly
  - inline - don't use this
  ```html 
    <h1 style="color:purple">This is a heading</h1>
    <button style="background-color: orange;">Button</button>
    ```
  - style tag in the header
  ```html 
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Including Styles</title>
        <style>
            h2 {
                color:green;
            }
        </style>
    </head>
  ```
  - in a css file!
  ```html 
  <link rel="stylesheet" href="main.css">
  ```

- Semicolons are important. stylesheets may not apply at all if one is missing
  - Selecting by element type
  ```css
    body {
      /* This does more than just changing the color */
      background: rgb(2, 0, 36);
      background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(4, 4, 135, 1) 35%,
        rgba(0, 212, 255, 1) 100%
      );
    }
  ```

- Basic properties - color will change foreground text and background-color will change the background
```css 
  button {
    color: red;
    background-color: pink;
  }

  p {
    color: white;
    background-color: black;
  }
```
- RGB colors - additive color system mix red green and blue to make a color 
  - 0-255 0 means none of that color and 255 means all of that color 
  ```css
    h2 {
      color: rgb(89, 151, 0);
    }
  ```

- hex colors are a different way to represent the colors but same principle
  - #ffff00 the first two represent red channel, next two the green channel and last two the blue channel
  - they range from 0-F
  - shorthand exists - #000 is the same as #000000 as #c5e is the same as #cc55ee
  ```css
    h1 {
      color: #4745c7;
    }
  ```

- CSS Basics 
  - Common text properties
  ```css
      h1 {
        /* block elements stretch the whole screen */
        text-align: center;
        /* We can force it to only take up half the screen */
        /* width: 50%; */
        /* If a font doesn't support, it will pick the closest it DOES support */
        font-weight: normal;
        /* text-decoration is useful for removing hyperlink underlines - set to none */
        text-decoration: green wavy underline overline 4px;
        letter-spacing: 10px;
        /* font-size basics with pixels */
        /* 
          - Most commonly used 'absolute' unit - always the same in the document no matter what
          - does not necessarily equal 1 exact pixle
          - not recommended for responsive websites
          */
        font-size: 80px;
        /* font-family property
          - This actually changes the font of an element
          - depends on the fonts built into the browser
          - import your own or use browser-safe fonts
          - often a font stack will be used - use these fonts in order
          */
        font-family: Arial, Helvetica, sans-serif;
      }

      p {
        /* line-height controls the height 2 is double spacing, 0 is no spacing*/
        line-height: 2;
      }
  ```

-  code challenge
```css
    h1{
        text-transform:uppercase;
        font-family:monospace;
        text-align:center;
        font-weight:100;
        text-size:40px;
        letter-spacing:20px;
        text-decoration: plum wavy underline;
    }
```
