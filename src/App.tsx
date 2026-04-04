import type { RouteRecord } from 'vite-react-ssg'
import { Toaster } from 'sonner'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { Brand } from './pages/Brand'
import { WebDesignSiliconValley } from './pages/WebDesignSiliconValley'
import { WebDesignSanJose } from './pages/WebDesignSanJose'
import { FAQ } from './pages/FAQ'

function Layout() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(circle_at_50%_0%,_rgba(250,240,230,0.6),transparent_70%)]" />
        <Navbar />
        <div className="flex-grow">
          <Home />
        </div>
        <Footer />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#f7f4ef',
            color: '#2b2627',
            border: '1px solid #e5e5e5',
          },
        }}
      />
    </>
  )
}

function ServicesPage() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(circle_at_50%_0%,_rgba(250,240,230,0.6),transparent_70%)]" />
        <Navbar />
        <div className="flex-grow">
          <Services />
        </div>
        <Footer />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#f7f4ef',
            color: '#2b2627',
            border: '1px solid #e5e5e5',
          },
        }}
      />
    </>
  )
}

function ContactPage() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(circle_at_50%_0%,_rgba(250,240,230,0.6),transparent_70%)]" />
        <Navbar />
        <div className="flex-grow">
          <Contact />
        </div>
        <Footer />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#f7f4ef',
            color: '#2b2627',
            border: '1px solid #e5e5e5',
          },
        }}
      />
    </>
  )
}

function BrandPage() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(circle_at_50%_0%,_rgba(250,240,230,0.6),transparent_70%)]" />
        <Navbar />
        <div className="flex-grow">
          <Brand />
        </div>
        <Footer />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#f7f4ef',
            color: '#2b2627',
            border: '1px solid #e5e5e5',
          },
        }}
      />
    </>
  )
}

function SiliconValleyPage() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(circle_at_50%_0%,_rgba(250,240,230,0.6),transparent_70%)]" />
        <Navbar />
        <div className="flex-grow">
          <WebDesignSiliconValley />
        </div>
        <Footer />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#f7f4ef',
            color: '#2b2627',
            border: '1px solid #e5e5e5',
          },
        }}
      />
    </>
  )
}

function SanJosePage() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(circle_at_50%_0%,_rgba(250,240,230,0.6),transparent_70%)]" />
        <Navbar />
        <div className="flex-grow">
          <WebDesignSanJose />
        </div>
        <Footer />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#f7f4ef',
            color: '#2b2627',
            border: '1px solid #e5e5e5',
          },
        }}
      />
    </>
  )
}

function FAQPage() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(circle_at_50%_0%,_rgba(250,240,230,0.6),transparent_70%)]" />
        <Navbar />
        <div className="flex-grow">
          <FAQ />
        </div>
        <Footer />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#f7f4ef',
            color: '#2b2627',
            border: '1px solid #e5e5e5',
          },
        }}
      />
    </>
  )
}

export const routes: RouteRecord[] = [
  { path: '/', element: <Layout /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/brand', element: <BrandPage /> },
  { path: '/web-design-silicon-valley', element: <SiliconValleyPage /> },
  { path: '/web-design-san-jose', element: <SanJosePage /> },
  { path: '/faq', element: <FAQPage /> },
]

export default routes