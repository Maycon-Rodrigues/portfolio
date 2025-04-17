import { FormEmailTemplate } from "@/components/form-email-template";
import { resend } from "@/lib/resend";
import { formSchema } from "@/lib/schema/formSchema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validation data
    const validationResult = formSchema.safeParse(body);

    if (!validationResult.success) {
      return Response.json(
        {
          error: "Dados inválidos",
          details: validationResult.error.format(),
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    const { data, error } = await resend.emails.send({
      from: "Contato <maycon.zng@gmail.com>",
      to: ["maycon.zng@gmail.com"],
      subject: "Nova Solicitação de Contato",
      react: await FormEmailTemplate({
        name,
        email,
        subject,
        message,
      }),
    });

    if (error) {
      console.error("Erro do Resend:", error);
      throw new Error(`Resend: ${error}`);
    }

    return Response.json(data);
  } catch (error) {
    console.error("Erro:", error);
    return Response.json(
      { error: "Erro ao enviar email", message: error },
      { status: 500 }
    );
  }
}
