# password-generator

Challenge from Scrimba, Make a functionnal password generator from this design https://www.figma.com/file/YRO9Iw5IYaOorjnRyNz4bV/Random-Password-Generator?node-id=0%3A1

I had to research multiple things to make this work the way i wanted to, i ended-up learning a lot coding this challenge, it was super fun.

What i learned:

<ul>
  <li>Generating random number with crypto.getRandomValues()</li>
  <li>Changin the range of arrays with Array.map() method</li>
  <li>Not new but good reminder Math.floor to get rid of the decimals</li>
  <li>How to get the id of a clicked button trough the argument passed in the function</li>
  <li>How to pass arrays as argument in a function with the spread operator ...</li>
  <li>Using ASCII in JS with String.fromCharCode()</li>
  <li>Copy to clipboard trough the clipboard API with navigator.clipboard.writeText()</li>
  <li>Be overall more organized in my css</li>
</ul>

Could be better with:

<ul>
  <li>Responsive design with a media query</li>
  <li>Options for the user for including/excluding certain character types(uppercases, symbols, etc)</li>
  <li>another typed array with more depth like Uint32Array instead of 8 for example would lead to stronger randomness</li>
</ul>
