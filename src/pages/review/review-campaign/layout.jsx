import Head from 'next/head'

export default function ReviewCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Review Campaign | Campaign Mode</title>
            <meta name="description" content="Review Campaign UMKM anda dari konsultan"/>
        </Head>
        {children}
      </>
    );
  }
  