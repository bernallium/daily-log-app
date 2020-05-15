# DailyLog

**DailyLog** is a note taking and task manager application combined. Add floating tasks to your Inbox 📥. When planning out your week, *migrate* tasks from your Inbox >> to your weekly task list 📅. The process of task migrations allows you to distill information and have a clear view of the week ahead of you. The daily log section on the right provides a space where you can take any notes for a specific day. It acts as a brain dump section where you can record anything you want really.

### *Plan for the future and record the past so that every day you can be more present*

### [Create a free account here](https://dailylog-mern.herokuapp.com/login)

<p align="center">
  <img src="public/screenshots/home.png"/>
  <img src="public/screenshots/migration-demo.gif"/>
  <img src="public/screenshots/notes-demo.gif"/>
</p>
<p float="left" align="center">
  <img src="public/screenshots/signup.png" width="433"/>
  <img src="public/screenshots/login.png" width="433"/>
</p>

> **NOTE**: User authentication is implemented via JSON Web Tokens and passwords are hashed using the `bcrypt` library

### Why did I create this application?

I wanted to create an application that satisfied my needs for a note taking and task manager application combined. There are many options on the market that attempt to acheive this but I wanted to create one that fit my needs perfectly. In particular, I wanted a history of how tasks are migrated between tiers of urgency (ie. moving a task from your Inbox, to your weekly task list, to your daily task list). I believe having a history of this movement is good for mindfulness and self-improvement.

## Built With 👨‍💻

* `MongoDB/Mongoose`
* `Express`
* `React`
* `Node.js`

## Next Steps
* Add ability to add tasks to Day view
* Autmatic migrations at the end of the week
* Monthly and yearly view navigation
* Colour picker for tasks and notes
* Drag and drop items between components
* Dark mode
* Google Calendar integration

> Follow its development in this [Trello board](https://trello.com/b/ARvGWWjJ)
