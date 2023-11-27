import { React, useState } from "react";
import ReactStars from "react-rating-stars-component";
import Comments from "../Comments/Comments";
import Upvotes from "../Upvotes/Upvotes";
import CulinaryTag from "../CulinaryTag/CulinaryTag";
import { ButtonPrimaryLink } from "../Button/Button";
import starBlack from "../../../public/star-black.svg";

import "./SearchDetails.css";

const SearchDetails = (props) => {
    const [updateText, setUpdateText] = useState(false);

    function analysisText(text, category, upText) {
        var newText = "";
        const tamanho = text.length;
        if (tamanho > 10 && category == "title") {
            newText = text.substring(0, 10) + "..."
            return newText;
        }

        if (tamanho > 150 && category == "text" && upText == false) {
            newText = text.substring(0, 150) + "..."
            return newText;
        }

        return text;
    }

    function scrollTextShow() {
        var obj = document.querySelector(".search-detail-body");
        obj.classList.toggle("content-show-scroll");
        setUpdateText(!updateText);
    }

    var textao = "Lorem ipsum, dolor sit amet consectime vel, nulla ipsa corporis eveniet magnam at fuga quam quasi enim, quia ut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati magni, odit repellendus ipsa ducimus laboriosam atque! Maxime vel, nulla ipsa corporis eveniet magnam at fuga quam quasi enim, quia ut.";

    return (
        <>
            <div className="search-details-container">
                <div className="search-details-box">
                    <div className="search-detail-header">
                        <div className="left-header-side">
                            <img src={props.photo} alt="" />
                            <CulinaryTag />
                        </div>
                        <div className="middle-header-side">
                            <span className="user-detail-name"> {analysisText(props.name, "title")} </span>
                            <div className="rate-detail-user">
                                <span className="user-rate-number">5.0</span>
                                <ReactStars
                                    count={1}
                                    edit={true}
                                    size={24}
                                    value={1}
                                    isHalf={false}
                                    // emptyIcon={ <img src={starBlack} />}
                                    // filledIcon={ <img src={starBlack} />}
                                    activeColor="222"
                                />
                            </div>
                        </div>
                        <div className="right-header-side">
                            <Upvotes />
                            <Comments />
                        </div>
                    </div>
                    <div className="search-detail-body">
                        <span> {analysisText(textao, "text", updateText)} </span>
                    </div>
                    {textao.length > 150 ?
                        <div className={`read-more-one more-text`} onClick={() => scrollTextShow(`read-more-one`)}>
                            <span> {updateText ? "Ver menos" : "Ver mais"} </span>
                        </div> : <div className="more-text"></div>}
                    <div className="search-detail-footer">
                        <ButtonPrimaryLink text="Acessar" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchDetails;