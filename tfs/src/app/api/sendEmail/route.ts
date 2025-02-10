import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json(); // Extract form data

    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

    const response = await resend.emails.send({
      from: "your-email@yourdomain.com", // Use a verified sender email
      to: "genmbesi@gmail.com",   
      subject: "New Contact Form Message",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true, data: response }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
