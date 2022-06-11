import DashboardContent from "../../components/organisms/DashboardContent";
import SideBar from "../../components/organisms/SideBar";

export default function Member() {
  return (
    <section className="overview overflow-auto">
        <SideBar activeMenu="dashboard"/>
        <DashboardContent />
    </section>
  )
}
