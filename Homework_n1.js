console.clear()
function isSunday(year, month, day) {
    const first_day = new Date(year, month, day)
    return first_day.getDay() === 0 //0 bu yerda yakshanba deb olingan
}
function countSundays(startYear, endYear) {
    let sundays = 0
    for (let year = startYear; year <= endYear; year++) {
        for (let month = 0; month < 12; month++) {
            if (isSunday(year, month, 1)) {
                sundays++
            }
        }
    }
    return sundays
}

let startYear = 2000
let endYear = 2050
let sundaysCount = countSundays(startYear, endYear)
console.log(`${startYear} dan ${endYear} gacha ${sundaysCount} marta 1 yanvar yakshanba kuniga to'g'ri keladi.`)