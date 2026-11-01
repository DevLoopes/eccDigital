export class Announcement {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly content: string,
    public readonly active: boolean,
    public readonly createdAt?: Date,
  ) {}
}
