import Head from 'next/head'


export default function LoginLayout({ children }) {
    return (
      <>
        <Head>
            <title>Login Akun | Campaign Mode</title>
            <meta name="description" content="Silahkan Login sebagai pengusaha Crowdfiunding UMKM"/>
        </Head>
        {children}
      </>
    );
  }
  
  