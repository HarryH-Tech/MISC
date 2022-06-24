import axios from "axios";

interface User {
  id: number;
  login: string;
  avatar_url: string;
}

export const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await axios.get("https://api.github.com/users");
        console.log(users.data);
        return users.data;
      } catch (error) {
        throw error;
      }
    },
    getUser: async (_: any, args: any) => {
      try {
        const user = await axios.get(
          `https://api.github.com/users/${args.name}`
        );
        return {
          id: user.data.id,
          login: user.data.login,
          avatar_url: user.data.avatar_url,
        };
      } catch (error) {
        throw error;
      }
    },
  },
};
