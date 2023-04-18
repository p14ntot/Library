let myLibrary = [];

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

//Book.prototype.info=function(){

  //  console.log(`The author is ${this.author}\n` + `title:${this.title}\n` +`pages:${this.pages}\n`+ `read:${this.read}`);

//}

const hobbit=new Book('Hobbit','Toll','600','No!');
//hobbit.info();
myLibrary.push(hobbit);

const harry_potter=new Book('Harry','Potter','932','Yes!');
//harry_potter.info();
myLibrary.push(harry_potter);

console.log(myLibrary);




function addBookToLibrary(book,library) {
    library.push(book);
}

addBookToLibrary(hobbit,myLibrary);






function DisplayLibrary(library){
    const libraryDiv=document.getElementById('display');
    for(let i=0; i<library.length; i++){
        const div=document.createElement('div')
        div.classList.add('book');
        for(var j in library[i]){
            const info=document.createElement('div')
            info.textContent=j+':'+library[i][j];
            div.append(info);
        }
        console.log(library[i]);
        libraryDiv.appendChild(div);
    }
}




//Event listener for the add new book btn
const addbtn=document.getElementById('newbook');
addbtn.addEventListener('click',()=>{
    
    //removes all the btns from body
    const theAddButton = document.querySelector('#btn-area');
    document.body.removeChild(theAddButton);
    // removes all divs from body
    const allDivs = document.querySelectorAll('body > div');
    for (let i = 0; i < allDivs.length; i++) {
    document.body.removeChild(allDivs[i]);
    }

    const formDiv = document.getElementById('form-div');
    
    const newForm = document.createElement('form');

    const newTitle=document.createElement('input');
    newTitle.setAttribute('type','text');
    newTitle.setAttribute('name', 'title');
    newTitle.setAttribute('placeholder','title');
    newForm.appendChild(newTitle);

    const newAuthor=document.createElement('input');
    newAuthor.setAttribute('type','text');
    newAuthor.setAttribute('name', 'author');
    newAuthor.setAttribute('placeholder','Author');
    newForm.appendChild(newAuthor);

    const newPages=document.createElement('input');
    newPages.setAttribute('type','number');
    newPages.setAttribute('name', 'pages');
    newPages.setAttribute('placeholder','Pages');
    newForm.appendChild(newPages);


    const newRead=document.createElement('input');
    newRead.setAttribute('type','text');
    newRead.setAttribute('name', 'read');
    newRead.setAttribute('placeholder','Have you read this book?');
    newForm.appendChild(newRead);


    const subbmitBtn=document.createElement('button');
    subbmitBtn.setAttribute('type','submit');
    subbmitBtn.setAttribute('name', 'submit');
    subbmitBtn.textContent = 'Submit';

    subbmitBtn.style.width = '150px'; 
    subbmitBtn.style.height = '50px';
    
    newForm.appendChild(subbmitBtn);

    document.body.appendChild(newForm);

})

const display=document.getElementById('display-btn');
display.addEventListener('click',()=>{
    DisplayLibrary(myLibrary);
})
