Exercise 2
---
Read the `data.json` file and display the data as tabs on desktop and an accordion on mobile.

##### Requirements
1. Display data in tabs on desktop.
2. Display data in an accordion on mobile.
3. Only 1 accordion/tab should be open at a time.
4. Open the first accordion/tab on load.
5. If the open accordion is selected, close it.

###### Bonus points
* Improve the user experience with meaningful animations/transitions.
* Design and styling.
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

###### Answer to banana question
`+ 'a'` gets evaluated as `NaN` (Not a Number) because the unary operator tries to coerce the string `'a'` to a number, which it cannot, thus resulting in `NaN`. Therefore, the expression `'b' + 'a' + + 'a' + 'a'` gets evaluated as `'baNaNa'`. And when you lowercase `'baNaNa'`, it becomes `banana`.

#### Running the application
1. Type `npm install` within the terminal to download the necessary packages. Make sure you are in the project root when running the command.
2. To run the application within the browser, type `npm start`. The application should run at `http://localhost:8080/`. Again, make sure you are in the project root when running the command.