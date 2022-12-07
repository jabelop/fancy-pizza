import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthServiceInterface } from './auth/interfaces/auth-service.interface';
import { UsersServiceInterface } from './users/interfaces/users-service.interface';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { MassesModule } from './masses/masses.module';
import { MassesController } from './masses/masses.controller';
import { MassesServiceInterface } from './masses/interfaces/masses-service.interface';
import { MassesService } from './masses/masses.service';
import { SizesModule } from './sizes/sizes.module';
import { SizesController } from './sizes/sizes.controller';
import { SizesServiceInterface } from './sizes/interfaces/sizes-service.interface';
import { SizesService } from './sizes/sizes.service';
import { ToppingsModule } from './toppings/toppings.module';
import { ToppingsController } from './toppings/toppings.controller';
import { ToppingsServiceInterface } from './toppings/interfaces/toppings-service.interface';
import { ToppingsService } from './toppings/toppings.service';
import { OrdersModule } from './orders/orders.module';
import { OrdersController } from './orders/orders.controller';
import { OrdersServiceInterface } from './orders/interfaces/orders-service.interface';
import { OrdersService } from './orders/orders.service';
import { OrderValidatorInterface } from './orders/interfaces/order-validator.interface';
import { OrderValidator } from './orders/validators/order.validator';

const usersServiceProvider = {provide: UsersServiceInterface, useClass: UsersService};
const authServiceProvider = {provide: AuthServiceInterface, useClass: AuthService};
const massesServiceProvider = {provide: MassesServiceInterface, useClass: MassesService};
const sizesServiceProvider = {provide: SizesServiceInterface, useClass: SizesService};
const toppingsServiceProvider = {provide: ToppingsServiceInterface, useClass: ToppingsService};
const ordersServiceProvider = {provide: OrdersServiceInterface, useClass: OrdersService};
const orderValidatorProvider = {provide: OrderValidatorInterface, useClass: OrderValidator};

@Module({
  imports: [UsersModule, AuthModule, JwtModule, MassesModule, SizesModule, ToppingsModule, OrdersModule],
  controllers: [AppController, AuthController, MassesController, SizesController, ToppingsController, OrdersController],
  providers: [
    AppService,
    usersServiceProvider,
    authServiceProvider,
    massesServiceProvider,
    sizesServiceProvider,
    toppingsServiceProvider,
    ordersServiceProvider,
    orderValidatorProvider
  ],
})
export class AppModule {}
