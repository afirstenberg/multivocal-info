var Plus = {

  config: {
  },

  init: function(){
    console.log(gapi);
    gapi.client.init(Plus.config).then(function(){
      console.log('Plus init1');
      return gapi.client.load( 'plus', 'v1' );
    }).then(function(){
      console.log('Plus init2');
      return gapi.client.plus.activities.list({
        userId: '110714993452970126481',
        key: 'AIzaSyBgxpHuwpXKivkRe8r5n-XTOOBZgwe46Eo',
        collection: 'public',
        maxResults: 1
      });
    }).then(function(resp){
      if( resp && resp.result && resp.result.items && resp.result.items.length > 0 ){
        var url = resp.result.items[0].object.url;
        console.log('render', url);
        gapi.post.render('latest-post',{href:url});
      } else {
        console.log('invalid resp', resp);
      }
    });
  }
};

$(function(){
  gapi.load('client',function(){
    Plus.init();
  });
});