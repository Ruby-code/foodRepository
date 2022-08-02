import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FoodMenu {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    foodName: string;

    @Column()
    category: string;

    @Column()
    stock: number;

    @Column()
    price: number;
}
