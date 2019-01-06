import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

class Work extends Component {  

  state = {
    edges: []
  }

  componentDidMount() {
    const client = new ApolloClient({
      uri: 'https://api.github.com/graphql',
      request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${
              process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
            }`
          }
        });
      }
    });

    const query = gql`
    {
      repositoryOwner(login: "ken840619") {
        ... on User {
          pinnedRepositories(first: 10) {
            edges {
              node {
                name,
                url,
                description,
              }
            }
          }
        }
      }
    }`

    client.query({ query })
    // .then(result => console.log(result.data.repositoryOwner.pinnedRepositories.edges));
    .then(result => this.setState({ edges: result.data.repositoryOwner.pinnedRepositories.edges }));

    console.log(this.state.edges)
  }

  render() {
    return (
      <section>
        <h2 className="section_header">My Works</h2>
        <div className="work_wrapper">
      {this.state.edges.map((repo, index) => {
        return (
        <div className="work_item" key={index}>
          <div className="work_item__title">{repo.node.name}</div>
          <div className="work_item__desc">{repo.node.description}</div>
          <div className="work_item__link">
            <a href={repo.node.url}>Check It !</a>
          </div>
        </div>);
      })}
       </div>
      </section>
    )
  }
}

export default Work;