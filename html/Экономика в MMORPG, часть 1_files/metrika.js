(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter21060079 = new Ya.Metrika({id:21060079,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");


function google_pubs()
{
	$('#ads').html('<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px;" data-ad-client="ca-pub-1190653095983187" data-ad-slot="5817193476"></ins>');
	(adsbygoogle = window.adsbygoogle || []).push({});
}

function google_menu()
{
	$('#footer-margin').html('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>');
	$('#ads2').html('<ins class="adsbygoogle" style="display:inline-block;width:200px;height:200px" data-ad-client="ca-pub-1190653095983187" data-ad-slot="2091671076"></ins>');
	(adsbygoogle = window.adsbygoogle || []).push({});
}

function rtbsystem()
{
	var RtbSystemDate = new Date();
	var s = '<script type="text/javascript" async src="http://code.rtbsystem.com/3187.js?t='+RtbSystemDate.getYear()+RtbSystemDate.getMonth()+RtbSystemDate.getDay()+RtbSystemDate.getHours() + '" charset="utf-8" ></script>'
	$('#ads').html('<div id="RTBDIV_3187"></div>'+s);
}