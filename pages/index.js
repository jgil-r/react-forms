import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

// Test
const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UsernameForm = ({ onSubmitUsername }) => {
  let [username, setUsername] = useState('');

  let handleSubmit = (e) => {
    e.preventDefault();
    onSubmitUsername(username);
  };

  let handleChange = (e) => {
    setUsername(e.target.value.toLowerCase());
    console.log(e.target.value.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

const Index = () => {
  let onSubmitUsername = (username) => alert(`You entered ${username}`);
  return (
    <div>
      <Head>
        <title>Next.js | styled-components starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <UsernameForm onSubmitUsername={onSubmitUsername} />
      </Main>
    </div>
  );
};

export default Index;
