import prisma from "../lib/prisma/prisma";

export const getMessage = async (req: any, res: any) => {
  const messages = await prisma.message.findMany({ take: -2 });
  res.json(messages);
};

export const postMessage = async (req: any, res: any) => {
  try {
    const messages = req.body;
    const result = await prisma.message.create({
      data: {
        messageTitle: messages.title,
        messageBody: messages.body,
      },
    });
    res.json(result);
  } catch (e) {
    console.log(e);
  }
};
