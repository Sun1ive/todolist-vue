<template>
  <div class="home">
    hello
    <button @click="submit">Register</button>
    <input
      placeholder="username"
      type="text"
      v-model="username"
    />
    <input
      placeholder="email"
      type="text"
      v-model="email"
    />
    <input
      placeholder="password"
      type="text"
      v-model="password"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import gql from 'graphql-tag';
// import { onLogin } from '../vue-apollo';

export const REGISTRATION_MUTATION = gql`
  mutation Register($email: String!, $username: String, $password: String!) {
    Register(
      data: { username: $username, password: $password, email: $email }
    ) {
      id
      email
      username
      token
    }
  }
`;

export default {
  name: 'home',

  data: () => ({
    email: '',
    password: '',
    username: '',
  }),

  methods: {
    async submit() {
      try {
        const r = await this.$apollo.mutate({
          mutation: REGISTRATION_MUTATION,
          variables: {
            email: this.email,
            password: this.password,
            username: this.username,
          },
        });

        console.log(r);
      } catch (error) {
        console.log('error', JSON.stringify(error));
      }
    },
  },
};
</script>
