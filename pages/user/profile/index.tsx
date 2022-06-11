import Image from "next/image";
import Link from "next/link";
import SideBar from "../../../components/organisms/SideBar";

export default function Member() {
  return (
    <section className="profile-detail overflow-auto">
        <SideBar activeMenu="settings"/>
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Profile</h2>
                <div className="latest-transaction">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Profile Detail</p>
                    <div className="main-content main-content-table overflow-auto" >
                        <Image src="/img/avatar.png" width={120} height={120} alt="avatar" />
                        <table className="table table-borderless mt-3">
                          <tr>
                            <td>
                              Nama Lengkap
                            </td>
                            <td>
                              User1
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Alamat Email
                            </td>
                            <td>
                              user1@mail.com
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Nomor Telepon
                            </td>
                            <td>
                              0000000000000000
                            </td>
                          </tr>
                        </table>
                        <div className="button-group d-flex flex-column pt-50">
                            <Link href="/user/profile/edit">
                              <button type="submit" className="btn btn-save fw-medium text-lg text-white rounded-pill"
                                role="button">Ubah Profil</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
  )
}
