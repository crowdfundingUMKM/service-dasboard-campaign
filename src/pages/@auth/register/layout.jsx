import Head from 'next/head'


export default function RegisterLayout({ children }) {
    return (
      <>
        <Head>
            <title>Register Akun | Campaign Mode</title>
            <meta name="description" content="Silahkan Register sebagai pengusaha Crowdfiunding UMKM"/>
        </Head>
        {children}
      </>
    );
  }


  
  