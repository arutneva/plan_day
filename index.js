let hrs = [hr9, hr10, hr11, hr12, hr13, hr14, hr15, hr16, hr17]
let currentDay = $('#currentDay')
let currentHour = today.hour();


function displayDay() {

    currentDay.text(moment().format('MMM Do YY'))

}

function timeColors() {
    for (let i = 0; i < hrs.length; i++) {
        if (currentHour > hrs[i]){
            $('#' + hrs[i]).addClass('past')
        }else if (currentHour == hours[index]){
            $('#' + hrs[i]).addClass('present')
        }else if (currentHour < hours[index]){
            $('#' + hrs[i]).addClass('future')
        }

    }
}









displayDay()
timeColors()
