var quote = [

{'quote': "'Be yourself; everyone else is already taken.'",
'author' : "―Oscar Wilde"
},
{'quote': "'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.'",
'author' : "―Albert Einstein"
},

{'quote': "'So many books, so little time.'",
'author' : "―Frank Zappa"
},
{'quote': "'A room without books is like a body without a soul.'",
'author' : "―Marcus Tullius Cicero"
},
{'quote': "'You know you're in love when you can't fall asleep because reality is finally better than your dreams.'",
'author' : "―Dr. Seuss"
},
{'quote': "'You only live once, but if you do it right, once is enough.'",
'author' : "― Mae West"
},
{'quote': "'Be yourself; everyone else is already taken.'",
'author' : "―Mahatma Gandhi"
},
{'quote': "'“In three words I can sum up everything I've learned about life: it goes on.'",
'author' : "―Robert Frost"
}]


function getQoute(){
    console.log("hello world")
    var num = Math.floor(Math.random()*quote.length)
    console.log(num)
    document.getElementById("quote").innerHTML=quote[num].quote;
    document.getElementById("author").innerHTML=quote[num].author;
}