import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import '../../configureAmplify';
import { useRouter } from 'next/router';
import { MainPaths } from '../enums/paths/main-paths';

const Books = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    checkAuthUser();
  });

  async function checkAuthUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (error) {
      setUser(null);
      router.push(MainPaths.AUTH);
    }
  }

  if (!user) return null;

  return <h1>From Books!</h1>;
};

export default Books;
