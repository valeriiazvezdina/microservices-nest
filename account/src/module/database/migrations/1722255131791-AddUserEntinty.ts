import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserEntinty1722255131791 implements MigrationInterface {
  name = 'AddUserEntinty1722255131791';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "login" SET NOT NULL`,
    );
    await queryRunner.query(`COMMENT ON COLUMN "user"."login" IS 'User login'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`COMMENT ON COLUMN "user"."login" IS NULL`);
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "login" DROP NOT NULL`,
    );
  }
}
