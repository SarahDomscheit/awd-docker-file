import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entities/user.entity';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'users.db',
      entities: [Users],
      synchronize: true,
      logging: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
