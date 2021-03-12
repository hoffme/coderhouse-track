const addressFormat = address => {
    return  address.city + ', ' + 
            address.address + ' ' + 
            address.height + ' ' + 
            (address.deptoNumber ? address.deptoNumber : '');
}

export default addressFormat;