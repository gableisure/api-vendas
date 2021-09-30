import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';

interface IRequest {
    id: string;
    name: string;
}

class UpdateUserService {

    /* public async execute({id, name}: IRequest): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);

        const user = usersRepository.findById(id)

        if(!user) throw new AppError("User not found.")

        user.name = name;

        await usersRepository.save(user);

        return user;

    } */

}