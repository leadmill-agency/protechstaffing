'use server'

import { Resend } from 'resend'

// INTERIM (Jul 1 2026): Resend's sandbox sender (onboarding@resend.dev) can only
// deliver to the Resend account owner — NOT to an external address like Mimi's.
// (Being a Resend "team Admin" does not make an address a valid recipient.) So
// leads are routed to rameel@leadmill.co and forwarded to Mimi until we move off
// Resend to a Wix-DNS-compatible sender. Override without a redeploy via the
// LEAD_NOTIFY_EMAIL env var.
const TO_EMAIL = process.env.LEAD_NOTIFY_EMAIL || 'rameel@leadmill.co'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Pro-Tech Website <onboarding@resend.dev>'

function escapeHtml(s) {
  return String(s ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

const INQUIRY_TYPES = ['general', 'partnership', 'press', 'other']

export async function submitContactInquiry(_prevState, formData) {
  // Honeypot
  if (formData.get('website')) {
    return { ok: true, message: 'Thanks — we\'ll be in touch within one business day.' }
  }

  const name = String(formData.get('name') ?? '').trim()
  const company = String(formData.get('company') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const inquiryType = String(formData.get('inquiryType') ?? 'general').trim()
  const message = String(formData.get('message') ?? '').trim()

  const errors = {}
  if (!name) errors.name = 'Required'
  if (!email) errors.email = 'Required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Invalid email'
  if (!message) errors.message = 'Required'
  if (!INQUIRY_TYPES.includes(inquiryType)) errors.inquiryType = 'Invalid'

  if (Object.keys(errors).length) {
    return { ok: false, errors, message: 'Please complete all required fields.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('[contact] RESEND_API_KEY missing — skipping send', { name, email, inquiryType })
    return {
      ok: true,
      message: 'Thanks — we\'ll be in touch within one business day.',
      _devNote: 'Email not actually sent (RESEND_API_KEY missing).',
    }
  }

  try {
    const resend = new Resend(apiKey)
    const subjectByType = {
      general: `General inquiry from ${name}`,
      partnership: `Partnership inquiry from ${name}`,
      press: `Press/Media inquiry from ${name}`,
      other: `Inquiry from ${name}`,
    }
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
        <h2 style="color: #123A67; border-bottom: 2px solid #123A67; padding-bottom: 8px;">New Contact Inquiry</h2>
        <p style="color: #666; font-size: 13px;">Submitted via the Pro-Tech Staffing website (Contact page).</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top; width: 130px;"><strong>Name</strong></td><td style="padding: 8px 0; font-size: 14px;">${escapeHtml(name)}</td></tr>
          ${company ? `<tr><td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;"><strong>Company</strong></td><td style="padding: 8px 0; font-size: 14px;">${escapeHtml(company)}</td></tr>` : ''}
          <tr><td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;"><strong>Email</strong></td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${escapeHtml(email)}" style="color: #123A67;">${escapeHtml(email)}</a></td></tr>
          ${phone ? `<tr><td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;"><strong>Phone</strong></td><td style="padding: 8px 0; font-size: 14px;">${escapeHtml(phone)}</td></tr>` : ''}
          <tr><td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;"><strong>Inquiry type</strong></td><td style="padding: 8px 0; font-size: 14px; text-transform: capitalize;">${escapeHtml(inquiryType)}</td></tr>
          <tr><td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;"><strong>Message</strong></td><td style="padding: 8px 0; font-size: 14px; white-space: pre-wrap;">${escapeHtml(message)}</td></tr>
        </table>
      </div>
    `
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: subjectByType[inquiryType] || subjectByType.general,
      html,
    })
    if (error) {
      console.error('[contact] Resend error:', error)
      // Safety net: never silently lose a lead if delivery fails. Log the full
      // submission so it can be recovered from server logs and followed up manually.
      console.error('[contact] LEAD NOT EMAILED — recover manually:', JSON.stringify({ name, company, phone, email, inquiryType, message }))
      return { ok: false, message: 'Something went wrong. Please call us instead.' }
    }
    return { ok: true, message: 'Thanks — we\'ll be in touch within one business day.' }
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    console.error('[contact] LEAD NOT EMAILED — recover manually:', JSON.stringify({ name, company, phone, email, inquiryType, message }))
    return { ok: false, message: 'Something went wrong. Please call us instead.' }
  }
}
