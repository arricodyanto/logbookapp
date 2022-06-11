import Link from "next/link"

interface FooterItemProps {
    title:string;
    direct:string;
}

export default function FooterItem(props: FooterItemProps) {
    const {title, direct} = props;
  return (
    <li className="mb-6">
        <Link href={direct}>
            <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
        </Link>
    </li>
  )
}
