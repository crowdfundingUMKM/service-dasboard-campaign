import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import Link from 'next/link'
// import Image from 'next/image'
import dynamic from 'next/dynamic';

import Image from 'next/image'


// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function HeaderComponent() {
    return (
    <>
        {/* ======= Header ======= */}
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
            <Link href="/dashboard" className="logo d-flex align-items-center">
                <img src="/assets/img/logo.png" alt="" />
                <span className="d-none d-lg-block">Campaign</span>
            </Link>
            <i className="bi bi-list toggle-sidebar-btn" />
            </div>
            {/* End Logo */}
            <div className="search-bar">
            <form
                className="search-form d-flex align-items-center"
                method="POST"
                action="#"
            >
                <input
                type="text"
                name="query"
                placeholder="Search"
                title="Enter search keyword"
                />
                <button type="submit" title="Search">
                <i className="bi bi-search" />
                </button>
            </form>
            </div>
            {/* End Search Bar */}
            <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
                <li className="nav-item d-block d-lg-none">
                <a className="nav-link nav-icon search-bar-toggle " href="#">
                    <i className="bi bi-search" />
                </a>
                </li>
                {/* End Search Icon*/}
                <li className="nav-item dropdown">
                <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-bell" />
                    <span className="badge bg-primary badge-number">4</span>
                </a>
                {/* End Notification Icon */}
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                    <li className="dropdown-header">
                    You have 4 new notifications
                    <a href="#">
                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                        View all
                        </span>
                    </a>
                    </li>
                    <li>
                    <hr className="dropdown-divider" />
                    </li>
                    <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning" />
                    <div>
                        <h4>Lorem Ipsum</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>30 min. ago</p>
                    </div>
                    </li>
                    <li>
                    <hr className="dropdown-divider" />
                    </li>
                    <li className="notification-item">
                    <i className="bi bi-x-circle text-danger" />
                    <div>
                        <h4>Atque rerum nesciunt</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>1 hr. ago</p>
                    </div>
                    </li>
                    <li>
                    <hr className="dropdown-divider" />
                    </li>
                    <li className="notification-item">
                    <i className="bi bi-check-circle text-success" />
                    <div>
                        <h4>Sit rerum fuga</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>2 hrs. ago</p>
                    </div>
                    </li>
                    <li>
                    <hr className="dropdown-divider" />
                    </li>
                    <li className="notification-item">
                    <i className="bi bi-info-circle text-primary" />
                    <div>
                        <h4>Dicta reprehenderit</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>4 hrs. ago</p>
                    </div>
                    </li>
                    <li>
                    <hr className="dropdown-divider" />
                    </li>
                    <li className="dropdown-footer">
                    <a href="#">Show all notifications</a>
                    </li>
                </ul>
                {/* End Notification Dropdown Items */}
                </li>
                {/* End Notification Nav */}
                <li className="nav-item dropdown pe-3">
                <a
                    className="nav-link nav-profile d-flex align-items-center pe-0"
                    href="#"
                    data-bs-toggle="dropdown"
                >
                    <img
                    src="/assets/img/profile-img.jpg"
                    alt="Profile"
                    className="rounded-circle"
                    />
                    <span className="d-none d-md-block dropdown-toggle ps-2">
                    K. Anderson
                    </span>
                </a>
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
                        className="dropdown-item d-flex align-items-center"
                        href="/information/profile"
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
                    <Link
                        className="dropdown-item d-flex align-items-center"
                        href="/notify/notify-report"
                    >
                        <i className="bi bi-question-circle" />
                        <span>Need Help?</span>
                    </Link>
                    </li>
                    <li>
                    <hr className="dropdown-divider" />
                    </li>
                    <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <i className="bi bi-box-arrow-right" />
                        <span>Sign Out</span>
                    </a>
                    </li>
                </ul>
                {/* End Profile Dropdown Items */}
                </li>
                {/* End Profile Nav */}
            </ul>
            </nav>
            {/* End Icons Navigation */}
        </header>
        {/* End Header */}
    </>
    )
}