import Head from 'next/head'

export default function FaqLayout({ children }) {
    return (
      <>
        <Head>
            <title>F.A.Q | Campaign Mode</title>
        </Head>
        {children}
      </>
    );
  }
  