Eric Gutierrez - Lab 6

Questions:

1) Explain what each of your classes and methods does, the order in which methods are invoked, and the flow of execution after one of the operation buttons has been clicked.

The abstract class Operation defines two properties ($x, $y) and two abstract methods: operate() and getEquation(). Addition, Subtraction, Multiplication, and Division extend Operation and implement the two abstract methods differently. When a button is clicked, the form sends a POST request with both numbers and the name of the button pressed. PHP checks which button was set using isset($_POST["add"]) or similar, creates the corresponding subclass object, calls getEquation(), and prints the result.

2) How would the application differ if you used $_GET?

$_GET would pass the input through the URL, for example: lab6.php?x=5&y=3&add=Add. It would make results shareable and visible in the browser history, but less secure and less clean for handling user input. $_POST is preferred here because the data is processed on the server without showing it in the URL.

3) Is there a better way to determine which button was pressed?

Yes, instead of multiple button names, all buttons could share the same name (ex: "operation") with different values ("add", "subtract", etc.). Then, PHP can read $_POST["operation"] directly and use a switch statement or mapping to instantiate the correct class. This approach is cleaner and scales better with more operations.
