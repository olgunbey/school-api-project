export class AddTeacherCommand {
    constructor(
        public readonly Name:string,
        public readonly Surname:string,
        public readonly Mail:string,
        public readonly Password:string,
    ){}
}