import React from "react";
import "./Tweet.css";
import Twemoji from "react-twemoji";
import useText from "../hooks/useText";
import useImage from "../hooks/useImage";
import useDisplay from "../hooks/useDisplay";
import {Comment, Drop, Like, Lock, Retweet, Share, Verified} from "./svgs";

function Tweet({config}) {
    const text = useText(config.text);
    const image = useImage(config.image);
    const display = useDisplay(config.display);

    return (
        <div className={"tweet " + display}>
            <UserInfo/>
            <Content/>
            <Metadata/>
            <Impact/>
            <Actions/>
        </div>
    );

    function UserInfo() {
        return (
            <div className="user-info">
                <div className="avatar-container">
                    <img className="avatar" src={config.user.avatar} alt={config.user.name + " avatar"}/>
                </div>
                <div className="user-info-right">
                    <div className="drop-button">
                        <Drop/>
                    </div>
                    <div className="user-name">
                        <Twemoji options={{className: "twemoji-sm"}} className="user-name-txt">
                            <span className="fake-link">{config.user.name}</span>
                        </Twemoji>
                        {config.user.verified && <div className="icon"><Verified/></div>}
                        {config.user.locked && !config.user.verified && <div className="icon"><Lock/></div>}
                    </div>
                    <div className="user-nickname">@{config.user.nickname}</div>
                </div>
            </div>
        );
    }

    function Content() {
        return (
            <div className="tweet-content">
                {text && <div className="txt">{text}</div>}
                <ImagesContainer/>
            </div>
        );
    }

    function ImagesContainer() {
        switch (image.length) {
            case 1:
                return (
                    <div className="image-container">
                        <img src={image} alt=""/>
                    </div>
                );
            case 2:
                return (
                    <div className="images-container two-image-container">
                        <OneImageColumn side="left" image={image[0]}/>
                        <div className="vertical-spacer"/>
                        <OneImageColumn side="right" image={image[1]}/>
                    </div>
                );
            case 3:
                return (
                    <div className="images-container three-image-container">
                        <OneImageColumn side="left" image={image[0]}/>
                        <div className="vertical-spacer"/>
                        <TwoImagesColumn side="right" image1={image[1]} image2={image[2]}/>
                    </div>
                );
            case 4:
                return (
                    <div className="images-container four-image-container">
                        <TwoImagesColumn side="left" image1={image[0]} image2={image[2]}/>
                        <div className="vertical-spacer"/>
                        <TwoImagesColumn side="right" image1={image[1]} image2={image[3]}/>
                    </div>
                );
            default:
                return <></>;
        }

        function OneImageColumn({side, image}) {
            side = sanitizeSide(side);
            const borderSide = getBorderSide(side);
            return (
                <div className={`full-height-image ${side}-image t${borderSide} b${borderSide}`}>
                    <img src={image} alt=""/>
                </div>
            );
        }

        function TwoImagesColumn({side, image1, image2}) {
            side = sanitizeSide(side);
            const borderSide = getBorderSide(side);
            return (
                <div className={`${side}-col`}>
                    <div className={`half-height-image t${borderSide}`}>
                        <img src={image1} alt=""/>
                    </div>
                    <div className="horizontal-spacer"/>
                    <div className={`half-height-image b${borderSide}`}>
                        <img src={image2} alt=""/>
                    </div>
                </div>
            );
        }

        function sanitizeSide(side) {
            return side === "right" || side === "left" ? side : "left";
        }

        function getBorderSide(side) {
            return side.charAt(0);
        }
    }

    function Metadata() {
        return (
            <div className="metadata">
                {config.date} · <span className="fake-link app">{config.app}</span>
            </div>
        );
    }

    function Impact() {
        const rts = parseInt(config.retweets);
        const quotes = parseInt(config.quotedTweets);
        const likes = parseInt(config.likes);
        if (rts === 0 && quotes === 0 && likes === 0) {
            return <></>
        }
        return (
            <div className="rt-likes">
                {rts !== 0 &&
                <span className="fake-link num-rts">
                    <strong>{styleNumber(config.retweets)}</strong> {getText("Retweet", rts)}
                </span>
                }
                {quotes !== 0 &&
                <span className="fake-link num-quotes">
                    <strong>{styleNumber(config.quotedTweets)}</strong> {getText("Quoted Tweet", quotes)}
                </span>
                }
                {likes !== 0 &&
                <span className="fake-link num-likes">
                    <strong>{styleNumber(config.likes)}</strong> {getText("Like", likes)}
                </span>
                }
            </div>
        );

        function styleNumber(num) {
            let div = num / 1000000;
            if (div >= 1) {
                return div.toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, "$1") + "M";
            }
            div = num / 1000;
            if (div >= 1) {
                return div.toFixed(1).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, "$1") + "K";
            }
            return num;
        }

        function getText(text, count) {
            return count === 1 ? text : text + "s";
        }
    }

    function Actions() {
        const actions = [
            {
                color: "blue",
                icon: <Comment/>
            },
            {
                color: "green",
                icon: <Retweet/>
            },
            {
                color: "red",
                icon: <Like/>
            },
            {
                color: "blue",
                icon: <Share/>
            }
        ];
        return (
            <div className="bottom-buttons">
                {
                    actions.map((action, key) =>
                        <div key={key} className={`bottom-button ${action.color}`}>
                            <div>
                                {action.icon}
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }

}

export default Tweet;