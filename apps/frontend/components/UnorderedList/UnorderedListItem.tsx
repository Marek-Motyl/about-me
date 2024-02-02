
interface Props {
}

export default function UnorderedListItem({ children }: React.PropsWithChildren<Props>) {
    return <li className="border-l-2 border-l-secondary text-secondary p-2">{children}</li>;
}

