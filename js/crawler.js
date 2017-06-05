/**
 * Created by w3719 on 2017/6/1.
 */

let Crawler = require('simplecrawler');

class CrawlerMethod {
    startCrawler(url) {
        let crawler = Crawler(url);
        crawler.maxDepth = 1; // Only first page is fetched (with linked CSS & images)
        crawler.interval = 10000; // Ten seconds
        crawler.maxConcurrency = 3;
        crawler.on('fetchcomplete',function (queueItem, responseBuffer, response) {
            console.log("I just received %s (%d bytes)", queueItem.url, responseBuffer.length);
            console.log("It was a resource of type %s", response.headers['content-type']);
            console.log(response);
        });

        crawler.start();
    }
}

module.exports = new CrawlerMethod;