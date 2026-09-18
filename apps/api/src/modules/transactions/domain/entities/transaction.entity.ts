export interface TransactionProps {
  id?: string;
  userId: string;
  categoryId: string;
  amount: number;
  transactionDate: Date;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Transaction {
  public readonly id?: string;
  public userId: string;
  public categoryId: string;
  public amount: number;
  public transactionDate: Date;
  public description?: string;
  public readonly createdAt: Date;
  public updatedAt: Date;

  constructor(props: TransactionProps) {
    this.id = props.id;
    this.userId = props.userId;
    this.categoryId = props.categoryId;
    this.amount = props.amount;
    this.transactionDate = props.transactionDate;
    this.description = props.description;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = props.updatedAt || new Date();
  }
}