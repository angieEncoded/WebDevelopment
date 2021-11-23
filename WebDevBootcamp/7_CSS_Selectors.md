# CSS Selectors

- Everything we do follows this basic pattern:
  ```css
  selector {
    property: value;
  }
  ```
- It can get VERY fancy and complicated
  ```css
    input[type="text"]:nth-of-type(2n){
      border: 2px solid red;
    }

  ```

- Universal selector
  - Selects everything in the document
  - not really used
  ```css
  * {
    color: pink;
    }
  ```  

- Element selector - everything of a given type 
  ```css
  button {
    background-color: #a8dadc;
  }
  ```


- Combine multiple selectors in a list with a comma
  ```css
  h1,
  h2 {
    color: #1d3557;
  }
  ```

- ID selector - use a # to select an element by ID - keep use of these to a minimum
  ```css
  #signup {
    background-color: black;
    color: white;
  }
  ```
- Class selector - use a . to select an element by class - most commonly used. applied to multiple elements
  ```css
  .tag {
    background-color: red;
    color: gray;
    font-size: 16px;
    border-radius: 5px;
  }
  ```
- Descendant selector - this will select any anchors tags NESTED INSIDE another element. 
  - we can do that with classes too
  ```css 
  span a {
    text-decoration: none;
    color: black;
  } 
  .post a {
    font-weight: bold;
    color: green;
    text-decoration: none;
  }

  footer a {
    color: red;
  }
  ```


- Adjacent selector (uses +) 
  - select only the buttons that are immediately preceded by an ```<h1>``` on the same level
    ```css
    h2 + button {
      color: orange;
      background-color: magenta;
    }
    ```

- Direct child (uses > )- select only the items that are the direct child of another element
  ```css
  footer > a {
    color: black;
  }
  ```

- The attribute selector (uses []) - select elements based on what their attributes are set to 
  ```css
  input[type="password"] {
    color: rebeccapurple;
  }
  ```
- can do janky things like selecting class since its an attribute - this example is the same as selecting by .post
  ```css
  section[class="post"] {
    background-color: yellowgreen;
  }
  ```
- Select an item with fuzzy matching - the href contains google
```css
a[href*="google"] {
  color: tomato;
}
/* using $ will select text ending so we could search for a .org with a[href$=".org] */
/* using ~= will also do fuzzy matching */
```

- select only on specific elements - this will select only sections with the class of post and nothing else
  ```css
  section.post {
    background-color: turquoise;
  }
  ```

- Pseudo classes - keyword added to a selector that specifies a special state of the element 
  ```css
  :active
  :checked
  :first
  :first-child
  :hover
  :not()
  :nth-child()
  :nth-of-type()
  ```

- Select button inside of a post when hovered
  ```css
  .post button:hover {
    color: darkred;
    background-color: darkslategrey;
    cursor: pointer;
  }

  a:hover {
    text-decoration: overline underline;
    color: black;
  }

  .post button:active {
    background-color: deeppink;
    color: white;
  }
  ```

- nth of type - helps us select only certain elements
  ```css
  /* This syntax will give us only the 3rd post */

  .post:nth-of-type(3) {
    background-color: brown;
  }

  /* This will get us every third */
  .post:nth-of-type(3n) {
    background-color: brown;
  }

  /* This will get us even numbers first and then odd numbers */
  .square:nth-of-type(2n){
      background-color:black;
  }
  .square:nth-of-type(2n+1){
      background-color:red;
  }
  ```

- Pseudo elements - keyword added to a selector that lets you select only a part of an element
  ```css
  ::after
  ::before
  ::first-letter
  ::selection

  h2::first-letter {
    font-size: 50px;
  }
  ```

- Apply to the first line of an element
  ```css
  p::first-line {
    color: purple;
  }
  ```

- This will change the background of whatever you selected 
  ```css
  p::selection {
    background-color: orange;
  }
  ``` 

- The cascade - the order matters!
  - The last style that the browser sees will generally win
  - The order matters in the individual sheet AND any other sheets we are linking to
- Specificity
  - How the browser decides which rules to apply when multiple rules could apply to the same element
  - It is a measure of how 'specific' a given selector is
  - More specific wins!
    ```css
    button:hover {
        color:red:
        }
        VS
    post button:hover{
        color:blue;
        }
    ```
    - post button:hover will win
  - general formula:
    - ID > CLASS > ELEMENT
  - Formula each item is counted in this order:
    - ID Selectors
    - Class, attribute, pseudo-class selectors: 
    - Element Selectors
  - Then given a number in each of three places __ __ __
    - So if we have 1 0 0 - ID wins
    - if we have 1 2 1 - ID still wins
    - if we have 0 1 2 - Class wins
    - NOTE: Only the CONFLICTING styles may have a problem
    - If the style only exists in one of them, it will STILL APPLY!
- Inline styles and !important
  - These will beat out even IDs
  - Not often used
  - !important shouldn't be used either
  - if it is put after some property it should signal to the browser to use this
    - color:blue !important
- Inheritance 
  - Some properties are inherited by child elements if they are not set specifically
  - for example, setting the color property on the body element will cascade down to all the child elements unless they have other things specified
  - dev tools will tell us when something has been inherited
  - Child elements will inherit from the closest parent element
  - So if section is set to a color, a paragraph in the section would inherit that color instead of body's color
  - Some elements don't inherit by default
    - buttons for example
    - we can set the property to 'inherit' to ask it to 