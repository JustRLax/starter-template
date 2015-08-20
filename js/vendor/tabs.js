function tabs() {
    var tabLink = '';
    var tabHeight = '';
    $(window).load(function(){
        var linkHash = window.location.hash;
        var activeTab = '#' + $('.tab-content').filter(linkHash).attr("id");
        if (linkHash === activeTab) {
            var urlHash = window.location.hash;
            $('.tabs li').removeClass('active');
            $('.tabs a[href^=' + urlHash + ']').parent("li").addClass('active');
            $('.tab-content').removeClass('active');
            $('.tab-content').filter(urlHash).addClass('active');
        }
        tabHeight = $('.tab-content').filter('.active').outerHeight();
        $('.tab-container').height(tabHeight);
    });
    $(".tabs a").on("click", function(event) {
        tabLink = $(this).attr('href');
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
        $(this).parent().parent().siblings('.tab-content').removeClass('active');
        $(this).parent().parent().siblings('.tab-content').filter(tabLink).addClass('active');
        tabHeight = $(this).parent().parent().siblings('.tab-content').filter(tabLink).outerHeight();
        $('.tab-container').height(tabHeight);
        window.location.hash = tabLink;
    });    
}