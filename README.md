# Next.js 15 useEffect Hook Runs Multiple Times After Navigation

This repository demonstrates an uncommon bug in Next.js 15 where the `useEffect` hook within a component runs multiple times after navigating to that component.  This leads to unexpected behavior, specifically repeated console logging and potential performance issues.

The issue is observed when navigating from the home page to the about page and back. The `useEffect` hook inside `About.js` should run only once per render.  However, due to the bug, it fires multiple times, increasing the render cycle count. This can create unnecessary load and potentially impact performance, especially in complex applications.

## Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.

## Reproduction

Navigate between the home page and the about page. Observe the console logs.  You'll notice that the 'About page rendered' message appears more than once each time the About page is visited.  This is the unexpected behavior. 

## Solution

The provided solution demonstrates a workaround that addresses the redundant useEffect execution, offering a smoother and more predictable user experience.
