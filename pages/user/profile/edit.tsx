import Image from "next/image";
import SideBar from "../../../components/organisms/SideBar";

export default function EditProfile() {
  return (
    <section className="edit-profile overflow-auto">
        <SideBar activeMenu="settings"/>
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
                <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                    <form action="">
                        <div className="photo d-flex">
                            <div className="position-relative me-20">
                                <Image src="/img/avatar.png" width={90} height={90} alt="avatar"/>
                                <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                                   <Image src="/icon/ic-avatar-trash.svg" height={24} width={24} alt="trash avatar"/>
                                </div>
                            </div>
                            <div className="image-upload">
                                <label for="avatar">
                                    <Image src="/icon/upload.svg" height={90} width={90} alt="avatar upload"/>
                                </label>
                                <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                            </div>
                        </div>
                        <div className="pt-30">
                            <label for="name" className="form-label text-lg fw-medium color-palette-1 mb-10">Nama
                                Lengkap
                            </label>
                            <input type="text" className="form-control rounded-pill text-lg" id="name" name="name"
                                aria-describedby="name" placeholder="Masukkan nama lengkap Anda"/>
                        </div>
                        <div className="pt-30">
                            <label for="email" className="form-label text-lg fw-medium color-palette-1 mb-10">Alamat
                                Email
                            </label>
                            <input type="email" className="form-control rounded-pill text-lg" id="email" name="email"
                                aria-describedby="email" placeholder="Masukkan alamat email Anda"/>
                        </div>
                        <div className="pt-30">
                            <label for="phone" className="form-label text-lg fw-medium color-palette-1 mb-10">Nomor Telp</label>
                            <input type="tel" className="form-control rounded-pill text-lg" id="phone" name="phone"
                                aria-describedby="phone" placeholder="Masukkan nomor telepon Anda"/>
                        </div>
                        <div className="button-group d-flex flex-column pt-50">
                            <button type="submit" className="btn btn-save fw-medium text-lg text-white rounded-pill"
                                role="button">Simpan</button>
                        </div>
                    </form>

                </div>


            </div>
        </main>
    </section>
  )
}
