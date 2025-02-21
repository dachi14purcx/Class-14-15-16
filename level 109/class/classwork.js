function maskify(cc) {
    let res = '';
    for(let i = 0; i < cc.length; i++){
      if (i < cc.length-4){
        res += '#'
      }
      else{
        res += cc[i]
      }
    }
    return res
}