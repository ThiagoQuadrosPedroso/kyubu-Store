-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_kyubu_store
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_kyubu_store
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_kyubu_store` DEFAULT CHARACTER SET utf8 ;
USE `db_kyubu_store` ;

-- -----------------------------------------------------
-- Table `db_kyubu_store`.`tb_tipo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_kyubu_store`.`tb_tipo` (
  `id_tipo` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_tipo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_kyubu_store`.`tb_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_kyubu_store`.`tb_usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `sobrenome` VARCHAR(45) NOT NULL,
  `login` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(100) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `dt_criacao` DATE NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  `dt_nascimento` DATE NOT NULL,
  `ativo` VARCHAR(45) NULL,
  `id_tipo` INT NOT NULL,
  PRIMARY KEY (`id_usuario`),
  INDEX `fk_tb_usuario_tb_tipo2_idx` (`id_tipo` ASC) ,
  CONSTRAINT `fk_tb_usuario_tb_tipo2`
    FOREIGN KEY (`id_tipo`)
    REFERENCES `db_kyubu_store`.`tb_tipo` (`id_tipo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_kyubu_store`.`tb_fabricante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_kyubu_store`.`tb_fabricante` (
  `id_fabricante` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_fabricante`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_kyubu_store`.`tb_produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_kyubu_store`.`tb_produto` (
  `id_produto` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `valor` DECIMAL(11,2) NOT NULL,
  `garantia` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  `id_fabricante` INT NOT NULL,
  `id_tipo` INT NOT NULL,
  PRIMARY KEY (`id_produto`),
  INDEX `fk_tb_produto_tb_fabricante1_idx` (`id_fabricante` ASC) ,
  INDEX `fk_tb_produto_tb_tipo1_idx` (`id_tipo` ASC) ,
  CONSTRAINT `fk_tb_produto_tb_fabricante1`
    FOREIGN KEY (`id_fabricante`)
    REFERENCES `db_kyubu_store`.`tb_fabricante` (`id_fabricante`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_produto_tb_tipo1`
    FOREIGN KEY (`id_tipo`)
    REFERENCES `db_kyubu_store`.`tb_tipo` (`id_tipo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_kyubu_store`.`tb_movimentacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_kyubu_store`.`tb_movimentacao` (
  `id_movimentacao` INT NOT NULL AUTO_INCREMENT,
  `dt_movimentacao` DATETIME NOT NULL,
  `id_tipo` INT NOT NULL,
  `id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_movimentacao`),
  INDEX `fk_tb_movimentacao_tb_tipo1_idx` (`id_tipo` ASC) ,
  INDEX `fk_tb_movimentacao_tb_usuario1_idx` (`id_usuario` ASC) ,
  CONSTRAINT `fk_tb_movimentacao_tb_tipo1`
    FOREIGN KEY (`id_tipo`)
    REFERENCES `db_kyubu_store`.`tb_tipo` (`id_tipo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_movimentacao_tb_usuario1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `db_kyubu_store`.`tb_usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_kyubu_store`.`fk_mov_produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_kyubu_store`.`fk_mov_produto` (
  `quantidade` INT NOT NULL,
  `id_produto` INT NOT NULL,
  `id_movimentacao` INT NOT NULL,
  INDEX `fk_fk_mov_produto_tb_produto1_idx` (`id_produto` ASC) ,
  INDEX `fk_fk_mov_produto_tb_movimentacao1_idx` (`id_movimentacao` ASC) ,
  CONSTRAINT `fk_fk_mov_produto_tb_produto1`
    FOREIGN KEY (`id_produto`)
    REFERENCES `db_kyubu_store`.`tb_produto` (`id_produto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_fk_mov_produto_tb_movimentacao1`
    FOREIGN KEY (`id_movimentacao`)
    REFERENCES `db_kyubu_store`.`tb_movimentacao` (`id_movimentacao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
