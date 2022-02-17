import Button from "react-bootstrap/Button";

export default function ImagePage({ increment }) {
  return (
    <div className="imagepage">
      <h2>Click me as much as you like!</h2>
      <div class="col text-center">
        <Button variant="outline-secondary" onClick={increment}>
          Click me!
        </Button>
      </div>

      <p>
        As this is loaded as a single page, it will remember how many times the
        button is clicked no matter which of the pages you go to. (Unless you
        refresh that is)
      </p>
      <p>Check the bottom of any page to see how many time you clicked!</p>
    </div>
  );
}
