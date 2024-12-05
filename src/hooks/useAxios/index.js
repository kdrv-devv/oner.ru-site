import axios from "axios";
import { useEffect, useState } from "react";
const useAxios = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(({ url, mthod = "GET", body, params }) => {
    const requestAxios = () => {
      request({
        url,
        method,
        data: body,
        headers: { "Content-Type": "Application-json", ...params },
       
      }).then((result) => {
        setData(result.data),
        setLoading(false)
      }).catch((err) => {
            setError(err.message)
      });

      return requestAxios;
    };
  }, []);

  return {data,loading ,setLoading }


};

export default useAxios;
