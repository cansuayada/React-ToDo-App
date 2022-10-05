import { Button, FormControl } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

function Header({ input, setInput, todo, setTodo }) {
  const addTodo = () => {
    if (input === "") {
      alert("Please Add To Do");
    } else {
      setTodo([...todo, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    }
  };

  const onFormControlChange = ({ target }) => {
    setInput(target.value);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="mt-5">Todo~List</h1>

      <div className="d-flex mt-5 w-100">
        <form className="w-100">
          <FormControl
            className="form-control"
            placeholder="Add Todo"
            value={input}
            onChange={onFormControlChange}
          ></FormControl>
        </form>
        <Button className="ms-3 " type="submit" onClick={addTodo}>
          Add
        </Button>
      </div>
    </div>
  );
}

export default Header;
