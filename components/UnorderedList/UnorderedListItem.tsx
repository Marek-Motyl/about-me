
interface Props {
}

export default function UnorderedListItem({ children }: React.PropsWithChildren<Props>) {
    return <li className="border-l-2 border-l-base-blue p-2">{children}</li>
}

