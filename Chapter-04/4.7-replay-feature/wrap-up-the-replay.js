/*
The replay() function is not an exciting aspect of the React discussion,
but it sets up an interval ID. 
You need that ID to clean up the interval in the event that Excel gets removed from the DOM while replaying.*/

function replay() {
  isReplaying = true;
  let idx = 0;
  replayID = setInterval(() => {
    const [data, fn] = dataLog[idx];
    fn(data);
    auxLog[idx] &&
      auxLog[idx].forEach((log) => {
        const [data, fn] = log;
        fn(data);
      });
    idx++;
    if (idx > dataLog.length) {
      isReplaying = false;
      clearInterval(replayID);
      return;
    }
  }, 1000);
}

/*After Excel renders, the hook is responsible for setting up listeners 
that monitor the particular combination of keys to start the replay show.*/

useEffect(() => {
  function keydownHandler(e) {
    if (e.altKey && e.shiftKey && e.keyCode === 82) {
      //ALT+SHIFT+R(eplay)
      replay();
    }
  }
  document.addEventListener("keydown", keydownHandler);
  return () => {
    document.removeEventListener("keydown", keydownHandler);
    clearInterval(replayID);
    dataLog = [];
    auxLog = [];
  };
});
