# React Hooks Collection

A collection of useful custom React hooks.

## Installation

To install React Hooks Collection, you can use NPM:

```bash
npm i react-hook-collections



Hooks
UseScrollPosition()
This hook tracks the current scroll position of the window and returns the value as a number.


Example usage:
import { UseScrollPosition } from 'react-hook-collections';

function MyComponent() {
  const scrollPosition = UseScrollPosition();
  console.log(scrollPosition); // Prints the scroll position on the console
  return (
    <div>My Component</div>
  );
}

GetAndDecode()
This hook help you to decode a jwt token from localStorage.

Example usage:
import {GetAndDecode} from 'react-hook-collections';

function MyComponent(){
  const decoded = GetAndDecode("tokenkey"); // pass the token key name
  console.log(decode); // prints the token decoded information
  return (
    <div>My Component</div>
  )
}

```

Git Repo : https://github.com/ABIJOSEPHGEORGE/react-hook-collections

License
React Hooks Collection is licensed under the MIT License. See the LICENSE file for more information.

Contact
Follow me on Instagram: @abin-joseph-george

Connect with me on LinkedIn: https://www.linkedin.com/in/abin-george/

Check out my GitHub: https://github.com/ABIJOSEPHGEORGE


Let me know if you need any further assistance!
