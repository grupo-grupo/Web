import { useEffect } from "react";
import api_call from "../../services/apiImpl";

export function Auth() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(sessionStorage.getItem("userData")).token;
        const response = await api_call("get", "users", null, token);
        console.log("Response status:", response.status);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
}
