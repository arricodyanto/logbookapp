import TableRow from "./TableRow"

export default function DashboardContent() {
  return (
    <main className="main-wrapper">
        <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Dashboard</h2>
            <div className="latest-transaction p">
                <p className="text-lg fw-medium color-palette-1 mb-14">Logbook Terbaru</p>
                <div className="main-content main-content-table overflow-auto" >
                    <table className="table table-borderless">
                        <thead>
                            <tr className="color-palette-1">
                                <th className="text-start" scope="col">Judul Kegiatan</th>
                                <th scope="col">Instansi</th>
                                <th scope="col">Tanggal</th>
                                <th scope="col">Deskripsi Kegiatan</th>
                                <th scope="col">Status</th>
                                <th scope="col">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow title="Observasi Kebutuhan Sistem" instansi="UPT Humas UNS" tanggal="22/03/2022" deskripsi="Observasi Kebutuhan Sistem, alur pelayananm, dan teknologi yang akan digunakan" status="Verified" />
                            <TableRow title="Pembuatan Proses Bisnis"  instansi="UPT Humas UNS" tanggal="17/04/2022" deskripsi="a" status="Belum diverifikasi" />
                            <TableRow title="Pembuatan Diagram Relasi" instansi="UPT Humas UNS" tanggal="21/04/2022" deskripsi="b" status="Belum diverifikasi" />
                            <TableRow title="Penyusunan Kode Program" instansi="UPT Humas UNS" tanggal="28/04/2022" deskripsi="c" status="Belum diverifikasi" />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
  )
}
