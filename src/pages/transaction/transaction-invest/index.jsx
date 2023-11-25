import TransactionLayout from '@/pages/transaction/transaction-invest/layout';
import DataTable from '@/components/utils/DataTable';

import Link from 'next/link';
export default function TransactionInvest() {
    return (

        <TransactionLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>Transaksi User</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Transaksi User</li>
                    <li className="breadcrumb-item active">Transaksi User Investor</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                <div className="row">
                    {/* Total Transaksi */}
                    <div className="col-12">
                    <div className="card recent-sales overflow-auto">
                        <div className="card-body">
                        <h5 className="card-title">Transaksi User Investor</h5>
                        <DataTable>
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">User Investor</th>
                                <th scope="col">Campign UMKM</th>
                                <th scope="col">User Bayar</th>
                                <th scope="col">Status Transaksi</th>
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
                                <td>Rp. 600.400</td>
                                <td>
                                <span className="badge bg-success">Approved</span>
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
                                <td>Raheem Lehner</td>
                                <td>
                                <a href="#" className="text-primary">
                                    Sunt similique distinctio
                                </a>
                                </td>
                                <td>Rp. 200.000</td>
                                <td>
                                <span className="badge bg-danger">Rejected</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                <a href="#">#2645</a>
                                </th>
                                <td>Anthony Leonhard</td>
                                <td>
                                <a href="#" className="text-primary">
                                    Sunt yuliotos distinctio
                                </a>
                                </td>
                                <td>Rp. 100.000</td>
                                <td>
                                <span className="badge bg-success">Approved</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                <a href="#">#2645</a>
                                </th>
                                <td>Anthony Leonhard</td>
                                <td>
                                <a href="#" className="text-primary">
                                    Sunt yuliotos distinctio
                                </a>
                                </td>
                                <td>Rp. 400.000</td>
                                <td>
                                <span className="badge bg-success">Approved</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                <a href="#">#2645</a>
                                </th>
                                <td>Anthony Leonhard</td>
                                <td>
                                <a href="#" className="text-primary">
                                    Sunt yuliotos distinctio
                                </a>
                                </td>
                                <td>Rp. 200.000</td>
                                <td>
                                <span className="badge bg-success">Approved</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                <a href="#">#2645</a>
                                </th>
                                <td>Anthony Leonhard</td>
                                <td>
                                <a href="#" className="text-primary">
                                    Sunt yuliotos distinctio
                                </a>
                                </td>
                                <td>Rp. 700.000</td>
                                <td>
                                <span className="badge bg-success">Approved</span>
                                </td>
                            </tr>
                            </tbody>
                        </DataTable>
                        </div>
                    </div>
                    </div>
                    {/* End Transaksi */}
                </div>
                </section>
            </main>
            {/* End #main */}

        </TransactionLayout>
    );

}