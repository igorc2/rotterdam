/*
  Warnings:

  - You are about to drop the column `arrival_date` on the `trip_offering` table. All the data in the column will be lost.
  - You are about to drop the column `departure_date` on the `trip_offering` table. All the data in the column will be lost.
  - You are about to drop the column `picture_url` on the `trip_offering` table. All the data in the column will be lost.
  - You are about to drop the column `trip_level_id` on the `trip_offering` table. All the data in the column will be lost.
  - You are about to drop the column `trip_category_id` on the `trip_offering_trip_category` table. All the data in the column will be lost.
  - You are about to drop the column `trip_offering_id` on the `trip_offering_trip_category` table. All the data in the column will be lost.
  - Added the required column `tripLevelId` to the `trip_offering` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tripCategoryId` to the `trip_offering_trip_category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tripOfferingId` to the `trip_offering_trip_category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `trip_offering` DROP FOREIGN KEY `trip_offering_trip_level_id_fkey`;

-- DropForeignKey
ALTER TABLE `trip_offering_trip_category` DROP FOREIGN KEY `trip_offering_trip_category_trip_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `trip_offering_trip_category` DROP FOREIGN KEY `trip_offering_trip_category_trip_offering_id_fkey`;

-- AlterTable
ALTER TABLE `trip_offering` DROP COLUMN `arrival_date`,
    DROP COLUMN `departure_date`,
    DROP COLUMN `picture_url`,
    DROP COLUMN `trip_level_id`,
    ADD COLUMN `arrivalDate` DATETIME(3) NULL,
    ADD COLUMN `departureDate` DATETIME(3) NULL,
    ADD COLUMN `pictureUrl` VARCHAR(191) NULL,
    ADD COLUMN `tripLevelId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `trip_offering_trip_category` DROP COLUMN `trip_category_id`,
    DROP COLUMN `trip_offering_id`,
    ADD COLUMN `tripCategoryId` INTEGER NOT NULL,
    ADD COLUMN `tripOfferingId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `trip_offering` ADD CONSTRAINT `trip_offering_tripLevelId_fkey` FOREIGN KEY (`tripLevelId`) REFERENCES `trip_level`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trip_offering_trip_category` ADD CONSTRAINT `trip_offering_trip_category_tripOfferingId_fkey` FOREIGN KEY (`tripOfferingId`) REFERENCES `trip_offering`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trip_offering_trip_category` ADD CONSTRAINT `trip_offering_trip_category_tripCategoryId_fkey` FOREIGN KEY (`tripCategoryId`) REFERENCES `trip_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
