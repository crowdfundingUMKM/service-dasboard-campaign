import FundDonationLayout from "@/pages/campaign/fund-donation/layout";

import Link from "next/link";

export default function FundDonation() {
    return (
        <FundDonationLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>Dana Donasi</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Campaign UMKM</li>
                    <li className="breadcrumb-item active">Dana Donasi</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <div className="col-lg">
                <div
                    className="alert alert-info alert-dismissible fade show"
                    role="alert"
                >
                    <h5 className="alert-heading">Pengajuan Dana Donasi</h5>
                    <p>
                    Anda bisa melakukan pengajuan jika{" "}
                    <span className="bold">Status Campaign anda </span>
                    <span className="badge bg-success">Active</span> Anda bisa menunggu
                    saat adanya reviewer yang melakukan pengaktifan.
                    </p>
                    <p>Informasi Status:</p>
                    <ul>
                    <li>
                        <span className="badge bg-info">Waiting</span>: Menunggu proses dari
                        admin apakah dana bisa di cairakan untuk user campaign
                    </li>
                    <li>
                        <span className="badge bg-success">Disetujui</span>: Dana sudah
                        diterima oleh user campaign
                    </li>
                    <li>
                        <span className="badge bg-danger">Ditolak</span>: Dana ditolak,
                        adanya kemungkinan anda belum mengisi pembayaran yang seharusnya.
                    </li>
                    </ul>
                    <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    />
                </div>
                </div>
                <section className="section">
                <div className="row">
                    <div className="col-lg">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">
                            Progress Dana Yang Sedang Dikumpulkan
                        </h5>
                        <p>
                            Berikut dana yang sudah terkumpul, anda bisa mengajukan request
                            kepada admin ketika progress sudah{" "}
                            <strong className="text-primary">%100</strong>
                        </p>
                        <h4>
                            <strong>Terkumpul</strong>
                        </h4>
                        <div className="progress mt-3">
                            <div
                            className="progress-bar progress-bar-striped bg-primary progress-bar-animated"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            >
                            %25
                            </div>
                        </div>
                        <div className="row d-flex justify-content-between pt-2">
                            <div className="col-7">
                            <h4>Rp.16.000.000 dari Rp.700.000</h4>
                            </div>
                            <div className="col-3 col-lg-1 col-sm-1">
                            <h4>%75</h4>
                            </div>
                        </div>
                        {/* Ajukan Penarikan */}
                        <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-primary" type="button">
                            Ajukan Penarikan
                            </button>
                            {/* Jika Sudah mengajukan */}
                            <button className="btn btn-primary" type="button" disabled="">
                            Sudah Mengajukan
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end progress */}
                <div className="row">
                    <div className="col-lg">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Pengajuan yang dilakukan</h5>
                        <p>
                            Berikut data yang sedang diajukan untuk proses penarikan dana,
                            Request ini akan diterima oleh admin dan admin akan memberikan
                            informasi lebih lanjut.
                        </p>
                        {/* Table Status Penarikan */}
                        {/* Table with hoverable rows */}
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nama Pemilik</th>
                                <th scope="col">Nama Campaign</th>
                                <th scope="col">Status Campaign</th>
                                <th scope="col">Status Pengajuan</th>
                                <th scope="col">Waktu Pengajuan</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Brandon Jacob</td>
                                <td>Penjualan Buah Naga</td>
                                <td>
                                <span className="badge bg-success">Active</span>
                                </td>
                                <td>
                                <span className="badge bg-danger">Ditolak</span>
                                </td>
                                <td>2016-05-25</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Bridie Kessler</td>
                                <td>Penjualan Buah Naga</td>
                                <td>
                                <span className="badge bg-success">Active</span>
                                </td>
                                <td>
                                <span className="badge bg-success">Disetujui</span>
                                </td>
                                <td>2014-12-05</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Ashleigh Langosh</td>
                                <td>Penjualan Buah Naga</td>
                                <td>
                                <span className="badge bg-success">Active</span>
                                </td>
                                <td>
                                <span className="badge bg-success">Disetujui</span>
                                </td>
                                <td>2011-08-12</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Ashleigh Langosh</td>
                                <td>Penjualan Buah Naga</td>
                                <td>
                                <span className="badge bg-success">Active</span>
                                </td>
                                <td>
                                <span className="badge bg-warning">Waiting</span>
                                </td>
                                <td>2011-08-12</td>
                            </tr>
                            </tbody>
                        </table>
                        {/* End Table with hoverable rows */}
                        </div>
                    </div>
                    </div>
                </div>
                {/* end table pengajuan */}
                <div className="row">
                    <div className="col-lg">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Progres Dana Dikembalikan </h5>
                        <p>
                            Berikut Waktu pengembalian dana kepada user investor dan profit
                            untuk user konsultan. Setelah anda mengajukan pengembalian dana
                            maka admin kami akan menghubungi anda.
                        </p>
                        <div className="row d-flex justify-content-between pt-2">
                            <div className="col-7">
                            <h5>Deadline Tanggal: 12 Agustus 2023</h5>
                            </div>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-primary" type="button">
                            Pengembalian Dana
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </main>

        </FundDonationLayout>
    );
}