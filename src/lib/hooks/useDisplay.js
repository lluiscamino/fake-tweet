import { useState, useEffect } from "react";

function useDisplay(rawDisplay) {
    const [display, setDisplay] = useState([]);
    useEffect(() => {
        const validDisplay = ["default", "dim", "lightsout"].includes(rawDisplay);
        setDisplay( validDisplay ? rawDisplay : "default");
    }, [rawDisplay]);
    return display;
}

export default useDisplay;