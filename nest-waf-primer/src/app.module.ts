import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentRegistrationModule } from 'src/student-registration/student-registration.module';
import { StudentsModule } from 'src/student-registration/students/students.module';

@Module({
  imports: [TypeOrmModule.forRoot(),StudentRegistrationModule, StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
