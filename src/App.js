// import React from "react";
// import TodoItem from "./TodoItem";
// import todosData from "./todosData";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: todosData
//     }
//   }

//   render() {
//     const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} />);

//     return (
//       <div className="todo-list">
//         {todoItems}
//       </div>
//     );
//   }
// }

// export default App;

// import React from "react";
// import TodoItem from "./TodoItem";
// import todosData from "./todosData";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       todos: todosData
//     }

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(id) {
//     this.setState(prevState => {
//       const updatedTodos = prevState.todos.map(todo => {
//         if (todo.id === id) {
//             return {
//                 ...todo, 
//                 completed: !todo.completed
//             }
//         }
        
//         return todo;
//       })
//       return {
//         todos: updatedTodos
//       }
//     });
//   }

//   render() {
//     const todoItems = this.state.todos.map(item => 
//       <TodoItem 
//         key={item.id} 
//         item={item} 
//         handleChange={this.handleChange}
//         />
//     );

//     return (
//       <div className="todo-list">
//         {todoItems}
//       </div>
//     );
//   }
// }

// export default App;

// import React, {Component} from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       loading: false,
//       character: {}
//     };
//   }

//   componentDidMount() {
//     this.setState({loading: true});
    
//     fetch("https://swapi.com/api/people/1")
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           loading: false,
//           character: data
//         })
//       })
//   }

//   render() {
//     const text = this.state.loading ? "loading..." : this.state.character.name
//     return (
//       <div>
//         <p>{text}</p>
//       </div>
//     )
//   }
// }

// export default App;

// import React, {Component} from "react";
// import Form from "./FormContainer";

// function App() {
//   return (
//     <Form />
//   )
// }

// export default App;

// import React from "react";
// import Header from "./Header";
// import MemeGenerator from "./MemeGenerator";

// function App() {
//   return (
//     <div>
//       <Header />
//       <MemeGenerator />
//     </div>
//   )
// }

// export default App

// import React, {Component} from "react";

// class App extends Component {
//   state = { firstName: "" }

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <main>
//         <form>
//           <input 
//             type="text"
//             name="firstName"
//             value={this.state.firstName}
//             onChange={this.handleChange}
//             placeholder="First Name"
//           />
//         </form>
//         <h1>{this.state.firstName}</h1>
//       </main>
//     )
//   }
// }

// export default App;

// import React, {useState} from "react"

// function App() {
//   const [answer] = useState("Yes");
//   return (
//     <div>
//       <h1>Is state important to know? {answer}</h1>
//     </div>
//   )
// }

// export default App;

import React, {useState, useEffect} from "react";
import randomcolor from "randomcolor";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <div>
      <h1 style={{color: color}}>{count}</h1>
    </div>
  )
}

export default App;