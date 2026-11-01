export class YouthScheduleEvent {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string | null,
    public readonly eventDate: Date,
    public readonly location: string | null,
    public readonly createdAt?: Date,
  ) {}
}
