import React, { useEffect, useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }
        const data = await res.json();
        if (isMounted) {
          setUser(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Unknown error");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <div role="status">Загрузка...</div>;
  }

  if (error) {
    return <div role="alert">Ошибка: {error}</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <h2 data-testid="username">{user.name}</h2>
      <p data-testid="useremail">{user.email}</p>
    </div>
  );
}