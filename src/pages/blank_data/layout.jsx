import Head from 'next/head'

export default function BlankLayout({ children }) {
    return (
      <>
        <Head>
            <title>Not Have Data | Campaign Mode</title>
        </Head>
        {children}
      </>
    );
  }
  