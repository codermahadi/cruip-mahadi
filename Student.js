class Student extends Person {
    StudiedBooks = [];
    TaughtBy = [];

    Study(Book, Teacher) {
        this.StudiedBooks.push(Book);
        this.TaughtBy.push(Teacher);
    }

    HasStudied(topicName) {
        let res = this.StudiedBooks.find(book => book.Topics === topicName);
        return Object.keys(res).length > 0;
    }
}
