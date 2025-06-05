import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Testimonials } from "@/components/about/Testimonials"
import { ContactSection } from "@/components/about/ContactSection"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      {/* About Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Coláiste Dhúlaigh College of Further Education (CDCFE)</h2>
            <h4 className="text-xl mb-4">
              offers Post Leaving Certificate (PLC) Courses at QQI level 5 and 6 and at Higher National Diploma in a
              wide range of disciplines.
            </h4>
            <p className="mb-6">
              Coláiste Dhúlaigh College of Further Education (CDCFE) is a college located in Coolock, North Dublin,
              Ireland. It offers a range of further education courses, including full-time and part-time programs in
              areas such as business, computing, engineering, and healthcare. The college also offers courses for adult
              learners and provides access to higher education through its links with Irish universities. It is named
              after the Irish language scholar and lexicographer An tAthair Peadar Ua Laoghaire.
            </p>
            <Button asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-6xl text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-12 bg-muted p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <h4 className="text-xl mb-4">
              <strong>MISSION:</strong> Coláiste Dhúlaigh College of Further Education (CDCFE) offers a range of courses
              for computer science students. These courses can help students develop the skills and knowledge they need
              to pursue careers in the field of computer science.
            </h4>
            <p className="mb-4">
              <strong>VISION:</strong> Some examples of courses that may be of interest to computer science students at
              CDCFE include: Computer Science: This course is designed to provide students with a foundation in computer
              science, including programming, data structures, algorithms, and computer systems. Web Development: This
              course teaches students how to design and develop websites using languages such as HTML, CSS, and
              JavaScript. Overall, CDCFE can provide computer science students with a strong foundation in the field, as
              well as practical skills that can be applied in a variety of computer science-related careers.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-6xl text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">SERVICES</h2>
        <h4 className="text-xl text-center mb-6">What we offer</h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Card className="text-center p-4">
            <div className="text-4xl text-primary mb-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9 12h6"></path>
                <path d="M12 9v6"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">POWER</h4>
            <p>A range of computer science courses</p>
          </Card>

          <Card className="text-center p-4">
            <div className="text-4xl text-primary mb-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Applied</h4>
            <p>Practical, hands-on learning</p>
          </Card>

          <Card className="text-center p-4">
            <div className="text-4xl text-primary mb-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Expert</h4>
            <p>Experienced faculty</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-4">
            <div className="text-4xl text-primary mb-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Intimate</h4>
            <p>Small class sizes</p>
          </Card>

          <Card className="text-center p-4">
            <div className="text-4xl text-primary mb-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Professional</h4>
            <p>Access to industry-standard equipment and resources</p>
          </Card>

          <Card className="text-center p-4">
            <div className="text-4xl text-primary mb-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Academic</h4>
            <p>Strong links to universities</p>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="mb-12 bg-muted p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Portfolio</h2>
        <h4 className="text-xl text-center mb-8">What we teach</h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Card>
            <CardContent className="p-0">
              <Image
                src="https://images.pexels.com/photos/11035547/pexels-photo-11035547.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Java Programming"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-xl font-bold text-red-600">Java</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
              <Image
                src="https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Cybersecurity"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-xl font-bold text-red-600">CyberSecurity</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
              <Image
                src="https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Web Development"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-xl font-bold text-red-600">Web-Development</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Testimonials />
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Image */}
      <Image
        src="https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="College campus"
        width={1200}
        height={250}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
    </div>
  )
}
