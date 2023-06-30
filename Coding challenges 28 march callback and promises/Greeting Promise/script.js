function greeting(namE){
    return new Promise((resolve, reject) => {
        let greet = `Hello ! ${namE}`
        resolve(greet)
    })
}

greeting("Bishal").then( function names(greet){
    console.log(greet);
})