
- Introduction to HTML
    - Structure ofthe content
    - Markup language
    - Hypertext Markuplanguage
    - Originally to describe how to display research papers
    - We use elements that all browsers recognize

- boilerplate
```html 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>
```
- Basic tags
``` html
<!-- -->                            comment
<p></p>                             paragraph
<h1></h1>                           Heading tags 1-6
<ul></ul>                           Unordered list
<ol></ol>                           Ordered list
<li></li>                           Line items
<b></b>                             bold text
<i></i>                             italic
<hr>                                Horizontal rule
<a href=""></a>                     anchor tag - links
<img>                               image tag
<br>                                break element
<sup></sup>                         superscript (exponents)
<sub></sub>                         subscript (chemical formulas)
<div></div>                         block level element
<span></span>                       generic container that is an inline element. we can single out some text for example for styling without breaking the line                
<div></div>                         content division element. block level element. Used to group content

```

- What is HTML5
    - an evolution of HTML that has a bunch of new stuff
    - performance updates
    - stuff for css
    - not just html


- Types of elements
    - Inline elements
        - elements that all appear on the same line next to each other
    - Block elements
        - elements that appear on their own line (own 'block')

- HTML Entities
    - Starts with an ampersand and end with a semicolon. 
    - https://dev.w3.org/html5/html-author/charref is the entire reference chart
    - https://entitycode.com/
    - Useful if we need to use <> brackets
    - every entity has a name and a number
    - NOTE: Hash sign aka octathorpe

- Semantic markup
```html
<!-- Introductory content of the page -->
    <header><h1>Welcome to the page</h1></header> 

<!-- Main content would go in the main -->
    <main>
        <!-- Figure elements are self-contained content -->
        <figure>
            <img src="yaya.jpg" alt="my cat yaya" height="250" width="400">
            <figcaption>I am a caption</figcaption>
        </figure>
        
        <!-- Inline element that wraps around a time - specify the datetime attribute -->
        <time datetime="2018-07-07">July 7</time>

        <!-- Standalone content of a site -->
        <section></section>
        
        <!-- This can contain all elements of an article -->
        <article>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quasi accusantium, facilis soluta aperiam voluptatem consectetur provident, assumenda ad quos, in expedita amet quidem repellat eos vel. Nostrum, reprehenderit officia!</p>
        </article>
        
        <!-- This represents content that is only indirectly related -->
        <aside>
            <p>I am not really all that related to this article</p>
        </aside>

    <!-- Can be placed at the end of any content to hold general footer things -->
        <footer></footer>
    </main>
```



- Tables
```html
<table></table>                 Creates a new table
<tr></tr>                       Create a table row
<td></td>                       Create a table data cell
<th></th>                       Create a table header
<thead></thead>                 Create a section wrapping heading data
<tbody></tbody>                 Create a section wrapping body data
<tfoot></tfoot>                 Create a section wrapping any footer data
```

- Forms
```html 
<form action="" method=""></form>
<input type="">                     Defaults to a text input - 20+ different types
<input type="text"              name="" id=""   placeholder="Username" />
<input type="password"          name="" id=""   placeholder="Password" />
<input type="color"             name="" id="" />
<input type="date"              name="" id="" />
<input type="email"             name="" id=""   placeholder="Email" />
<input type="file"              name="" id="" />
<input type="month"             name="" id="" />
<input type="number"            name="" id=""   placeholder="number" min="" max="" step=""/>
<input type="search"            name="" id=""   placeholder="Search" />
<input type="tel"               name="" id=""   placeholder="Telephone Number" />
<input type="time"              name="" id="" />
<input type="image"             name="" id="" />
<input type="url"               name="" id=""   placeholder="URL" />
<input type="week"              name="" id="" />
<input type="datetime-local"    name="" id="" />
<input type="submit" value="Some other name"> <!-- not used anymore -->
``` 

- special cases
```html 
<input type="checkbox" name="" id="" checked/>     <!-- use checked if you want it to default to checked -->

<input type="radio" name="race" value="5k">
<label for="5k">Fun Run 5k</label><br>

<input type="radio" name="race" value="half">
<label for="half">Half Marathon</label><br>

<input type="radio" name="race" value="full">
<label for="full">Full Marathon</label><br>

<select name="cat" id="cat">
    <option value="">-- Please choose a cat --</option>
    <option value="yaya">yaya</option>
    <option value="babs">babs</option>
    <option value="Calico">calico</option>
</select>

<input type="range" name="" id="" min="" max="" step="" value="initialValue"/>
```

- labels tied to the id not the name
```html
<label for="username">Username</label>
<input type="text" name="username" id="username">

<label for="color">Color</label>
<input type="color" name="color" id="color">

<label for="number">Number</label>
<input type="number" name="number" id="number">
```

- Button's default behavior in a form is SUBMIT
```html
<button type="button"></button>
<button type="submit"></button>
<button type="reset"></button>
```

- Textareas are for mass data input
```html 
<textarea id="" name="" cols="20" rows="30" placeholder="Placeholder text">All the data would be in here</textarea>
```

- Browser side validations

| **required attribute** | **browser will stop you from submitting**    |
| ---------------------  | -------------------------------------        |
| minlength              | text inputs                                  |
| maxlength              | text inputs                                  |
| min                    | numeric values                               |
| max                    | numeric values                               |
| pattern                | used with regex                              |           

- password type hides input
```html 
<input type="password" name="password" id="password" placeholder="password" required minlength="" maxlength=="">
```





































