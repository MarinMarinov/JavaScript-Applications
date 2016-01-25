/* 
Create a function that:
*   **Takes** a collection of books
    *   Each book has propeties `title` and `author`
        **  `author` is an object that has properties `firstName` and `lastName`
*   **finds** the most popular author (the author with biggest number of books)
*   **prints** the author to the console
	*	if there is more than one author print them all sorted in ascending order by fullname
		*   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

function solve(){
    return function (books) {

        var booksWithFullNameAuthor = _.map(books, function(book){
            book.author.fullName = book.author.firstName + ' ' + book.author.lastName;

            return book;
        });

        var groupedByAuthorName = _.groupBy(booksWithFullNameAuthor, function(book){
            return book.author.fullName;
        });

        var maximumBooks = _.max(groupedByAuthorName, 'length').length;

        var maximumBooksAuthors = _.chain(groupedByAuthorName).select(function(books){
            return books.length == maximumBooks;
        }).sortBy(function(books){
            return books[0].author.fullName;
        }).each(function(books){
            console.log(books[0].author.fullName);
        });
    };
}

module.exports = solve;

var _ = require('underscore');


var books = [
    { title: 'Alfa', author: { firstName: 'Ivan', lastName: 'Petrov'} },
    { title: 'Beta', author: { firstName: 'Ivan', lastName: 'Petrov'} },
    { title: 'Gama', author: { firstName: 'Dragan', lastName: 'Todorov'} },
    { title: 'Delta', author: { firstName: 'Dragan', lastName: 'Todorov'} },
    { title: 'Epsilon', author: { firstName: 'Dragan', lastName: 'Todorov'} },
    { title: 'Delta', author: { firstName: 'Ivan', lastName: 'Petrov'} }
];

var booksWithFullNameAuthor = _.map(books, function(book){
    book.author.fullName = book.author.firstName + ' ' + book.author.lastName;

    return book;
});

var groupedByAuthorName = _.groupBy(booksWithFullNameAuthor, function(book){
    return book.author.fullName;
});

var maximumBooks = _.max(groupedByAuthorName, 'length').length;

var maximumBooksAuthors = _.chain(groupedByAuthorName).select(function(books){
    return books.length == maximumBooks;
}).sortBy(function(books){
    return books[0].author.fullName;
}).each(function(books){
    console.log(books[0].author.fullName);
});

