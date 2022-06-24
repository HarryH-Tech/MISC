import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Container } from "../styles/Globals";

// Create interface for the data
interface IUser {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
  followers_url: string;
}

const GraphQL = () => {
  // Create a state for the user and set it equal to interface IUser
  const [users, setUsers] = useState<IUser[]>([]);

  const GET_USERS = `
    query getUsers {
      getUsers {
        id
        login
        avatar_url
        url
        followers_url
      }
    }
  `;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/graphql?query=${GET_USERS}`, {
        method: "GET",
        data: {
          query: GET_USERS,
        },
      })
      .then((res) => {
        setUsers(res.data.data.getUsers);
      });
  }, []);

  return (
    <>
      <Grid>
        {users.map((user: IUser) => {
          return (
            <Container key={user.id}>
              <a href={user.url}>{user.login}</a>
            </Container>
          );
        })}
      </Grid>
    </>
  );
};

export default GraphQL;
