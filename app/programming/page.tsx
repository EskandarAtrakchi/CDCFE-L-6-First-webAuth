import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProgressBar } from "@/components/ProgressBar"

export default function Programming() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-3xl font-bold text-center mb-8">Programming Languages</h1>

      {/* Solidity Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Solidity</h2>
              <p className="mb-6">
                <em>
                  <strong>Solidity</strong>
                </em>{" "}
                is an important programming language for developing smart contracts on the Ethereum blockchain. It
                allows developers to build applications that can facilitate, verify, and enforce the negotiation or
                performance of a contract. These applications have a wide range of potential use cases, including supply
                chain management, financial agreements, and voting systems. Solidity is a powerful tool for creating
                decentralized, transparent, and secure applications that have the potential to revolutionize a variety
                of industries.
              </p>
              <div className="flex flex-col space-y-4">
                <Button variant="default" className="w-full md:w-auto">
                  Start Coding
                </Button>
                <Button variant="outline" className="w-full md:w-auto">
                  Need Help?
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="https://media.istockphoto.com/id/935228958/photo/blockchain-technology-and-network-concept-businessman-holding-text-blockchain-in-hand-with.jpg?b=1&s=612x612&w=0&k=20&c=Tp7bliuJXVRuqrwfZ_y5s8FIqa9Ks8HFCfvm-907I0M="
                alt="Blockchain Technology"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Java Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Java</h2>
              <p className="mb-6">
                <em>
                  <strong>Java</strong>
                </em>{" "}
                is a popular programming language that is widely used to build a variety of applications, including web,
                mobile, and desktop applications. It is known for its simplicity, reliability, and scalability, making
                it a great choice for building large-scale applications. Some of the key applications of Java include
                building web and Android mobile applications, developing backend systems, and creating tools for data
                processing and analysis.
              </p>
              <div className="flex flex-col space-y-4">
                <Button variant="default" className="w-full md:w-auto">
                  Start Coding
                </Button>
                <Button variant="outline" className="w-full md:w-auto">
                  Need Help?
                </Button>
              </div>
              <ProgressBar />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="https://media.istockphoto.com/id/1131109259/photo/java-programming-concept-virtual-machine-on-server-room-background.jpg?b=1&s=612x612&w=0&k=20&c=9nWMmLxL72-G5-qKhma2YRdhS0wvn2l3EgBBGjSYdXg="
                alt="Java Programming"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Python Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Python</h2>
              <p className="mb-6">
                <em>
                  <strong>Python</strong>
                </em>{" "}
                is a versatile and powerful programming language that is widely used in a variety of fields, including
                web development, data science, machine learning, scientific computing, and more. It is known for its
                simplicity, readability, and flexibility, making it a great choice for beginners and experts alike. Some
                of the key applications of Python include building web applications, analyzing and visualizing data, and
                implementing artificial intelligence and machine learning algorithms.
              </p>
              <div className="flex flex-col space-y-4">
                <Button variant="default" className="w-full md:w-auto">
                  Start Coding
                </Button>
                <Button variant="outline" className="w-full md:w-auto">
                  Need Help?
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="https://media.istockphoto.com/id/1279621965/photo/python-inscription-above-open-book-light-coming-from-open-book-with-words-python-education.jpg?s=612x612&w=0&k=20&c=g4Y3RfyhsURX2So2-jRnWlHw3gbgXipqFdrXm0mUvSY="
                alt="Python Programming"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* C# Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">C#</h2>
              <p className="mb-6">
                <em>
                  <strong>C#</strong>
                </em>{" "}
                is a powerful and flexible programming language that is widely used in the development of a variety of
                applications, including web, mobile, and desktop applications. It is known for its strong support for
                object-oriented programming, as well as its ability to interoperate with other languages and platforms.
                Some of the key applications of C# include building Windows applications, developing games with Unity,
                and creating backend systems and tools.
              </p>
              <div className="flex flex-col space-y-4">
                <Button variant="default" className="w-full md:w-auto">
                  Start Coding
                </Button>
                <Button variant="outline" className="w-full md:w-auto">
                  Need Help?
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="C# Programming"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SQL Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">SQL</h2>
              <p className="mb-6">
                <em>
                  <strong>SQL (Structured Query Language)</strong>
                </em>{" "}
                is a programming language that is used to manage and manipulate databases. It is an essential skill for
                anyone working with databases, as it allows you to create, read, update, and delete data stored in a
                database. Some of the key applications of SQL include managing data stored in relational database
                management systems, analyzing and reporting on data, and creating data-driven web and mobile
                applications.
              </p>
              <div className="flex flex-col space-y-4">
                <Button variant="default" className="w-full md:w-auto">
                  Start Coding
                </Button>
                <Button variant="outline" className="w-full md:w-auto">
                  Need Help?
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="https://media.istockphoto.com/id/1188511715/photo/back-end-project-architecture-development-database-development-planning.jpg?b=1&s=612x612&w=0&k=20&c=3PQhzmwhsecifTuxMQPsAITLe3LF7cWdmz5V75PlupQ="
                alt="SQL Database"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
