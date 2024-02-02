
interface Props {
}

export default function UnorderedList({ children }: React.PropsWithChildren<Props>) {
    return <ul className="flex flex-col gap-2">{children}</ul>;
}
