# MyReads Project

MyReads is a bookshelf app build in React as part of  Udacity's Frontend Nanodegree course.

This Book Tracking App has two pages:

- Home

- Search

The Home page shows three categorie for books: Currently Reading, Want to Read, and Read. It users to move books between shelves. The information persist between page refreshes.

The Search page allows users to search for books and  to categorize a book as “Currently Reading,” “Want to Read”, or “Read”. The selections made on the search page show up on the main page.

## Getting Started

- git clone <https://github.com/DonatellaC/my_reads.git>
- cd starter
- install all project dependencies with `npm install`
- start the development server with `npm start`
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) is needed

## Backend Server

 The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Useful links

Starter code provided by [Udacity](https://github.com/udacity/reactnd-project-myreads-starter).
