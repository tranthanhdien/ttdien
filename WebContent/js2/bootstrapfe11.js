$(document).ready(function() {
    /*customscroll*/
    var pro_list = $('#product-limit-scroll > .product-list > div');
    if (pro_list.length < 10) {
        $('#product-limit-scroll').removeClass('customscroll');
        $('#product-limit-scroll').css('height', 'auto');
    }
    /**/
    $('.accordion').click(function() {
            $(this).parent().children('.content_accordion').slideToggle();
        })
    /* Search */
    $('.search-box i').bind('click', function() {
        url = $('base').attr('href') + 'ticket';
        var code = $('input[name=\'code\']').attr('value');
        if (code) {
            url += '&code=' + encodeURIComponent(code);
        }
        location = url;
    });

    $('.search-box input[name=\'code\']').bind('keydown', function(e) {

        if (e.keyCode == 13) {
            url = $('base').attr('href') + 'ticket';
            var code = $('input[name=\'code\']').attr('value');
            if (code) {
                url += '&code=' + encodeURIComponent(code);
            }
            location = url;
        }
    });
        /* Search */
    $('.button-search').bind('click', function() {
        url = $('base').attr('href') + 'tim-kiem';
        var search = $('input[name=\'search\']').attr('value');
        if (search) {
            url += '&search=' + encodeURIComponent(search);
        }
        location = url;
    });
    $('#header input[name=\'search\']').bind('keydown', function(e) {
        if (e.keyCode == 13) {
            url = $('base').attr('href') + 'tim-kiem';
            var search = $('input[name=\'search\']').attr('value');
            if (search) {
                url += '&search=' + encodeURIComponent(search);
            }
            location = url;
        }
    });
    /* Search Box */
    $('#button-search-box').bind('click', function() {
        url = $('base').attr('href') + 'tim-kiem';
        var category_id = $('#search_box .cate select.active').attr('value');
        if (category_id != '*') {
            url += '?category_id=' + category_id;
        }
        var location_from = $('#search_box select[name=\'location_from\']').attr('value');
        if (location_from != '*') {
            url += '&location_from=' + encodeURIComponent(location_from);
        }
        var duration = $('#search_box select[name=\'duration\']').attr('value');
        if (duration != '*') {
            url += '&duration=' + encodeURIComponent(duration);
        }
        var price_list = $('#search_box select[name=\'price_list\']').attr('value');
        if (price_list != '*') {
            url += '&price_list=' + encodeURIComponent(price_list);
        }
        //console.log(url);
        location = url;
    });
    $('#search_box .rad input').change(function() {
        $('#search_box .cate select').removeClass('active');
        $('#search_box .cate select').eq($(this).val() - 1).addClass('active');
    });
    //search widget
    $('.search_widget .cat_parent input').change(function() {
        console.log(11);
        $('.search_widget .cate select').removeClass('active');
        $('.search_widget .cate select').eq($(this).val() - 1).addClass('active');
    });
    $('#button-search-widget').bind('click', function() {
        url = $('base').attr('href') + 'tim-kiem';
        var category_id = $('.search_widget .cate select.active').attr('value');
        if (category_id != '*') {
            url += '?category_id=' + category_id;
        }
        var location_from = $('.search_widget select[name=\'location_from\']').attr('value');
        if (location_from != '*') {
            url += '&location_from=' + encodeURIComponent(location_from);
        }
        //console.log(url);
        location = url;
    });
    $('.quantity select').live('change', function() {
            $.ajax({
                url: 'index.php?route=checkout/cart',
                type: 'post',
                data: $(this),
                beforeSend: function() {
                    $('#messagebox').show();
                },
                success: function() {
                    location.reload();
                }
            });
        })
        /* Mega Menu */
    $('#menu .page ul > li > a + div').each(function(index, element) {
        // IE6 & IE7 Fixes
        if ($.browser.msie && ($.browser.version == 7 || $.browser.version == 6)) {
            var category = $(element).find('a');
            var columns = $(element).find('ul').length;
            $(element).css('width', (columns * 143) + 'px');
            $(element).find('ul').css('float', 'left');
        }
        var menu = $('#menu .page > ul').offset();
        var dropdown = $(this).parent().offset();
        i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#menu .page > ul').outerWidth());
        if (i > 0) {
            $(this).css('margin-left', '-' + (i + 5) + 'px');
        }
    });
    // IE6 & IE7 Fixes
    if ($.browser.msie) {
        if ($.browser.version <= 6) {
            $('#column-left + #column-right + #content, #column-left + #content').css('margin-left', '195px');
            $('#column-right + #content').css('margin-right', '195px');
            $('.box-category ul li a.active + ul').css('display', 'block');
        }
        if ($.browser.version <= 7) {
            $('#menu > ul > li').bind('mouseover', function() {
                $(this).addClass('active');
            });
            $('#menu > ul > li').bind('mouseout', function() {
                $(this).removeClass('active');
            });
        }
    }
    $('.success img, .warning img, .attention img, .information img').live('click', function() {
        $(this).parent().fadeOut('slow', function() {
            $(this).remove();
        });
    });
    //newsletter
    $("#dangky").click(function() {
        re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test($('#newsletter_email').val())) {
            alert('Vui lòng điền Email');
            $("#newsletter_email").val("");
            return;
        }
        $('.newsletter').submit();
    });
    /*Scroll top*/
    $(function() {
    	lastScrollTop = 0;
        $(window).scroll(function() {
            if ($(this).scrollTop() != 0) {
                $('#scrolltop').fadeIn();
	        	$(".fullpage").removeClass("nav-down").addClass("nav-up");
            } else {
                $('#scrolltop').fadeOut();
	       		$(".fullpage").removeClass("nav-up").addClass("nav-down");
            }
        });
    });
    $('#scrolltop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });
    $('.expand .quote-expand').click(function() {
        $(this).closest(".expand").toggleClass('expanded');
    });
    //
    $('.menu_sidebar .mtab li').live('click', function() {
        var a = $(this).find('a').attr('href');
        location.href = a;
        console.log(a);
    });
    //
    if (getWidthBrowser() < 768) {
        $('#scrolltop').remove();
        $('.customscroll').addClass('customscroll_mobile');
        $('.zopim').remove();
    }
    $('#menu').slicknav({
        prependTo: '#menu-mobile',
        closeOnClick: true
    });
    $('.menu_top_header').clickToggle(function() {
        $(this).find('i').toggle();
        var $html = $('#menu').html();
        $('.overlay').remove();
        $('body').prepend('<div class="overlay"><div class="menu_sidebar">' + $html + '</div></div>').addClass('float_sidebar');
    }, function() {
        $(this).find('i').toggle();
        $('body').removeClass('float_sidebar');
    });
    $('.introduction,.category-info-footer,.category-info,.article-content').bind('hover', function() {
        ondisfun(this);
    })
    $('.introduction,.category-info-footer,.category-info,.article-content').bind('mouseleave', function() {
        offdisfun(this);
    });

	$('.full').each(function(i, e) {
	    $(e).replaceWith('<figure class="full-width">' + $(e).outerHTML()+ '</figure>');
	});

});
jQuery.fn.outerHTML = function() {
  return jQuery('<div />').append(this.eq(0).clone()).html();
};
jQuery.fn.clickToggle = function(a, b) {
    var ab = [b, a];

    function cb() {
        ab[this._tog ^= 1].call(this);
    }
    return this.on("click", cb);
};

