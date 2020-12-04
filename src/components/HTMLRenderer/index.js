import React, { Component } from "react";

import CovidEda from "../../html/covid_eda.html";
import FaceRecognition from "../../html/face_recog.html";
import BigMarket from "../../html/bigmarket.html";
import Melanoma from "../../html/melanoma_models.html";
import CovidRelatedArticles from "../../html/related_articles.html";
import SentimentClassification from "../../html/sentiment_spacy.html";
import Titanic from "../../html/titanic.html";
import TweetSentiment from "../../html/tweet_sentiment.html";
import WalmartEDA from "../../html/walmart_eda-1.html";
import WalmartEDA2 from "../../html/walmart_eda.html";
import WalmartTimeSeries from "../../html/walmart_time_series.html";

import { menuItems } from "../../constants";
import styles from "./styles.less";

export default class HtmlRenderer extends Component {
    state = {};
    componentDidMount() {
        const menuId = new URLSearchParams(window.location.search).get("page");
        let Page = "";
        debugger;
        switch (menuId) {
            case "covid_eda":
                Page = CovidEda;
                break;
            case "face_recog":
                Page = FaceRecognition;
                break;
            case "related_articles":
                Page = CovidRelatedArticles;
                break;
            case "melanoma":
                Page = Melanoma;
                break;
            case "sentiment_spacy":
                Page = SentimentClassification;
                break;
            case "big_market":
                Page = BigMarket;
                break;
            case "walmart_eda":
                Page = WalmartEDA;
                break;
            case "walmart_eda-1":
                Page = WalmartEDA2;
                break;
            case "walmart_time_series":
                Page = WalmartTimeSeries;
                break;
            case "tweet_sentiment":
                Page = TweetSentiment;
                break;
            case "titanic":
                Page = Titanic;
                break;
        }
        const htmlDoc = { __html: Page };
        this.setState({ htmlDoc });
    }

    render() {
        const { htmlDoc } = this.state;
        if (htmlDoc) {
            return (
                <div className={styles.jp_wrapper}>
                    {htmlDoc && <div dangerouslySetInnerHTML={htmlDoc} />}
                </div>
            );
        }
        return "";
    }
}
