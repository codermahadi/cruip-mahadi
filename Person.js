class Person {
    FirstName;
    LastName;

    constructor(FirstName, LastName, DateOfBirth) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.DateOfBirth = DateOfBirth;
    }

    Name() {
        return this.FirstName + " " + this.LastName;
    }
}
