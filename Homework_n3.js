function hisoblash(tugilganSanasi) {
    let hozirgiSana = new Date();
    let tugilganSana = new Date(tugilganSanasi);

    let yosh = hozirgiSana.getFullYear() - tugilganSana.getFullYear();
    let qolganOy = (hozirgiSana.getFullYear() - tugilganSana.getFullYear()) * 12 + hozirgiSana.getMonth() - tugilganSana.getMonth();
    let qolganKun = hozirgiSana.getDate() - tugilganSana.getDate();

    if (hozirgiSana.getMonth() < tugilganSana.getMonth() || 
        (hozirgiSana.getMonth() === tugilganSana.getMonth() && 
         hozirgiSana.getDate() < tugilganSana.getDate())) {
        yosh--
    }

    if (qolganKun < 0) {
        qolganOy--
        let kunlar = new Date(hozirgiSana.getFullYear(), hozirgiSana.getMonth(), 0).getDate()
        qolganKun = kunlar + qolganKun
    }

    return [yosh, qolganOy, qolganKun]
}

let tugilganSanasi = "2000-01-01"
let keyingiTugilganSana = "2025-04-15"
let natija = hisoblash(tugilganSanasi);
console.log("Foydalanuvchi " + natija[0] + " yoshda, " + natija[1] + " oy va " + natija[2] + " kun qoldi tug'ilgan sana: " + keyingiTugilganSana)
