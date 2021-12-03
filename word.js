let string = "bitcoin take over te world maybe who knows perhaps"

function getWord(str) {     
    let min = str.split(" ").reduce((prev, curent)=>{
        return curent.length < prev.length ? curent : prev;
    });
    return min
}



console.log(getWord(string));