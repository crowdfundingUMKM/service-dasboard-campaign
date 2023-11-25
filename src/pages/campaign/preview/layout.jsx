import Head from 'next/head'

export default function PreviewCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Preview Campaign | Campaign Mode</title>
            <meta name="description" content="Preview Campaign UMKM"/>
        </Head>
        {children}
      </>
    );
  }
  