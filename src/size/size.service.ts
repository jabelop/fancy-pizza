import { Injectable } from '@nestjs/common';
import { SizeServiceInterface } from './interfaces/size-service.interface';
import { Size } from './interfaces/size.interface';

@Injectable()
export class SizeService implements SizeServiceInterface{
    private readonly sizes: Size[] = [
        {
            id: "1",
            size: 'small',
        },
        {
            id: "2",
            size: 'medium',
        },
        {
            id: "3",
            size: 'large',
        },
    ];

    async findOne(id: string): Promise<Size | undefined> {
        return this.sizes.find(size => size.id === id);
    }

    async findAll(): Promise<Size[]> {
        return this.sizes;
    }
}
