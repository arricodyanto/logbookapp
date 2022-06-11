import cx from 'classnames';
import Image from 'next/image';

interface TableRowProps {
    title: string;
    instansi: number;
    tanggal: string;
    deskripsi: string;
    status: 'Belum diverifikasi' | 'Verified' | 'Failed';
}

export default function TableRow(props: TableRowProps) {
    const { title, instansi, tanggal, deskripsi, status } = props;
    const statusClass = cx({
        'float-start icon-status' : true,
        pending: status === 'Belum diverifikasi',
        success: status === 'Verified',
        failed:  status === 'Failed',
    })
    return (
    <tr className="align-middle">
        <th scope="row">
            <div className="game-title-header">
                <p className="game-title fw-medium text-start color-palette-1 m-0">
                    {title}    
                </p>
            </div>
        </th>
        <td>
            <p className="fw-medium color-palette-1 m-0">{instansi}</p>
        </td>
        <td>
            <p className="fw-medium text-start color-palette-1 m-0">{tanggal}</p>
        </td>
        <td>
            <p className="fw-medium text-start color-palette-1 m-0">{deskripsi}</p>
        </td>
        <td>
            <div>
                <span className={statusClass}></span>
                <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                    {status}
                </p>
            </div>
        </td>
        <td>
            <a className="btn btn-get-started w-100 fw-medium text-xs text-center text-white rounded-pill mb-2"
                href="/user/logbook/edit" role="button"><Image src="/icon/ic-edit.svg" width={30} height={30} /></a>
            <a className="btn btn-get-started w-100 fw-medium text-xs text-center text-white rounded-pill"
                href="/user/logbook/delete" role="button"><Image src="/icon/ic-trash.svg" width={30} height={30} /></a>
        </td>
    </tr>
  )
}
