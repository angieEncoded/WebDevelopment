# CSS Box model

- everything in CSS is a box! 
  - Margin is the space between a box and other content
  - padding is the space between the inside edges of the box and the inner content
  - Border is the area around a box
  - width is the width of the inner content area (unless you use box-sizing)
  - height is the height of the inner content area (unless you use box-sizing)

- Adjust the box height and width manually 
  ```css
  div {
    width: 200px;
    height: 200px;
    background-color: blueviolet;
  }
  ```

- border element 
  ```css
  h1 {
    background-color: red;
  }

  #one {
    /* Border stuff */ 
    border-width: 2px;
    border-color: black;
    border-style: solid;
    box-sizing: border-box; /* will contain the border - without this the border overflows the box */ 
    /* end border stuff */ 

    background-color: blueviolet;
  }

  #two {
    border-width: 2px;
    border-color: green;
    border-style: dashed groove none dotted; /*  top right bottom left */
    border-left-color: gold;
    background-color: cadetblue;
  }

  #three {
    border: 3px dotted black; /* shorthand property  */
    border-radius: 50%; /* This will make a circle  */
    overflow: hidden; /* hide the content within the circle  */
    background-color: chocolate;
  }
  ```

- Code challenge 
  ```css
  .card {
      width: 210px;
      border: 1px grey solid;
      border-radius:5px;
      text-align:center;
  }

  img {
      width:200px;
      border: 5px rgb(236,183,191) solid;
      border-radius:50%;
  }
  ```

- padding  shorthand 
- All four sides
   - padding 10px;
- Vertical | Horizontal
   - padding: 5px 10px;
- top | horizontal | bottom
   - padding 1px 2px 2px
- top | right | bottom | left
   - padding 1px 2px 3px 4px

- padding - space between the border and the content
  ```css
  #padding {
    padding-left: 80px;
    padding-top: 50px;
  }
  ```

- shorthand 
  ```css
  #padme {
    padding: 10px;
  }
  ```

- Margin space outside of an element's border 
  ```css
  #four {
    margin-left: 50px;
    margin-top: 100px;
  }
  ```

## Display Properties 

- by default h1s are blocks and will take up an entire line 
  ```css
  h1 {
    background-color: pink;
    border: 1px solid black;
    display: inline; /* force them inline  */
  }
  ```

- By default spans are inline 
```css
  span {
    background-color: palegreen;
    border: 1px solid black;
    display: block; /* forces a line break  */
  }
  ```

- Elements with a display of inline ignore width and height 
  ```css
  span {
    background-color: orange;
    border: 1px solid black;
    width: 500px; /* This doesn't work! Inline elements ignore width and height */
    height: 500px;
    padding: 100px; /* padding works but the surrounding content ignores it  */
    display: block; /* if we make it a block display, all the things we put in will be respected  */
  }
  ```

- divs by default are block level elements 
  - inline-block behaves like inline and puts all the boxes on the same line but height, width, margin and padding work 
    ```css
    div {
      height: 200px;
      width: 200px;
      background-color: olivedrab;
      border: 1px solid black;
      display: inline-block;
    }
    ```

- hide an element with display:none 
  ```css
  #hide {
    display: none;
  }
  ```

- Css units 
  - em
    - relative units
    - with font-size 1em = the font-size of the unit
    - 2em = twice the font-size of the parent element
  - rem
    - Root html element font size
    - easier to work with
    - 
  - wh
  - vw
  - vh
  - %
    - always relative to some other value
    - depends on what that something is
    - sometimes it's a value from the parent
    - sometimes it's a value from the element itself
    - examples
        - width:50% - half the width of the parent
        - line-height: 50% - half the font-size of the element itself
- Percentages 
  ```css
  #percentages {
    background-color: orange;
    width: 300px;
    height: 300px;
  }

  #percentages div {
    background-color: blue;
    width: 50%;
    height: 50%;
  }

  #percentages h1 {
    font-size: 40px;
    border: 1px solid black;
    line-height: 50%; /*  this is independant of the parent it uses the font-size */
  }
  ```

- ems 
  - This is the parent element 
    ```css
    article {
      font-size: 30px;
    }
    ```

- this will be twice the size of the parent element 
  ```css
  h2 {
    font-size: 2em; - This will be 60px 
  }
  ```

- padding and margin is often used with em - 1em will be equal to the font-size of the element itself 
  ```css
  h3 {
    font-size: 30px;
    margin-left: 1em;
  }

  button {
    font-size: 1em;
    padding: 0 1em;
    border-radius: 0.5em;
    background-color: #2a9d8f;
    color: white;
  }
  ```

- These are based on the root html element 
  ```css
  #rems h2 {
    font-size: 3rem;
  }

  #rems h3 {
    font-size: 5rem;
  }
  ```
## Additional Properties
- Opacity and alpha channel 
- Alpha channel
   - rgba - the a is a fourth channel
   - governs how transparent the color is
   - 0 thorugh 1
   - 0 is not at all transparent
   - 1 is completely transparent
   - Will not affect child elements or contents if you use this on say, background-color
- Opacity
   - This will affect everything in the element including contents
   - Goes from 0-1 
   - 0 is no transparency
   - 1 is full
- Alpha channels exist for Hex as well
   - #00cca0
   - We can add on two more hex digits to the end
   - 00 for no transparency
   - FF for max transparency
    ```css
    section {
      width: 500px;
      height: 500px;
      background-color: magenta;
    }
    ```

- This will only affect the specific element and 
  ```css
  #rgba {
    width: 50%;
    height: 50%;
    background-color: rgba(255, 255, 255, 0.7);
  }
  ```

- Opacity will affect everything, including child elements 
  ```css
  #opacity {
    width: 50%;
    height: 50%;
    background-color: red;
    opacity: 0.5;
  }
  ```


- Alpha color channels exist for hex as well 
  ```css
  #hexAlpha {
    width: 50%;
    height: 50%;
    background-color: #00cca03f;
  }
  ```