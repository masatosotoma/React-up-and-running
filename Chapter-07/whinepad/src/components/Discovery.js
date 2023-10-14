import Excel from "./Excel";
import Header from '/Header';
import Body from "./Body";
import Logo from "./Logo";

function Discovery() {
  return (
    <div className="Discovery">
        <h2>Logo</h2>
        <div style={{background: '#f6f6f6', display: 'inline-block'}}>
            <Logo />
        </div>
        <h2>Body</h2>
        <Body>I am content inside the body</Body>

    </div>
  );
}

export default Discovery