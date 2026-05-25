import { getHealthcheck } from "@/lib/api/endpoints";
import type { ApiError } from "@/types/api";

function isApiError(error: unknown): error is ApiError {
  if (!error || typeof error !== "object") {
    return false;
  }

  const candidate = error as Partial<ApiError>;
  return (
    typeof candidate.status === "number" &&
    typeof candidate.code === "string" &&
    typeof candidate.message === "string"
  );
}

export default async function Home() {
  try {
    const health = await getHealthcheck();

    return (
      <main className="container py-5">
        <h1>Admin Frontend</h1>
        <p>Frontend de presentation connecte a une API.</p>
        <section className="mt-4">
          <h2>Etat API</h2>
          <p>Status: {health.status}</p>
          <p>Timestamp: {health.timestamp}</p>
        </section>
      </main>
    );
  } catch (error: unknown) {
    const fallback = {
      code: "UNKNOWN_ERROR",
      message: "Impossible de recuperer l'etat de l'API.",
    };

    const apiError = isApiError(error)
      ? error
      : { ...fallback, status: 0, details: error };

    return (
      <main className="container py-5">
        <h1>Admin Frontend</h1>
        <p>Frontend de presentation connecte a une API.</p>
        <section className="mt-4">
          <h2>Etat API indisponible</h2>
          <p>Code: {apiError.code}</p>
          <p>Message: {apiError.message}</p>
        </section>
      </main>
    );
  }
}
