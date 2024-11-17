import { useEffect, useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  // Get todos from local storage
  // Load todos from localStorage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
        const parsedTodos = JSON.parse(storedTodos);
        setTodos(parsedTodos);
    }
  }, []);

  // Save todos to localStorage whenever todos state changes
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      localStorage.removeItem("todos"); // Clean up localStorage if empty
    }
  }, [todos]);
  
  const handleChange = (event: any) => {
    setNewTodo(event.target.value);
  };
  const addTodo = () => {
    if (newTodo.trim() != "") {
      setTodos([...todos, { id: Date.now(), text: newTodo.trim() }]);
      setNewTodo("");
    }
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1 className="text-center text-xl font-bold">
        Todo App Stay On Page Load
      </h1>
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="search"
          className=" block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.code == "Enter") {
              e.preventDefault();
              addTodo();
            }
          }}
          value={newTodo}
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      {todos.length !== 0 ? (
        <ul className="bg-slate-200 rounded mt-2 p-2 flex flex-col gap-2 h-80 overflow-y-auto">
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center bg-slate-400 rounded-md p-2">
                <p className="text-gray-900 font-semibold">{todo.text}</p>
              <button
                className="text-xs px-2 rounded-xl bg-red-500 text-gray-200 hover:shadow-md hover:border-emerald-100 hover:border"
                onClick={() => deleteTodo(todo.id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
}

export default Todo;
