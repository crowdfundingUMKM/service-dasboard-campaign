import UpdateCampaignLayout from '@/pages/campaign/update-campaign/layout';

import Link from 'next/link';


export default function UpdateCampaign() {
    return (

        <UpdateCampaignLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>Update Campaign UMKM</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Campaign UMKM</li>
                    <li className="breadcrumb-item active">Update Campaign</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                <div className="row">
                    <div className="col-lg-7">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Update Campaign UMKM</h5>
                        {/* General Form Elements */}
                        <form>
                            <div className="row mb-3">
                            <label
                                htmlFor="titleUMKM"
                                className="col-sm-2 col-form-label"
                            >
                                Judul UMKM
                            </label>
                            <div className="col-sm-10">
                                <input
                                type="text"
                                className="form-control"
                                defaultValue="Wong Potato Pasar Malam Minggu"
                                required=""
                                />
                            </div>
                            </div>
                            <div className="row mb-3">
                            <label
                                htmlFor="categoryUMKM"
                                className="col-sm-2 col-form-label"
                            >
                                Kategori UMKM
                            </label>
                            <div className="col-sm-10">
                                <input
                                type="text"
                                className="form-control"
                                defaultValue="Makanan dan Minuman"
                                required=""
                                />
                            </div>
                            </div>
                            <div className="row mb-3">
                            <label
                                htmlFor="inputDescription"
                                className="col-sm-2 col-form-label"
                            >
                                Deskripsi UMKM
                            </label>
                            <div className="col-sm-10">
                                <textarea
                                className="form-control"
                                style={{ height: 150 }}
                                required=""
                                defaultValue={
                                    '"Wong aPotato adalah brand ke-3 dari JP Group yang menggandeng salah satu influencer ternama Indonesia yaitu Baim Wong. Bermulla di awal September 2021 hingga September 2022. Wong Potato telah mencapai hampir 350 outlet, baik di Pulau Jawa maupun di luar Pulai Jawa. Hanya dengan Rp 12.000 sudah dapat menikmati crunchy dan gurihnya Wong Potato. Serta banyak varian rasa, membuat Wong Potato menjadi cemilan favorit di semua kalangan."\n                    '
                                }
                                />
                            </div>
                            </div>
                            <div className="row mb-3">
                            <label
                                htmlFor="inputAddress"
                                className="col-sm-2 col-form-label"
                            >
                                Alamat UMKM
                            </label>
                            <div className="col-sm-10">
                                <textarea
                                className="form-control"
                                style={{ height: 100 }}
                                required=""
                                defaultValue={"Jl. Hola Naim Saemple NO.12"}
                                />
                            </div>
                            </div>
                            <hr />
                            <h4>Informasi</h4>
                            <div className="input-group mb-3">
                            <label
                                htmlFor="moneyTarget"
                                className="col-sm-2 col-form-label"
                            >
                                Target Dana
                            </label>
                            <span className="input-group-text">Rp.</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Masukkan Uang Rupiah"
                                required=""
                                oninput="formatCurrency(this)"
                                defaultValue="100,000,000"
                            />
                            </div>
                            <div className="input-group mb-3">
                            <label
                                htmlFor="minInvest"
                                className="col-sm-2 col-form-label"
                            >
                                Minimal invest
                            </label>
                            <span className="input-group-text">Rp.</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Masukkan Uang Rupiah"
                                required=""
                                oninput="formatCurrency(this); validateMinInvest(this)"
                                defaultValue="100,000"
                            />
                            </div>
                            <div className="input-group mb-3">
                            <label
                                htmlFor="interestRate"
                                className="col-sm-2 col-form-label"
                            >
                                Suku Bunga (per tahun)
                            </label>
                            <span className="input-group-text">%</span>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Jumlah suku bungan 15%"
                                max={15}
                                required=""
                                defaultValue={2}
                            />
                            </div>
                            <div className="input-group mb-3">
                            <label
                                htmlFor="moneyTarget"
                                className="col-sm-2 col-form-label"
                            >
                                Masa Tenor
                            </label>
                            <span className="input-group-text">Bulan</span>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Jumlah bulan max 24"
                                max={24}
                                required=""
                                defaultValue={12}
                            />
                            </div>
                            <div className="row mb-3">
                            <label
                                htmlFor="inputDate"
                                className="col-sm-2 col-form-label"
                            >
                                Deadline Kampanye
                            </label>
                            <div className="col-sm-10">
                                <input
                                type="date"
                                className="form-control"
                                defaultValue="2023-12-12"
                                />
                            </div>
                            </div>
                            <div className="row mb-3">
                            <label
                                htmlFor="proposalBisnis"
                                className="col-sm-2 col-form-label"
                            >
                                Proposal Bisnis
                            </label>
                            <div className="col-sm-10">
                                <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                accept="application/pdf"
                                onchange="validateFileSize(this)"
                                required=""
                                />
                            </div>
                            </div>
                            <hr />
                            <h4>Benefit UMKM</h4>
                            <div className="row mb-3">
                            <label
                                htmlFor="inputBenefit"
                                className="col-sm-2 col-form-label"
                            >
                                Benefit UMKM
                            </label>
                            <div className="col-sm-10">
                                <textarea
                                className="form-control"
                                style={{ height: 100 }}
                                placeholder="Tambahkan menggunakan koma (,)"
                                required=""
                                defaultValue={
                                    "Ini benefit yang didaptkan, ini benefit yang didapatkan"
                                }
                                />
                            </div>
                            </div>
                            <hr />
                            <h4>Link Bisnis</h4>
                            <div className="row mb-3">
                            {/* add Link for bisnis */}
                            <label
                                htmlFor="inputBenefit"
                                className="col-sm-2 col-form-label"
                            >
                                Link Bisnis
                            </label>
                            <div className="col-sm-10">
                                <input
                                type="text"
                                className="form-control"
                                id="link1"
                                placeholder="Masukkan Link Bisnis"
                                required=""
                                />
                            </div>
                            </div>
                            <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Simpan</label>
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary">
                                Update Campaign
                                </button>
                            </div>
                            </div>
                        </form>
                        {/* End General Form Elements */}
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-5">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Unggah Image Gallery</h5>
                        <div className="row mb-3">
                            <label htmlFor="fotoUMKM" className="col-sm-2 col-form-label">
                            Foto UMKM
                            </label>
                            <div className="col-sm-10">
                            <input
                                className="form-control"
                                type="file"
                                id="fotoUMKM"
                                accept="image/*"
                                multiple=""
                                required=""
                            />
                            <small className="text-muted">
                                Unggah foto-foto UMKM. Anda dapat mengunggah multiple foto.
                            </small>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-2" />
                            <div className="col-sm-10">
                            <button className="btn btn-primary" onclick="addMoreImages()">
                                Tambah Gambar
                            </button>
                            <button className="btn btn-success" onclick="simpanGambar()">
                                Simpan
                            </button>
                            <button className="btn btn-danger" onclick="resetInput()">
                                Reset
                            </button>
                            </div>
                        </div>
                        <div id="imageUploadContainer">
                            {/* Tempat untuk menampilkan input tambahan 4 gambar lagi */}
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                        {/* tombol prefiew UMKM */}
                        <h5 className="card-title">Preview Campaign</h5>
                        <p>Silakan lihat daftar UMKM yang sudah ada sekarang.</p>
                        <a href="#">
                            <button className="btn btn-primary">Preview UMKM</button>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </main>

        </UpdateCampaignLayout>
    );
}