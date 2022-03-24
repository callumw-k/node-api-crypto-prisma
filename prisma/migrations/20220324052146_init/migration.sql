-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "messageTitle" TEXT NOT NULL,
    "messageBody" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);
