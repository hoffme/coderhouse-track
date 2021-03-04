import './style.scss';

const Field = ({title = '', children = [], classname = ''}) => {
    return <div className={"field " + classname}>
        <label className={"field-title"}>{title}</label>
        {children}
    </div>
}

export default Field;