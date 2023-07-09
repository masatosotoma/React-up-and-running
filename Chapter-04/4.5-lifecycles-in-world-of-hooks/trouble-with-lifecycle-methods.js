
/*
componentDidMount() {
    document.addEventListener('keydown', this.keydownHandler); 
    fetch('https://www...')
    .then() 
    .then((initialData) => {
    this.setState({data}); 
    });
}

componentWillUnmount() { 
    document.removeEventListener('keydown', this.keydownHandler); 
    clearInterval(this.replayID);
    }
*/

/*

<Unrelated tasks are implemented together>
For example, performing data fetching and setting up event listeners in one place. 
This makes the lifecycle methods grow in length while performing the unrelated tasks. 
In simple components this is fine, but in larger ones you need to resort to code comments or moving pieces of code to various other functions, 
so you can split up the unrelated tasks and make the code more readable.*/

/*
<Related tasks are spread out>
For example, consider adding and removing the same event listener. 
As the life‐ cycle methods grow in size, 
it’s harder to consider the separate pieces of the same concern at a glance 
because they simply don’t fit in the same screen of code when you read it later.

*/