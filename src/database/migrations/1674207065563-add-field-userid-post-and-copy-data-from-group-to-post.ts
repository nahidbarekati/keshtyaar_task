import {MigrationInterface, QueryRunner} from "typeorm";

export class addFieldUseridPostAndCopyDataFromGroupToPost1674207065563 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Posts" ADD "user_id" integer`);
        await queryRunner.query(`UPDATE "Posts"
        SET 
          "user_id" = "Groups"."user_id"
          FROM "Groups"
            
          WHERE
            "Posts"."group_id" = "Groups"."id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
