//In HTML some tags don’t need to be closed; in JSX (XML) they all do:

// NO-NO
/* no unclosed tags, even though they are fine in HTML const gimmeabreak = <br>;

const list = <ul><li>item</ul>;
const meta = <meta charset="utf-8">;
*/

// OK
const gimmeabreak = <br />;

const list = (
  <ul>
    <li>item</li>
  </ul>
);

const meta1 = <meta charSet="utf-8" />;

// or
const meta2 = <meta charSet="utf-8"></meta>;
