export interface CategorieProps {
    id?: string;
    userId: string;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export class Categorie {
    public readonly id?: string;
    public userId: string;
    public name: string;
    public readonly createdAt: Date;
    public updatedAt: Date;

    constructor(props: CategorieProps) {
        this.id = props.id;
        this.userId = props.userId;
        this.name = props.name;
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = props.updatedAt || new Date();
    }
}
