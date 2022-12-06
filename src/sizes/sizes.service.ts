import { Injectable } from '@nestjs/common';
import { SizesServiceInterface } from './interfaces/sizes-service.interface';
import { Size } from './interfaces/size.interface';

@Injectable()
export class SizesService implements SizesServiceInterface{
    private readonly sizes: Size[] = [
        {
            id: "1",
            size: 'small',
            price: 3,
        },
        {
            id: "2",
            size: 'medium',
            price: 7,
        },
        {
            id: "3",
            size: 'large',
            price: 10
        },
    ];

    async findOne(id: string): Promise<Size | undefined> {
        return this.sizes.find(size => size.id === id);
    }

    async findAll(): Promise<Size[]> {
        return this.sizes;
    }
}
