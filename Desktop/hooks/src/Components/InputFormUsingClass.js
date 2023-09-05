import React from "react";

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
        name: "",
        lastName: ""
        
    }
  }
  //storing the  name data using the event hanmdlers
  handleName = (e)=>{
    this.setState({
        name: e.target.value
    })
  }
  //storing the lastname data using the event handlers
  handleLastName = (e)=>{
    this.setState({
        lastName: e.target.value
    })
  }

  //useEffecthooks
  componentDidMount(){
    document.title = this.state.name + " " + this.state.lastName;
  }

  componentDidUpdate(){
    document.title = this.state.name +" " +this.state.lastName;
  }

  render() {
    return (
      <>
        <div className="section">
          <Row label="Name">
            <input className="input" value={this.state.name}
            onChange={this.handleName}/>
            {/* <input className="input" /> */}
          </Row>
          <Row label="Last Name">
          <input className="input" value={this.state.lastName}
            onChange={this.handleLastName}/>
            {/* <input className="input" /> */}
          </Row>
        </div>

        <h2>Hello, {this.state.name + " " + this.state.lastName} </h2>
      </>
    );
  }
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <lable>
        {label}
        <br />
      </lable>
      {props.children}
      <hr />
    </>
  );
}
