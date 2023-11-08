import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { AddBlockItemDto, BlockListQueryDto } from './dto';

@Injectable()
export class BlockListService {
  constructor(private db: DbService) {}

  create(userId: number) {
    return this.db.blockList.create({
      data: { ownerId: userId },
    });
  }

  getByUser(userId: number, query: BlockListQueryDto) {
    return this.db.blockList.findUniqueOrThrow({
      // findFirstOrThrow - возвращаем ошибку если не находится
      where: { ownerId: userId },
      include: {
        // чтобы подгружать связи
        items: {
          where: { data: { contains: query.q, mode: 'insensitive' } },
          // фильтруем по полю data которая содержит query.q, insensitive чтобы не учитывать регистр data и query.q
          orderBy: { createdAt: 'desc' }, // добавили сортировку по createdAt
        },
      },
    });
  }

  async addItem(userId: number, data: AddBlockItemDto) {
    const blockList = await this.db.blockList.findUniqueOrThrow({
      where: { ownerId: userId },
    });

    return this.db.blockItem.create({
      data: { blockListId: blockList.id, ...data },
    });
  }

  async removeItem(userId: number, itemId: number) {
    const blockList = await this.db.blockList.findUniqueOrThrow({
      where: { ownerId: userId },
    });

    return this.db.blockItem.delete({
      where: {
        blockListId: blockList.id,
        id: itemId,
      },
    });
  }
}
