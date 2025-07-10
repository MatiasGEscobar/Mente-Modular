import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1752118184299 implements MigrationInterface {
    name = 'InitSchema1752118184299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "level" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_d3f1a7a6f09f1c3144bacdc6bcc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subject" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "levelId" integer, CONSTRAINT "PK_12eee115462e38d62e5455fc054" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lesson" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" text NOT NULL, "topicId" integer, CONSTRAINT "PK_0ef25918f0237e68696dee455bd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ai_response" ("id" SERIAL NOT NULL, "answer" text NOT NULL, "feedback" text, "score_ai" integer, "userId" integer, "exerciseId" integer, CONSTRAINT "PK_2ef4ecc084bf46c0b76fb3dd8ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exercise" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "prompt" text NOT NULL, "answer" text NOT NULL, "topicId" integer, CONSTRAINT "PK_a0f107e3a2ef2742c1e91d97c14" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exam_exercise" ("examId" integer NOT NULL, "exerciseId" integer NOT NULL, CONSTRAINT "PK_e5f90ae644ec140f131fe4f73bf" PRIMARY KEY ("examId", "exerciseId"))`);
        await queryRunner.query(`CREATE TABLE "exam" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "topicId" integer, CONSTRAINT "PK_56071ab3a94aeac01f1b5ab74aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "topic" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" text NOT NULL, "subjectId" integer, CONSTRAINT "PK_33aa4ecb4e4f20aa0157ea7ef61" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "progress" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, "score" integer NOT NULL, "completed_at" TIMESTAMP, "userId" integer, "topicId" integer, CONSTRAINT "PK_79abdfd87a688f9de756a162b6f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "role" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "subject" ADD CONSTRAINT "FK_f2e9a2d6d8cb89adc194a1a6cc4" FOREIGN KEY ("levelId") REFERENCES "level"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_d0249d483a9b7116cd9c23cd3be" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ai_response" ADD CONSTRAINT "FK_f2d64d833fa176d48d39c5a97bb" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ai_response" ADD CONSTRAINT "FK_42012c42eca8b29a587170edf93" FOREIGN KEY ("exerciseId") REFERENCES "exercise"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exercise" ADD CONSTRAINT "FK_a197d0b212abe7e450115e8973f" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exam_exercise" ADD CONSTRAINT "FK_507f5122257add22ee0c6c4a96f" FOREIGN KEY ("examId") REFERENCES "exam"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exam_exercise" ADD CONSTRAINT "FK_a83f61712d52cd8786b214c8918" FOREIGN KEY ("exerciseId") REFERENCES "exercise"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exam" ADD CONSTRAINT "FK_6585cc9d4fe84d764dc25f9514e" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "topic" ADD CONSTRAINT "FK_f268a9464412d7ef9b748f99b0c" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "progress" ADD CONSTRAINT "FK_0366c96237f98ea1c8ba6e1ec35" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "progress" ADD CONSTRAINT "FK_e8d65c620d43a5653fb751a3c6e" FOREIGN KEY ("topicId") REFERENCES "topic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "progress" DROP CONSTRAINT "FK_e8d65c620d43a5653fb751a3c6e"`);
        await queryRunner.query(`ALTER TABLE "progress" DROP CONSTRAINT "FK_0366c96237f98ea1c8ba6e1ec35"`);
        await queryRunner.query(`ALTER TABLE "topic" DROP CONSTRAINT "FK_f268a9464412d7ef9b748f99b0c"`);
        await queryRunner.query(`ALTER TABLE "exam" DROP CONSTRAINT "FK_6585cc9d4fe84d764dc25f9514e"`);
        await queryRunner.query(`ALTER TABLE "exam_exercise" DROP CONSTRAINT "FK_a83f61712d52cd8786b214c8918"`);
        await queryRunner.query(`ALTER TABLE "exam_exercise" DROP CONSTRAINT "FK_507f5122257add22ee0c6c4a96f"`);
        await queryRunner.query(`ALTER TABLE "exercise" DROP CONSTRAINT "FK_a197d0b212abe7e450115e8973f"`);
        await queryRunner.query(`ALTER TABLE "ai_response" DROP CONSTRAINT "FK_42012c42eca8b29a587170edf93"`);
        await queryRunner.query(`ALTER TABLE "ai_response" DROP CONSTRAINT "FK_f2d64d833fa176d48d39c5a97bb"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_d0249d483a9b7116cd9c23cd3be"`);
        await queryRunner.query(`ALTER TABLE "subject" DROP CONSTRAINT "FK_f2e9a2d6d8cb89adc194a1a6cc4"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "progress"`);
        await queryRunner.query(`DROP TABLE "topic"`);
        await queryRunner.query(`DROP TABLE "exam"`);
        await queryRunner.query(`DROP TABLE "exam_exercise"`);
        await queryRunner.query(`DROP TABLE "exercise"`);
        await queryRunner.query(`DROP TABLE "ai_response"`);
        await queryRunner.query(`DROP TABLE "lesson"`);
        await queryRunner.query(`DROP TABLE "subject"`);
        await queryRunner.query(`DROP TABLE "level"`);
    }

}
