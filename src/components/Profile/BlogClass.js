import { Component } from "react";
import { GITHUB_GET_USER } from "../Config/config";
import Repo from "./Repo";

class Blog extends Component{
    constructor(props) {
        super(props);
        this.state = {
      blog : {
        name : "Dummy Name",
        bio : "Dummy content"
      },
      repoList : []
    }
    }
    async componentDidMount() {
    const response = await fetch (GITHUB_GET_USER + this.props.name);
        const blog_user_data = await response.json();
  
    const repo_data = await fetch (GITHUB_GET_USER + this.props.name + "/repos");
        const repo_list_data = await repo_data.json();

    this.setState({
      blog : blog_user_data,
      repoList : repo_list_data
    });
  }
    render() {
        const { blog, repoList } = this.state;
        return (
            <div className="blog-card"> 
                <div className="repo-container">
                <h2 className="repo-list-title">Repositories of {blog.name} </h2>
                {
                    repoList.filter(repo => (repo.name !== '.github')).map(repo => {
                    return (
                        <Repo {...repo} key={repo.id}/>
                    )
                    })
                }
                </div>
            </div>
            )
    }
}

export default Blog;