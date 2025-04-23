function myLanguages(results) {
    let res = [];
    
    for (let language in results) {
      if (results[language] >= 60) {
        res.push(language);
      }
    }
    
    res.sort((a, b) => results[b] - results[a]);
    
    return res;
}