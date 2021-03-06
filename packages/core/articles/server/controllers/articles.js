'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Article = mongoose.model('Article'),
    _ = require('lodash');

module.exports = function(Articles) {

    return {
        /**
         * Find article by id
         */
        article: function(req, res, next, id) {
            Article.load(id, function(err, article) {
                if (err) return next(err);
                if (!article) return next(new Error('Failed to load article ' + id));
                req.article = article;
                next();
            });
        },
        /**
         * Create an article
         */
        create: function(req, res) {
            var article = new Article(req.body);
            article.user = req.user;

            article.save(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot save the article'
                    });
                }

                Articles.events.publish('create', {
                    description: req.user.name + ' created ' + req.body.title + ' article.'
                });

                res.json(article);
            });
        },
        /**
         * Update an article
         */
        update: function(req, res) {
            var article = req.article;

            article = _.extend(article, req.body);


            article.save(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot update the article'
                    });
                }

                Articles.events.publish('update', {
                    description: req.user.name + ' updated ' + req.body.title + ' article.'
                });

                res.json(article);
            });
        },
        /**
         * Delete an article
         */
        destroy: function(req, res) {
            var article = req.article;


            article.remove(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot delete the article'
                    });
                }

                Articles.events.publish('remove', {
                    description: req.user.name + ' deleted ' + article.title + ' article.'
                });

                res.json(article);
            });
        },
        /**
         * Show an article
         */
        show: function(req, res) {

            Articles.events.publish('view', {
                description: req.user.name + ' read ' + req.article.title + ' article.'
            });

            res.json(req.article);
        },
        /**
         * List of Articles
         */
        all: function(req, res) {
            var query = req.acl.query('Article');

            query.find({}).sort('-created').populate('user', 'name username').exec(function(err, articles) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot list the articles'
                    });
                }

                res.json(articles)
            });

        }
    };
}