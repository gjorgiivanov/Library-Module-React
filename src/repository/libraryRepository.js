import axios from '../custom-axios/axios';

const LibraryService = {
    fetchBooks: () => {
        return axios.get("/books");
    },
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchCountries: () => {
        return axios.get("/countries");
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    rentBook: (id) => {
        return axios.put(`/books/rent/${id}`);
    },
    saveBook: (name, category, authorId, availableCopies) => {
        return axios.post("/books/add", {
            "name": name,
            "category": category,
            "authorId": authorId,
            "availableCopies": availableCopies
        });
    },
    editBook: (id, name, category, authorId, availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name": name,
            "authorId": authorId,
            "category": category,
            "availableCopies": availableCopies
        });
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    }
}

export default LibraryService;