import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFoodMenuDto } from './dto/create-food-menu.dto';
import { UpdateFoodMenuDto } from './dto/update-food-menu.dto';
import { FoodMenu } from './entities/food-menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FoodMenuService {
  constructor(
    @InjectRepository(FoodMenu)
    private foodRepository: Repository<FoodMenu>, 
  ){}

  async create(createFoodMenuDto: CreateFoodMenuDto) {
    const foodmenu =  this.foodRepository.create(createFoodMenuDto);
    await this.foodRepository.save(createFoodMenuDto);
    return createFoodMenuDto;
  }

  async findAll() {
   return await this.foodRepository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} foodMenu`;
  }

  async update(id: number, updateFoodMenuDto: UpdateFoodMenuDto) {
    return `This action updates a #${id} foodMenu`;
  }

  async remove(id: number) {
    return `This action removes a #${id} foodMenu`;
  }
}
