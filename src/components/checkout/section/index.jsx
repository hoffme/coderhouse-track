import './style.scss';

const SectionCheckout = ({title, children, className}) => {
    return <div className={"section-checkout " + className}>
        <b className={"title"}>{title}</b>
        <div className={"content"}>
            {children}
        </div>
    </div>;
}

export default SectionCheckout;