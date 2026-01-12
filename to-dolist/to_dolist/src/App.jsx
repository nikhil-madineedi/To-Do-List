import './App.css'

function App() {
  return (
    <div className='main_body d-flex justify-content-center align-items-center'>
      <div className='todo-listmaindiv'>
        <h3>My To-Do List</h3>
        <div>
          <div className='to-do-Inputdiv'>
            <div className="form-floating w-75">
              <input type="text" class="form-control" id="floatingInput" placeholder="To-DO task" />
              <label htmlForfor="floatingInput">To-Do Task</label>
            </div>
            <button className='btn btn-primary' id='addbutton'>+</button>
          </div>

          <ul className='tasks-list'> 
            <li  className='task d-flex justify-content-between'>Code
              <div>
                <button className='btn btn-sm btn-success'>Edit</button>
                <button className='btn btn-sm btn-danger'>Delete</button>
              </div>
            </li>
            <li>Read</li>
            <li>write notes</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default App