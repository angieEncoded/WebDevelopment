// Templating - what is it?
- a way to create dynamic html

// Tag syntax
<% 'Scriptlet' tag, for control-flow, no output
<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

// ejs snippets
Snippet→	Alternate	Output
ejs→	    <%	<% %> - No output tag
ejsout→	    <%=	<%= %> - Outputs HTML value
ejsesc→	    <%-	<%- %> - Outputs unescaped
ejscom→	    <%#	<%# %> - Comment tag
ejslit→	    <%%	<%% %> - Outputs Literal <%
ejsinc→	    <%	include statement
ejsfor→	    <%	for Javascript Loop
ejseach→	<%	forEach Javascript Loop
ejsif→	    <%	if Statement with condition
ejselif→	<%	else if Statement - Middle section only. Assumes you have already written the first if statement.
ejselse→	<%	else Statement - Middle section only. Assumes you have already written the first if statement.


// Adding to the app.js
const express= require('express');
const app = express();
require('dotenv').config();
//set up my current directory path stuff
const path = require('path')

// Set up the ejs stuff
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT}`)
})


// Using in a .ejs file
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Random</title>
  </head>
  <body>
    <%# We *can* put javascript right in here but its better to keep the
    template as dumb as possible %>
    <h1>
      <%= `Number without any variables passing through
      ${Math.floor(Math.random() * 10) + 1}` %>
    </h1>
    <%# Instead, we would do the logic on the node server and pass the result to
    the template in the form of a variable%>
    <p><%= `The number coming from the variable is ${number}` %></p>
  </body>
</html>


// conditionals in ejs
- run just as javascript with <% %>
<%# This is how we can interpret just javascript - Dont put in an = or - %>
<% if (number % 2 ===0){ %>
    <p>The number is even!</p>
<% } else { %>
    <p>The number is odd!</p>
<% } %> <%# Shorthand with ternary operator %>
<h3><%= number % 2 ===0 ? 'even' : 'odd' %></h3>


// Looping in ejs
