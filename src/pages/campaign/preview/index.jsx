import PreviewCampaignLayout from "@/pages/campaign/preview/layout";
import Link from "next/link";
import Image from "next/image";

export default function PreviewCampaign() {
    return (
        <PreviewCampaignLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Preview Campaign</h1>
                    <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                        </li>
                        <li className="breadcrumb-item">Campaign UMKM</li>
                        <li className="breadcrumb-item active">Preview Campaign</li>
                    </ol>
                    </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                    <div className="row">
                    <div className="col-lg">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                            Preview Campaign -{" "}
                            <span className="badge bg-warning">Waiting </span>
                            </h5>
                            <br />
                            <h2 className="text-center">
                            <strong>Nama UMKM yang Sedang Dibuka</strong>
                            </h2>
                            <div className="row justify-content-center mt-4">
                            <div className="col-10 ">
                                {/* Slides with indicators */}
                                <div
                                id="carouselExampleIndicators"
                                className="carousel slide "
                                data-bs-ride="carousel"
                                >
                                <div className="carousel-indicators">
                                    <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={0}
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                    />
                                    <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={1}
                                    aria-label="Slide 2"
                                    />
                                    <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={2}
                                    aria-label="Slide 3"
                                    />
                                </div>
                                <div className="carousel-inner rounded-3">
                                    <div className="carousel-item active">
                                    <img
                                        src="/assets/img/slides-1.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                    </div>
                                    <div className="carousel-item">
                                    <img
                                        src="/assets/img/slides-2.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                    </div>
                                    <div className="carousel-item">
                                    <img
                                        src="/assets/img/slides-3.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev"
                                >
                                    <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                    />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next"
                                >
                                    <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                    />
                                    <span className="visually-hidden">Next</span>
                                </button>
                                </div>
                                {/* End Slides with indicators */}
                                <br />
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
                                <br />
                                <hr />
                                <h2>
                                <strong>Title Campaign</strong>
                                </h2>
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Sint, numquam! Cum possimus illum excepturi eligendi
                                consequatur molestiae itaque earum delectus repellat non iure
                                error amet quam provident, officiis id deserunt eveniet soluta
                                numquam veritatis vitae fuga autem tempore! In eligendi omnis
                                magnam, saepe quae molestias nihil est itaque at veniam?
                                </p>
                                <hr />
                                {/* Tab informasi */}
                                <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Informasi UMKM</h4>
                                    {/* Pills Tabs */}
                                    <ul
                                    className="nav nav-pills mb-3"
                                    id="pills-tab"
                                    role="tablist"
                                    >
                                    <li className="nav-item" role="presentation">
                                        <button
                                        className="nav-link active"
                                        id="pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-informasi"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-informasi"
                                        aria-selected="true"
                                        >
                                        Informasi
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                        className="nav-link"
                                        id="pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-benefit"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-benefit"
                                        aria-selected="false"
                                        >
                                        Benefit
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                        className="nav-link"
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-penerbit"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-penerbit"
                                        aria-selected="false"
                                        >
                                        Tentang Penerbit
                                        </button>
                                    </li>
                                    </ul>
                                    <div className="tab-content pt-2" id="myTabContent">
                                    {/* Tab informasi */}
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-informasi"
                                        role="tabpanel"
                                        aria-labelledby="inforamsi-tab"
                                    >
                                        <ul>
                                        <li>Total Pendanaan: Rp.16.000.000</li>
                                        <li>Minimal Investasi: Rp.100.000</li>
                                        <li>Suku Bunga (Per-tahun): 3% </li>
                                        <li>Masa Tenor: 12 Bulan</li>
                                        <li>Pengembalian Dana: Saat Jatuh Tempo</li>
                                        <li>Deadline Kampaye: 12 Agustus 2023</li>
                                        </ul>
                                        {/* Button to link bisnis &  Proposal Bisnis*/}
                                        <div className="link-bisnis m-2">
                                        <a className="btn btn-primary" href="#" role="button">
                                            Link Bisnis
                                        </a>
                                        <a className="btn btn-primary" href="#" role="button">
                                            Proposal Bisnis
                                        </a>
                                        </div>
                                    </div>
                                    {/* Tab Benefit */}
                                    <div
                                        className="tab-pane fade"
                                        id="pills-benefit"
                                        role="tabpanel"
                                        aria-labelledby="benefit-tab"
                                    >
                                        <ul>
                                        <li>Ini adalah benefit-benefit</li>
                                        <li>Ini adalah benefit-benefit</li>
                                        <li>Ini adalah benefit-benefit</li>
                                        <li>Ini adalah benefit-benefit</li>
                                        </ul>
                                    </div>
                                    {/* Tab Tentang Penerbit */}
                                    <div
                                        className="tab-pane fade"
                                        id="pills-penerbit"
                                        role="tabpanel"
                                        aria-labelledby="penerbit-tab"
                                    >
                                        <div className="container">
                                        <h4>Tentang Penerbit</h4>
                                        <br />
                                        <div className="row info-publisher">
                                            <div className="col-2 text-center">
                                            <img
                                                loading="lazy"
                                                decoding="async"
                                                src="/assets/img/messages-1.jpg"
                                                alt="Penerbit Thumbnail"
                                                className="img-fluid rounded-2"
                                            />
                                            </div>
                                            <div className="col-7">
                                            <h3 className="mb-3">Nama Penerbit Pak Agus</h3>
                                            <div className="describe_publisher">
                                                <strong>Deskripsi Penerbit</strong>
                                                <p className="text-black mt-2">
                                                Ini data tentang penerbit UMKM yang membuka
                                                UMKMIni data tentang penerbit UMKM yang
                                                membuka UMKMIni data tentang penerbit UMKM
                                                yang membuka UMKMIni data tentang penerbit
                                                UMKM yang membuka UMKM
                                                </p>
                                                <a
                                                className="btn btn-primary mt-3"
                                                href="#"
                                                role="button"
                                                >
                                                Link Penerbit
                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/* End Pills Tabs */}
                                </div>
                                </div>
                                {/* End Tab informasi */}
                                <hr />
                                {/* Tab Review */}
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Reviewer List</h5>
                                    {/* Pills Reviewer */}
                                    <ul
                                    className="nav nav-pills mb-3"
                                    id="pills-tab"
                                    role="tablist"
                                    >
                                    <li className="nav-item" role="presentation">
                                        <button
                                        className="nav-link active"
                                        id="pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="true"
                                        >
                                        Reviewer 1
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                        className="nav-link"
                                        id="pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-profile"
                                        aria-selected="false"
                                        >
                                        Reviewer 2
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                        className="nav-link"
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-contact"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                        >
                                        Reviewer 3
                                        </button>
                                    </li>
                                    </ul>
                                    <div className="tab-content pt-2" id="myTabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-home"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                    >
                                        <h4>Nama Reviewer 1</h4>
                                        {/* <br> */}
                                        <p>
                                        Sunt est soluta temporibus accusantium neque nam
                                        maiores cumque temporibus. Tempora libero non est unde
                                        veniam est qui dolor. Ut sunt iure rerum quae quisquam
                                        autem eveniet perspiciatis odit. Fuga sequi sed ea
                                        saepe at unde.
                                        </p>
                                        <div id="rating_review">
                                        <p>Review UMKM: ⭐⭐⭐⭐4/5 </p>
                                        </div>
                                        <a className="btn btn-primary" href="">
                                        Kunjungi Profile
                                        </a>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-profile"
                                        role="tabpanel"
                                        aria-labelledby="profile-tab"
                                    >
                                        <h4>Nama Reviewer 2</h4>
                                        {/* <br> */}
                                        <p>
                                        Sunt est soluta temporibus accusantium neque nam
                                        maiores cumque temporibus. Tempora libero non est unde
                                        veniam est qui dolor. Ut sunt iure rerum quae quisquam
                                        autem eveniet perspiciatis odit. Fuga sequi sed ea
                                        saepe at unde.
                                        </p>
                                        <div id="rating_review">
                                        <p>Review UMKM: ⭐⭐⭐3/5 </p>
                                        </div>
                                        <a className="btn btn-primary" href="">
                                        Kunjungi Profile
                                        </a>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-contact"
                                        role="tabpanel"
                                        aria-labelledby="contact-tab"
                                    >
                                        <h4>Nama Reviewer 3</h4>
                                        {/* <br> */}
                                        <p>
                                        Sunt est soluta temporibus accusantium neque nam
                                        maiores cumque temporibus. Tempora libero non est unde
                                        veniam est qui dolor. Ut sunt iure rerum quae quisquam
                                        autem eveniet perspiciatis odit. Fuga sequi sed ea
                                        saepe at unde.
                                        </p>
                                        <div id="rating_review">
                                        <p>Review UMKM: ⭐⭐⭐⭐⭐5/5 </p>
                                        </div>
                                        <a className="btn btn-primary" href="">
                                        Kunjungi Profile
                                        </a>
                                    </div>
                                    </div>
                                    {/* End Pills Tabs */}
                                </div>
                                </div>
                                <hr />
                                <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title">Link Bisnis</h2>
                                    <ul>
                                    <li>
                                        <a href="#">Link Bisnis Anda</a>
                                    </li>
                                    <li>
                                        <a href="#">Link Bisnis Anda</a>
                                    </li>
                                    <li>
                                        <a href="#">Link Bisnis Anda</a>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                                <hr />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* <div class="col-lg-6">

                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Example Card</h5>
                        <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
                    </div>
                    </div>

                </div> */}
                    </div>
                </section>
            </main>


        </PreviewCampaignLayout>
    );
}