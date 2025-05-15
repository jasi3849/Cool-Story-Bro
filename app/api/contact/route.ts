// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

type ContactFormData = {
  fullName: string
  email: string
  phone?: string
  company?: string
  serviceNeeded: string
  projectDetails: string
  referralSource?: string
}

export async function POST(req: NextRequest) {
  const body: ContactFormData = await req.json()

  const { fullName, email, phone, company, serviceNeeded, projectDetails, referralSource } = body

  if (!email || !fullName || !serviceNeeded || !projectDetails) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Service Needed:</strong> ${serviceNeeded}</p>
        <p><strong>Details:</strong> ${projectDetails}</p>
        <p><strong>Referral Source:</strong> ${referralSource || "N/A"}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })
  } catch (err) {
    console.error("Email error:", err)
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 })
  }
}
