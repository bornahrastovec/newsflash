const express = require('express');
const newsRouter = express.Router();
const NewsAPI = require('newsapi');
require('dotenv').config();
const newsapi = new NewsAPI(process.env.API_KEY);

newsRouter.get('', async (req, res) => {
    try {
        await newsapi.v2.topHeadlines({
            country: 'us',
            category: 'general'
        }).then(response => {
            res.render('news', {status: response.status, totalresults: response.totalresults, articles: response.articles});
        })
    
    } catch (err) {
        console.log(err);
    }
})
newsRouter.get('/:category', async (req,res) => {
    try {
        await newsapi.v2.topHeadlines({
            country: 'us',
            category: req.params.category
        }).then(response => {
            res.render('news', {status: response.status, totalresults: response.totalresults, articles: response.articles});
        })
    
    } catch (err) {
        console.log(err);
    }
});

module.exports = newsRouter