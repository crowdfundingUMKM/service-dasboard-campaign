import Head from 'next/head'

export default function ReviewCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Review Campaign | Campaign Mode</title>
        </Head>
        {children}
      </>
    );
  }
  