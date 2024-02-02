import clsx from "clsx";

export default function Header({ children, className, ...rest }: React.PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>>) {
    return (
        <h1 className={clsx([
            "text-4xl md:text-6xl font-bold",
            className
        ])}
            {...rest}
        >
            {children}
        </h1>
    );
}
