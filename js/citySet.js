function SelCityWork(obj,e) {
    var ths = obj;
    var dal = '<div class="_citys_one"><span title="关闭" id="cColse_one" >×</span><ul id="_citysheng_one" class="_citys0_one"><li class="citySel_one  check_one" >请选择</li><li class="check_two">请选择</li></ul><div id="_citys0_one" class="_citys1_one"></div><div style="display:none" id="_citys1_one" class="_citys1_one"></div><div style="display:none" id="_citys2_one" class="_citys1_one"></div></div>';
    Iput_one.show({ id: ths, event: e, content: dal,width:"470"});
    $("#cColse_one").click(function () {
        Iput_one.colse();
    });
    var tb_province = [];
    var b = province;
    for (var i = 0, len = b.length; i < len; i++) {
        tb_province.push('<a data-level="0" data-id="' + b[i]['id'] + '" data-name="' + b[i]['name'] + '">' + b[i]['name'] + '</a>');
    }
    $("#_citys0_one").append(tb_province.join(""));
    $("#_citys0_one a").click(function () {
        var g = getCity($(this));
        $("#_citys1_one a").remove();
        $("#_citys1_one").append(g);
        $("._citys1_one").hide();
        $("._citys1_one:eq(1)").show();
        $("#_citys0_one a,#_citys1_one a,#_citys2_one a").removeClass("AreaS_one");
        $(this).addClass("AreaS_one");
        var lev = $(this).data("name");
        ths.value = $(this).data("name");
        $('.check_one').text($(this).text());
        if (document.getElementById("hcity_one") == null) {
            var hcitys = $('<input>', {
                type: 'hidden',
                name: "hcity",
                "data-id": $(this).data("id"),
                id: "hcity_one",
                val: lev
            });
            $(ths).after(hcitys);
        }
        else {
            $("#hcity_one").val(lev);
            $("#hcity_one").attr("data-id", $(this).data("id"));
        }
        $("#_citys1_one a").click(function () {
            $("#_citys1_one a,#_citys2_one a").removeClass("AreaS_one");
            $(this).addClass("AreaS_one");
            var lev =  $(this).data("name");
            if (document.getElementById("hproper_one") == null) {
                var hcitys = $('<input>', {
                    type: 'hidden',
                    name: "hproper",
                    "data-id": $(this).data("id"),
                    id: "hproper_one",
                    val: lev
                });
                $(ths).after(hcitys);
            }
            else {
                $("#hproper_one").attr("data-id", $(this).data("id"));
                $("#hproper_one").val(lev);
            }
            var bc = $("#hcity_one").val();
            ths.value = bc + $(this).data("name");
            // var text = $('#city_one').val();
            // if(text.length > 12){
            //     text = text.substring(0,12)+ "...";
            // }
            // $('.name_work').html(text);
            Iput_one.colse();
            // var ar = getArea($(this));

            // $("#_citys2_one a").remove();
            // $("#_citys2_one").append(ar);
            // $("._citys1_one").hide();
            // $("._citys1_one:eq(2)").show();


            // $("#_citys2_one a").click(function () {
            //     $("#_citys2_one a").removeClass("AreaS_one");
            //     $(this).addClass("AreaS_one");
            //     var lev = $(this).data("name");
            //     if (document.getElementById("harea_one") == null) {
            //         var hcitys = $('<input>', {
            //             type: 'hidden',
            //             name: "harea",
            //             "data-id": $(this).data("id"),
            //             id: "harea_one",
            //             val: lev
            //         });
            //         $(ths).after(hcitys);
            //     }
            //     else {
            //         $("#harea_one").val(lev);
            //         $("#harea_one").attr("data-id", $(this).data("id"));
            //     }
            //     var bc = $("#hcity_one").val();
            //     var bp = $("#hproper_one").val();
            //     ths.value = bc + bp + $(this).data("name");

            // });

        });
    });
    $("#_citysheng_one li").click(function () {
        $("#_citysheng_one li").removeClass("citySel_one");
        $(this).addClass("citySel_one");
        var s = $("#_citysheng_one li").index(this);
        $("._citys1_one").hide();
        $("._citys1_one:eq(" + s + ")").show();
    });
}

function getCity(obj) {
    var c = obj.data('id');
    var e = province;
    var f;
    var g = '';
    for (var i = 0, plen = e.length; i < plen; i++) {
        if (e[i]['id'] == parseInt(c)) {
            f = e[i]['city'];
            break
        }
    }
    for (var j = 0, clen = f.length; j < clen; j++) {
        g += '<a data-level="1" data-id="' + f[j]['id'] + '" data-name="' + f[j]['name'] + '" title="' + f[j]['name'] + '">' + f[j]['name'] + '</a>'
    }
    $("#_citysheng_one li").removeClass("citySel_one");
    $("#_citysheng_one li:eq(1)").addClass("citySel_one");
    return g;
}
function getArea(obj) {
    var c = obj.data('id');
    var e = area;
    var f = [];
    var g = '';
    for (var i = 0, plen = e.length; i < plen; i++) {
        if (e[i]['pid'] == parseInt(c)) {
            f.push(e[i]);
        }
    }
    for (var j = 0, clen = f.length; j < clen; j++) {
        g += '<a data-level="1" data-id="' + f[j]['id'] + '" data-name="' + f[j]['name'] + '" title="' + f[j]['name'] + '">' + f[j]['name'] + '</a>'
    }

    $("#_citysheng_one li").removeClass("citySel_one");
    $("#_citysheng_one li:eq(2)").addClass("citySel_one");
    return g;
}