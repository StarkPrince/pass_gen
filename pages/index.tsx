import Head from 'next/head';
import PasswordGenerator from '../components/PasswordGenerator';

const HomePage = () =>
{
  return (
    <div>
      <Head>
        <title>Password Generator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PasswordGenerator />
    </div>
  );
};

export default HomePage;
