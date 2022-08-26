const nums = [1, 2, 3, 4, 5, 6, 7, 8]

for(let x in nums){
    if(x == 5) { 
        break
    }

    console.log(`x = ${nums[x]}`)
}

for(y in nums){
    if(y == 5){
        continue
    }
    console.log(`x = ${nums[y]}`)
}

externo: for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break
        console.log(`Par = ${a},${b}`)
    }
}