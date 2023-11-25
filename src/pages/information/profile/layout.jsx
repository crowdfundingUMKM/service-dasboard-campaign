import Head from 'next/head'

export default function ProfileLayout({ children }) {
    return (
      <>
        <Head>
            <title>Profile User | Campaign Mode</title>
            <meta name="description" content="Profile anda pada Crowdfunding."/>
        </Head>
        {children}
      </>
    );
  }
  