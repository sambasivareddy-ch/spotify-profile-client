import { useNavigate } from "react-router-dom";

const useLoginStatus = () => {
    const navigate = useNavigate()

    const checkLoginStatus = async () => {
        fetch(`${import.meta.env.VITE_SERVER}/auth/is-auth`, {
        credentials: 'include' // ensures cookies are sent
        })
        .then(res => res.json())
        .then(data => {
            if (!data.authenticated) {
                navigate('/')
            }
        });
    }

    return checkLoginStatus;
}

export default useLoginStatus;