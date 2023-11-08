import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';
import { IsIn } from 'class-validator';

// DTO (Data Transfer Object)
export class BlockItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  blockList: number;

  @ApiProperty({
    enum: [$Enums.BlockItemType.KeyWord, $Enums.BlockItemType.Website],
  })
  type: $Enums.BlockItemType;

  @ApiProperty()
  data: string;

  @ApiProperty()
  createdAt: Date;
}

export class BlockListDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  ownerId: number;

  @ApiProperty({
    type: [BlockItemDto],
  })
  items: BlockListDto[];
}

export class AddBlockItemDto {
  @ApiProperty({
    enum: [$Enums.BlockItemType.KeyWord, $Enums.BlockItemType.Website],
  })
  @IsIn([$Enums.BlockItemType.KeyWord, $Enums.BlockItemType.Website])
  type: $Enums.BlockItemType;

  @ApiProperty()
  data: string;
}
