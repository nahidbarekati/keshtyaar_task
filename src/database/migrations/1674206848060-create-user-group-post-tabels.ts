import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserGroupPostTabels1674206848060 implements MigrationInterface {
    name = 'createUserGroupPostTabels1674206848060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Posts" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "desc" character varying NOT NULL, "group_id" integer, CONSTRAINT "PK_0f050d6d1112b2d07545b43f945" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Groups" ("id" SERIAL NOT NULL, "group_name" character varying NOT NULL, "user_id" integer, CONSTRAINT "PK_be8543c3ec161e109d124cf9498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Posts" ADD CONSTRAINT "FK_01adf10f32dd55d088ca1cffefa" FOREIGN KEY ("group_id") REFERENCES "Groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Groups" ADD CONSTRAINT "FK_cb5b2af873dd015294051fd3954" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Groups" DROP CONSTRAINT "FK_cb5b2af873dd015294051fd3954"`);
        await queryRunner.query(`ALTER TABLE "Posts" DROP CONSTRAINT "FK_01adf10f32dd55d088ca1cffefa"`);
        await queryRunner.query(`DROP TABLE "Groups"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "Posts"`);
    }

}
