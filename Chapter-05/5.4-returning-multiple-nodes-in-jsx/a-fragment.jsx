/*
To remove the need for an extra wrapper element, 
newer versions of React added fragments, 
which are wrappers that do not add additional DOM nodes when the com‐ ponent is rendered.*/

function FragmentExample() {
  return (
    <React.Fragment>
      <span>Hello</span> <span>World</span>
    </React.Fragment>
  );
}

/*the React.Fragment part can be omitted and these empty elements also work:*/

function FragmentExample() {
  return (
    <>
      <span>Hello</span> <span>World</span>
    </>
  );
}

/*
At the time of writing this <></> syntax is not supported by the in-browser version of Babel 
and you need to spell out React .Fragment.*/
