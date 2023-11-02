import Head from 'next/head'

export default function CreateCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Buat Campaign | Campaign Mode</title>
        </Head>
        {children}
      </>
    );
  }
  