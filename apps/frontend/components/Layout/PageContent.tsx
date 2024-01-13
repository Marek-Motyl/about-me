import clsx from "clsx"

export default function PageContent({ children, className, ...rest }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
    return (
        <div className={clsx([
            "max-w-maxScreen",
            className
        ])}
            {...rest}
        >
            {children}
        </div>
    )
}
