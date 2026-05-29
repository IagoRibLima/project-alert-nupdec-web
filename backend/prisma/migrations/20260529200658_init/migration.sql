-- CreateEnum
CREATE TYPE "StatusAlerta" AS ENUM ('PENDENTE', 'APROVADO', 'REJEITADO');

-- CreateTable
CREATE TABLE "Cargo" (
    "idCargo" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Cargo_pkey" PRIMARY KEY ("idCargo")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "idCategoria" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("idCategoria")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "idEndereco" SERIAL NOT NULL,
    "cep" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("idEndereco")
);

-- CreateTable
CREATE TABLE "Sensor" (
    "idSensor" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "dtImplementacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sensor_pkey" PRIMARY KEY ("idSensor")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "idUsuario" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dtCadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "senhaHash" TEXT NOT NULL,
    "idCargo" INTEGER NOT NULL,
    "idArea" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "usuarioEndereco" (
    "idUsuarioEndereco" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idEndereco" INTEGER NOT NULL,
    "numero" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "usuarioEndereco_pkey" PRIMARY KEY ("idUsuarioEndereco")
);

-- CreateTable
CREATE TABLE "areaRisco" (
    "idArea" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "dtArea" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idSensor" INTEGER,
    "idEndereco" INTEGER NOT NULL,

    CONSTRAINT "areaRisco_pkey" PRIMARY KEY ("idArea")
);

-- CreateTable
CREATE TABLE "Leituras" (
    "idLeitura" SERIAL NOT NULL,
    "dados" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idSensor" INTEGER NOT NULL,

    CONSTRAINT "Leituras_pkey" PRIMARY KEY ("idLeitura")
);

-- CreateTable
CREATE TABLE "Alerta" (
    "idAlerta" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "dtAlerta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imagem" TEXT,
    "idCategoria" INTEGER NOT NULL,
    "idArea" INTEGER NOT NULL,
    "status" "StatusAlerta" NOT NULL DEFAULT 'PENDENTE',

    CONSTRAINT "Alerta_pkey" PRIMARY KEY ("idAlerta")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idCargo_fkey" FOREIGN KEY ("idCargo") REFERENCES "Cargo"("idCargo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idArea_fkey" FOREIGN KEY ("idArea") REFERENCES "areaRisco"("idArea") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarioEndereco" ADD CONSTRAINT "usuarioEndereco_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarioEndereco" ADD CONSTRAINT "usuarioEndereco_idEndereco_fkey" FOREIGN KEY ("idEndereco") REFERENCES "Endereco"("idEndereco") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "areaRisco" ADD CONSTRAINT "areaRisco_idSensor_fkey" FOREIGN KEY ("idSensor") REFERENCES "Sensor"("idSensor") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "areaRisco" ADD CONSTRAINT "areaRisco_idEndereco_fkey" FOREIGN KEY ("idEndereco") REFERENCES "Endereco"("idEndereco") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leituras" ADD CONSTRAINT "Leituras_idSensor_fkey" FOREIGN KEY ("idSensor") REFERENCES "Sensor"("idSensor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alerta" ADD CONSTRAINT "Alerta_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria"("idCategoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alerta" ADD CONSTRAINT "Alerta_idArea_fkey" FOREIGN KEY ("idArea") REFERENCES "areaRisco"("idArea") ON DELETE RESTRICT ON UPDATE CASCADE;
