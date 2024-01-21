// copy this codes in to your main js file in your project

// generate random Letters
var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
// this is container
var string = '';
//a loop for generate an random "Gmail"
for (var ii = 0; ii < 15; ii++) {
  string += chars[Math.floor(Math.random() * chars.length)];
}
// Finally, we put the code where it is needed
$("#billing_email").val(string + "@gddail.com"); // 
