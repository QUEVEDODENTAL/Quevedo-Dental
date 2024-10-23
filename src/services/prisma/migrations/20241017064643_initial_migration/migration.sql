-- CreateTable
CREATE TABLE `usuarios` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Email` VARCHAR(100) NOT NULL,
    `Password` VARCHAR(100) NOT NULL,
    `IsAdministrator` BOOLEAN NOT NULL DEFAULT false,
    `IsDoctor` BOOLEAN NOT NULL DEFAULT false,
    `IsEmployee` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `usuarios_Email_key`(`Email`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
