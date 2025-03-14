import React, { useState, useEffect } from 'react';

interface ApiEndpoint {
  name: string;
  url: string;
  method: string;
}

const endpoints: ApiEndpoint[] = [
  { name: 'Get Menus', url: '/api/getMenus', method: 'GET' },
  { name: 'Get Settings', url: '/api/getSettings', method: 'GET' },
];

const ApiDiagnostics: React.FC = () => {
  const [results, setResults] = useState<Record<string, { status: number; data: any }>>({});

  useEffect(() => {
    const testEndpoints = async () => {
      const newResults: Record<string, { status: number; data: any }> = {};

      for (const endpoint of endpoints) {
        try {
          const response = await fetch(endpoint.url, {
            method: endpoint.method,
          });
          const data = await response.json();
          newResults[endpoint.name] = {
            status: response.status,
            data,
          };
        } catch (error) {
          newResults[endpoint.name] = {
            status: 500,
            data: { error: error.message },
          };
        }
      }

      setResults(newResults);
    };

    testEndpoints();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">API Diagnostics</h1>
      <div className="space-y-6">
        {endpoints.map((endpoint) => {
          const result = results[endpoint.name];
          const isSuccess = result?.status >= 200 && result?.status < 300;

          return (
            <div key={endpoint.name} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{endpoint.name}</h2>
                {result && (
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    Status: {result.status}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <p>
                  <strong>Method:</strong> {endpoint.method}
                </p>
                <p>
                  <strong>URL:</strong> {endpoint.url}
                </p>
                {result && (
                  <div>
                    <strong>Response:</strong>
                    <pre className="bg-gray-100 p-4 rounded mt-2 overflow-auto">
                      {JSON.stringify(result.data, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApiDiagnostics;