import { ProductDto } from './ProductDto';

export class MenuDto {
    Id: number;
    Name: string;
    ContentHeader: Date;
    Products: ProductDto[] = [];
}