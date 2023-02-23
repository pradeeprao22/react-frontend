import api from "./railsApi"

export const getAllPosts = async () => {
   try {
        const resp = await api.get("/posts");
        // debugger;
        // console.log(resp.data)
        return resp.data;
   } catch(error) {
        return error;
   }
};