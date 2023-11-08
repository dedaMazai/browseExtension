import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AddBlockItemDto, BlockItemDto, BlockListDto } from './dto';

@Controller('block-list')
export class BlockListController {
  @Get()
  @ApiOkResponse({
    type: BlockListDto,
  })
  getList() {}

  @Post('item')
  @ApiCreatedResponse({
    type: BlockItemDto,
  })
  addBlockItem(@Body() body: AddBlockItemDto) {}

  @Delete('item/:id')
  @ApiOkResponse()
  removeBlockItem(@Param(ParseIntPipe) id: number) {} // так как нам приходит значение в виде строки необходимо его преобразовать в число
}
