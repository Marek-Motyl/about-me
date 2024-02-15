
import Link from "next/link";
import clsx from "clsx";
import { ComponentProps } from "react";



interface Props extends ComponentProps<typeof Link> {
    active: boolean;
}

export default function NavLink({ active, ...rest }: Props) {

    return (<Link className={clsx({ "shadow-active-link": active })} {...rest} />);
}