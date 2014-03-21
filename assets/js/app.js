jQuery(function ($) {

    function showItems(templateUrl, dataUrl, parentContainer) {

        parentContainer.html('');

        if ($('#err_msg')) $('#err_msg').remove();

        $.ajax({
            url: templateUrl,
            cache: true,
            success: function(data) {
                var compiledTemplate = Handlebars.compile(data);
                $.getJSON(dataUrl, function(data) {
                        parentContainer.html('').append(compiledTemplate(data.items));
                }).fail(function (jqXHR, textStatus) {
                    $('#app-header').after("<div id=\"err_msg\" class=\"alert alert-danger alert-dismissable\">Can't to get a data</div>");
                });
            },
            error: function(data) {
                $('#app-header').after("<div id=\"err_msg\" class=\"alert alert-danger alert-dismissable\">Error during loading template</div>");
            }
        });

    }



    $("#slider").slider({ range: true}, {values: [10, 90]});
    $('#searchContainer').hide();
    showItems("assets/tpl/product-list-template.html","assets/data/featured-products.json", $("ul#items-list"));

    $("#srch-btn, #fnd-now-btn").on("click", function(e) {
        $('#featured-product-carousel').slideUp('slow', function(){
            $("#searchContainer").show();
            showItems("assets/tpl/search-list-template.html","assets/data/search-results.json", $("ul#items-list"));
        });
        e.preventDefault();
    });
});