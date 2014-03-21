jQuery(function ($) {

    function showItems(templateUrl, dataUrl, parentContainer) {

        $.ajax({
            url: templateUrl,
            cache: true,
            success: function(data) {
                var compiledTemplate = Handlebars.compile(data);
                $.getJSON(dataUrl, function(data) {
                        parentContainer.html('').append(compiledTemplate(data.items));
                });
            },
            error: function(data) {
                alert("Error in loading template!");
            }
        });

    }

    $('#searchContainer').hide();
    showItems("assets/tpl/product-list-template.html","assets/data/featured-products.json", $("ul#items-list"));

    $('#srch-btn').on("click", function(e) {
        $('#mainContainer').hide();
        $("#searchContainer").show();
        showItems("assets/tpl/search-list-template.html","assets/data/search-results.json", $("ul#items-result-list"));
        e.preventDefault();
    });
});