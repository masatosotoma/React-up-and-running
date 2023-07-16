/* With function components you can replace all calls to the useState() hook with useLoggedState(). 
This is a bit more convenient since there are just a few calls (for every independent bit of state) 
and they are all at the top of the function. */

// before
function Excel({ headers, initialData }) {
  const [data, setData] = React.useState(initialData);
  const [sorting, setSorting] = React.useState({
    column: null,
    descending: false,
    // ... etc
  });
}

// after
function Excel({ headers, initialData }) {
  const [data, setData] = React.LoggedState(initialData);
  const [sorting, setSorting] = React.LoggedState({
    column: null,
    descending: false,
    // ... etc
  });
}

/*You can create your own custom hooks. Like the built-in hooks, 
a custom hook is just a function that starts with use*(). 
Here’s an example:*/

function useLoggedState(initialValue, isData) {
  // ...
}

/*In this case, there’s an additional isData argument. 
Its purpose is to help differentiate data state versus non-data state.*/

/*a main log (dataLog array) and an auxiliary one (auxLog array) and 
to include a flag indicating whether the state changes because of user interaction or (automatically) during replay:*/

let dataLog = [];
let auxLog = [];
let isReplaying = false;

/*The custom hook's goal is to log the state together with a reference to the function 
that knows how to update this state during replay. 
The function looks something like this:*/

function useLoggedState(initialValue, isData) {
  const [state, setState] = useState(initialValue);

  // code here

  return [state, setState];
}

/*you have the references to a piece of state and the means to update it. 
You need to log that. Let’s benefit from the useEffect() hook here:*/

function useLoggedState(initialValue, isData) {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // to do
  }, [state]);

  return [state, setState];
}

/*
In the callback of useEffect() you:
• Don’t do anything if the user is replaying.
• Log every change to the data state to dataLog.
• Log every change to supporting data to auxLog, 
indexed by the associated change in data.
*/

useEffect(() => {
  if (isReplaying) {
    return;
  }
  if (isData) {
    dataLog.push(clone(state), setState);
  } else {
    const idx = dataLog.length - 1;
    if (!auxLog[idx]) {
      auxLog[idx] = [];
    }
    auxLog[idx.push([state, setState])];
  }
}, [state]);
