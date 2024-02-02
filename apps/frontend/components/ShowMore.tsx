"use client";
import { useSessionStorage } from "@/utils/useSessionStorage";

interface Props {
    storageKey: string;
    expandText?: React.ReactNode;
}

export default function ShowMore({ expandText, children, storageKey }: React.PropsWithChildren<Props>) {
    const [isExpanded, setExpand] = useSessionStorage(storageKey, false);

    if (!isExpanded) {
        return <button onClick={() => setExpand(true)}>{expandText}</button>;
    }

    return (children);
}
