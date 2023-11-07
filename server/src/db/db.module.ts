import { Module } from '@nestjs/common';
import { DbService } from './db.service';

@Module({
  providers: [DbService],
  exports: [DbService], // чтобы могли использовать в других модулях
})
export class DbModule {}
