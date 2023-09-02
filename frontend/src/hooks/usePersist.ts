import { useState, useEffect } from "react";

const usePersist = (): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
    const persistInLocalStorage: string | null = localStorage.getItem("persist");

    const [persist, setPersist] = useState<boolean>(typeof persistInLocalStorage === "string" ? JSON.parse(persistInLocalStorage) : true);

    useEffect(() => {
        localStorage.setItem("persist", JSON.stringify(persist));
    }, [persist]);

    return [persist, setPersist]
}
export default usePersist