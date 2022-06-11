import SideBar from "../../../../components/organisms/SideBar";

export default function index() {
  return (
    <section className="tambahlogbook overflow-auto">
        <SideBar activeMenu="dashboard" />        
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Edit Logbook</h2>
                <div className="main-content main-content-table overflow-auto bg-logbook pt-30 ps-30 pe-30 pb-30">
                    <form action="">
                        <div className="pt-30">
                            <label for="title" className="form-label text-lg fw-medium color-palette-1 mb-10">Judul 
                                Kegiatan
                            </label>
                            <input type="text" className="form-control rounded-pill text-lg" id="title" name="title"
                                aria-describedby="title" placeholder="Masukkan Judul Kegiatan Anda" value="Observasi Kebutuhan Sistem"/>
                        </div>
                        <div className="pt-30">
                            <label for="instansi" className="form-label text-lg fw-medium color-palette-1 mb-10">Nama 
                                Instansi
                            </label>
                            <input type="text" className="form-control rounded-pill text-lg" id="instansi" name="instansi"
                                aria-describedby="instansi" placeholder="Masukkan Instansi Projek Anda" value="UPT Humas"/>
                        </div>
                        <div className="pt-30">
                            <label for="tanggal" className="form-label text-lg fw-medium color-palette-1 mb-10">Tangal 
                                Kegiatan
                            </label>
                            <input type="date" className="form-control rounded-pill text-lg" id="tanggal" name="tanggal"
                                aria-describedby="tanggal" value="24/03/2022"/>
                        </div>
                        <div className="pt-30">
                            <label for="tanggal" className="form-label text-lg fw-medium color-palette-1 mb-10">Deskripsi
                                Kegiatan
                            </label>
                            <textarea className="form-control rounded-pill text-lg" id="deskripsi" name="deskripsi" 
                                aria-describedby="deskripsi" placeholder="Masukkan Deskripsi Kegiatan Anda" value="Deskripsi Kegiatan di bagian sini"/>
                        </div>
                        <div className="button-group d-flex flex-column pt-50">
                            <button type="submit" className="btn btn-save fw-medium text-lg text-white rounded-pill"
                                role="button">Simpan Logbook</button>
                        </div>
                    </form>

                </div>


            </div>
        </main>
    </section>
  )
}
