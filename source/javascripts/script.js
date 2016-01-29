var Todo = React.createClass({
  getInitialState: function() {
        return {editing: false}
    },
    edit: function() {

        this.setState({editing:true});
        console.log('Editing todo#' + this.props.index);
    },
    remove: function() {

        alert('Todo removed');

    },
    save: function() {

        var newValue = this.refs.newValue.getDOMNode().value;
        console.log(newValue + ' added');
        this.props.onChange(newValue,this.props.index);

        this.setState({editing: false});
    },
    todoDisplay: function() {
        return (
            <div>

                    <li className="todo">

                        <span onClick={this.edit}>
                            {this.props.children}
                        </span>

                        <button onClick={this.remove} className="btn"/>


                    </li>

            </div>
        );
    },
    todoForm: function() {
        return (
            <div>

                    <li className="todo">

                        <span>
                            <input placeholder="Edit todo" type="text" ref="newValue" defaultValue={this.props.children}/>
                        </span>

                        <button onClick={this.save} className="btn"/>


                    </li>


            </div>
        );

    },
    render: function() {

       if(this.state.editing){
            return this.todoForm();
       } else {
            return this.todoDisplay();
       }

    },


});//Todo

var TodoList = React.createClass({

    getInitialState: function() {

        return {
            todos: [
                'Call Amy',
                'Pay phone bill',
                'Christmas cards'
            ]
        };
    },
    update: function(newValue, i) {

        var arr = this.state.todos;

        arr[i] = newValue;
        this.setState({todos:arr});
    },
    eachTodo: function (todo,i) {

            return (
                <Todo  key={i}
                      index={i}
                      onChange={this.update}>
                      {todo}
                </Todo>
            )
    },
    render: function() {

        return (
            <div>
                <h1>Things to DO</h1>

                <div className="form-inline">

                    <div className="form-group">
                        <input className="form-control" placeholder="Add Todo" />
                        <button className="btn">+</button>
                    </div>

                </div>

                <ul>
                    {this.state.todos.map(this.eachTodo)}
                </ul>

            </div>
        );
    }
});
React.render(<TodoList />, document.getElementById('todo'));
