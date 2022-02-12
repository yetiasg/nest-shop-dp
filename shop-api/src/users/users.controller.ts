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
import { RoleGuard } from 'src/role/role.guard';
import { Role } from 'src/role/role.type';
import { UpdateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller({ path: 'users', version: '1' })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(RoleGuard([Role.ADMIN]))
  async getAllUsers() {
    return await this.usersService.getAllUsers();
  }

  @Get(':id')
  @UseGuards(RoleGuard([Role.ADMIN, Role.USER]))
  async getUserById(@Param('id') id: string) {
    return await this.usersService.getUserById(id);
  }

  @Patch(':id')
  @UseGuards(RoleGuard([Role.ADMIN, Role.USER]))
  async updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return await this.usersService.updateUser(id, user);
  }

  @Post('invite')
  @UseGuards(RoleGuard([Role.ADMIN]))
  async inviteUser(@Body('email') email: string) {
    return await this.usersService.inviteUserByEmail(email);
  }

  @Delete(':id')
  @UseGuards(RoleGuard([Role.ADMIN]))
  async removeUserById(@Param('id') id: string) {
    return await this.usersService.removeUserById(id);
  }
}
