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
                <Image src="/assets/img/logo.png" alt="" width={100} height={100}/>
                <span className="d-none d-lg-block">Campaign</span>
            </Link>
            <i className="bi bi-list toggle-sidebar-btn" />
            </div>
            {/* End Logo */}
            <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
                {/* <NotificationDropdownDynamic  /> */}
              <NotificationDropdown />

                {/* End Notify Dropdown */}

                {/* Profile Dropdown */}
            <ProfileDropdown  />  
            </ul>
            </nav>
            {/* End Icons Navigation */}
        </header>
        {/* End Header */}
    </>
    )
}