import Head from 'next/head'

export default function ProfileLayout({ children }) {
    return (
      <>
        <Head>
            <title>Profile User | Campaign Mode</title>
        </Head>
        {children}
      </>
    );
  }
  