function scroll_top(top, stick) {
    var e = $(top),
        t = $(window),
        n = e.offset(),
        r = 0;
    t.scroll(function() {
        if (t.scrollTop() > n.top) {
            e.addClass(stick)
        } else {
            e.removeClass(stick)
        }
    })
}

function goToByScroll(e, s, t) {
    $(e).click(function(e) {
        $(t).trigger('click');
        $('html,body').animate({
            scrollTop: $(s).offset().top
        }, 100);
    });
}
//document.write(getWidthBrowser());
$(window).load(function() {
    if (getWidthBrowser() > 768) {
        $(".customscroll").mCustomScrollbar({
            autoHideScrollbar: true,
            theme: "light-thin"
        });
    }
});

function getURLVar(key) {
    var value = [];
    var query = String(document.location).split('?');
    if (query[1]) {
        var part = query[1].split('&');
        for (i = 0; i < part.length; i++) {
            var data = part[i].split('=');
            if (data[0] && data[1]) {
                value[data[0]] = data[1];
            }
        }
        if (value[key]) {
            return value[key];
        } else {
            return '';
        }
    }
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setTime(exdate.getTime() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = c_name + "=" + c_value;
}

function ondisfun(e) {
    $(e).css({
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none'
    });
    $(e).attr({
        'copy': 'return false',
        'onselectstart': 'return false',
        'oncut': 'return false',
        'onpaste': 'return false'
    });
}

function offdisfun(e) {
    $(e).css({
        '-webkit-user-select': '',
        '-moz-user-select': ''
    });
    $(e).removeAttr('copy').removeAttr('onselectstart').removeAttr('oncut').removeAttr('onpaste');
}

function getWidthBrowser() {
    var myWidth;
    if (typeof(window.innerWidth) == 'number') {
        //Non-IE
        myWidth = window.innerWidth;
        //myHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
        //myHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //IE 4 compatible
        myWidth = document.body.clientWidth;
        //myHeight = document.body.clientHeight;
    }
    return myWidth;
}

function showNumber(val) {
    if (isNaN(val)) return 0;
    var intPart = '';
    for (var i = 3, t = val.length; i < t + 3; i += 3) {
        intPart = val.slice(-3) + '.' + intPart;
        val = val.substring(0, t - i);
    }
    val = intPart.substring(0, intPart.length - 1);
    return val;
}
//isMobile
var ua = navigator.userAgent.toLowerCase(),
    platform = navigator.platform.toLowerCase(),
    platformName = ua.match(/ip(?:ad|od|hone)/) ? 'ios' : (ua.match(/(?:webos|android)/) || platform.match(/mac|win|linux/) || ['other'])[0],
    isMobile = /ios|android|webos/.test(platformName);