$(document).foundation()

$(document).ready(function(){
	
	var state = "open";
	var popup_state = "closed";
	var close_btn = "false";
	
	$(function() {
            $('.slc_category').change(function() {
                console.log($(this).val());
            }).multipleSelect({
                width: '100%'
            });
        });

	$(".search_img_details").hide();
	$(".search_img_popup").hide();


	$( ".search_img" ).click(
	  function() {
	  	$(".search_img_popup").hide();
	   	$(this).parent().find(".search_img_popup").css("display","block");

	   	return false;
	  }
	);

	$( ".close_popup" ).click(
	  function() {
	    $(this).parents().find(".search_img_popup").css("display","none");
	  
	  }
	);
	

	$( ".search_results_img" ).hover(
	  function() {
	    
	    $(this).find(".search_img_details").css("display","block");

	  }, function() {
	    $(".search_img_details").hide();

	  }
	);
	
	$( ".accordion-title" ).click(function() {

	   
	  if(state === "closed" || !$(this).parent().hasClass('is-active')) {
		  	console.log("active not found");

			$(this).parent().addClass('is-active');
			$(this).parent().find('.accordion-content').show();
			if($(this).parent().hasClass('search_bar_item')){

				$('.search_results').addClass('large-9');
				$('.search_img_popup').css('width', '70%');
				$(".search_img_popup").css("left","22.32rem");
			}
			
			state = "open";

	  }  else {
		  if ( $(this).parent().hasClass('is-active')) {
	  		console.log("active found");
	  		$(this).parent().removeClass('is-active');
		    $(this).parent().find('.accordion-content').hide();

		    if($(this).parent().hasClass('search_bar_item')){

			    $('.search_results').removeClass('large-9');
			    $('.search_img_popup').css('width', '88%');;
			    $(".search_img_popup").css("left","5.39rem");
			}
			    state = "closed";

		  } 
		}
	});

	$(".hide_intro").click(function(){
		if($(this).parent().hasClass('active')) {
			
			$(this).parent().removeClass('active');
			$(".intro_section").css("display","none");
			$(".contributor_head").css("margin-top","80px");

		} else {
			$(this).parent().addClass('active');
			$(".intro_section").css("display","block");	
			$(".contributor_head").css("margin-top","0px");

		}
	});

	//$(".sales_filter").hide();
	$(".statement_filter").hide();
	$(".license_filter").hide();
	$(".files_filter").hide();

	$("#report_slc").on('change',function(){
		if($(this).val().length > 1) {
			
			if($(this).val() === 'sales'){
				
				$(".statement_filter").hide();
				$(".license_filter").hide();
				$(".files_filter").hide();	

				$(".sales_filter").show();
					
			}

			if($(this).val() === 'statement'){
				
				$(".statement_filter").show();
				$(".license_filter").hide();
				$(".files_filter").hide();
				$(".sales_filter").hide();
					
			}
			
			if($(this).val() === 'license'){
				
				$(".statement_filter").hide();
				$(".license_filter").show();
				$(".files_filter").hide();
				$(".sales_filter").hide();
					
			}
			if($(this).val() === 'files'){
				
				$(".statement_filter").hide();
				$(".license_filter").hide();
				$(".files_filter").show();
				$(".sales_filter").hide();
					
			}
			


		} else {
			$(".sales_filter").hide();
			$(".statement_filter").hide();
			$(".license_filter").hide();
			$(".files_filter").hide();
		}

	})

	$('.select_all').click(function (){
		
		$('.select_file').prop('checked', $(this).prop("checked"));
		
	});
	
	$('.question_text').hide();
	$('.question_this').hover(
	  function() {
	    
	    if(($(document).width()/2) >= $(this).offset().left ) {
	     	$(this).parents('.question_wrap').find('.question_text').css( "left", "0" );

	     } else {
	     	$(this).parents('.question_wrap').find('.question_text').css( "right", "0" );
	     }
	      $(this).parents('.question_wrap').find('.question_text').show();
	   

	  }, function() {
	   $('.question_text').hide();
	   
	  }
	);
	
	
	$('.question_close').click(function (){
		$('.question_text').hide();
	});
	$('.similar-images').slick({
	        infinite: true,
	          slidesToShow: 3,
	          slidesToScroll: 3
	});



});
   
$(".add_keywords").hide();
$(".set_price").hide();
$(".category").hide();
$(".image_type").hide();
$(".image_subtype").hide();
$(".orientation").hide();
$(".attach_release").hide();
$(".same_shoot").hide();
$(".model_notification").hide();
$(".people").hide();
$(".set_price").hide();

