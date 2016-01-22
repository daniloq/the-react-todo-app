var Todo = React.createClass({displayName: "Todo",
    getInitialState: function() {
        return {editing: false}
    },
    edit: function() {

        this.setState({editing:true});
        //console.log('Editing todo#' + this.props.index);
    },
    remove: function() {

        //alert('Todo removed');
        this.props.onRemove(this.props.index);
    },
    save: function() {

        var newValue = this.refs.newValue.getDOMNode().value;
        console.log(newValue + ' added');
        this.props.onChange(newValue,this.props.index);

        this.setState({editing: false});
    },
    todoDisplay: function() {
        return (
            React.createElement("div", null, 

                    React.createElement("li", {className: "todo"}, 

                        React.createElement("span", {onClick: this.edit}, 
                            this.props.children
                        ), 

                        React.createElement("button", {onClick: this.remove, className: "btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right"})


                    )

            )
        );
    },
    todoForm: function() {
        return (
            React.createElement("div", null, 

                    React.createElement("li", {className: "todo"}, 

                        React.createElement("span", null, 
                            React.createElement("input", {placeholder: "Edit todo", type: "text", ref: "newValue", defaultValue: this.props.children})
                        ), 

                        React.createElement("button", {onClick: this.save, className: "btn btn-default btn-sm glyphicon glyphicon-floppy-disk pull-right"})


                    )


            )
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

var TodoList = React.createClass({displayName: "TodoList",

    getInitialState: function() {

        return {
            todos: [
                'Call Amy',
                'Pay phone bill',
                'Christmas cards'
            ],
            placeholder: "Add Todo",
            input_style: "form-control",
            text: ""
        };
    },
    onChange: function(e) {

        this.setState({text: e.target.value});

    },
    add: function(e) {

        var arr = this.state.todos;
        var newTodo = this.refs.newTodo.getDOMNode().value;

        // console.log('New todo: ' + newTodo);

        if(!newTodo) {
          e.preventDefault();
          this.setState({placeholder:"Please Add Todo", input_style:"form-control red"});
        } else {
          arr.push(newTodo);
          this.setState({todos: arr, placeholder:"Add Todo", text: null, input_style:"form-control"});
        }
    },
    update: function(newValue, i) {

        var arr = this.state.todos;

        arr[i] = newValue;
        this.setState({todos:arr});
    },
    remove: function(i) {

        var arr = this.state.todos

        arr.splice(i,1);
        this.setState({todos: arr})
        console.log('Todo#:' + (i+1) + ' removed');

    },
    eachTodo: function (todo,i) {

            return (
                React.createElement(Todo, {key: i, 
                         index: i, 
                         onChange: this.update, 
                         onRemove: this.remove}, 
                        todo
                )
            )
    },
    render: function() {

        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Things to DO"), 

                React.createElement("div", {className: "form-inline"}, 

                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("input", {className: this.state.input_style, placeholder: this.state.placeholder, value: this.state.text, onChange: this.onChange, ref: "newTodo"}), 
                        React.createElement("button", {onClick: this.add, className: "btn btn-default btn-sm"}, "+")
                    )

                ), 

                React.createElement("ul", null, 
                    this.state.todos.map(this.eachTodo)
                )

            )
        );
    }
});
React.render(React.createElement(TodoList, null), document.getElementById('todo'));
