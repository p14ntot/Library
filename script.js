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
        div.style.border = "1px solid black"; // creates border for each book-div
        for(var j in library[i]){
            const info=document.createElement('div')
            info.textContent=j+':'+library[i][j];
            div.append(info);
        }
        console.log(library[i]);
        libraryDiv.appendChild(div);
    }

    hide=document.getElementById('display-btn'); // hide the display btn
    hide.style.display='none';

    
}




//Event listener for the add new book btn
const addbtn=document.getElementById('newbook');
addbtn.addEventListener('click',()=>{
    
    //hide btns from body
    const theAddButton = document.querySelector('#btn-area');

    theAddButton.style.display='none';


    //const formDiv = document.getElementById('form-div');
    
    const newForm = document.createElement('form');

    const newTitle=document.createElement('input');
    newTitle.setAttribute('type','text');
    newTitle.setAttribute('name', 'title');
    newTitle.setAttribute('placeholder','title');
    newTitle.style.height = '30px';
    newForm.appendChild(newTitle);

    const newAuthor=document.createElement('input');
    newAuthor.setAttribute('type','text');
    newAuthor.setAttribute('name', 'author');
    newAuthor.setAttribute('placeholder','Author');
    newAuthor.style.height = '30px';
    newForm.appendChild(newAuthor);

    const newPages=document.createElement('input');
    newPages.setAttribute('type','number');
    newPages.setAttribute('name', 'pages');
    newPages.setAttribute('placeholder','Pages');
    newPages.style.height = '30px';
    newForm.appendChild(newPages);


    const newRead=document.createElement('input');
    newRead.setAttribute('type','text');
    newRead.setAttribute('name', 'read');
    newRead.setAttribute('placeholder','Have you read this book?');
    newRead.style.height = '30px';
    newForm.appendChild(newRead);

    const newDiv=document.createElement('div');
    newDiv.style.display='flex';


    
    //create submit btn
    const subbmitBtn=document.createElement('button');
    subbmitBtn.setAttribute('type','submit');
    subbmitBtn.setAttribute('name', 'submit');
    subbmitBtn.textContent = 'Submit';
    newDiv.appendChild(subbmitBtn);
    
    subbmitBtn.addEventListener("click", function(event) {
        // Ακυρώνει την προεπιλεγμένη συμπεριφορά της υποβολής της φόρμας
        event.preventDefault();

        this.form.style.display = 'none';
      });

    
    // style the submit button
    subbmitBtn.style.width = '120px'; 
    subbmitBtn.style.height = '50px';
    subbmitBtn.style.backgroundColor = '#3E51FC';
    subbmitBtn.style.color = 'white';
    subbmitBtn.style.fontWeight = 'bolder';
    subbmitBtn.style.fontSize = '1.3em';
    subbmitBtn.style.borderRadius='11px';

    // create back btn
    const backBtn=document.createElement('button');
    backBtn.setAttribute('type','button');
    backBtn.textContent='Back';

    //style back btn
    backBtn.style.width = '120px'; 
    backBtn.style.height = '50px';
    backBtn.style.backgroundColor = '#3E51FC';
    backBtn.style.color = 'white';
    backBtn.style.fontWeight = 'bolder';
    backBtn.style.fontSize = '1.3em';
    backBtn.style.borderRadius='11px';
    newDiv.appendChild(backBtn);

    newForm.appendChild(newDiv);
    


    newForm.style.border='solid #AEFFFB 2px';
    newForm.style.display='flex';
    newForm.style.flexDirection='column';
    newForm.style.width='250px';
    newForm.style.height='400px';
    newForm.style.marginTop='80px';
    newForm.style.marginLeft='40%';
    newForm.style.justifyContent = 'space-between';
    

    document.body.appendChild(newForm);
    

})

const display=document.getElementById('display-btn');
display.addEventListener('click',()=>{
    DisplayLibrary(myLibrary);
})
