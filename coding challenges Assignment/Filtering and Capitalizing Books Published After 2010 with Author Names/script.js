const arrofBooks = [
    {tile: "book 1", author: "author 1", years: "2000"},
    {tile: "book 2", author: "author 2", years: "2009"},
    {tile: "book 3", author: "author 3", years: "2014"},
    {tile: "book 4", author: "author 4", years: "2015"},
    {tile: "book 5", author: "author 5", years: "2019"}
];

let capitalized = arrofBooks.filter(book => book.years >= 2010).map(book => ({
    title : book.title,
    author : book.author.toUpperCase(),
    years : book.years

}));
console.log(capitalized)