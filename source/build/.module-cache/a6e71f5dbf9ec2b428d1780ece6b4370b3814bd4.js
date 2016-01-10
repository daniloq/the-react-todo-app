//= require_tree .

var Todo = React.createClass({displayName: "Todo",

  render: function(){
    return (
        React.createElement("li", {className: "todo"}, this.props.children)
    );
  }

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
