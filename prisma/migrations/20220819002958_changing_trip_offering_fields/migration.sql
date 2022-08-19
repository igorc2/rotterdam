/*
  Warnings:

  - You are about to drop the column `arrivalDate` on the `trip_offering` table. All the data in the column will be lost.
  - You are about to drop the column `departureDate` on the `trip_offering` table. All the data in the column will be lost.
  - You are about to drop the column `pictureUrl` on the `trip_offering` table. All the data in the column will be lost.
  - Added the required column `trip_level_id` to the `trip_offering` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `trip_offering` DROP COLUMN `arrivalDate`,
    DROP COLUMN `departureDate`,
    DROP COLUMN `pictureUrl`,
    ADD COLUMN `arrival_date` DATETIME(3) NULL,
    ADD COLUMN `departure_date` DATETIME(3) NULL,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `picture_url` VARCHAR(191) NULL,
    ADD COLUMN `trip_level_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `trip_level` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `trip_offering` ADD CONSTRAINT `trip_offering_trip_level_id_fkey` FOREIGN KEY (`trip_level_id`) REFERENCES `trip_level`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
