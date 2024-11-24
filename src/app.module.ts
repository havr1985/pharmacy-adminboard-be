import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { validate } from './shared/utils/validations/env.validation';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { CustomersModule } from './modules/customers/customers.module';
import { SuppliersModule } from './modules/suppliers/suppliers.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { OrderItemsModule } from './modules/order-items/order-items.module';
import { DeliveriesModule } from './modules/deliveries/deliveries.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => config],
      validate,
    }),
    DatabaseModule,
    UsersModule,
    CustomersModule,
    SuppliersModule,
    ProductsModule,
    OrdersModule,
    OrderItemsModule,
    DeliveriesModule,
  ],
})
export class AppModule {}
