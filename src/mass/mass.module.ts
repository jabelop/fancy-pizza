import { Module } from '@nestjs/common';
import { MassController } from './mass.controller';
import { MassService } from './mass.service';
import { MassServiceInterface } from './interfaces/mass-service.interface';

const massServiceProvider = {provide: MassServiceInterface, useClass: MassService};

@Module({
    imports: [],
    providers: [massServiceProvider],
    controllers: [MassController],
})
export class MassModule { }
