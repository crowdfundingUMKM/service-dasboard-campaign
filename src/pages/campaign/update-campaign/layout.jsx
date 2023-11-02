import Head from 'next/head'

export default function UpdateCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Update Campaign | Campaign Mode</title>
        </Head>
        {children}
      </>
    );
  }
  