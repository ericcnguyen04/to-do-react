import React, {Component} from 'react'
import ListItem from './Component/ListItem'

class MyList extends Component {

  state = {
    taskArray: this.props.theList,
    newItem: ''
  }

  // input handler for controlled form
  handleChange = e => {
    console.log('handle that change')
    this.setState({
      newItem: e.target.value
    })
  }

  // submission event handler for the form
  addItem = e => {
    e.preventDefault()
    // console.log('the form has had a submission event!')
    // const yourArray = [...this.state.taskArray]
    // yourArray.push(this.state.newItem)
    // this.setState({
    //   taskArray: yourArray
    // })
    this.setState(prevState => {
      // make copy of an array
      const prevStateCopy = [...prevState.taskArray]
      // push into copy
      prevStateCopy.push(prevState.newItem)
      // merge copy with state
      const newState = {
        taskArray: [...prevState.taskArray,
        prevState.newItem]
      }

      return newState

    })
  }

  clearList = () => {
    this.setState({
      taskArray: []
    })
  }

  render() {
    let todoItems = this.state.taskArray.map((item, index) => {
      return <ListItem task={item} key={index} />
    })
    
    return (
      <div>
        <h1>This is your To do's</h1>
        <h1>Things I should stop procrastinating:</h1>
        <form onSubmit={this.addItem}>
          <label htmlFor='newItem'>New Item:</label>
          <input type='type'
          placeholder='enter an item you would like to procrasinate' 
          onChange={this.handleChange}
          value={this.state.newItem}
          />
          <button type='submit'>Start procrastinating</button>
        </form>
        <ul>
          {todoItems}
        </ul>
        <button onClick={this.clearList}>Finished the list</button>
      </div>
    )
  }
}

export default MyList