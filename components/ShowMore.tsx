import { useState } from "react";


interface Props {
    expandText?: React.ReactNode;
}

export default function ShowMore({ expandText, children }: React.PropsWithChildren<Props>) {
    const [isExpanded, setExpand] = useState(false);

    if (!isExpanded) {
        return <button onClick={() => setExpand(true)}>{expandText}</button>;
    }

    return (children)
}
