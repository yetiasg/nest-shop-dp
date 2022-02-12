import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { RoleGuard } from 'src/role/role.guard';
import { Role } from 'src/role/role.type';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { ProductEntity } from './product.entity';
import { ProductsService } from './products.service';

@Controller({ path: 'products', version: '1' })
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @Public()
  async getAllProducts(): Promise<ProductEntity[]> {
    return await this.productsService.getAllProducts();
  }

  @Get(':id')
  @Public()
  async getProductById(@Param('id') productId: string): Promise<ProductEntity> {
    return await this.productsService.getProductById(productId);
  }

  @Post()
  @UseGuards(RoleGuard([Role.ADMIN]))
  async createProduct(
    @Body() product: CreateProductDto,
  ): Promise<ProductEntity> {
    return await this.productsService.createProduct(product);
  }

  @Patch(':id')
  @UseGuards(RoleGuard([Role.ADMIN]))
  async updateProductById(
    @Param('id') productId: string,
    @Body() product: UpdateProductDto,
  ): Promise<ProductEntity> {
    return await this.productsService.updateProductById(productId, product);
  }

  @Delete(':id')
  @UseGuards(RoleGuard([Role.ADMIN]))
  async removeProductById(@Param('id') productId: string) {
    return await this.productsService.removeProductById(productId);
  }
}
