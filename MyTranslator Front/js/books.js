let j =1;
for (let i = 0; i < 5; i++) {

    var BooksDiv = document.createElement("div");
    BooksDiv.classList.add("BooksData");
    var Numbers = document.createElement("div");
    Numbers.classList.add("Numbers");
    BooksDiv.appendChild(Numbers);
    var BooksName = document.createElement("div");
    BooksName.classList.add("BooksName");
    BooksDiv.appendChild(BooksName);
    var BooksData = document.createElement("div");
    BooksData.classList.add("BooksData");
    BooksDiv.appendChild(BooksData);
    var BooksAuthor = document.createElement("div");
    BooksAuthor.classList.add("BooksAuthor");
    BooksDiv.appendChild(BooksAuthor );

    const Names = [];
    Names[0]= "Clean Code";
    Names[1]= " Introduction to Algorithms";
    Names[2]= "Code Complete";
    Names[3]= "Design Patterns";
    Names[4]= "Refactoring";
    const Author = [];
    Author[0]= "Robert C. Martin";
    Author[1]= "Thomas H. Cormen";
    Author[2]= "Steve McConnell";
    Author[3]= "Erich Gamma";
    Author[4]= "Martin Fowler";


    const number = j+".";
    Numbers.innerHTML = number;
    const booksName = Names[i];
    BooksName.innerHTML = booksName;
    const bookData = "2005";
    BooksData.innerHTML = bookData;
    const bookAuthor= Author[i];
    BooksAuthor.innerHTML = bookAuthor;
    document.body.appendChild(BooksDiv);




//Css for UserData
    BooksDiv.style.overflow = "hidden";
    BooksDiv.style.display = "flex";
    BooksDiv.style.gap = "20px";
    BooksDiv.style.padding = "20px";

    j++;
}






