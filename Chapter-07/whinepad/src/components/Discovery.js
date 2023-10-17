import Excel from "./Excel";
import Header from "/Header";
import Body from "./Body";
import Logo from "./Logo";
import Button from "./Button";

function Discovery() {
  return (
    <div className="Discovery">
      <h2>Logo</h2>
      <div style={{ background: "#f6f6f6", display: "inline-block" }}>
        <Logo />
      </div>
      <h2>Body</h2>
      <Body>I am content inside the body</Body>
      <p>
        Button with onClick:{" "}
        <Button onClick={() => alert("ouch")}>Click me</Button>
      </p>
      <p>
        A link: <Button href="https://reactjs.org/">Follow me</Button>
      </p>{" "}
      <p>
        Custom class name:{" "}
        <Button className="Discovery-custom-button">I do nothing</Button>{" "}
      </p>
    </div>
  );
}

export default Discovery;
