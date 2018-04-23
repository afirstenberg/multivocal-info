var Hash = {
  init: function(){
    $(window).on('hashchange',function(e){
      Hash.process();
    });
    Hash.process();
  },

  process: function(){
    var hash = window.location.hash;
    var hashClass = '.hash-';
    if( hash ){
      hashClass = '.hash-'+hash.substring(1);
    }
    $( hashClass ).not('.slide').show();
    $( '.slide'+hashClass ).slideDown();

    $( '.hash' ).not( hashClass ).not('.slide').hide();
    $( '.hash.slide' ).not( hashClass ).slideUp();
    gtag('config', 'UA-118013988-1',{
      "page_location": window.location.href
    });

  }
};
Hash.init();

