export class Lesson {
  constructor(
    public readonly id: string,
    public readonly topicId: string,
    public readonly title: string,
    public readonly description: string | null,
    public readonly pdfDriveUrl: string,
    public readonly lessonDate: string,
    public readonly createdBy: string,
    public readonly createdAt?: Date,
  ) {}
}
