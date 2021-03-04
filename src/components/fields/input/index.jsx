import './style.scss';

import Field from '../field';

const InputField = ({title, ...p}) => {
    return <Field title={title} classname={'field-input'}>
        <input {...p} />
    </Field>
}

export default InputField;