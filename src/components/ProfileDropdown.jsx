import Image from "next/image";
import Link from "next/link";


export default function ProfileDropdown() {
    return(   
        <li className="nav-item dropdown pe-3">
            <Link href="/dashboard" className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
            <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle"/>
            <span className="d-none d-md-block dropdown-toggle ps-2">
                K. Anderson
            </span>
            </Link>
            {/* End Profile Iamge Icon */}
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
                <h6>Kevin Anderson</h6>
                <span>Pengusaha UMKM</span>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li>
                <Link
                href="/information/profile"
                className="dropdown-item d-flex align-items-center"
                >
                <i className="bi bi-person" />
                <span>My Profile</span>
                </Link>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li>
                <Link href="/information/faq" className="dropdown-item d-flex align-items-center" >
                <i className="bi bi-question-circle" />
                <span>Need Help?</span>
                </Link>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li>
                <Link href="#" className="dropdown-item d-flex align-items-center" >
                <i className="bi bi-box-arrow-right" />
                <span>Sign Out</span>
                </Link>
            </li>
            </ul>
            {/* End Profile Dropdown Items */}
        </li>
        //    End Profile Nav 

    );
}