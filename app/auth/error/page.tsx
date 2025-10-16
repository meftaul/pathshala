export default function Page({
  searchParams,
}: {
  searchParams: { error: string };
}) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-base-200 p-6 md:p-10">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl">
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
