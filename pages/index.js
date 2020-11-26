import Head from 'next/head';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

const Index = () => {
  return (
    <div>
      <Head>
        <title>Next.js | styled-components starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <h1>Next.js | styled-components starter!</h1>
      </Main>
    </div>
  );
};

export default Index;
