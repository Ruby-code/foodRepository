import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { FoodMenuService } from './food-menu.service';
import { CreateFoodMenuDto } from './dto/create-food-menu.dto';
import { UpdateFoodMenuDto } from './dto/update-food-menu.dto';

@Controller('food-menu')
export class FoodMenuController {
  constructor(private readonly foodMenuService: FoodMenuService) {}

  @Post()
  async create(@Body() createFoodMenuDto: CreateFoodMenuDto) {
    const food = this.foodMenuService.create(createFoodMenuDto)
    return {
      statusCode: HttpStatus.CREATED,
      message: "Food Menu Created",
    };
  }

  @Get()
  async findAll() {
    const food_List = await this.foodMenuService.findAll();
    return {
      food_List,
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodMenuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoodMenuDto: UpdateFoodMenuDto) {
    return this.foodMenuService.update(+id, updateFoodMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodMenuService.remove(+id);
  }
}
