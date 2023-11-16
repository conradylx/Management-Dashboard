import { Note } from "./note";

export class User {
  id: number;
  birthDate: Date;
  name: string;
  avatar: string;
  bio: string;

  notes: Note[] = [];

  constructor(id: number, birthDate: Date, name: string, avatar: string, bio: string) {
    this.id = id;
    this.birthDate = birthDate;
    this.name = name;
    this.avatar = avatar;
    this.bio = bio;
  }
}
