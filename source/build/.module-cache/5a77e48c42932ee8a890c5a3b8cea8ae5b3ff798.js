//= require_tree .

var Todo = React.createClass({displayName: "Todo",

  getInitialState: function(){
    return {editing:false}
  },

  edit: function(){
    alert('edit todo');
    this.setState({editing:true});
  },

  remove: function(){
    alert('todo remove');
  },

  save: function(){
    alert('todo saved');
  },

  todoDisplay: function(){
    return (
        React.createElement("li", {className: "todo"}, 
          React.createElement("span", {onClick: this.edit}, 
            this.props.children
          ), 
          React.createElement("button", {onClick: this.remove, className: "btn btn-default bt-sm glyphicon glyphicon-trash remove pull-right"})
        )
    );
  },

  todoForm: function(){
    return (
        React.createElement("li", {className: "todo"}, 
          React.createElement("span", null, 
            React.createElement("input", {type: "text", placeholder: "Edit Todo", defaultValue: this.props.children})
          ), 
          React.createElement("button", {onClick: this.save, className: "btn btn-default bt-sm glyphicon glyphicon-trash remove pull-right"})
        )
    );
  },

  render: function(){
    if(this.state.editing){
      return this.todoForm();
    } else {
      return this.todoDisplay();
    }
  },

});

React.render(
  React.createElement("div", null, 
    React.createElement("h1", null, "Things to do"), 
    React.createElement("div", {className: "form-inline"}, 
      React.createElement("div", {className: "form-group"}, 
        React.createElement("input", {className: "form-control", placeholder: "Add to do"}), 
        React.createElement("button", {className: "btn btn-default btn-sm"}, "+")
      )
    ), 
    React.createElement("ul", null, 
      React.createElement(Todo, null, "Call Robyn"), 
      React.createElement(Todo, null, "Pay phone bill"), 
      React.createElement(Todo, null, "Make dentist appointment")
    )
  ),
  document.getElementById('todo'));
