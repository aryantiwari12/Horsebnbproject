const Timedata=(date)=>{
     
    if (date == 13) {
        return '1 PM'
    }
    else if (date == '14') {
        return '2 PM'
    }
    else if (date == '15') {
        return '3 PM'
    }
    else if (date == '16') {
        return '4 PM'
    }
    else if (date == '17') {
        return '5 PM'
    }
    else if (date == '18') {
        return '6 PM'
    }
    else if (date == '19') {
        return '7 PM'
    }
    else if (date == '20') {
        return '8 PM'
    }
    else if (date == '21') {
        return '9 PM'
    }
    else if (date == '22') {
        return '10 PM'
    }
    else if (date == '23') {
        return '11 PM'
    }
    else {
        return date + 'AM'
    }

}
export default{
    Timedata
}