import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="sidebar-footer pt-73 pe-30">
        <div className="footer-card">
            <div className="d-flex justify-content-between mb-20">
                <Image src="/icon/icon.png" width={60} height={60} />
                <p className="fw-medium color-palette-1">Tambahkan<br/>
                    Logbook Anda</p>
            </div>
            <Link href="/user/logbook/tambah">
                <a className="btn btn-get-started w-100 fw-medium text-xs text-center text-white rounded-pill"
                    role="button">Tambah</a>
            </Link>
        </div>
    </div>
  )
}
