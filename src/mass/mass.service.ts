import { Injectable } from '@nestjs/common';
import { MassServiceInterface } from './interfaces/mass-service.interface';
import { Mass } from './interfaces/mass.interface';

@Injectable()
export class MassService implements MassServiceInterface {
    private readonly masses: Mass[] = [
        {
            id: "1",
            type: 'standart',
        },
        {
            id: "2",
            type: 'thing',
        },
        {
            id: "3",
            type: 'cream cheese roller',
        },
    ];

    async findOne(id: string): Promise<Mass | undefined> {
        return this.masses.find(mass => mass.id === id);
    }

    async findAll(): Promise<Mass[]> {
        return this.masses;
    }
}
