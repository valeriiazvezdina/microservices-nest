import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'User id',
    name: 'user_id',
  })
  readonly userId: string;

  @Column('varchar', {
    comment: 'User phone',
    nullable: false,
    length: 20,
  })
  phone: string;

  @Column('varchar', {
    comment: 'User first name',
  })
  firstName: string;

  @Column('varchar', {
    comment: 'User last name',
  })
  lastName: string;

  @Column('varchar', {
    comment: 'User login',
  })
  login: string;

  /*

  @Column('varchar', {
    comment: 'User middle name',
  })
  middleName: string;
  */

  @Column('varchar', {
    comment: 'Password hash',
  })
  passwordHash: string;

  @Column('varchar', {
    comment: 'Password salt',
  })
  passwordSalt: string;
}
