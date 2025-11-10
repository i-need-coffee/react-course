// -- DATA AND FUNCTIONS --
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// -- LESSON --

// Destructuring
const book = getBook(3);
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book; // same as this : const title = book.title;
console.log(title, author, genres);

// Destructuring with arrays
const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // same as this : const primaryGenre = genres[0]; const secondaryGenre = genres[1];
console.log(primaryGenre, secondaryGenre, otherGenres);

// Using the spread operator (...) to append a new element to an array
const newGenres = [...genres, 'epic fantasy']; // will add it to the end of the array but you can add it at the beginning by doing ['epic fantasy', ...genres]
console.log(newGenres);

// Add or overwrite a property in an object using the spread operator
const updatedBook = { ...book, moviePublicationDate: "2001-12-19", pages: 1210 };
console.log(updatedBook);

// Template literals
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${publicationDate.split('-')[0]}.`;
console.log(summary);

// Ternary operator
const pagesRange = pages > 1000 ? 'over a 1000' : 'less than 1000';
console.log(`The book has ${pagesRange}.`);

// Arrow functions
const getYear = str => str.split('-')[0];
console.log(getYear(publicationDate));

// Short-circuiting with AND operator
// falsy values : 0, null, '', false, undefined
console.log(true && 'Some string'); // returns the second value
console.log(false && 'Some string'); // returns the first value
console.log(hasMovieAdaptation && 'This book has a movie'); // here we can use it kinda like an if statement

// Short-circuiting with OR operator
console.log(true || 'Some string'); // returns the first value
console.log(false || 'Some string'); // returns the second value
const spanishTranslation = book.translations.spanish || 'NOT TRANSLATED'; // can be used to give a default value (be careful with falsy values, 0 is considered false too)
console.log(spanishTranslation);

// Nullish coalescing operator (??)
const count = book.reviews.librarything?.reviewsCount ?? 'no data'; // used to give a default value (best option for that)
console.log(count);

// Optional chaining
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0; // if the librarything is undefined here, it will cause an error, therefore we need to add the ? (optional chaining) to it
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));