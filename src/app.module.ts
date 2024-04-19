import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
const settings = require('../ormconfig.json')

@Module({
  imports: [
    TypeOrmModule.forRoot(settings),//This will automatically use ormconfig.json
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],   
})
export class AppModule {}
