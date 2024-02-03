import clsx from "clsx";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLUListElement> {
}

export default function UnorderedList({ children, className, ...rest }: React.PropsWithChildren<Props>) {
    return <ul className={clsx("flex flex-col gap-2", className)} {...rest}>{children}</ul>;
}
