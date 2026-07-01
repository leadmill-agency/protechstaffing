'use server'

import { Resend } from 'resend'

// Mylinh is now a verified Admin on the Resend team, so the sandbox
// sender (onboarding@resend.dev) can deliver to her without full domain
// verification. Once protechstaffing.com is verified in Resend Domains
// and RESEND_FROM_EMAIL points to a noreply@protechstaffing.com address,
// this will look fully on-brand (sender will say Pro-Tech instead of
// Resend's test domain).
const TO_EMAIL = 'mylinh.tieu@protechstaffing.com'
// Until protechstaffing.com domain is verified in Resend, we use Resend's
// onboarding sender so testing works immediately. Swap to noreply@protechstaffing.com
// once DNS is verified.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Pro-Tech Website <onboarding@resend.dev>'

function escapeHtml(s) {
  return String(s ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export async function submitStaffingRequest(_prevState, formData) {
  // Honeypot — bots fill all fields including hidden ones
  if (formData.get('website')) {
    return { ok: true, message: 'Thanks — we\'ll be in touch within one business day.' }
  }

  const name = String(formData.get('name') ?? '').trim()
  const company = String(formData.get('company') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  // Validation
  const errors = {}
  if (!name) errors.name = 'Required'
  if (!company) errors.company = 'Required'
  if (!phone) errors.phone = 'Required'
  if (!email) errors.email = 'Required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Invalid email'
  if (!message) errors.message = 'Required'

  if (Object.keys(errors).length) {
    return { ok: false, errors, message: 'Please complete all required fields.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // Soft-fail in dev/preview without the env var configured. Log only.
    console.warn('[staffing-request] RESEND_API_KEY missing — skipping email send', { name, company, phone, email })
    return {
      ok: true,
      message: 'Thanks — we\'ll be in touch within one business day.',
      _devNote: 'Email not actually sent (RESEND_API_KEY missing).',
    }
  }

  try {
    const resend = new Resend(apiKey)
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
        <h2 style="color: #123A67; border-bottom: 2px solid #123A67; padding-bottom: 8px;">New Staffing Request</h2>
        <p style="color: #666; font-size: 13px;">Submitted via the Pro-Tech Staffing website (Employers page).</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top; width: 110px;"><strong>Name</strong></td><td style="padding: 8px 0; font-size: 14px;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;"><strong>Company</strong></td><td style="padding: 8px 0; font-size: 14px;">${escapeHtml(company)}</td></tr>
          <tr><td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;"><strong>Phone</strong></td><td style="padding: 8px 0; font-size: 14px;">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;"><strong>Email</strong></td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${escapeHtml(email)}" style="color: #123A67;">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;"><strong>How can we help?</strong></td><td style="padding: 8px 0; font-size: 14px; white-space: pre-wrap;">${escapeHtml(message)}</td></tr>
        </table>
      </div>
    `
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New staffing request from ${company}`,
      html,
    })
    if (error) {
      console.error('[staffing-request] Resend error:', error)
      // Safety net: never silently lose a lead if delivery fails. Log the full
      // submission so it can be recovered from server logs and followed up manually.
      console.error('[staffing-request] LEAD NOT EMAILED — recover manually:', JSON.stringify({ name, company, phone, email, message }))
      return { ok: false, message: 'Something went wrong. Please call us instead.' }
    }
    return { ok: true, message: 'Thanks — we\'ll be in touch within one business day.' }
  } catch (err) {
    console.error('[staffing-request] Unexpected error:', err)
    console.error('[staffing-request] LEAD NOT EMAILED — recover manually:', JSON.stringify({ name, company, phone, email, message }))
    return { ok: false, message: 'Something went wrong. Please call us instead.' }
  }
}
