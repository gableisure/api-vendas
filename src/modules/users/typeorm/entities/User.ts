import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    update_at: Date;

}

export default User;