$("#edit_slc").on('change',function(){
	if($(this).val().length > 1) {
		
		if($(this).val() === 'Title'){
			
			$(".title").show();
			$(".add_keywords").hide();
			$(".set_price").hide();
			$(".image_type").hide();
			$(".image_subtype").hide();
			$(".orientation").hide();
			$(".attach_release").hide();
			$(".same_shoot").hide();
			$(".model_notification").hide();
			$(".people").hide();
			$(".set_price").hide();
			$(".category").hide();
		}

		if($(this).val() === 'Keywords'){
			
			$(".title").hide();
			$(".add_keywords").show();
			$(".set_price").hide();
			$(".image_type").hide();
			$(".image_subtype").hide();
			$(".orientation").hide();
			$(".attach_release").hide();
			$(".same_shoot").hide();
			$(".model_notification").hide();
			$(".people").hide();
			$(".set_price").hide();
			$(".category").hide();
				
		}
		
		if($(this).val() === 'Price'){
			
			$(".title").hide();
			$(".add_keywords").hide();
			$(".set_price").show();
			$(".image_type").hide();
			$(".image_subtype").hide();
			$(".orientation").hide();
			$(".attach_release").hide();
			$(".same_shoot").hide();
			$(".model_notification").hide();
			$(".people").hide();
			$(".category").hide();
			
		}
		if($(this).val() === 'Category'){
			
			$(".title").hide();
			$(".add_keywords").hide();
			$(".set_price").hide();
			$(".category").show();
			$(".image_type").hide();
			$(".image_subtype").hide();
			$(".orientation").hide();
			$(".attach_release").hide();
			$(".same_shoot").hide();
			$(".model_notification").hide();
			$(".people").hide();
		}
		if($(this).val() === 'Image Type'){
			
			$(".title").hide();
			$(".add_keywords").hide();
			$(".set_price").hide();
			$(".image_type").show();
			$(".image_subtype").hide();
			$(".orientation").hide();
			$(".attach_release").hide();
			$(".same_shoot").hide();
			$(".model_notification").hide();
			$(".people").hide();
			$(".set_price").hide();
			$(".category").hide();
				
		}
		if($(this).val() === 'Image Subtype'){
			
			$(".title").hide();
			$(".add_keywords").hide();
			$(".set_price").hide();
			$(".image_type").hide();
			$(".image_subtype").show();
			$(".orientation").hide();
			$(".attach_release").hide();
			$(".same_shoot").hide();
			$(".model_notification").hide();
			$(".people").hide();
			$(".set_price").hide();
			$(".category").hide();
		}
		if($(this).val() === 'Orientation'){
			
			$(".title").hide();
			$(".add_keywords").hide();
			$(".set_price").hide();
			$(".image_type").hide();
			$(".image_subtype").hide();
			$(".orientation").show();
			$(".attach_release").hide();
			$(".same_shoot").hide();
			$(".model_notification").hide();
			$(".people").hide();
			$(".set_price").hide();
            $(".category").hide();				
				
		}
		if($(this).val() === 'People'){
			
			$(".title").hide();
			$(".add_keywords").hide();
			$(".set_price").hide();
			$(".image_type").hide();
			$(".image_subtype").hide();
			$(".orientation").hide();
			$(".attach_release").hide();
			$(".same_shoot").hide();
			$(".model_notification").hide();
			$(".people").show();
			$(".set_price").hide();
			$(".category").hide();
		}
		if($(this).val() === 'Attach Release'){
			
			$(".title").hide();
			$(".add_keywords").hide();
			$(".set_price").hide();
			$(".image_type").hide();
			$(".image_subtype").hide();
			$(".orientation").hide();
			$(".attach_release").show();
			$(".same_shoot").hide();
			$(".model_notification").hide();
			$(".people").hide();
			$(".set_price").hide();
			$(".category").hide();
				
		}
		if($(this).val() === 'Same Shoot'){
			
			$(".title").hide();
			$(".add_keywords").hide();
			$(".set_price").hide();
			$(".image_type").hide();
			$(".image_subtype").hide();
			$(".orientation").hide();
			$(".attach_release").hide();
			$(".same_shoot").show();
			$(".model_notification").hide();
			$(".people").hide();
			$(".set_price").hide();
			$(".category").hide();
		}
		if($(this).val() === 'Model Notification'){
			
			$(".title").hide();
			$(".add_keywords").hide();
			$(".set_price").hide();
			$(".image_type").hide();
			$(".image_subtype").hide();
			$(".orientation").hide();
			$(".attach_release").hide();
			$(".same_shoot").hide();
			$(".model_notification").show();
			$(".people").hide();
			$(".set_price").hide();
			$(".category").hide();
		}
		


	} else {
		$(".title").hide();
		$(".add_keywords").hide();
		$(".set_price").hide();
		$(".image_type").hide();
		$(".image_subtype").hide();
		$(".orientation").hide();
		$(".attach_release").hide();
		$(".same_shoot").hide();
		$(".model_notification").hide();
		$(".people").hide();
		$(".set_price").hide();
		$(".category").hide();
	}

});
$('.payment_type').hide();
$('#bank').show();
$("#slc_payment").on('change',function(){
	if($(this).val()=== 'bank'){
		$('.payment_type').hide();
		$('#bank').show();
	} else if ($(this).val()=== 'mobile'){
		$('.payment_type').hide();
		$('#mobile').show();
	} else {
		$('.payment_type').hide();
		$('#email').show();
	}
});
;(function($) {

		  // Browser supports HTML5 multiple file?
		  var multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
		      isIE = /msie/i.test( navigator.userAgent );

		  $.fn.customFile = function() {

		    return this.each(function() {

		      var $file = $(this).addClass('custom-file-upload-hidden'), // the original file input
		          $wrap = $('<div class="file-upload-wrapper">'),
		          $input = $('<input type="text" class="file-upload-input" placeholder="Upload your identification details in JPEG, PNG, PDF, TIFF format. The file should not be bigger than 2MB" />'),
		          // Button that will be used in non-IE browsers
		          $button = $('<button type="button" class="file-upload-button">Browse</button>'),
		          // Hack for IE
		          $label = $('<label class="file-upload-button" for="'+ $file[0].id +'">Browse</label>');

		      // Hide by shifting to the left so we
		      // can still trigger events
		      $file.css({
		        position: 'absolute',
		        left: '-9999px'
		      });

		      $wrap.insertAfter( $file )
		        .append( $file, $input, ( isIE ? $label : $button ) );

		      // Prevent focus
		      $file.attr('tabIndex', -1);
		      $button.attr('tabIndex', -1);

		      $button.click(function () {
		        $file.focus().click(); // Open dialog
		      });

		      $file.change(function() {

		        var files = [], fileArr, filename;

		        // If multiple is supported then extract
		        // all filenames from the file array
		        if ( multipleSupport ) {
		          fileArr = $file[0].files;
		          for ( var i = 0, len = fileArr.length; i < len; i++ ) {
		            files.push( fileArr[i].name );
		          }
		          filename = files.join(', ');

		        // If not supported then just take the value
		        // and remove the path to just show the filename
		        } else {
		          filename = $file.val().split('\\').pop();
		        }

		        $input.val( filename ) // Set the value
		          .attr('title', filename) // Show filename in title tootlip
		          .focus(); // Regain focus

		      });

		      $input.on({
		        blur: function() { $file.trigger('blur'); },
		        keydown: function( e ) {
		          if ( e.which === 13 ) { // Enter
		            if ( !isIE ) { $file.trigger('click'); }
		          } else if ( e.which === 8 || e.which === 46 ) { // Backspace & Del
		            // On some browsers the value is read-only
		            // with this trick we remove the old input and add
		            // a clean clone with all the original events attached
		            $file.replaceWith( $file = $file.clone( true ) );
		            $file.trigger('change');
		            $input.val('');
		          } else if ( e.which === 9 ){ // TAB
		            return;
		          } else { // All other keys
		            return false;
		          }
		        }
		      });

		    });

		  };

		  // Old browser fallback
		  if ( !multipleSupport ) {
		    $( document ).on('change', 'input.customfile', function() {

		      var $this = $(this),
		          // Create a unique ID so we
		          // can attach the label to the input
		          uniqId = 'customfile_'+ (new Date()).getTime(),
		          $wrap = $this.parent(),

		          // Filter empty input
		          $inputs = $wrap.siblings().find('.file-upload-input')
		            .filter(function(){ return !this.value }),

		          $file = $('<input type="file" id="'+ uniqId +'" name="'+ $this.attr('name') +'"/>');

		      // 1ms timeout so it runs after all other events
		      // that modify the value have triggered
		      setTimeout(function() {
		        // Add a new input
		        if ( $this.val() ) {
		          // Check for empty fields to prevent
		          // creating new inputs when changing files
		          if ( !$inputs.length ) {
		            $wrap.after( $file );
		            $file.customFile();
		          }
		        // Remove and reorganize inputs
		        } else {
		          $inputs.parent().remove();
		          // Move the input so it's always last on the list
		          $wrap.appendTo( $wrap.parent() );
		          $wrap.find('input').focus();
		        }
		      }, 1);

		    });
		  }

}(jQuery));

$('.custom_file_input').customFile();