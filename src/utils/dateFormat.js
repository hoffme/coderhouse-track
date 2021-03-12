const dateFormat = date => {
    const year = date.getFullYear();
    const mont = (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);
    const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
    const hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
    const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    return year + '/' + mont + '/' + day + ' ' + hour + ':' + minutes;
}

export default dateFormat;