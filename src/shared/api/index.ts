/* eslint-disable @typescript-eslint/no-explicit-any */
export const API_URL = "https://jsonplaceholder.typicode.com/";

async function fetchRequest(
  url: string,
  options: {
    method?: string;
    params?: Record<string, any>;
    data?: any;
    headers?: Record<string, string>;
  } = {}
) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const queryString = options.params
      ? "?" + new URLSearchParams(options.params).toString()
      : "";
    const fullUrl = `${API_URL}${url}${queryString}`;

    const body = options.data ? JSON.stringify(options.data) : undefined;

    const headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    const response = await fetch(fullUrl, {
      method: options.method || "GET",
      headers,
      body,
      credentials: "include",
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Получаем данные и заголовки
    const data = await response.json();
    const headersObj: Record<string, string> = {};
    response.headers.forEach((value, key) => {
      headersObj[key] = value;
    });

    return {
      data,
      headers: headersObj,
      status: response.status,
    };
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}
function apiFetch(
  url: string,
  config?: {
    method?: string;
    params?: Record<string, any>;
    data?: any;
    headers?: Record<string, string>;
  }
) {
  return fetchRequest(url, config);
}

apiFetch.get = function (
  url: string,
  config?: { params?: Record<string, any> }
) {
  return fetchRequest(url, { ...config, method: "GET" });
};

apiFetch.post = function (
  url: string,
  data?: any,
  config?: { headers?: Record<string, string> }
) {
  return fetchRequest(url, { ...config, method: "POST", data });
};

apiFetch.put = function (
  url: string,
  data?: any,
  config?: { headers?: Record<string, string> }
) {
  return fetchRequest(url, { ...config, method: "PUT", data });
};

apiFetch.delete = function (
  url: string,
  config?: { headers?: Record<string, string> }
) {
  return fetchRequest(url, { ...config, method: "DELETE" });
};

export { apiFetch };
