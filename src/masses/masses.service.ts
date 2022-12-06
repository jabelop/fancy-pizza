import { Injectable } from '@nestjs/common';
import { MassesServiceInterface } from './interfaces/masses-service.interface';
import { Mass } from './interfaces/mass.interface';

@Injectable()
export class MassesService implements MassesServiceInterface {
    private readonly masses: Mass[] = [
        {
            id: "1",
            type: 'standart',
            price: 1
        },
        {
            id: "2",
            type: 'thing',
            price: 2
        },
        {
            id: "3",
            type: 'cream cheese roller',
            price: 5
        }
    ];

    async findOne(id: string): Promise<Mass | undefined> {
        return this.masses.find(mass => mass.id === id);
    }

    async findAll(): Promise<Mass[]> {
        return this.masses;
    }
}
