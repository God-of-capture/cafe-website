import Header from '../components/Header'
import Footer from '../components/Footer'

export default function LicensePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">License</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">MIT License</h2>
            <p className="mb-4">Copyright (c) 2024 God-of-capture</p>
            
            <p className="mb-4">
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the "Software"), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
            
            <p className="mb-4">
              The above copyright notice and this permission notice shall be included in all
              copies or substantial portions of the Software.
            </p>
            
            <p className="mb-4">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              SOFTWARE.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Attribution</h2>
            <p className="mb-4">
              This project uses the following third-party resources:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Next.js - MIT License</li>
              <li>React - MIT License</li>
              <li>TypeScript - Apache License 2.0</li>
              <li>Tailwind CSS - MIT License</li>
              <li>Lucide Icons - MIT License</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 