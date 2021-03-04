import './style.scss';

import Field from '../field';

const SelectField = ({title, value, onChange, options}) => {
    return <Field title={title} classname={'field-select'}>
        <select value={value} onChange={onChange}>
            {
                options.map((option, index) => {
                    return <option
                        key={index}
                        value={option.value}
                        disabled={option.disabled}
                    >{option.title}</option>
                })
            }
        </select>
    </Field>
}

export default SelectField;