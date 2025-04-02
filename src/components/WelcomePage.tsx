
export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center gap-6 p-4">
        <h1 className="text-4xl font-bold text-center">Welcome to ClimaVision</h1>
        <p className="text-xl text-center max-w-md">
          Sign in to access personalized weather forecasts
        </p>
      </div>
    </div>
  );
}