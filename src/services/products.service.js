import axios from "axios";


let apiUrl = "http://localhost:8080/main/";
let adminUrl = "http://localhost:8080/admin/";
export const getProducts = async()=>{

    try{
        let response = await axios.get(apiUrl+"products");
        return response.data;
    }
    catch(err){
        console.error(err);
    }
};


export const addProduct = async(formData)=>{
    try {
        let response =await axios.post(adminUrl+ "createproduct", formData, {
            headers:{
                "token" : localStorage.getItem("token")
            }
        });

        return response.data;
    }
    catch(err){
        console.error(err);
    }
};