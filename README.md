# EmployeeList

EmployeeList is a simple AngularFire application that allows the user to add and delete employees from a database. Employees are defined by their name, email address, and hire date, and can be sorted in ascending or descending order by any of those categories by clicking on the corresponding buttons.

To access EmployeeList locally, do the following:
  1) Clone or download this repository.
  2) Open the command line at this repository.
  3) If you have installed firebase-tools, you may do so by running "npm install -g firebase-tools" (you naturally need NPM and Node.js to do this).
  4) Run "firebase serve".
  5) On your browser go to localhost:5000/
  6) Have fun.
  
WARNING:
This application is built on a modified version of Jake Richter's AngularJS CRUD App, which can be accessed here: https://github.com/jprichter/ang-crud
Because of this, this application runs on now-outdated versions of AngularJS, Firebase, and AngularFire, and is particularly incompatible with Firebase 3.x.x. Do NOT run "firebase init", as the app will surely break.
