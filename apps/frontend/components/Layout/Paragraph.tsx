import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
    variant: "main" | "assistive"
}

export default function Paragraph({ variant, children, className, ...rest }: Props) {
    return (
        <p className={clsx([
            {
                "text-xl md:text-2xl max-w-maxText-xl": variant === "main",
                "text-md md:text-lg max-w-maxText-lg": variant === "assistive",
            },
            className
        ])}
            {...rest}
        >
            {children}
        </p>
    );
}
