// Generated by CoffeeScript 1.9.3
$(function() {
  alert("dsf");
  return window.tweetSetup = function() {
    var tweet;
    alert("df");
    $('.twitter-share-button').remove();
    tweet = $('<a>').attr('href', 'https://twitter.com/share').attr('id', 'tweet').attr('class', 'twitter-share-button').attr('data-lang', 'en').attr('data-count', 'none').text('Tweet');
    $('#tweet-span').prepend(tweet);
    tweet.attr('data-text', '#InfiniteJukebox of ' + t.fixedTitle);
    tweet.attr('data-url', document.URL);
    return twttr.widgets.load();
  };
});
