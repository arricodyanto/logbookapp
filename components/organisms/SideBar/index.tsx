import Footer from "./Footer"
import MenuItem from "./MenuItem"
import Profile from "./Profile"

interface SideBarProps {
  activeMenu : 'dashboard' | 'tambahlogbook' | 'settings' ;
}

export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props; 
  return (
    <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
            <Profile />
            <div className="menus">
                <MenuItem title="Dashboard" icon="ic-menu-dashboard" active={activeMenu === 'dashboard'} href="/user" />
                <MenuItem title="Tambah Logbook" icon="ic-menu-transactions" active={activeMenu === 'tambahlogbook'} href="/user/logbook/tambah" />
                <MenuItem title="Settings" icon="ic-menu-settings" active={activeMenu === 'settings'} href="/user/profile" />
                <MenuItem title="Log Out" icon="ic-menu-logout" href="/sign-in" />
            </div>
            <Footer />
        </div>
    </section>
  )
}
