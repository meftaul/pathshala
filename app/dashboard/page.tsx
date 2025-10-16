import { Calculator, Atom, Trophy, TrendingUp, BookOpen, Sparkles, Target, Zap } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Your Learning Progress",
  description: "Access your personalized Pathshala dashboard to track your Math and Science learning progress, view achievements, and continue your educational journey with fun activities.",
  keywords: [
    "Student dashboard",
    "Learning progress",
    "Math progress tracking",
    "Science learning dashboard",
    "Educational achievements",
    "Bangla education dashboard",
    "Children learning progress",
    "Pathshala dashboard"
  ],
  openGraph: {
    title: "Pathshala Dashboard - Your Learning Progress",
    description: "Access your personalized Pathshala dashboard to track your Math and Science learning progress, view achievements, and continue your educational journey.",
    url: "/dashboard",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Welcome back! 🚀
          </h1>
          <p className="text-2xl md:text-3xl text-secondary font-medium">
            চলো আজ কিছু নতুন শিখি!
          </p>
        </section>

        {/* Motivational Quote */}
        <div className="alert bg-accent/10 border-accent/30 mb-12 shadow-lg rounded-2xl">
          <Sparkles className="w-6 h-6 text-accent" />
          <div>
            <h3 className="font-bold text-accent">Today's Inspiration</h3>
            <div className="text-base-content/80">
              "Every expert was once a beginner. Keep learning, keep growing! 🌱"
            </div>
          </div>
        </div>

        {/* Module Cards Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-primary">
            তোমার শেখার জগত 📚
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Math Module */}
            <div className="card bg-base-100 shadow-lg hover:shadow-2xl hover:bg-base-200 transition-all duration-300 rounded-2xl cursor-pointer">
              <div className="card-body p-6">
                <div className="flex items-center justify-between mb-4">
                  <Calculator className="w-12 h-12 text-primary" />
                  <div className="badge badge-primary">New</div>
                </div>
                <h3 className="card-title text-xl text-primary">Math</h3>
                <p className="text-base-content/70 text-sm">গণিত</p>
                <div className="mt-4">
                  <progress className="progress progress-primary w-full" value="60" max="100"></progress>
                  <p className="text-xs text-base-content/60 mt-1">60% Complete</p>
                </div>
              </div>
            </div>

            {/* Science Module */}
            <div className="card bg-base-100 shadow-lg hover:shadow-2xl hover:bg-base-200 transition-all duration-300 rounded-2xl cursor-pointer">
              <div className="card-body p-6">
                <div className="flex items-center justify-between mb-4">
                  <Atom className="w-12 h-12 text-secondary" />
                  <div className="badge badge-secondary">Popular</div>
                </div>
                <h3 className="card-title text-xl text-secondary">Science</h3>
                <p className="text-base-content/70 text-sm">বিজ্ঞান</p>
                <div className="mt-4">
                  <progress className="progress progress-secondary w-full" value="45" max="100"></progress>
                  <p className="text-xs text-base-content/60 mt-1">45% Complete</p>
                </div>
              </div>
            </div>

            {/* Quizzes Module */}
            <div className="card bg-base-100 shadow-lg hover:shadow-2xl hover:bg-base-200 transition-all duration-300 rounded-2xl cursor-pointer">
              <div className="card-body p-6">
                <div className="flex items-center justify-between mb-4">
                  <Trophy className="w-12 h-12 text-accent" />
                  <div className="badge badge-accent">Fun!</div>
                </div>
                <h3 className="card-title text-xl text-accent">Quizzes</h3>
                <p className="text-base-content/70 text-sm">কুইজ</p>
                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-warning" />
                    <p className="text-sm font-semibold">12 badges earned!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Module */}
            <div className="card bg-base-100 shadow-lg hover:shadow-2xl hover:bg-base-200 transition-all duration-300 rounded-2xl cursor-pointer">
              <div className="card-body p-6">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-12 h-12 text-success" />
                  <div className="badge badge-success">Track</div>
                </div>
                <h3 className="card-title text-xl text-success">Progress</h3>
                <p className="text-base-content/70 text-sm">অগ্রগতি</p>
                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-info" />
                    <p className="text-sm font-semibold">5 day streak! 🔥</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Continue Learning Section */}
        <section className="card bg-gradient-to-r from-primary/20 to-secondary/20 shadow-xl rounded-2xl">
          <div className="card-body p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <BookOpen className="w-16 h-16 text-primary flex-shrink-0" />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  Continue where you left off
                </h3>
                <p className="text-base-content/70">
                  তুমি "Multiplication Tables" পর্যন্ত এসেছো। চালিয়ে যাও!
                </p>
              </div>
              <button className="btn btn-primary btn-lg rounded-lg">
                <Sparkles className="w-5 h-5" />
                Continue Learning
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}
