import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodMenuModule } from './food-menu/food-menu.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodMenu } from './food-menu/entities/food-menu.entity';

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'foodmenu',
      entities: [FoodMenu],
      // autoLoadEntities: true,
      synchronize: true,
    }),
    FoodMenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
