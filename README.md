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

**Section 4.1: The Less-than-equal-4-Click User Journey Funnel**

- Starting State: When the UI loads, the user will see the input section on the left and the current entries section on the right.

- Action 1: Users can enter the information for a specific greenhouse bay in the input section. An event listener will be used so that users are notified if they enter an invalid value in real time.  

- Action 2: When the user clicks the submit button, the information entered gets saved to localStorage and a card gets made for that specific bay with all of the information about that bay listed. That card then gets placed in the output section, where all of the cards/entries for specific bays are housed. If the entered information is invalid, an error will be shown.  

- Action 3: Once a submission is received, the UI will update and place the card for that submission at the top of the list of cards. Based on the values of the information entered in each card, they will have an indicator that identifies them as 1 of 3 statuses, optimal, warning, and critical hazard. The output section that holds the cards will display the cards in rows of 3\.  

- Action 4: Users can manage the current cards in the list by deleting a specific card individually, or clearing the whole list with one click. Each card will have a “delete entry” button, and there will be a “delete all” button in the top right corner.  

- Terminal State: When the user is done interacting with the app, the list of current cards will be displayed on the right side of the screen. In case the user wants to edit the list, there will be delete buttons visible on each individual card, as well as a delete all button on the top right of the output list window. Users can still add a new card at any given time by using the input section on the left. “localStorage” will allow the list to remain intact even if the user refreshes the page.

**Section 4.2: Don Norman Usability & Constraint Audit**

| Norman Principle / Concept | System Context                                                                     | Questions to Answer Using Concrete Implementation Mechanism (DOM / HTML / JS)                                                                                                                                                                                                                                                    |
| :------------------------- | :--------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gulf of Execution          | Typing numeric sensor metrics (pH, Electrical Conductivity \[EC\], Temp, Humidity) | Each entry field will have an HTMl \<label\> element above it specifying what is expected to be entered (units of measures included) along with an HTML “placeholder” attribute within the field with an example entry.                                                                                                          |
| Gulf of Evaluation         | Ingesting sensor values after clicking “Record Reading”                            | Once input is submitted, JS will check the given values and indicate whether the status is Optimal, Warning, or Critical Hazard by adding a badge on the card and changing the border color.                                                                                                                                     |
| System Constraint          | E.g. Water pH Boundaries (0.0 \<= pH \<= 14.0)                                     | \<input\> elements with “min” and “max” attributes will be used to prevent impossible scientific values from being submitted.                                                                                                                                                                                                    |
| Visual Feedback State      | Real-Time Input Error / Out-of-Bounds                                              | A JS event listener will be used when users type inputs. It will display a message under the field and change the border color of the field to red when an entered input is dangerous/wrong before submission.                                                                                                                   |
| Error Recovery             | Accidental or test data submissions                                                | There will be delete buttons on each individual card as well as a “delete all” button. These buttons will be linked to JS event listeners so that either one specific card can be deleted at a time or the whole list can be deleted at once just with the click of a button. Deleted entries will be removed from localStorage. |

**Section 4.3: Component, DOM Tree & Event Target Architecture**

- **Body**
  - **\<header class=”site-header”\> (CSS: flex, center) \[STATIC\]**
    - **\<h1\> (Text: Smart Agriculture)**  

  - **\<main class=”site-container”\> (CSS: grid, grid-template-columns: 380px 1fr) \[STATIC\]**
    - **\<section class=”panel sensors-panel”\> \[STATIC\] \- input panel**
      - **\<h2 class=”panel-title”\> (Text: Enter Sensor Readings)**  

      - **\<form id=”sensors-form”\> (CSS: flex, column, gap: 1rem) \[STATIC\] (Event: submit)**
        - **\<div class=”form-group”\> (CSS: flex, column) \[STATIC\]**
          - **\<label for=”bay-name” class=”form-label”\> (Text: Bay Name) \[STATIC\]**
          - **\<input type=”text” name=”bay-name” id=”bay-name” class=”form-control” required\> \[STATIC\] (Event: input)**  

        - **\<div class=”form-group”\> \[STATIC\]**
          - **\<label for=”ph” class=”form-label”\> (Text: pH) \[STATIC\]**
          - **\<input type=”number” name=”ph” id=”ph” class=”form-control” min=”0” max=”14” step=”0.1” required\> \[STATIC\] (Event: input)**  

        - **\<div class=”form-group”\> \[STATIC\]**
          - **\<label for=”ec” class=”form-label”\> (Text: Electrical Conductivity (mS/cm)) \[STATIC\]**
          - **\<input type=”number” name=”ec” id=”ec” class=”form-control” min=”0” step=”0.1” required\> \[STATIC\] (Event: input)**  

        - **\<div class=”form-group”\> \[STATIC\]**
          - **\<label for=”temp” class=”form-label”\> (Text: Temp (°F)) \[STATIC\]**
          - **\<input type=”number” name=”temp” id=”temp” class=”form-control” step=”0.1” required\> \[STATIC\] (Event: input)**  

        - **\<div class=”form-group”\> \[STATIC\]**
          - **\<label for=”rh” class=”form-label”\> (Text: Relative Humidity (%) \[STATIC\]**
          - **\<input type=”number” name=”rh” id=”rh” class=”form-control” min=”0” max=”100” step=”0.1” required\> \[STATIC\] (Event: input)**  

        - **\<button type=”submit” id=”btn-submit” class=”btn btn-primary btn-block”\> (“Add Card To List”) \[STATIC\]**  

    - **\<section class=”panel entries-panel”\> \[STATIC\] \- output panel**
      - **\<div class=”entries-header”\> (CSS: flex, space-between, center) \[STATIC\]**
        - **\<h2 class=”panel-title”\> (Text: Current Entries)**
        - **\<button id=”btn-clear-all” class=”btn btn-outline-danger btn-sm”\> (Text: Delete All) \[STATIC\] (Event: click)**  

      - **\<div id=”empty-state” class=”empty-state”\> \[DYNAMIC\]**
        - **\<p\> (Text: No Current Entries)**  

      - **\<ul id=”entries-list” class=”entries-grid”\> (CSS: grid, grid-template-columns: 1fr 1fr 1fr, gap: 1rem) \[DYNAMIC\]**
        - **\<li class=”entry-card”\> \[DYNAMIC\] \- generated by JS**
          - **\<button type=”button” class=”btn btn-outline-danger btn-sm”\> (Text: Delete Entry) \[DYNAMIC\] (Event: click)**

  - **\<footer class=”site-footer”\> \[STATIC\]**
    - **\<p\> (Text: Project 2 for CSI 3150 F2026)**

**Section 4.4: Data Schema**

**const entrySchema \= {**  
 **id: “String”, // Unique alphanumeric identifier**  
 **name: “String”, // Name of greenhouse bay**  
 **ph: “Number”, // ph measurement**  
 **ec: “Number”, // Electrical Conductivity measurement**  
 **temp: “Number”, // Temperature measurement**  
 **rh: “Number” // Relative humidity measurement**  
**};**
