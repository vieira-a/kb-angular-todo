<p align="center">
  <a href="https://angular.io/" target="blank"><img src="https://angular.io/assets/images/logos/angular/angular.svg" width="200" alt="Angular Logo" /></a>
</p>

<p align="center">Learning <a href="https://angular.io" target="_blank">Angular</a>, the web development framework for building the future.</p>
<h3 align="center">Under development</h3>


## Wellcome to my project

This is a small project that contains the basic principles of the Angular framework; a basic C.R.U.D. manipulation for a Task Manager (the famous TODO App). I hope you enjoy it!

### How to use

#### Requeriments

- Ensure that you have [Node.js](https://nodejs.org/en) installed on your system.
- Ensure that you have my [Backend API](https://github.com/vieira-a/kb-nest-todo) to support this application.


**Steps**

### [Click here to get all the instructions to execute the API](https://github.com/vieira-a/kb-nest-todo)

**1 - Clone the repository**

```
git clone https://github.com/vieira-a/kb-angular-todo.git
```

**2 - Enter in the project folder**

```
cd kb-angular-todo
```

**Project structure**

src
├── app
│   ├── app-routing.module.ts
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   └── components
│       ├── header
│       │   ├── header.component.css
│       │   ├── header.component.html
│       │   ├── header.component.spec.ts
│       │   └── header.component.ts
│       └── task
│           ├── add-task
│           │   ├── add-task.component.css
│           │   ├── add-task.component.html
│           │   ├── add-task.component.spec.ts
│           │   └── add-task.component.ts
│           ├── load-task
│           │   ├── load-task.component.css
│           │   ├── load-task.component.html
│           │   ├── load-task.component.spec.ts
│           │   └── load-task.component.ts
│           ├── task.interface.ts
│           └── task.service.ts
├── assets
├── favicon.ico
├── index.html
├── main.ts
└── styles.css

**3 - Install dependencies**
```
npm install
```

**Start application**
```
ng serve
```
Server started at `http://localhost:4200`

Made by [Anderson Vieira](https://linkedin/in/vieira-a)
