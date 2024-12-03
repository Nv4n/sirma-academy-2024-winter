//@ts-check

class LibraryItem {
    /**
     *
     * @param {string} title
     * @param {string} author
     */
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    /**
     *
     * @returns {string}
     */
    info() {
        return `${this.title}, ${this.author}`;
    }
}

class Book extends LibraryItem {
    /**
     *
     * @param {string} title
     * @param {string} author
     */
    constructor(title, author) {
        super(title, author);
    }
    info() {
        return `Book: ${super.info()}`;
    }
}

class Magazine extends LibraryItem {
    /**
     *
     * @param {string} title
     * @param {string} author
     */
    constructor(title, author) {
        super(title, author);
    }
    info() {
        return `Magazine: ${super.info()}`;
    }
}
