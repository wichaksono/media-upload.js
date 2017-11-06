jQuery(document).ready(function($) {
  // alert('alp');
    $('.parent-section').on('click', '.upload-button', function(e) {
        e.preventDefault();
        //console.log('e');
        var id_input = $(this).data('id');

        var image = wp.media({
            title: 'Upload Image',
            // mutiple: true if you want to upload multiple files at once
            multiple: false
        }).open()
            .on('select', function(e){
                // This will return the selected image from the Media Uploader, the result is an object
                var uploaded_image = image.state().get('selection').first();
                // We convert uploaded_image to a JSON object to make accessing it easier
                // Output to the console uploaded_image
                // console.log(uploaded_image);
                var image_id = uploaded_image.toJSON().id;
                var image_url = uploaded_image.toJSON().url;
                // Let's assign the url value to the input field
                $(id_input + '-id').val(image_id);
                $(id_input + '-pre').html('<img src="'+image_url+'">');
            });
    });
    
    // clear form
    $('.parent-section').on('click', '.button-clear', function(e) {
        e.preventDefault();
        var id_input = $(this).data('id');
        $(id_input + '-id').val('');
        $(id_input + '-pre').html('');
    });
});
