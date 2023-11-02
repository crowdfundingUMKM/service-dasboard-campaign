// Path: src/components/ContentSide.js 
import Image from 'next/image';
import Link from 'next/link';



export default function ContentSide (){
    
    return (
<>
      <div className="col-lg-4">
        {/* Recent Activity */}
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Aktifitas User <span>| Awal Mula</span>
              </h5>
              <div className="activity">
                <div className="activity-item d-flex">
                  <div className="activite-label">Langkah 1</div>
                  <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                  <div className="activity-content">
                    <span className="fw-bold text-dark">Update Profile</span> Anda,
                    Sehingga menarik untuk dilirik
                  </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                  <div className="activite-label">Langkah 2</div>
                  <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                  <div className="activity-content">
                    <span className="fw-bold text-dark">Buat Campaign</span> Anda,
                    Sehingga menarik Untuk dilirik
                  </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                  <div className="activite-label">Langkah 3</div>
                  <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                  <div className="activity-content">
                    Tunggu Campaign anda di reviewe oleh konsultan kami
                  </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                  <div className="activite-label">Langkah 4</div>
                  <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
                  <div className="activity-content">
                    Update Campaign anda sesuai rekomendasi dari reviewer kami.
                  </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                  <div className="activite-label">Langkah 5</div>
                  <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                  <div className="activity-content">
                    Ambil dana yang tekumpul anda pada halaman{" "}
                    <span className="fw-bold text-dark">Dana Donasi</span>.
                  </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                  <div className="activite-label">Langkah 6</div>
                  <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                  <div className="activity-content">
                    Pada bar <span className="fw-bold text-dark">Notifikasi Admin</span>{" "}
                    anda dapat melaporkan sesuatu kepada kami.
                  </div>
                </div>
                {/* End activity item*/}
              </div>
            </div>
          </div>
          {/* End Recent Activity */}

          {/* Campaign Update */}
          <div className="card">
                <div className="card-body pb-0">
                    <h5 className="card-title">Campaign UMKM &amp; Update <span>| Terbaru</span></h5>
                    <div className="news">
                      <div className="post-item clearfix">
                        <Image src="/assets/img/news-1.jpg" alt="News 1" width={80} height={60} />
                        <h4>
                          <Link href={`/preview/11}`}>Nihil blanditiis at in nihil autem</Link>
                        </h4>
                        <p>
                          Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut
                          harum...
                        </p>
                      </div>
                      <div className="post-item clearfix">
                        <Image src="/assets/img/news-2.jpg" alt="News 2" width={80} height={60} />
                        <h4>
                          <Link href={`/preview/12}`}>Quidem autem et impedit</Link>
                        </h4>
                        <p>
                          Illo nemo neque maiores vitae officiis cum eum turos elan dries werona
                          nande...
                        </p>
                      </div>
                      
                      <div className="post-item clearfix">
                        <Image src="/assets/img/news-3.jpg" alt="News 3" width={80} height={60} />
                        <h4>
                          <Link href={`/preview/13}`}>Id quia et et ut maxime similique occaecati ut</Link>
                        </h4>
                        <p>
                          Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et
                          totam...
                        </p>
                      </div>
                      <div className="post-item clearfix">
                        <Image src="/assets/img/news-4.jpg" alt="News 4"  width={80} height={60} />
                        <h4>
                          <Link href={`/preview/14}`}>Laborum corporis quo dara net para</Link>
                        </h4>
                        <p>
                          Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum
                          cuder...
                        </p>
                      </div>
                      <div className="post-item clearfix">
                        <Image src="/assets/img/news-5.jpg" alt="News 5" width={80} height={60} />
                        <h4>
                          <Link href={`/preview/15}`}>Et dolores corrupti quae illo quod dolor</Link>
                        </h4>
                        <p>
                          Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae
                          dignissimos eius...
                        </p>
                      </div>

                    </div>
                </div>
            </div>

      </div>
 
</>

    );
}