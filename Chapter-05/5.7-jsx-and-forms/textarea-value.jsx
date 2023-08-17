/*
React’s version of <textarea> also takes a default Value property. 
It keeps target.value up to date while defaultValue remains the original. 
*/

/*
The whole reason HTML <textarea> (as defined by W3C) takes a child as its value is 
so that developers can use new lines in the input. 
However React, being all JavaScript, doesn’t suffer from this limitation. When you need a new line, you just use \n.
*/

function ExampleTextarea() { return (
    <form>
      <label>
        Type here:{' '}
        <textarea
          defaultValue={'hello\nworld'}
          onChange={changeHandler}
        />{' '}
      </label>
    </form>
); }

/*
Note that you need to use a JavaScript literal {'hello\nworld'}. 
Otherwise if you use a literal string property value 
you don’t have access to the special newline meaning of \n.
*/