# Assignment2B

Name: Peter Mati
Course: CSI 3150 (F2026)

Technologies Used:

- HTML5
- CSS3
- JavaScript

How to Run:

1. Clone or download repository
2. Open project folder
3. Open index.html in a web broswer.

Section 4.1: The Less-than-equal-4-Click User Journey Funnel

- Starting State: When the UI loads, the user will see the input section on the left and the current entries section on the right.

- Action 1: Users can enter the information for a specific greenhouse bay in the input section. An event listener will be used so that users are notified if they enter an invalid value in real time.

- Action 2: When the user clicks the submit button, the information entered gets saved to localStorage and a card gets made for that specific bay with all of the information about that bay listed. That card then gets placed in the output section, where all of the cards/entries for specific bays are housed. If the entered information is invalid, an error will be shown.

- Action 3: Once a submission is received, the UI will update and place the card for that submission at the top of the list of cards. Based on the values of the information entered in each card, they will have an indicator that identifies them as 1 of 3 statuses, optimal, warning, and critical hazard. The output section that holds the cards will display the cards in rows of 3.

- Action 4: Users can manage the current cards in the list by deleting a specific card individually, or clearing the whole list with one click. Each card will have a “delete entry” button, and there will be a “delete all” button in the top right corner.

- Terminal State: When the user is done interacting with the app, the list of current cards will be displayed on the right side of the screen. In case the user wants to edit the list, there will be delete buttons visible on each individual card, as well as a delete all button on the top right of the output list window. Users can still add a new card at any given time by using the input section on the left. “localStorage” will allow the list to remain intact even if the user refreshes the page.
