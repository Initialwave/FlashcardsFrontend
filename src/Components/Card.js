import React, { useEffect, useRef, useState } from "react";
import CardFront from './CardFront';
import CardBack from './CardBack';

const card = ({id, question, category, subcategory, answer, expandLogo, recycleLogo, em, number}) => {
    
    const [front, setFront] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const [cardClass, setCardClass] = useState("card hide");
    const [frontClass, setFrontClass] = useState("");
    const [backClass, setBackClass] = useState("");
    const [updateClass, setUpdateClass] = useState(false);
    const [rerender, setRerender] = useState(false);
    const [initialRender, setInitialRender] = useState(true);
    const expandedStyle = useRef({});

    let onFlipHandler = () => {
        setFront(!front);
        setUpdateClass(true);
    }

    let onExpandHandler = () => {
        if(expanded) {
            setCardClass("card ")
        }else {
            setCardClass(cardClass + "expanded-card");
        }
        setExpanded(!expanded)
    }

    useEffect(() => {
        
    })
}