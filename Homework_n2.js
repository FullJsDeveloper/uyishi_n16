console.clear()
function lastday(year, month) {
    let lastDay = 0
    switch (month) {
        // 31 kunlik oylar
        case 0: // Yanvar
        case 2: // Mart
        case 4: // May
        case 6: // Iyul
        case 7: // Avgust
        case 9: // Oktyabr
        case 11: // Dekabr
            lastDay = 31
            break
        // 30 kunlik
        case 3: // Aprel
        case 5: // Iyun
        case 8: // Sentyabr
        case 10: // Noyabr
            lastDay = 30
            break
            //kabisa yilini tekshirish
        case 1: 
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                lastDay = 29
            } else {
                lastDay = 28
            }
            break
        default:
            lastDay = 0
            break
    }
    return lastDay
}
console.log(lastday(2007, 5))