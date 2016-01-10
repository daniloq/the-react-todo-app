//= require_tree .

var Todo = React.createClass({

  render: function(){
    return (
      <div>
        <h1>Things to do</h1>
        <div className='form-inline'>
          <div className='form-group'>
            <input className='form-control' placeholder='Add to do' />
            <button>+</button>
          </div>
        </div>
        <ul>
          <li className='todo'>Call Molly</li>
          <li className='todo'>Pay phone bill</li>
        </ul>
      </div>
    );
  }

});

React.render(<Todo />, document.getElementById('todo'));
