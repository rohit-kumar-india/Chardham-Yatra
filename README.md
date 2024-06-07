# Chardham-Yatra

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Changes Required after Cloning

Change the following details in all the component.ts file where present
- Phone
- Email
- Address
- Title
- Packages

Create a new Formspree account from the mailId 
Create 3 new form api 
- Contact Us
- Enquiry
- Book Now
Update the new APIs in the following file
- Contact Us-----     contact-form.component.ts
- Enquiry   -----     enquiry.component.ts
- Book Now  -----     app.component.ts


## Angular Commands
=========================

npm install -g @angular/cli@latest
ng new <Project Name>
ng serve

ng g c <Component Name>

## Deploy on FireBase
===============================

Firebase Setup --------- once per project
----------------------
Create a Account or Sign in on Firebase
Create a project
Go to Hosting Menu

install Firebase CLI 
- Run the command in the project directory 
	npm install -g firebase-tools

Initiate your project
	firebase login
	firebase init

Deploy to FireBase Hosting ------------ for deploying any changes
	firebase deploy

## Git Commands

Setup Git in System
==========================
Download latest git from https://git-scm.com/
Install the doenloaded Git in system
Set Environment Variable path to C:\Program Files\Git\bin
git config --global user.email "you@example.com"
git config --global user.name "Your Name"


Setup project on GitHub
============================
Register or Sign In on GitHub portal
Create a repository with project name
Run these commands on system in the project directory
	git init
	git status
	git add .
	git commit -m "initial commit"
	git remote add origin <repository-url>   --- change repository-url
	git branch -M main
	git push -u origin main


Commit changes on GitHub
==============================
	git status
	git add .
	git commit -m "changes in the index.html"
	git push origin


Deploy on GitHub
=====================
npm install -g angular-cli-ghpages
ng build --base-href "https://<user-name>.github.io/<repo>/"   -- change the user-name and repo value
ngh --dir <build-location>   -- change the build-location
