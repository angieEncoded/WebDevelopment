# what is bootstrap
- "the world's most popular CSS Framework
- what is a CSS framework?
    - Sort of like a physical framework in the real world
    - Helps us quickly create nice looking and responsive websites
    - Starting point
- Two main things
    -  Components
        - buttons, navbars, etc
    - Grid system
        - Helps us lay out the websites
        - Responsive - changes how it looks on mobile vs pc
- Getting bootstrap
    - Use the CDN or download it
- How to use it
    - Most of what we do is by including classes

## Typeography and Utilities
- containers
    - The most basic layout element
    - required for the grid system
    - contains and pads content
    - container 
        - Responsive, fixed-width container
    - container-fluid
        - Responsive, full-width container
- Buttons
    - btn 
        - main class
    ```html
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-success">Success</button>
        <button class="btn btn-info">Info</button>
    ```
    - We can set links as button class as well
    ```<a href="/" class="btn btn-danger">Danger link</a>```
    - Change sizes
        - btn-lg
        - btn-sm
        - btn-md
    - Block-level buttons
        - Takes up the entire container
        ```html
            <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">Button</button>
            <button class="btn btn-primary" type="button">Button</button>
            </div>
        ```
    - Disabled
        ```html
            <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
        ```
- Bootstrap color labels
    - primary - blue
    - secondary - gray
    - success - green
    - danger - red
    - warning - yellow
    - info - aqua
    - light - light gray
    - dark - black
