# Next.js Redux Toolkit Example

This is the app which will take user input and display the text using redux-toolkit. 
There are three components in redux:
1.	Providers: Providers will make a redux layer around the whole web page. In big project it’s necessary to use Providers in the app for making a redux layer. The code for Provider.js 

```store.js
"use client";
import { store } from "./store";

const { Provider } = require("react-redux");

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
} 
```
Here provider has been made for redux-toolkit. Then use this in layout.js
```layout.js
<body className={inter.className}>
        <Providers>{children}</Providers>
</body>
```
This is how a redux-toolkit has been made around the whole page. 

2.	Store: This is the file where the data’s are stored. The basic code for the set up store is:

```store.js
const { configureStore } = require("@reduxjs/toolkit");
export const store = configureStore({
    reducer: []
})
```
This is the code for store.js. The configureStore is a function which is used for store the action and reducers. 


3.	Slice: This is the main redux-toolkit for making action and reducer making. The action is the data which will be stored. And reducer helps to store the action in redux. Here is the basic code setup for slice.js
```slice.js
const { createSlice, nanoid } = require("@reduxjs/toolkit");
const initialState ={
    users:[]
}
const Slice = createSlice({
    name: "addUserSlice", 
    initialState, 
    reducers:{
        addUser: (state, action) =>{
            console.log(action)
            const data={
                id: nanoid(), 
                name: action.payload
            }
            state.users.push(data)
        }
    }
})
export const{addUser} = Slice.actions;
export default Slice.reducer;  
```
This is the slice.js. Here initial State function is declaring a blank array named users. createSlice is a function which is used for making reducers. In reducers object addUser is one of the reducers which will store user name here. More reducers can be made by following addUser step.   
So, these are the setups for redux-toolkit in nextjs, but before start this application, we should install the redux-toolkit in our system by following step: 
In terminal, write: 
```bash
npm install @reduxjs/toolkit
```



## Setup

Before starting the application, ensure you have the necessary packages installed:

```bash
npm install @reduxjs/toolkit react-redux tailwindcss postcss autoprefixer
