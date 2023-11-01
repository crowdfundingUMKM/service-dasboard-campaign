// Path: src/components/ContentSide.js 
import Image from 'next/image';
import Link from 'next/link';



export default function ContentSide (){
    
    return (
<>
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
</>

    );
}