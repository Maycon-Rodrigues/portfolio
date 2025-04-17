import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Endereço de e-mail inválido"),
  subject: z.string().min(2, "O assunto deve ter pelo menos 2 caracteres"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

export type formSchema = z.infer<typeof formSchema>;
