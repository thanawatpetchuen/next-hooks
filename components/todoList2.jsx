import { TodoContext } from './context';
import { actions } from './reducer';
export class TodoList2 extends React.Component {
  static contextType = TodoContext;

  constructor(props) {
    super(props);
  }

  handleClick(e) {
    const { todoDispatch } = this.context;
    todoDispatch({ type: actions.REMOVE_TODO, payload: e.target.dataset.id });
  }

  render() {
    let { todo: todos } = this.context.todoState;
    return (
      <ul>
      {(() => todos.map((todo) => 
        <li key={todo.id} style={{ margin: '.5rem 0' }}>
          {todo.todo}
          <button style={{ margin: '0 .5rem' }} data-id={todo.id} onClick={this.handleClick.bind(this)}>Remove</button>
        </li>
      ))()}
    </ul>
    );
  }
} 