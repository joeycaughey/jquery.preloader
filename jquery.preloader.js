var Loading = {
    show: function() {
        $("body").prepend(
            $('<div id="preloader">').append(
                $('<div id="status">').html("Loading...").append(
                    $('<span class="percentage">')
                )
            )
        );
        $("#preloader").show();
        $('#status').show();
        //$('body').css({'overflow':'hidden'});
    },
    hide: function() {
        setTimeout(function() {
            $('#status').fadeOut();
            $('#preloader').delay(5).fadeOut('slow').remove();;
            $('body').delay(5).css({ 'overflow': 'visible' });
        }, Preloader.preload_images.length * 300);

    }
}

$(document).ready(function() {
    $('html, body').css({ 'overflow': 'hidden' });
    Preloader.init();
});

var Preloader = {
    images_loaded: 0,
    preloader_loaded_percentage: 0,
    preload_images: [
        // Your images here
    ],
    init: function() {
        var self = this;
        // Show preload screen 
        Loading.show();

        console.log("Loading ", self.preload_images.length, " Images");

        $.each(self.preload_images, function(i, image) {
            var img = new Image();

            $(img).load(function() {
                self.images_loaded++;
                self.preloader_loaded_percentage = self.images_loaded * 100 / self.preload_images.length;

                console.log("Loaded", self.images_loaded, " : ", self.preloader_loaded_percentage, "%");

                $("#preloader span.percentage").animate({
                    width: self.preloader_loaded_percentage + "%"
                }, 250);

                // When Image Is Loaded
                if (self.images_loaded === self.preload_images.length) {
                    console.log("Images Loaded");
                    $("#preloader span.percentage").animate({
                        width: "100%"
                    }, 10)
                    Loading.hide();
                }
            })
            img.src = image;
        });
    }
}
