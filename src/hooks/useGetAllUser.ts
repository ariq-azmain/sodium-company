import axios from "axios";

export default async function useGetAllUser() {
   try {
      const users = await axios.get("http://localhost:3000/api/users/");
      return users?.data?.data;
   } catch (error:unknown) {
      console.error(error??"Faild To Fetch Users");
      return error ?? "Faild To Fetch Users";
   }
}
