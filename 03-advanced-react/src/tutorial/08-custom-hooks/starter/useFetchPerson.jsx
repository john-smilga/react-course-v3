import { useState, useEffect } from "react";
const useFetchPerson = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);

        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const fetchedUser = await resp.json();
        setUser(fetchedUser);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchUser();
  }, []);

  return { isLoading, isError, user };
};

export default useFetchPerson;
