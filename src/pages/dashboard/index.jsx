import Image from 'next/image'
import Link from 'next/link'


import ContentSide from '@/components/ContentSide'
// import layotu from this folder
import DashboardLayout from '@/pages/dashboard/layout'


import DataTable from '@/components/utils/DataTable';

export default function Home() {
  return (

    <DashboardLayout>
        <main id="main" className="main">
            <div className="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link href="/dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </nav>
            </div>
            {/* End Page Title */}
            <section className="section dashboard">
            <div className="row">
                {/* Left side columns */}
                <div className="col-lg-8">
                <div className="row">
                    {/* Sales Card */}
                    <div className="col-xxl-6 col-xl-12">
                    <div className="card info-card sales-card">
                        <div className="card-body">
                        <h5 className="card-title">
                            User Donasi Anda <span>| Total</span>
                        </h5>
                        <div className="d-flex align-items-center">
                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-cart" />
                            </div>
                            <div className="ps-3">
                            <h6>145</h6>
                            <span className="text-success small pt-1 fw-bold">
                                12%
                            </span>{" "}
                            <span className="text-muted small pt-2 ps-1">
                                increase
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* End Sales Card */}
                    {/* Revenue Card */}
                    <div className="col-xxl-6 col-xl-12">
                    <div className="card info-card revenue-card">
                        <div className="card-body">
                        <h5 className="card-title">
                            Donasi campaign anda <span>| Total</span>
                        </h5>
                        <div className="d-flex align-items-center">
                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className="bi bi-currency-dollar" />
                            </div>
                            <div className="ps-3">
                            <h6>Rp.130.000.000</h6>
                            <span className="text-success small pt-1 fw-bold">
                                8%
                            </span>{" "}
                            <span className="text-muted small pt-2 ps-1">
                                increase
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* End Revenue Card */}
                    {/* Recent Sales */}
                    <div className="col-12">
                    <div className="card recent-sales overflow-auto">

                        <div className="card-body">
                        <h5 className="card-title">
                            Total User Transaksi <span>| Campaign Saya</span>
                        </h5>
                        <DataTable >
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">User Investor</th>
                                <th scope="col">Campaign UMKM</th>
                                <th scope="col">Donasi</th>
                                <th scope="col">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">
                                <a href="#">#2457</a>
                                </th>
                                <td>Brandon Jacob</td>
                                <td>
                                <a href="#" className="text-primary">
                                    At praesentium minu
                                </a>
                                </td>
                                <td>Rp. 700.000</td>
                                <td>
                                <span className="badge bg-success">Approved</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                <a href="#">#2147</a>
                                </th>
                                <td>Bridie Kessler</td>
                                <td>
                                <a href="#" className="text-primary">
                                    Blanditiis dolor omnis similique
                                </a>
                                </td>
                                <td>Rp. 100.000</td>
                                <td>
                                <span className="badge bg-warning">Pending</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                <a href="#">#2049</a>
                                </th>
                                <td>Ashleigh Langosh</td>
                                <td>
                                <a href="#" className="text-primary">
                                    At recusandae consectetur
                                </a>
                                </td>
                                <td>Rp. 100.000</td>
                                <td>
                                <span className="badge bg-success">Approved</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                <a href="#">#2644</a>
                                </th>
                                <td>Angus Grady</td>
                                <td>
                                <a href="#" className="text-primar">
                                    Ut voluptatem id earum et
                                </a>
                                </td>
                                <td>Rp. 200.000</td>
                                <td>
                                <span className="badge bg-danger">Rejected</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                <a href="#">#2644</a>
                                </th>
                                <td>Raheem Lehner</td>
                                <td>
                                <a href="#" className="text-primary">
                                    Sunt similique distinctio
                                </a>
                                </td>
                                <td>Rp. 50.000</td>
                                <td>
                                <span className="badge bg-success">Approved</span>
                                </td>
                            </tr>
                            </tbody>
                        </DataTable>
                        </div>
                    </div>
                    </div>
                    {/* End Recent Sales */}
                </div>
                </div>
                {/* End Left side columns */}
                {/* ======= Content Side ======= */}
                <ContentSide />

                {/* End Content Side */}
            </div>
            </section>
        </main>
  {/* End #main */}

        </DashboardLayout>
  );
}