import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';
import { Typography } from '@material-ui/core';

const App =() => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();
    useEffect(() => {
        alanBtn({
            key: process.env.REACT_APP_ALAN_AI_KEY,
            onCommand: ({ command, articles, number }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if(command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];
                    if(parsedNumber > 20) {
                        alanBtn().playText('Please try that again.');
                    } else if(article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                    }
                }
            },
        })
    }, [])
    return (
        <div style={{ marginBottom: '3rem' }}>
            <div className={classes.logoContainer}>
                <img src={require('./image/logo.png')} className={classes.alanLogo} alt="News App logo"/>
                <Typography variant='h4'>Conversational Voice Controlled News App</Typography>
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
            <div className={classes.footer}><Typography variant='h6'>&#169; Devashish Pathrabe 2022</Typography></div>
            <div className={classes.footer}><Typography variant='h6'>&#169; Aboli Gosavi 2022</Typography></div>
        </div>
    )
}


export default App;