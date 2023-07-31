import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const todoRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.todo.findMany();
  }),
});
