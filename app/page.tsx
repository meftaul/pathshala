import Link from "next/link";
import { Atom, Calculator, FlaskConical, Sparkles, Rocket, Trophy, BookOpen } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      {/* Hero Section */}
      <section className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            {/* Decorative Icons */}
            <div className="flex justify-center gap-4 mb-6 flex-wrap">
              <Atom className="w-12 h-12 text-primary animate-pulse" />
              <Calculator className="w-12 h-12 text-secondary animate-bounce" />
              <FlaskConical className="w-12 h-12 text-accent animate-pulse" />
              <Sparkles className="w-12 h-12 text-warning animate-bounce" />
            </div>

            {/* Greeting */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              হ্যালো বন্ধুরা 👋
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-secondary">
              Ready to explore some fun Math &amp; Science?
            </h2>

            {/* Tagline */}
            <p className="text-xl md:text-2xl mb-12 text-base-content/80 font-medium">
              Learn by doing — <span className="text-accent font-bold">মজার ছলে শেখা, বিজ্ঞানের পথে এগিয়ে চলো!</span>
            </p>

            {/* CTA Button */}
            <Link href="/auth/login" className="btn btn-primary btn-lg btn-wide text-lg shadow-lg hover:shadow-xl transition-all">
              <Rocket className="w-6 h-6" />
              Login to Learn
            </Link>

            <div className="mt-4">
              <Link href="/auth/sign-up" className="link link-secondary text-lg">
                নতুন? এখানে রেজিস্টার করো!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-base-200/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-primary">
            কী কী শিখবে? 🎯
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Math Card */}
            <div className="card bg-base-100 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-2xl">
              <div className="card-body items-center text-center p-8">
                <Calculator className="w-16 h-16 text-primary mb-4" />
                <h4 className="card-title text-2xl text-primary">Math গণিত</h4>
                <p className="text-base-content/70">
                  Numbers, patterns, puzzles — মজার খেলার মতো!
                </p>
              </div>
            </div>

            {/* Science Card */}
            <div className="card bg-base-100 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-2xl">
              <div className="card-body items-center text-center p-8">
                <FlaskConical className="w-16 h-16 text-secondary mb-4" />
                <h4 className="card-title text-2xl text-secondary">Science বিজ্ঞান</h4>
                <p className="text-base-content/70">
                  Experiments, nature, space — চারপাশের রহস্য!
                </p>
              </div>
            </div>

            {/* Quizzes Card */}
            <div className="card bg-base-100 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-2xl">
              <div className="card-body items-center text-center p-8">
                <Trophy className="w-16 h-16 text-accent mb-4" />
                <h4 className="card-title text-2xl text-accent">Quizzes কুইজ</h4>
                <p className="text-base-content/70">
                  Test yourself, earn badges — মজা + চ্যালেঞ্জ!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <BookOpen className="w-20 h-20 text-primary mx-auto mb-6 animate-pulse" />
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Ready to start your adventure? 🚀
          </h3>
          <p className="text-xl mb-8 text-base-content/70">
            শেখার জগতে স্বাগতম! এখনই শুরু করো!
          </p>
          <Link href="/auth/login" className="btn btn-secondary btn-lg btn-wide text-lg shadow-lg">
            Start Exploring
          </Link>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
