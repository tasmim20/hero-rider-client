import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useContext(AuthContext);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      fetch(`${process.env.REACT_APP_API_URL}/admin?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.admin);
          setIsAdminLoading(false);
        });
    }
  }, [user?.email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
