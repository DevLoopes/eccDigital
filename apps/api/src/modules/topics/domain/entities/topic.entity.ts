export class Topic {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string | null,
    public readonly iconName: string | null,
    public readonly createdAt?: Date,
  ) {}
}
