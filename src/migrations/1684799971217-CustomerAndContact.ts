import { MigrationInterface, QueryRunner } from "typeorm";

export class CustomerAndContact1684799971217 implements MigrationInterface {
    name = 'CustomerAndContact1684799971217'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer" ("id" SERIAL NOT NULL, "fullName" character varying(120) NOT NULL, "email" character varying(45) NOT NULL, "phone" character varying(14) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_fdb2f3ad8115da4c7718109a6eb" UNIQUE ("email"), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" SERIAL NOT NULL, "fullName" character varying(120) NOT NULL, "email" character varying(45) NOT NULL, "phone" character varying(14) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "customerId" integer, CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email"), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_a54f4088bd2e596cc15c1f7aa3d" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_a54f4088bd2e596cc15c1f7aa3d"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "customer"`);
    }

}
