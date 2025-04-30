export class User {
    constructor(
        public readonly id: string,
        public readonly email: string,
        public password: string,
        public readonly role: 'admin' | 'user',
        public readonly createdAt: Date
    ) { }
}