import Link from "next/link"
import { Apple, Twitter, Github, Facebook, ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.w3schools.com/js/" className="hover:text-blue-400 transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="https://remix.ethereum.org/" className="hover:text-blue-400 transition-colors">
                  Blockchain
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programming" className="hover:text-blue-400 transition-colors">
                  Coding
                </Link>
              </li>
              <li>
                <Link href="https://www.cdcfe.ie/" className="hover:text-blue-400 transition-colors">
                  CDCFE
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
            <p className="text-gray-300">
              C, C++, Java, Python, and Ruby. These languages are used to create software applications, websites, and
              other systems. They vary in syntax, semantics, and features, and are designed to be easy for humans to
              read and write.
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          <Link href="https://www.apple.com/" className="text-gray-300 hover:text-white transition-colors">
            <Apple size={24} />
          </Link>
          <Link href="https://twitter.com/AtrakchiE" className="text-gray-300 hover:text-white transition-colors">
            <Twitter size={24} />
          </Link>
          <Link href="https://github.com/EskandarAtrakchi" className="text-gray-300 hover:text-white transition-colors">
            <Github size={24} />
          </Link>
          <Link
            href="https://www.facebook.com/EskandarTech/"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Facebook size={24} />
          </Link>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <p className="text-gray-300">
            <strong>Eskandar Atrakchi &copy; {new Date().getFullYear()}</strong>
          </p>
          <Link href="#top" className="text-gray-300 hover:text-white transition-colors">
            <ArrowUp size={24} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
