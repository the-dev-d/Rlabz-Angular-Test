# Rlabz-Angular-Test

Hello devs, This is a project to put your angular knowledges to the test. 
This project defines basic ( not very ) requirements of an app. You need to complete make the app into it's completion and push to this repository. 
There will be 3 routes, I prefer each taking one route but you can plan different if it suits better to you guys as a team. 
Think of strategies to achieve this first then search the web for solutions which can improvise your strategy. 

### NOTES
* You should use LocalStorage.
* Input fields should use Angular Material https://material.angular.io/
* Can use as much components as you want from Angular Material.
* Try not to use ChatGPT and solve problems by reading documentation, stackoverflow and so on.


## Requirements

1. App should have a navbar on every route with App Name on the left and dark/light mode toggle button on the right
2. Dark and Light mode choice should change background color appropriately and should persist between page reloads.
3. App should have 3 routes namely:
    1. "/" 
    2. "/tasks"
    3. "/os"

### "/" Home : Focus Angular Forms
1. Home should have a form with fields Task name (Text) and Due date (Date picker).
2. Both fields are required and Task name should only have letters and digits validation.
3. Validation errors should be shown if i placed cursor in the field and left without filling in appropriate data.
4. Save button should only be enabled after all validations are correct.
5. Clear button should clear all values in the fields.
6. Save should save task persistantly ( use local storage ).


### "/tasks" : Focus TS Logic and templating directives
1. Should list all tasks persistently stored by home route with task name and Due date.
2. Should have a tick button to mark it as completed.
3. Completed tasks name should be in green and the tick button should disappear.
4. Tasks which are not completed and due date if before than today, task name should have a strike throught ( ~~Update firewall config~~ ) and no tick button.
5. Tasks should be arranged in non decreasing order of Due date.

### "/os" : Focus Angular Http Service
1. Make a get request to https://api.dhaivathlal.in/os/ and you will get a JSON data. ( Can see if you open the link in browser )
2. Fetch the data and display the name "name" of every OS data recieved as a selectable button.
3. For every os data there will be "name" and "id" fields so if you send a get request to https://api.dhaivathlal.in/os/id ( eg : https://api.dhaivathlal.in/os/1 can check by loading in browser ) you will get a detailed description about the os.
4. On selecting an OS, the "recommendation" data of its detailed description should be displayed somewhere in the page.
5. If I click OS which is already selected, no fetch request should go.


# Happy Coding 😉
