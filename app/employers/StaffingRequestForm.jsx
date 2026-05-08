'use client'

import { useActionState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { submitStaffingRequest } from './actions'
import icons from '@/components/icons'

const initialState = { ok: null, errors: {}, message: '' }

export default function StaffingRequestForm() {
  const { t } = useTranslation('employers')
  const [state, formAction, pending] = useActionState(submitStaffingRequest, initialState)
  const formRef = useRef(null)

  // Reset form on successful submit
  useEffect(() => {
    if (state.ok && formRef.current) {
      formRef.current.reset()
    }
  }, [state.ok])

  return (
    <form ref={formRef} action={formAction} className="bg-white border border-fog p-6 md:p-8 rounded-md text-left">
      {/* Honeypot — hidden from real users */}
      <div className="absolute -left-[9999px] w-1 h-1 overflow-hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this in:
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <Field label={t('form.name')} name="name" required state={state} />
        <Field label={t('form.company')} name="company" required state={state} />
        <Field label={t('form.phone')} name="phone" type="tel" required state={state} />
        <Field label={t('form.email')} name="email" type="email" required state={state} />
      </div>

      <div className="mb-4">
        <label className="block text-xs font-semibold text-carbon mb-1.5">
          {t('form.message')}
          <span className="text-ind-green ml-0.5" aria-hidden="true">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full border border-fog rounded-md px-3 py-2 text-sm text-carbon focus:outline-none focus:border-sig-blue resize-y"
        />
        {state?.errors?.message && (
          <p className="text-xs text-red-600 mt-1">{state.errors.message}</p>
        )}
      </div>

      <p className="text-xs text-steel mb-4">{t('form.responseTime')}</p>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center gap-2 bg-sig-blue hover:bg-blue-900 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors"
      >
        {pending ? t('form.submitting') : t('form.submit')}
        {!pending && <span className="w-4 h-4">{icons.arrowRight}</span>}
      </button>

      {state?.ok === true && (
        <p
          aria-live="polite"
          className="mt-4 p-3 bg-ind-green/10 border border-ind-green/30 rounded text-sm text-ind-green font-medium"
        >
          {state.message}
        </p>
      )}
      {state?.ok === false && (
        <p
          aria-live="polite"
          className="mt-4 p-3 bg-red-50 border border-red-200 rounded text-sm text-red-700"
        >
          {state.message}
        </p>
      )}
    </form>
  )
}

function Field({ label, name, type = 'text', required = false, state }) {
  const error = state?.errors?.[name]
  return (
    <div>
      <label className="block text-xs font-semibold text-carbon mb-1.5">
        {label}
        {required && <span className="text-ind-green ml-0.5" aria-hidden="true">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={
          name === 'name' ? 'name' :
          name === 'company' ? 'organization' :
          name === 'phone' ? 'tel' :
          name === 'email' ? 'email' : 'off'
        }
        className="w-full border border-fog rounded-md px-3 py-2 text-sm text-carbon focus:outline-none focus:border-sig-blue"
      />
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  )
}
