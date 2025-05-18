const data = {
    authors: [
        {
            id: '1',
            name: 'Masudha Meher',
            bookIds: ["101", "102"],
        }, {
            id: "2",
            name: "Apple Sharma",
            bookIds: ["103", "104"]
        }
    ],
    books: [{
        id: "101",
        title: 'Book 1',
        publishedYear: 2000,
        authorId: "1"
    },
    {
        id: "102",
        title: 'Book 2',
        publishedYear: 2001,
        authorId: "2"
    },
    {
        id: "103",
        title: 'Book 3',
        publishedYear: 2010,
        authorId: "2"
    },
    {
        id: "104",
        title: 'Book 4',
        publishedYear: 2000,
        authorId: "1"
    }
]
}

export const resolvers = {
    Book: {
        author: (parent, args, context, info) => {
            return data.authors.find(authorDetail => authorDetail.id === parent.authorId)
        },
    },

    Author: {
        books: (parent) => {
            return data.books.find(book => parent.bookIds.includes(book.id))
        }
    }
    ,
   
    Query: {
        authors: (parent, args, context, info) => {
        return data.authors
        },
        books: (parent, args, context, info) => {
            return data.books
        }
    },
    Mutation : {
            addBook: (parent, args) => {
                const newBooks = {...args, id: data.books.length + 1}
                data.books.push(newBooks);
                return newBooks;
            }
        }
}