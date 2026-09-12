# 🧑‍💻 DevStack

### Build Your Ideal Development Stack

DevStack is a modern and responsive technology explorer website. It helps developers explore popular technologies, discover useful tools, and learn about different technologies used in web development.

## 🌐 Live Demo

[Visit Live Website](https://technologies-by-dev-stack.netlify.app/)

## 📂 GitHub Repository

[View Source Code](https://github.com/nasifmustufakhan7220/Assignment-B14-A05-DevStack)

---

---

## ✨ Features

- Modern and attractive user interface
- Fully responsive design
- Mobile-first layout
- Explore different technologies
- Display technology ratings
- Show technology difficulty levels
- Display technology badges
- Technology cards with icons
- Add to Stack cards
- Single item remove from stack
- Remove multiple items from stack on single click
- Gradient-based modern design
- Reusable React components
- TypeScript type safety
- Clean and organized project structure

---

## 🛠️ Technologies Used

- React.js
- Tailwind CSS, DaisyUI
- TypeScript, JavaScript (ES6+)
- React-Toastify, React-Icons (NPM Packages)
- JSON (for technology data)
- Vite (build tool)

---

## 📌 Technology Categories

The project includes different technology categories:

- Frontend
- Backend
- Database
- Language
- Styling
- DevOps
- Tools

---

## 📊 Technology Information

Each technology card contains:

- Technology name
- Technology icon
- Technology category
- Technology description
- Technology rating
- Technology difficulty
- Technology badge

---

## 🎨 Design Features

- Responsive navbar
- Hero section
- Gradient heading
- Gradient button
- Technology cards
- Category badges
- Rating display
- Difficulty labels
- Responsive grid layout
- Mobile-friendly design
- Clean spacing and typography

---

## 📁 Project Structure

```text
src/
├── assets/
│   └── banner-stack.png
│
├── Components/
│   ├── AddToCartCard/
│   │   └── AddToCartCard.tsx
│   │
│   ├── Banner/
│   │   └── Banner.tsx
│   │
│   ├── ExploreTechnologies/
│   │   └── ExploreTechnologies.tsx
│   │
│   ├── ExploreTechnologyCard/
│   │   └── ExploreTechnologyCard.tsx
│   │
│   ├── Footer/
│   │   └── Footer.tsx
│   │
│   ├── Loading/
│   │   └── Loading.tsx
│   │
│   ├── Navbar/
│   │   └── Navbar.tsx
│   │
│   └── TechnologyHeader/
│       └── TechnologyHeader.tsx
│
├── Type/
│   └── Type.ts
│
├── App.css
├── App.tsx
├── index.css
└── main.tsx


## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### 2. Open the project folder

```bash
cd YOUR_PROJECT_FOLDER
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the local website

Open the local URL shown in your terminal.

Usually, it looks like this:

```text
http://localhost:5173
```

---

## 📜 Available Scripts

### Start development server

```bash
npm run dev
```

### Build the project

```bash
npm run build
```

---

## 📱 Responsive Design

DevStack is designed to work on different screen sizes:

- Mobile devices
- Tablets
- Laptops
- Desktop computers

The layout uses a mobile-first approach with responsive Tailwind CSS classes.

---

## 🧩 Reusable Components

The project is divided into reusable React components, such as:

- Navbar
- Banner
- Technology Card
- Technology List
- Footer

This makes the code easier to maintain and update.

---

## 👨‍💻 Author

### Nasif Mustufa Khan

Aspiring Full-Stack Web Developer | AI-Driven Web Engineering

---

## ⭐ Support

If you like this project, please give it a star on GitHub.

Thank you for visiting my project! 🚀





<!-- Questions: -->

1.What is JSX, and why is it used in React?
Ans: JavaScript XML. It allows to write HTML like markup inside a javaScript file. In react, it is used to make building dynamic user interfaces faster, safer, and much easier to read.

2.What is the difference between props and state?
Ans: Props is a way to send data from parent to its child and state is way to change UI on User clicks.
3.What does the useState hook do, and where did you use it in this project?
Ans: useState changes states on User clicks and i used useState on loading JSON data, add to card to stack etc.
4.What does the useEffect hook do, and why did you need it to load the JSON data?
Ans: useEffect is a react hook that hendels side effect of a application like load data from an api. You need it because it stops infinite rendering loops by limiting the data fetch to run only once when the page loads, keeping your app fast and responsive.
5.Why does every item in a .map() list need a unique key prop?
Ans: React uses key to identify each list item uniquely. This helps React know which item changed, was added, or removed. Without it react render list successfully, but by using this, is the best.

6.What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans: Conditional rendering is a way to show different things based on state changes. I used conditional rendering inside the "ExploreTechnologies.tsx component to show **Remove all** button. Like, if stacks has data or its length is greater than 0, then show the **Remove all** button.
7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: I pass data from a parent component to a child component by props and i send data from child to parent by lift up a state in parent component, like in a central place.