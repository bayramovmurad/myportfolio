interface TitleProps {
    title: string
    subtitle: string
}

const Title = (props: TitleProps) => {
    const { title, subtitle } = props

    return (
        <div className="flex pb-2 flex-col items-center">
            <h3 className="text-gray-400">{title}</h3>
            <h2 className="text-3xl">{subtitle}</h2>
        </div>
    );
}

export default Title;