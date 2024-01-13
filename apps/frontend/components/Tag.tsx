interface Props {
    text: string
}

export default function Tag({ text }: Props) {
    return <div className="px-3 py-1 border border-primary" >{text}</div>;
}
