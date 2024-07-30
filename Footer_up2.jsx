import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-25">
      <Container>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">Reach out to us</h2>
                  <p className="mt-4 leading-7 text-gray-600">
                    Have questions? Feel free to contact us. We're here to help!

                    Amrapali Eden Park, F 27 B -1, near hdfc bank, 
                    Fatehpur, F Block,
                    Sector 50, Noida, Uttar Pradesh 201301

                    +91-7428149253
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Email us</h3>
                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>
                          <a className="font-semibold text-indigo-600" href="mailto:info@lacleo.ai">
                            info@lacleo.ai
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">WhatsApp</h3>
                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                      <div>
                        <dt className="sr-only">Phone</dt>
                        <dd>
                          <a className="font-semibold text-indigo-600" href="https://api.whatsapp.com/send?phone=917428149253">
                            +91-7428149253
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="sr-only">Instagram</dt>
                        <dd>
                          <a className="font-semibold text-indigo-600" href="https://www.instagram.com/lacleodigital/">
                          Instagram
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="sr-only">X</dt>
                        <dd>
                          <a className="font-semibold text-indigo-600" href="https://x.com/lacleodigital/">
                          X
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Join our team</h3>
                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>
                          <a className="font-semibold text-indigo-600" href="mailto:careers@lacleo.ai">
                            careers@lacleo.ai
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Follow us</h3>
                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                      <div>
                        <dt className="sr-only">LinkedIn</dt>
                        <dd>
                          <a className="font-semibold text-indigo-600" href="https://www.linkedin.com/company/lacleo/">
                            LinkedIn
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>

              <!-- New Policies Section -->
              <div className="space-y-10 pt-10 lg:pt-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Policies</h2>
                <div className="space-y-6">
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Payment Policy</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">Details about payment methods and terms.</p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Delivery Policy</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">Details about delivery methods, times, and costs.</p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Refund Policy</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">Details about refund terms and conditions.</p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Duration Policy</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">Details about the duration of services or products.</p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Mode Policy</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">Details about the modes of service delivery.</p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-10">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Cancellation Policy</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">Details about cancellation terms and conditions.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="/#features">Features</NavLink>
              <NavLink href="/#testimonials">Testimonials</NavLink>
              <NavLink href="/#pricing">Pricing</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link href="https://twitter.com/lacleodigital/" target="_blank" className="group" aria-label="LaCleo on X">
              <svg
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/company/lacleo/" target="_blank" className="group

