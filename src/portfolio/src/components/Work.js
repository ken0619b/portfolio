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
    <div>
      <h1>My Work</h1>
      {this.state.edges.map((repo, index) => {
        return (
        <div key={index}>
          <p>{repo.node.name}</p>
          <p>{repo.node.url}</p>
          <p>{repo.node.description}</p>
        </div>);
      })}
       </div>
    )
  }
}

export default Work;