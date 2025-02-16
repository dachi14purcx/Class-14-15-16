function getSize(w, h, d){
    let area = 2 * (w * h + w * d + h * d)
    let volume = w * h * d
    return[area, volume]
}