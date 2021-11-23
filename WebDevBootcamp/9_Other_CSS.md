# Other Userful Properties

- Opacity and Alpha Channel
    - Alpha
        - rgba - the a is the alpha channel
        - controls transparency
        - 0 is completely transparent
        - 1 is no transparency
            ```rgba(255,255,255,0.14)```
        - rgba only affects the background of the element
            - any text is unaffected
    - Opacity
        - This is a property that we set on the element
        - Affects the element, its contents, AND its decendants
        - 0 is completely transparent
        - 1 is no transparency
        ```css
            div {
                opacity: 0.4;
            } 
        ```
    - With hex colors
        - Two additional hex digits at the end
        - 00 is complete transparency
        - FF is no transparency
        - works the same as the alpha channel - only affects background not contents
        ```#00cca0b9```
        - rgba may be easier to work with and immediately identify that is has an alpha channel

- Position property
    - Sets how an element is positioned in a document
        - affects how top/right/bottom/left are applied
    - Static 
        - if we apply this we see that nothing changes
        - top/right/bottom/left have no affect
    ```css
        /* Nothing changes - top/bottom/left/right has no effect on elements statically positioned */
        #static .middle{
            position: static;
            background-color: blueviolet;
        }
    ```
    - relative
        - Stays in the normal flow of the document
        - We can offset relative to itself with top/right/bottom/left
    ```css
        /* Relative keeps the element in the flow of the document, and we can use top/bottom/left/right to position it relative to itself */
        #relative .middle{
            background-color: darkblue;
            position: relative;
            top: 50px;
            left: 50px; /* offsets it from the left, so it moves right */
        }
    ```
    - Absolute
        - Element is removed from the document flow
        - No space is created for the element
        - It is then positioned relative to the closest positioned ancestor
            - If that isn't positioned, then it positions itself relative to the containing block
        - We would need to position the element's containing block to work with this element
    ```css
        /* Absolute takes the element out of the document flow. does NOT create space */
        #absolute .middle{
            background-color:darkkhaki;
            position: absolute;
            top: 5px;
            left: 5px;
        }

        /* position the parent to prevent the element from setting itself relative to the body */
        #absolute {
            position: relative;
        }
    ```
    - Fixed
        - Element is removed from the document flow
        - No space is created for it
        - It's positioned relative to the INITIAL containing block
        - Useful for making things like navbars that stay at the top
            - Note that other content would need to be positioned accounting for the space...  
    ```css
        /* will stick to the top */
        #fixed .middle{
            position: fixed;
            top: 0;
            left: 0;
        }
    ```
    - Sticky
        - Will stay in its position until scrolling causes it to reach the top
        - then it will behave like fixed and stay at the top
    - html for the preceding css
    ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="main.css">
            <title>Document</title>
        </head>
        <body>
            <h1>Position Property</h1>

            <h1>Static</h1>
            <section id="static">
                <div></div>
                <div class="middle"></div>
                <div></div>
            </section>

            <h1>Relative</h1>
            <section id="relative">
                <div></div>
                <div class="middle"></div>
                <div></div>
            </section>

            <h1>Absolute</h1>
            <section id="absolute">
                <div></div>
                <div class="middle"></div>
                <div></div>
            </section>

            <h1>Fixed</h1>
            <section id="fixed">
                <div></div>
                <div class="middle"></div>
                <div></div>
            </section>
            <p>Add lorem*100 here to demonstrate the fixed positioning elements</p>

        </body>
        </html>
    ```

# CSS Transitions

- Allow us to animate the transition of one property value to another
    - Basic transition from one shape and color to another
        ```css
        .circle {
            width: 300px;
            height: 300px;
            background-color: magenta;
            transition: 1s; /* this will cause it to take this amount of time before transitioning */
        }

        .circle:hover {
            background-color:cyan;
            border-radius: 50%;
        }
        ```
    - we can specify a number of things
        - Property name
        - Duration
        - Timing Function
        - delay
        - These are actually listed in order in the css line
        | property name | Duration | Timing Function | Delay |
    - We can call out specific things
        - This will cause only the background color to take 3 seconds to transitions
        - The shape will transition immediately
        ```css
            .circle {
                width: 300px;
                height: 300px;
                background-color: magenta;
                transition: background-color 3s;
            }

            .circle:hover {
                background-color:cyan;
                border-radius: 50%;
            }
        ```
    -   Adding a second duration will put in a delay before the property transition kicks in for the background color
        ```css
            .circle {
                width: 300px;
                height: 300px;
                background-color: magenta;
                transition: background-color 3s 1s;
            }
        ```
    - Use 'all' to make it apply to all properties
        ```css
            .circle {
                width: 300px;
                height: 300px;
                background-color: magenta;
                transition: all 3s 1s;
            }
        ```
    - We can specify multiple in the line
        ```css
            .circle {
                width: 300px;
                height: 300px;
                background-color: magenta;
                transition: background-color 3s, border-radius: 1s;
            }
        ```
    - timing functions
        - When we specify a transition, there are many ways to go from one to the other
        - built in timing functions that help us with that
            - linear, ease-in, steps, cubic-bezier, etc
            - linear
                - Smooth transition from one to the other
            - ease in
                - starts out slow and speeds up toward the end
            - steps 
                - goes in very obvious increments
            - cubic-bezier
                - this does an expand and contract sort of animation before it reaches the end
            - ease-out
                - This will start out fast and slow down at the the end
        - sample animation
        ```css
            /* Set up a basic transition from left to right when hovered */
            section div {
                height: 100px;
                width: 100px;
                background-color: turquoise;
                margin: 20px 0;
                transition: margin-left 3s;
            }

            section:hover div {
                margin-left:500px;
            }

            /* Now specify some transition timing functions for how they will make the journey from left to right */
            div:nth-of-type(1){
                transition-timing-function: ease-in;
            }
            div:nth-of-type(2){
                transition-timing-function: ease-out;
            }
            div:nth-of-type(3){
                transition-timing-function: cubic-bezier(0.7,0,.84,0);
            }
            div:nth-of-type(4){
                transition-timing-function: cubic-bezier(0.85,0,0.15,1);
            }
        ```
    - Helpful website to determine how bezier curves will run
        - https://easings.net/


# Transforms
- This gives us the ability to scale elements and do all sorts of things with them
    - rotate, skew, etc
- margin:auto
    - a way to center elements
    - block level elements will be centered in the container
- syntax quick reference from mozilla site
    - rotate transform
        - can specify in deg, grad, rad, turn
        - by default this rotates from a fixed point in the center of the element
            - ```transform: rotate(45deg);```
        - we can change this with keywords or number of pixels
            - ```transform-origin: bottom right;```
            - ```transform-origin top right;```
        - we can rotate it on the X or Y axis
            - ```transform: rotateZ(90deg)```
            - ```transform: rotateY(90deg)```
    - scale
        - changes the size of an element
        - scale()
        - scaleX()
        - scaleY()
        - scale it down half as large
            - ```transform: scale(0.5);```
        - pass in more than one value
            - ```transform: scale(2,1);```
                - scale(width, height)
    - translate
        - allows us to move an element around
        - translate()
        - translateX()
        - translateY()
        - pass in a length or some percentage
        - The first selector will move the element to the right. The second will move it to the left. 
            ```css
                section:first-of-type h1:nth-of-type(3){
                    transform: translateX(200px);
                }
                section:first-of-type h1:nth-of-type(4){
                    transform: translateX(-200px);
                }
            ```
        - passing in a positive to something on the Y axis will move it down, negative will move it up
        - translate takes two values - the X axis and the Y axis
            ```css
                section:first-of-type h1:nth-of-type(4){
                    transform: translate(-100px, 50px);
                }
            ```
    - skew
        - skew an element on a 2d plane
        - accepts angles as parameters
        - takes up to two parameters, X and Y
        ```css
            section:nth-of-type(2) h1:nth-of-type(1){
                transform: skew(10deg, 25deg);
            }
        ```
    - We can combine these properties by separating them by spaces
        ```css
            section:nth-of-type(2) h1:nth-of-type(3){
                transform: rotate(-20deg) scale(1.3);
            }
        ```
    - transform will apply to whatever the contents are of our element
        - any other tags that are in the element are also affected
        - So anything inside this section will be scaled down
        ```css 
            /* Will scale the entire section */
            section:nth-of-type(2){
                transform: scale(0.7);
            }
        ```
- Example button using the things we learned
    ```css
    body {
        font-family: 'Roboto', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: slategrey;
    }

    button {
        background:none;
        color:#ffa260;
        border: 2px solid;
        padding: 1em 2em;
        font-size: 1em;
        transition: color 0.21s, border-color 0.21s, box-shadow 0.21s, transform 0.21s ;
    }

    button:hover {
        border-color: #f1ff5c;
        color: white;
        /* x offset | y offset | blur radius | spread radius */
        box-shadow: 0px 0.5em 0.5em -0.4em  #f1ff5c;
        transform: translateY(-.25em);
        cursor: pointer;
    }
    ```
# The truth about background
- background is actually shorthand for a lot of different properties
    - background-image
        - allows us to set an image
        - can also set a gradiant
        - we have properties that help us contain these images
            - contain
                - scale the image as large as possible without cropping or stretching it
            - cover
                - scales the image as large as possible without stretching it. Will crop as necessary
                - Will often 'repeat' the image
            - auto
                - scales in the corresponding direction so that proportions are maintained
    ```css
        section { 
            width: 80%;
            height:300px;
            background-color: slategrey;
            margin: auto;

            background-image: url("images/photo-1419242902214-272b3f66ee7a.jpg");
            /* background-size: contain; */
            background-size: cover;
        }

        h1 {
            font-size: 100px;
            color:white;
        }
    ```
    - background-position
        - We can choose where the image begins from
        - This will cause the image's bottom to be displayed
    ```css
        section { 
            width: 80%;
            height:300px;
            background-color: slategrey;
            margin: auto;

            background-image: url("images/photo-1419242902214-272b3f66ee7a.jpg");
            /* background-size: contain; */
            background-size: cover;
            background-position: bottom;
        }

        h1 {
            font-size: 100px;
            color:white;
        }
    ```
- Now to use the shorthand!
    - the order generally doesn't matter with this one
    - BUT if you are using bg-sizem you HAVE to put it after the position and it must be separated with the / character
        ```css
        body {
            background: url("images/photo-1419242902214-272b3f66ee7a.jpg") no-repeat center/40%;
        }
        ```
    - We can even have more than one background, separated with a space
    ```css
        body {
            background: url("images/photo-1419242902214-272b3f66ee7a.jpg") no-repeat center/40%,black;
        }
    ```

# Google fonts
- free resource
    - we can use all sorts of fonts
    - This is a way we can make the web a universal experience for users
    - We can include a font file that is downloaded with the page and the site will look the same on every browser
    






