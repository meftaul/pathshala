import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error - Something Went Wrong",
  description: "An error occurred on Pathshala. We're working to fix it. Please try again later or contact support if the problem persists.",
  keywords: [
    "Error page",
    "Something went wrong",
    "Pathshala error",
    "Educational platform error",
    "Bangla education error",
    "Math learning error"
  ],
  openGraph: {
    title: "Pathshala Error - Something Went Wrong",
    description: "An error occurred on Pathshala. We're working to fix it. Please try again later or contact support if the problem persists.",
    url: "/auth/error",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page({
  searchParams,
}: {
  searchParams: { error: string };
}) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
      <div className="card w-full max-w-sm shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">Sorry, something went wrong.</h2>
          {searchParams?.error ? (
            <p>
              <span className="font-semibold">Code error:</span>{" "}
              {searchParams.error}
            </p>
          ) : (
            <p>An unspecified error occurred.</p>
          )}
        </div>
      </div>
    </div>
  );
}
