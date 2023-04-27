import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_REPOSITORIES = gql`
  query {
    viewer {
      repositories(first: 10) {
        edges {
          node {
            id
            name
            description
          }
        }
      }
    }
  }
`;

const RepositoriesList = () => (
  <Query query={GET_REPOSITORIES}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <ul>
          {data.viewer.repositories.edges.map(({ node }) => (
            <li key={node.id}>
              <h3>{node.name}</h3>
              <p>{node.description}</p>
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default RepositoriesList;
