import {MigrationInterface, QueryRunner} from "typeorm";

export class createForeignKeyPostAndUser1674208350872 implements MigrationInterface {
    name = 'createForeignKeyPostAndUser1674208350872'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Posts" ALTER COLUMN "user_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Posts" ADD CONSTRAINT "FK_d0e17ba5d038b673303acd92405" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Posts" DROP CONSTRAINT "FK_d0e17ba5d038b673303acd92405"`);
        await queryRunner.query(`ALTER TABLE "Posts" ALTER COLUMN "user_id" DROP NOT NULL`);
    }

}
