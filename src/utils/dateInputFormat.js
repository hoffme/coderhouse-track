const dateInputFormat = (date) => {
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toJSON().slice(0,10);
}

export default dateInputFormat;