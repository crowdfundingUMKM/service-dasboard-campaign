import Link from "next/link";

import {usePathname } from 'next/navigation';

export default function Sidebar(){
    const pathname  = usePathname()

    return (
        <>
    {/* ======= Sidebar ======= */}
    <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
            <Link href="/dashboard">
            <div className={`nav-link  ${pathname === '/dashboard' ? '' : 'collapsed'}`} >
            <i className="bi bi-grid" />
            <span>Dashboard</span>
            </div>
            </Link>
        </li>
        {/* End Dashboard Nav */}
        <li className="nav-item">
            <a  href="" className="nav-link collapsed" data-bs-target="#make-campaign-nav" data-bs-toggle="collapse">
                <i className="bi bi-menu-button-wide" />
                  <span>Campaign UMKM</span>
                <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="make-campaign-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
                <Link href="/campaign/create-campaign" className={`${pathname === '/campaign/create-campaign' ? 'active' : ''}`} >
                <i className="bi bi-circle " />
                <span>Buat Campaign</span>
                </Link>
            </li>
            <li>
                <Link href="/campaign/update-campaign" className={`${pathname === '/campaign/update-campaign' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Update Campaign</span>
                </Link>
            </li>
            <li>
                <Link href="/campaign/preview" className={`${pathname === '/campaign/preview' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Preview Campaign</span>
                </Link>
            </li>
            <li>
                <Link href="/campaign/fund-donation" className={`${pathname === '/campaign/fund-donation' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Dana Donasi</span>
                </Link>
            </li>
            </ul>
        </li>
        {/* End Components Nav */}
        <li className="nav-item">
            <a href="#" className="nav-link collapsed" data-bs-target="#transaction-user" data-bs-toggle="collapse" >
            <i className="bi bi-journal-text" />
            <span>Transaksi User</span>
            <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
            id="transaction-user"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
            >
            <li>
                <Link href="/transaction/transaction-invest" className={`${pathname === '/transaction/transaction-invest' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Transaksi User Investor</span>
                </Link>
            </li>
            </ul>
        </li>
        {/* End Forms Nav */}
        <li className="nav-item">
            <a href="#" className="nav-link collapsed" data-bs-target="#review-nav" data-bs-toggle="collapse">
                <i className="bi bi-layout-text-window-reverse" />
                <span>Review Campaign</span>
                <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="review-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
                <Link href="/review/review-campaign" className={`${pathname === '/review/review-campaign' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Review Campaign</span>
                </Link>
            </li>
            </ul>
        </li>
        {/* End Tables Nav */}
        {/* Notif Admin */}
        <li className="nav-item side-service">
            <a className="nav-link collapsed" data-bs-target="#side-notif-admin" data-bs-toggle="collapse" href="#" >
            <i className="bi bi-app-indicator" />
                <span>Notifikasi Admin</span>
                <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="side-notif-admin" className="nav-content collapse " data-bs-parent="#sidebar-nav" >
            <li>
                <Link href="/notify/notify-admin" className={`${pathname === '/notify/notify-admin' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Notif Admin</span>
                </Link>
            </li>
            <li>
                <Link href="/notify/notify-report" className={`${pathname === '/notify/notify-report' ? 'active' : ''}`}>
                <i className="bi bi-circle" />
                <span>Lapor Admin</span>
                </Link>
            </li>
            </ul>

        </li>
        {/* End Notif Admin*/}
        <li className="nav-heading">information</li>
        <li className="nav-item">
            <Link href="/information/profile">
            <div className={`nav-link  ${pathname === '/information/profile' ? '' : 'collapsed'}`} >
            <i className="bi bi-person" />
            <span>Profile</span>
            </div>
            </Link>
        </li>
        {/* End Profile Page Nav */}
        <li className="nav-item">
              <Link  href="/information/faq">
                <div className={`nav-link  ${pathname === '/information/faq' ? '' : 'collapsed'}`}>
                <i className="bi bi-question-circle" />
                <span>F.A.Q</span>
                </div>
              </Link>
            </li>
        {/* End F.A.Q Page Nav */}
        <li className="nav-item" >
              <Link href="/@auth/login">
                <div className="nav-link collapsed">
                <i className="bi bi-box-arrow-in-right" />
                <span>Sign Out</span>
                </div>
              </Link>
            </li>
        </ul>
    </aside>
    {/* End Sidebar*/}
    </>

    )
}