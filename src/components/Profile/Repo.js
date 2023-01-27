import { Component } from "react";

class Repo extends Component {
  constructor(props) {
    super(props);
  }
 componentDidMount() {
//       this.timer= setInterval(()=>{
//          console.log("timer started...")
//   },1000);
  }
  componentDidUpdate() {
    // console.log("componentDidUpdateCalled")
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
  }
  render() {
    const repo = this.props;
    return (
      
      <div className="repo-card">
        <a target="_blank" href={repo.html_url}><h3 className="repo-title">{repo.name}</h3></a>
        <p className="repo-bio">{repo.description}</p>
      </div>
  )}
}

export default Repo;
