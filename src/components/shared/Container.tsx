interface ContainerProps {
    children: React.ReactNode;
    className?: string
}

export const Container = ({ children, className = "" }: ContainerProps) => {
    return (
        <div className={`mx-auto max-x-7xl w-full ox-5 sm:px-8 md:px-14 lg:px-5 ${className}`}>{children}</div>
    )
}
