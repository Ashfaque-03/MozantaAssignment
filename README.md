# MozantaAssignment
A single page Application for student registration and  display student details using React JS as front-end, Spring Boot Java as back-end and MongoDB as database.

## What is the use of this Repo

This is a Full Stack project using **ReactJS**, **SpringBoot**, **Java** and **MongoDB** which demonstrates the following
1. Creating a Component in React
2. Communicating between parent and child component
3. Using Bootstrap along with React
4. Using Basic Routing in React
5. Making HTTP calls
6. Creating API in SprintBoot, Java technology stack
7. Creating database and storing data in MongoDB database
8. Connection of ReactJS, SpringBoot, Java and MongoDB


## Prerequisites

#### React JS, SpringBoot

### Cloning the Application in local

Clone the project into local

Open your terminal and then type

```bash
git clone https://github.com/Ashfaque-03/MozantaAssignment.git
```

This clones the repo

## React JS

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

### Running the Application in local
Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

This installs the required dependencies

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

### Application design

#### Components

**1. Home** Component : This is a Parent Component to create a new student details into the database and also to display all the students details.

**2. StudentForm** Component : This Component displays a form to create a new student details. This Component create the data of a json file to the MongoDB database using API

**3. StudentDetails** Component : This Component Displays the details of all students. This Component gets its data from MongoDB database using API as well.

#### HTTP client

**axios** library is used to make HTTP Calls

#### URL

The application has just one url **http://localhost:3000/** which ties to *Home* Component


## Spring Boot, Java

### Requirements

For building and running the application you need:

- [JDK 17.0.6](https://www.oracle.com/in/java/technologies/downloads/#jdk17-windows)

For Java development that provides Java IntelliSense, debugging, testing, Maven/Gradle support, project management and generating quickstart Spring Boot Java projects with Spring Initiailizr API. Install these Extensions (for Visual Studio Code)

- [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
- [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack)

### Running the application locally

There are several ways to run a Spring Boot application on your local machine. One way is to execute the `main` method in the `com.mozanta.students.StudentsApplication` class from your IDE.

In Visual Studio Code, open Backend folder

Right click the **StudentApplication.java** file located in *Backend\students\src\main\java\com\mozanta\students\StudentsApplication.java* and click the option **Run Java** (select the class name if asked).

Note: Repeat the above step if error occurs.

It will run the SpringBoot backend

## Resources

**How Web Works:** https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works

**Web Developer Basics:** https://www.w3schools.com/whatis/default.asp
 
**Git:** https://www.tutorialspoint.com/git/index.htm

**VS Code IDE:** https://code.visualstudio.com

**Java Basics:** https://www.w3schools.com/java/default.asp

**MongoDB Basics:** https://www.tutorialspoint.com/mongodb/index.htm

**Spring Boot Basics:** https://www.tutorialspoint.com/spring_boot/index.htm

**ReactJS Basics:** https://www.tutorialspoint.com/reactjs/index.htm

**MongoDB+Springboot+ReactJS:** https://bezkoder.com/react-spring-boot-mongodb/
