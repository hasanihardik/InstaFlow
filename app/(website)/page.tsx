import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const imageData = [
  {
    src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    aspectRatio: "0.94",
  },
  {
    src: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    aspectRatio: "0.94",
    marginTop: "mt-4",
  },
];

const imageData2 = [
  {
    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    aspectRatio: "0.94",
    marginTop: "",
  },
  {
    src: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    aspectRatio: "0.94",
    marginTop: "",
  },
  {
    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    aspectRatio: "0.94",
    marginTop: "",
  },
];


const features = [
  {
    icon: "✨",
    title: "Smart Responses",
    description: "AI-powered responses that sound natural and engage your audience"
  },
  {
    icon: "⚡",
    title: "Instant Replies",
    description: "Never miss a message with automated instant replies 24/7"
  },
  {
    icon: "📊",
    title: "Detailed Analytics",
    description: "Track engagement metrics and optimize your communication strategy"
  },
  {
    icon: "🔗",
    title: "Seamless Integration",
    description: "Connects directly with your Instagram business account"
  }
];

const plans = [
  {
    name: "Free Plan",
    description: "Perfect for getting started",
    price: "$0",
    features: [
      "Boost engagement with target responses",
      "Automate comment replies to enhance audience interaction",
      "Turn followers into customers with targeted messaging",
    ],
    cta: "Get Started",
  },
  {
    name: "Smart AI Plan",
    description: "Advanced features for power users",
    price: "$99",
    features: [
      "All features from Free Plan",
      "AI-powered response generation",
      "Advanced analytics and insights",
      "Priority customer support",
      "Custom branding options",
    ],
    cta: "Upgrade Now",
    featured: true
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    username: "@sarahjcreative",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    text: "Slide has completely transformed how I interact with my followers. The automated responses feel personal, and my engagement has increased by 300%!",
    rating: 5
  },
  {
    name: "Michael Chen",
    username: "@michaelchendesign",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    text: "As a small business owner, I was struggling to keep up with DMs. Slide's automation tools have saved me hours every week while making my followers feel valued.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    username: "@emmarodphoto",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    text: "The Smart AI Plan is worth every penny! My audience engagement has doubled since I started using Slide, and the analytics help me understand what content works best.",
    rating: 5
  }
];

const socialIcons = [
  {
    src: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    alt: "Facebook"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    alt: "Twitter"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/733/733558.png",
    alt: "Instagram"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/733/733609.png",
    alt: "LinkedIn"
  }
];

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-gray-200/10 hover:bg-white/10 transition-all duration-300">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}

function NewsletterForm() {
  return (
    <div className="flex flex-col space-y-2">
      <input
        type="email"
        placeholder="Your email address"
        className="px-4 py-2 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
        Subscribe
      </Button>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative container mx-auto">
          <div className="flex items-center justify-between px-6">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-white text-blue-600 flex items-center justify-center font-bold text-xl">
                li
              </div>
              <span className="text-2xl font-semibold text-white">
                Slide
              </span>
            </div>
            
            <nav className="hidden space-x-8 text-sm text-white md:block">
              <Link href="#features" className="hover:text-blue-200 transition-colors">Features</Link>
              <Link href="#pricing" className="hover:text-blue-200 transition-colors">Pricing</Link>
              <Link href="#about" className="hover:text-blue-200 transition-colors">About</Link>
            </nav>

            <Link href="/dashboard">
              <Button className="bg-white text-blue-600 px-7 font-semibold rounded-md hover:bg-gray-100 transition-colors">
                Login
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 px-6">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-white">
                Revolutionize Your Instagram Engagement
              </h1>
              <p className="mt-6 text-xl text-blue-100">
                Automate your DMs and connect with your audience like never before.
              </p>
              <div className="flex gap-4 mt-8">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    Get Started
                  </Button>
                </Link>
                <Link href="#features">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/20 rounded-md transition-colors"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="relative">
    <img 
    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
    alt="Instagram DM automation" 
    className="rounded-lg shadow-2xl" 
  />
</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-10 items-start mb-16">
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <div className="text-blue-600 font-semibold">Features</div>
              <h2 className="mt-4 text-4xl font-bold">Unlock the Power of DM Automation</h2>
            </div>
            <div className="flex-1 shrink text-lg text-gray-600 basis-0">
              Transform your Instagram engagement with our cutting-edge DM automation tools. 
              Save precious time while connecting with your audience more effectively. 
              Experience seamless communication that drives results.
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 hover:bg-gray-100 rounded-xl p-6 shadow-sm transition-all duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex gap-6 items-center mt-16">
            <Link href="#pricing">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Learn More
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">See It In Action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch how our platform transforms your Instagram engagement with smart automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {imageData2.map((image, index) => (
              <div key={index} className={`rounded-xl overflow-hidden shadow-lg ${image.marginTop || ''}`}>
                <img 
                  src={image.src} 
                  alt="Instagram engagement example" 
                  className="w-full h-auto object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-4xl font-bold">Choose Your Plan</h2>
            <p className="max-w-[900px] text-gray-600">
              Select the perfect plan to boost your Instagram engagement
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`flex flex-col justify-between shadow-lg rounded-xl overflow-hidden ${
                  plan.featured
                    ? "bg-gradient-to-br from-blue-500 to-indigo-600 text-white transform scale-105 transition-transform duration-200"
                    : "bg-white border border-gray-100"
                }`}
              >
                <CardHeader>
                  <CardTitle className={plan.featured ? "text-white text-2xl" :"text-black text-2xl" }>{plan.name}</CardTitle>
                  <CardDescription className={plan.featured ? "text-blue-100" : "text-black"}>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-black"}`}>
                    {plan.price}
                    <span className={`text-lg font-normal ${plan.featured ? "text-blue-100" : "text-black"}`}>
                      /month
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle
                          className={`mr-3 h-5 w-5 ${
                            plan.featured ? "text-blue-200" : "text-blue-500"
                          }`}
                        />
                        <span className={`${plan.featured ? "text-white" : "text-black"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button 
                    className={`w-full py-6 text-md font-medium ${
                      plan.featured 
                        ? "bg-white text-blue-600 hover:bg-blue-50" 
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their Instagram engagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
    <div className="flex items-center mb-4">
      <img 
        src={testimonial.image} 
        alt={testimonial.name} 
        className="w-12 h-12 rounded-full object-cover mr-4"
      />
      <div>
        <p className="font-medium">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.username}</p>
      </div>
    </div>
    <p className="text-gray-600">
      {testimonial.text}
    </p>
    <div className="flex text-yellow-400 mt-4">
      {"★".repeat(testimonial.rating)}
    </div>
  </div>
))}
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-8 rounded-lg bg-white text-blue-600 flex items-center justify-center font-bold">
                  li
                </div>
                <span className="text-xl font-semibold text-white">
                  Slide
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Revolutionize your Instagram engagement with smart automation tools.
              </p>
              <div className="flex gap-4">
                {socialIcons.map((icon, index) => (
                  <div key={index} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                    <img
                      loading="lazy"
                      src={icon.src}
                      alt={icon.alt}
                      className="w-4 h-4"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">
                Get the latest updates and insights delivered to your inbox.
              </p>
              <NewsletterForm />
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2025 Slide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
