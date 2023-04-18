import  React ,{useContext , useState, useEffect, useRef} from "react";
import App from "./App"
import { KeycloakContext } from './KeycloakContext';

export default function UseAuth(){
    const keycloak = useContext(KeycloakContext);
    const client = keycloak;

const [isLogin,setLogin] = useState(false);
const isRun = useRef(false);
useEffect(() =>{
    if(isRun.current) return;
    isRun.current=true;
    client
        .init({
        onLoad:"login-required", timeout: 60000
        })
        .then((res) => {
            setLogin(res);
        
        });

    },[client]);


if(isLogin){
return <App/>;  
}
else{
return <div><h2>Loading ...</h2></div>;
}}
