const books =[ {
    title : "Rock the gamer",
    author: "alfred",
    year : 2010
}, {
    title : "The gangRich",
    author: "Bishal",
    year : 2009
}, {
    title : "gangRich old",
    author: "Bishal",
    year : 1999
}, {
    title : "Buy your own freedom",
    author: "rajamoli",
    year : 2040
}
]

function logtitle(titles){
titles.sort();
console.log(titles.join(", "));
}
function extractTitles(books,callback){
    let titleOnly = books.map((book)=> book.title)
      

    callback(titleOnly)
 
}

extractTitles(books,logtitle);