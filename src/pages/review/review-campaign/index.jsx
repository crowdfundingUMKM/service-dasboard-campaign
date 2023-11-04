import ReviewCampaignLayout from '@/layouts/review-campaign-layout';

import Link from 'next/link';

export default function ReviewCampaign() { 
    return (

        <ReviewCampaignLayout>
            <main id="main" className="main">
                <div className="pagetitle">
                <h1>Review Campaign</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Review Campaign</li>
                    <li className="breadcrumb-item active">Review Campaign</li>
                    </ol>
                </nav>
                </div>
                {/* End Page Title */}
                <section className="section">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">
                            Nama Reviewer 1 -{" "}
                            <strong className="bg-danger rounded-pill p-1">rejected</strong>
                        </h5>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
                            est nostrum beatae unde, perferendis harum incidunt illo
                            expedita eius. Dolor!
                        </p>
                        <div id="rating_review" className="row">
                            <p>Review UMKM: ⭐⭐⭐⭐4/5 </p>
                        </div>
                        <a className="btn btn-primary " href="#" role="button">
                            Kunjungi Profile Reviewer
                        </a>
                        {/* button to whatsapp */}
                        {/* make message: No Hp & text=message %20 for space  */}
                        <a
                            className="btn btn-success "
                            href="https://api.whatsapp.com/send?phone=813678221&text=Hallo,%20Apa%20benar%20ini%20dengan%20UMKM%20Batik%20Indonesia?"
                            role="button"
                            target="_blank"
                        >
                            <i className="bi bi-whatsapp"> Hubungi Reviewer</i>
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">
                            Nama Reviewer 2 -{" "}
                            <strong className="bg-primary rounded-pill p-1">active</strong>
                        </h5>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
                            est nostrum beatae unde, perferendis harum incidunt illo
                            expedita eius. Dolor!
                        </p>
                        <div id="rating_review" className="row">
                            <p>Review UMKM: ⭐⭐⭐⭐4/5 </p>
                        </div>
                        <a className="btn btn-primary " href="#" role="button">
                            Kunjungi Profile Reviewer
                        </a>
                        {/* button to whatsapp */}
                        {/* make message: No Hp & text=message %20 for space  */}
                        <a
                            className="btn btn-success "
                            href="https://api.whatsapp.com/send?phone=813678221&text=Hallo,%20Apa%20benar%20ini%20dengan%20UMKM%20Batik%20Indonesia?"
                            role="button"
                            target="_blank"
                        >
                            <i className="bi bi-whatsapp"> Hubungi Reviewer</i>
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">
                            Nama Reviewer 3 -{" "}
                            <strong className="bg-primary rounded-pill p-1 ">active</strong>
                        </h5>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
                            est nostrum beatae unde, perferendis harum incidunt illo
                            expedita eius. Dolor!
                        </p>
                        <div id="rating_review" className="row">
                            <p>Review UMKM: ⭐⭐⭐⭐4/5 </p>
                        </div>
                        <a className="btn btn-primary " href="#" role="button">
                            Kunjungi Profile Reviewer
                        </a>
                        {/* button to whatsapp */}
                        {/* make message: No Hp & text=message %20 for space  */}
                        <a
                            className="btn btn-success "
                            href="https://api.whatsapp.com/send?phone=813678221&text=Hallo,%20Apa%20benar%20ini%20dengan%20UMKM%20Batik%20Indonesia?"
                            role="button"
                            target="_blank"
                        >
                            <i className="bi bi-whatsapp"> Hubungi Reviewer</i>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </main>
            {/* End #main */}

        </ReviewCampaignLayout>
    )
}