function find_longest_word(s) {
    let array1 = s.match(/\w[a-z]{0}/gi);
    let result = array1[0];

    for(let x = 1 ; x < array1.length ; x++)
    {
        if(result.length < array1[x].length)
        {
            result = array1[x];
        }
    }
    return result;
}
console.log(find_longest_word("Suga is the best rapper in the world"));
