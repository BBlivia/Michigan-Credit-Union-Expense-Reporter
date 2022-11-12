# Michigan Credit Union Expense Reporter

This is full stack Budget/Expense tracker for the 100Devs Agency. The app allows users to keep track of their spending by creating an account. Once logged in users can enter a Monthly budget, and each expense as they come up. 

spend is built using the MVC Architecture, we have also implemented "authorization" so folx can sign up, customize & personalize the app 

---

# How It's Made
Tech used:  JavaScript, Node, Express, Ejs, Bootstrap
-I built the app using the MVC Architecture, and implemented authorization through passport. This full stack web application uses CRUD functionalities. The back end of this app was created with Node.js, Express, and Ejs. The front end was created using HTML, CSS,JavaScript, and MongoDB was used to store all the user, and expense information.

---

# Optimizations
The app is at a working build however in the future it would be nice to 
- allow users to add a reminder list, as it pertains to their budget, 

-build out more features for time based tracking, possibly calander GUI

-Additionally it I would like to add some comparison tools such as a monthly or yearly spending history that made it easier for users to compare different periods of their spending.

- add a saving and downloading feature, that made it possible for users to locally have text files or pdfs of their saved budgets.


---

# Lessons Learned 
- This application relies heavily on users input, and because of this I learned the importance of simplicity. I made the UI very simple because, I wanted users to be able to know exactly the meaning of each input without any confusion as to what or why they had to fill something out. 
- I also gained a stronger understanding of the MVC paradigm, and how each element in the pardigm works and interact with each other to direct the flow of data. I also saw how rendering happens!
- the input type Number and Mongodb requirement 
- how to reference different models 

---
# Packages/Dependencies used


bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

---

# Installation

`npm install` 

- Create a `.env` file and add the following as `key: value` 
  - DB_STRING: `your database URI` 
---


 
 


