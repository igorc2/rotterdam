-- CreateTable
CREATE TABLE `trip_offering` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `departureDate` DATETIME(3) NULL,
    `arrivalDate` DATETIME(3) NULL,
    `subtitle` VARCHAR(191) NULL,
    `price` DOUBLE NOT NULL,
    `pictureUrl` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trip_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trip_offering_trip_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trip_offering_id` INTEGER NOT NULL,
    `trip_category_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `trip_offering_trip_category` ADD CONSTRAINT `trip_offering_trip_category_trip_offering_id_fkey` FOREIGN KEY (`trip_offering_id`) REFERENCES `trip_offering`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trip_offering_trip_category` ADD CONSTRAINT `trip_offering_trip_category_trip_category_id_fkey` FOREIGN KEY (`trip_category_id`) REFERENCES `trip_category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
