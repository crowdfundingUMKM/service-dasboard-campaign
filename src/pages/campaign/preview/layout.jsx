import Head from 'next/head'

export default function PreviewCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Preview Campaign | Campaign Mode</title>
        </Head>
        {children}
      </>
    );
  }
  