- Typography
    - Display headings
        - Large, opinionated style
        - Useful for sectioning out our content
        ```html
            <h1 class="display-1">Display 1</h1>
            <h1 class="display-2">Display 2</h1>
            <h1 class="display-3">Display 3</h1>
            <h1 class="display-4">Display 4</h1>
            <h1 class="display-5">Display 5</h1>
            <h1 class="display-6">Display 6</h1>
        ````
    - Lead
        - Slightly enlarges a paragraph
    - Mark text
    ```html
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
        <p><u>This line of text will render as underlined.</u></p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>
    ```
    - Block quotes
        - Quote well-known details
        ```html
            <blockquote class="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
        ```
    - Aligning text
        - text-right
        - text-center
        - text-end
- Utilities
    - Color
        - We have utilities to change the text colors
        ```html
            <p class="text-primary">.text-primary</p>
            <p class="text-secondary">.text-secondary</p>
            <p class="text-success">.text-success</p>
            <p class="text-danger">.text-danger</p>
            <p class="text-warning bg-dark">.text-warning</p>
            <p class="text-info bg-dark">.text-info</p>
            <p class="text-light bg-dark">.text-light</p>
            <p class="text-dark">.text-dark</p>
            <p class="text-body">.text-body</p>
            <p class="text-muted">.text-muted</p>
            <p class="text-white bg-dark">.text-white</p>
            <p class="text-black-50">.text-black-50</p>
            <p class="text-white-50 bg-dark">.text-white-50</p>
        ```
    - Their theme colors
        ```s
            $blue:    #0d6efd;
            $indigo:  #6610f2;
            $purple:  #6f42c1;
            $pink:    #d63384;
            $red:     #dc3545;
            $orange:  #fd7e14;
            $yellow:  #ffc107;
            $green:   #198754;
            $teal:    #20c997;
            $cyan:    #0dcaf0;
        ```

## Badges, Alerts and Button Groups
- Badges
    - Counts and labels, etc
     ```html
        <button type="button" class="btn btn-primary">
            Notifications <span class="badge bg-secondary">4</span>
        </button>
    ```
    - pill badges
        - just a radius on the corners
    ```html
        <span class="badge rounded-pill bg-primary">Primary</span>
        <span class="badge rounded-pill bg-secondary">Secondary</span>
        <span class="badge rounded-pill bg-success">Success</span>
        <span class="badge rounded-pill bg-danger">Danger</span>
        <span class="badge rounded-pill bg-warning text-dark">Warning</span>
        <span class="badge rounded-pill bg-info text-dark">Info</span>
        <span class="badge rounded-pill bg-light text-dark">Light</span>
        <span class="badge rounded-pill bg-dark">Dark</span>
    ```
- Button groups
    - Wraps a series of buttons together
    ```html
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">Left</button>
            <button type="button" class="btn btn-primary">Middle</button>
            <button type="button" class="btn btn-primary">Right</button>
        </div>
    ```
- Alert
    - feedback to the user
    ```html
        <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
        </div>
        <div class="alert alert-secondary" role="alert">
        A simple secondary alert—check it out!
        </div>
        <div class="alert alert-success" role="alert">
        A simple success alert—check it out!
        </div>
        <div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
        </div>
        <div class="alert alert-warning" role="alert">
        A simple warning alert—check it out!
        </div>
        <div class="alert alert-info" role="alert">
        A simple info alert—check it out!
        </div>
        <div class="alert alert-light" role="alert">
        A simple light alert—check it out!
        </div>
        <div class="alert alert-dark" role="alert">
        A simple dark alert—check it out!
        </div>
    ```
    - Additional content in an alert
    ```html
        <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>
    ```
    - Alerts with Icons
    ```html
            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </symbol>
            <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
            </symbol>
            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </symbol>
            </svg>

            <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
            <div>
                An example alert with an icon
            </div>
            </div>
            <div class="alert alert-success d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
            <div>
                An example success alert with an icon
            </div>
            </div>
            <div class="alert alert-warning d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
            <div>
                An example warning alert with an icon
            </div>
            </div>
            <div class="alert alert-danger d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
            <div>
                An example danger alert with an icon
            </div>
            </div>
    ```
    - Dismissable alerts
        - Alerts that have some javascript that allows us to dismiss it
        ```html
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        ```
        - you can us the 'x' or you can use &times;
        - data-dismiss is bootstrap specific
- aria-prefixed items have to do with screen readers

## Bootstrap Grid System
- Helps us layout our content
    - Creates responsive layouts
    - Mobile first
- Only works inside of a container
    - must create a row using the class of row
        - Total is always 12 units across
    - We create columns inside our rows
    - they all start with col
    ```html
         <div class="row">
             <div class="col bg-success">I am auto-sized</div>
             <div class="col bg-primary">I am auto-sized</div>
             <div class="col bg-danger">I am auto-sized</div>
             <div class="col bg-info">I am auto-sized</div>
             <div class="col bg-success">I am auto-sized</div>
             <div class="col bg-success">I am auto-sized</div>
         </div>  
    ```
- if we just use 'col' bootstrap will automatically size
    - We can have a fixed size one and give the other 'col' and the 'col' will autosize around us
    ```html
        <div class="row">
            <div class="col bg-success">I am auto-sized</div>
            <div class="col bg-primary">I am auto-sized</div>
            <div class="col-8 bg-danger">I am auto-sized</div>
        </div>  
    ```
- Responsive Bootstrap Grids
    - We use special classes that correspond to breakpoints to control 
        - Extra small (xs)
        - Small (sm)
        - Medium (md)
        - Large (lg)
        - Extra large (xl)
        - Extra extra large (xxl)
    - So we do col-xs-6 for example
    ```html
        <!-- Working with images -->
        <div class="container">
            <div class="row align-items-end">
                <!-- no-gutters will remove the space between pictures -->
                <div class="col-xl-6 col-md-6 col-sm-12"><img src="images/alexander-london-mJaD10XeD7w-unsplash.jpg" class="img-fluid" alt=""></div>
                <div class="col-xl-6 col-md-6 col-sm-12"><img src="images/cedric-vt-IuJc2qh2TcA-unsplash.jpg"  class="img-fluid" alt=""></div>
                <div class="col-xl-6 col-md-6 col-sm-12"><img src="images/hang-niu-Tn8DLxwuDMA-unsplash.jpg"  class="img-fluid" alt=""></div>
                <div class="col-xl-6 col-md-6 col-sm-12"><img src="images/jae-park-7GX5aICb5i4-unsplash.jpg"  class="img-fluid" alt=""></div>
            </div>
        </div>
    ```

## Useful Grid Utilities
- Useful ways to align the content
- Remember flexbox
    - bootstrap uses flexbox terminolgy because it's built on flexbox
    ```html
        <div class="container">
        <div class="row align-items-start">
            <div class="col">
            One of three columns
            </div>
            <div class="col">
            One of three columns
            </div>
            <div class="col">
            One of three columns
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col">
            One of three columns
            </div>
            <div class="col">
            One of three columns
            </div>
            <div class="col">
            One of three columns
            </div>
        </div>
        <div class="row align-items-end">
            <div class="col">
            One of three columns
            </div>
            <div class="col">
            One of three columns
            </div>
            <div class="col">
            One of three columns
            </div>
        </div>
        </div>
    ```
## Bootstrap and forms
- Basic components
    - form-control
        - This gives us a nicer looking form input
    - form-group
        - groups together a label and an input
    - We can use the 'default' 
    ```html
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">Default checkbox</label>
        </div>
    ```
    - We can also use a bootstrap customized one
    ```html
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="tos">
            <label for="tos" class="custom-control-label">Sign Up</label>
        </div>
    ```
- Creating form layouts
    - Use the grid system!
    - There is a special row for forms - form-row - this will get rid of some of the gutters and spacing
    - remember that you can add classes to the form-group div! Add col to that instead of wrapping it all in a div just for the col
    ```html
        <div class="container">
            <form action="#">
                <div class="form-row">
                    <!-- Anything below the md-6 breakpoint will take up the entire row -->
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" name="email">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" name="password">
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <!-- CITY STATE ZIP -->
                    <div class="form-group col-md-6">
                        <label for="City">City</label>
                        <input type="text" class="form-control">
                    </div>
                    <!-- This will be 6 across for everything except when it hits md breakpoint, then it switches to 3 -->
                    <div class="form-group col-6 col-md-3">
                        <label for="state">State</label>
                        <select name="state" id="state" class="form-control">
                            <option value="NY">New York</option>
                            <option value="California">California</option>
                        </select>
                    </div>
                
                    <div class="form-group col-6 col-md-3">
                        <label for="zip">Zip Code</label>
                        <input type="text" class="form-control">
                    </div>
                    <!-- CITY STATE ZIP -->
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">Default checkbox</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="tos">
                            <label for="tos" class="custom-control-label">Sign Up</label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    ```
## Bootstrap Navbars
- Probably the most common component used
    - It's responsive and looks good on all screens
    - We can change the text and background colors
    ```html
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    ```
    - Important - change the color with an inline style element
    ```html
        <!-- Change the background color with an inline style element -->
        <nav class="navbar navbar-expand-lg navbar-light"  style="background-color: #7952B3;">
    ```
    - navbar-expand-lg
        - This is what tells us when the navbar will collapse
    - navbar-toggler
        - This controls the 'hamburger'
    - The javascript is required
        - note that there is no more jquery
    - fixed-top
        - keep the navbar at the top
    - sticky-top
        - If you add content before the nav, the nav will stick to the top as soon as you scroll it off the screen
- Icons
    - svg
        - Scalable Vector Graphics
        ```
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
        ```
        - information that tells the browser how to display the shape
        - Icons can be used inside of other components, like buttons
    - Trash button example:
    ```html
        <button class="btn btn-sm btn-danger">Delete
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
        </button>
    ```
    - The icons will take whatever color you give them
    - They kind of behave like text in our applications

## Other Utilities to be aware of
- Border utility
    - border - all four sides
    - border-top, border-bottom, border-left, border-right
    - border-radius
    - border-color
- Color Utility
- Shadow Utility
    - Quickly add shadows
    - shadow-none
    - shadow-sm
- spacing
    - margin and padding
    - m and p
    - tblrxy options
    - top bottom left right xaxis yaxis
    - Can be adjusted with the Sass map variable
    - Can be adjusted based on the viewport
        - sm, md, lg, etc breakpoints
- Display
    - We can set things display-none and selectively hide it depending on the screen size
        - none
        - inline
        - inline-block
        - block
        - grid
        - table
        - table-cell
        - table-row
        - flex
        - inline-flex
## Mixed bag of other stuff
- Cards
    - Basically a box with a border and some content inside
- Carousel
    - Image slider, gallery, etc
- Dropdown menus
- Spinners!
- Modals
    - Popup dialogues
    
