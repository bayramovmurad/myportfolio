// re_RDugdJFC_J5F6SLvMBdWN5KVwa7NwwB1B
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const dataForm = await req.json();
    try {
      const data = await resend.emails.send({
        from: "Work <onboarding@resend.dev>",
        to: ["mbayramov340@gmail.com"],
        subject: "Murad Bayramov",
        react: EmailTemplate({
          firstName: dataForm.username,
          message: dataForm.message,
          email: dataForm.email,
        }),
        text: "Murad Bayramov",
      });
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
  } catch (error) {
    return Response.json({ error });
  }
}
