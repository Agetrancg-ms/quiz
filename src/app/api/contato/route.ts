import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { nome, email, mensagem } = await req.json();

  // Configure o transporte SMTP usando variáveis de ambiente
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // Porta 465 requer secure: true
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Quiz de Trânsito <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `Contato Quiz - ${nome}`,
      replyTo: email,
      text: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`,
      html: `<p><b>Nome:</b> ${nome}</p><p><b>E-mail:</b> ${email}</p><p><b>Mensagem:</b><br/>${mensagem.replace(/\n/g, '<br/>')}</p>`
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json({ ok: false, error: (error as Error).message }, { status: 500 });
  }
}
