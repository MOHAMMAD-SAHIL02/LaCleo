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
            <Link href="https://www.linkedin.com/company/lacleo/" target="_blank" className="group" aria-label="LaCleo on LinkedIn">
              <svg height="67px" className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700" viewBox="0 0 67 67"><path d="M49.837,48.137V36.425c0-6.275-3.35-9.195-7.816-9.195  c-3.604,0-5.219,1.983-6.119,3.374V27.71h-6.79c0.09,1.917,0,20.427,0,20.427h6.79V36.729c0-0.609,0.044-1.219,0.224-1.655  c0.49-1.22,1.607-2.483,3.482-2.483c2.458,0,3.44,1.873,3.44,4.618v10.929H49.837z M21.959,24.922c2.367,0,3.842-1.57,3.842-3.531  c-0.044-2.003-1.475-3.528-3.797-3.528s-3.841,1.524-3.841,3.528c0,1.961,1.474,3.531,3.753,3.531H21.959z M33,64  C16.432,64,3,50.568,3,34C3,17.431,16.432,4,33,4s30,13.431,30,30C63,50.568,49.568,64,33,64z M25.354,48.137V27.71h-6.789v20.427  H25.354z" /></svg>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} La Cleo Digital Private Limited. All rights
            reserved. <NavLink href="/terms-of-service">Terms of Use</NavLink> | <NavLink href="/privacy-policy">Privacy Policy</NavLink>
          </p>
        </div>
      </Container>
    </footer>
  )
}
