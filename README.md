React Event and State Exercise...
Important: Remember to stop your React App from running AFTER you complete the exercise. You can do this by opening the terminal session that the React App is running on and pressing (Control + C) or you can click the trash can icon to completely end that terminal session.
A. Open terminal, cd into the “ReactApps” folder and run the following command…
npx create-react-app react-events-state-exercise
B. After the React App has been created and the “Happy Hacking!” message is seen, cd into the “react-events-state-exercise” folder
C. Run the following command inside the “react-events-state-exercise” folder…
npm start
D. You should now see the React app default page displaying in the browser (It has the cool spinning React logo)
E. Open the App.js file (NOTE: This is inside the “src” folder)
F. Remove both imports at the top of the App.js file. Also, remove everything in the parentheses of the RETURN in the App function component
NOTE: You will need to open a second terminal session to complete the next two steps
G. Create a new folder/directory in the “src” folder called “exercise”
H. Inside the exercise folder create an Exercise.js file
I. Open the Exercise.js file and complete the following...
1a. Create a function component called Exercise

1b. Add the export line at the bottom of the file

1c. Inside the Exercise function component, use the RETURN keyword with parentheses to have the Exercise function component return a button element and set the text inside of it to "CLICK HERE"

1d. Open the App.js file and add the necessary import line at the top of the file that allows the Exercise component to be used in the App.js file. Also, use the Exercise component in the return for the App component.

1e. Use the "onClick" React event listener on the button and set the value for the "onClick" React event listener to a function that alerts the user with the following message when the button is clicked…
"Congrats! You have clicked the button."
(HINT: Remember to use brackets {})

2a. Add the necessary import line at the top of the Exercise.js file that allows for the useState function to be used in this file/component

2b. Create another button element below the "CLICK HERE" button in the Exercise function component set the text inside of it to "STATE"

2c. Above the return keyword in the Exercise function component, use the "useState" function with the number 1 passed in as an argument. Also, use destructuring to set the values of the array that are returned from the useState function to the following const variable names…
First name: "num"
Second name: "setNum"
(NOTE: Remember that the useState function returns an array of two items. First is the value that was passed into the useState function and the second is a function.)

2d. Below useState function, create a function called addNum that adds one to the value of the num variable and sets that as the new state value for the num variable by using the setNum function inside of the addNum function

2e. Use the "onClick" React event listener on the "STATE" button and set the value for the "onClick" React event listener to the addNum function (HINT: Remember to use brackets {})

2f. Below the "STATE" button, create another h1 with the num variable set as the content/text inside the h1 (HINT: Remember to use brackets {}) (NOTE: If is done correctly, then in Chrome the value of the h1 should start at 1 and go up by 1 every time the "STATE" button is clicked)
Important: Remember to stop your React App from running after you complete the exercise. You can do this by opening the terminal session that the React App is running on and pressing (Control + C) or you can click the trash can icon to completely end that terminal session.
BONUS
J. Create a new folder/directory in the “src” folder called “bonus”
K. Inside the bonus folder create a Bonus.js file
L. Open the Bonus.js file and complete the following...
3a. Import the useState function at the top of the file

3b. Create a function component called Bonus.

3c. Add the export line at the bottom of the file

3d. Inside the Bonus function component create a const variable called "letters" with the following array set as the value ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

3e. Inside the Bonus function component use the return keyword to have it return an h1 and a button (Set the text for the button to "NEXT LETTER")

3f. Using State as well as an onClick Event, have the letter A display in the h1 when the page loads and change to the next letter in the alphabet each time the button is pressed.

3g. Open the App.js file and create the Bonus import below the Exercise import at the top of the file

3h. Inside the return for the App component, pass in the Bonus component below the Exercise component so it will render to the browser
