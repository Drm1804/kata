function solve(a, b) {
    if(a.length < b.length){
        return 0;
    }

    for(let i in b){
        const reg = new RegExp(b[i], 'g');
        const a_length = a.match(reg).length;
        const b_length = b.match(reg).length;
        if(a_length < b_length){
            return 0;
        }
    }
    return a.length - b.length;
};