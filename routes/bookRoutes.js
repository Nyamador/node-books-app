const express = require('express');
const bookRouter = express.Router();

const books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
    },
    {
        title: 'Red Heifer',
        genre: 'Historical Fiction',
        author: 'Peggy Oppong',
        read: false
    },
    {
        title: 'The Time Machine',
        genre: 'Historical Fiction',
        author: 'H. G. Wells',
        read: false
    }
];

bookRouter.route('/')
    .get((req, res) => {
        res.render('bookListView',
            {
                nav : [{link:'/books', title:'Books'},
                    {link:'/authors', title:'Authors'}],
                title:'Books',
                books
            }
        );
    });

bookRouter.route('/:id')
    .get((req, res) => {
        const { id }  = req.params;
        res.render('bookDetailView',
            {
                nav : [{link:'/books', title:'Books'},
                    {link:'/authors', title:'Authors'}],
                title:'Books',
                book: books[id]
            });
    });


module.exports = bookRouter;