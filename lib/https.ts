type FetchOptions = RequestInit & {
  auth?: boolean;
  cache?: RequestCache;
};

export async function apiFetch(endpoint: string, options: FetchOptions = {}) {
  const { auth, cache, ...fetchOptions } = options;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`,
    {
      ...fetchOptions,
      headers: {
        ...(auth && {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        }),
        ...fetchOptions.headers,
      },
      cache: cache ?? "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`API request failed with status ${res.status}`);
  }

  return res.json();
}
