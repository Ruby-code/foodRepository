import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFoodMenuDto {
    @IsString()
    @IsNotEmpty()
    foodName: string;

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsNumber()
    @IsNotEmpty()
    stock: number;

    @IsNumber()
    @IsNotEmpty()
    price: number;
}
