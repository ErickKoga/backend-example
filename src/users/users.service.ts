import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async createUser() {
    return 'This route creates a user.';
  }
}
