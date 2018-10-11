(function($){
	$(document).ready(function() {	
		// alert("test");
		$( "#AddColor" ).click(function() {
			hexColor = $('#hexcolor').val();
			hexClass =  hexColor.replace("#","");
			var isHex  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hexColor);
			if (isHex){
				$('.colorpallete').append('<div class="color-swatch element'+hexClass+'"></div>');
				$('.element'+hexClass).css( 'background-color', hexColor );
				
				$('#hexcolor').val("");
			} else {			
				alert("Please give a valid hex color. Example: #cecece");	
			}

		});
		
		$('body').on('click', '#colorlist div', function() {
			$('.color-swatch').removeClass("selected");
			$(this).addClass("selected");
			
			var selectedColor = $(this).css('backgroundColor');
			hexc(selectedColor);
			$('#hexcolor').val(color);
			
			enableEdit();
		});
		
		$( "#DeleteColor" ).click(function() {
			$('.color-swatch.selected').remove();
			$('#hexcolor').val("");
			disableEdit();
		});
		
		$( "#SaveColor" ).click(function() {
			hexColor = $('#hexcolor').val();
			var isHex  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hexColor);
			$('#hexcolor').val("");
			if (isHex){
				$('.color-swatch.selected').css( 'background-color', hexColor );
			} else {			
				alert("Please give a valid hex color. Example: #cecece");	
			}
			disableEdit();
		});
		
		function enableEdit(){
			$('#SaveColor').removeAttr('disabled');
			$('#DeleteColor').removeAttr('disabled');
		}
		
		function disableEdit(){
			$('#SaveColor').prop('disabled', true);
			$('#DeleteColor').prop('disabled', true);
		}
		
		function hexc(colorval) {
			var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
			delete(parts[0]);
			for (var i = 1; i <= 3; ++i) {
			parts[i] = parseInt(parts[i]).toString(16);
				if (parts[i].length == 1) parts[i] = '0' + parts[i];
			}
			color = '#' + parts.join('');
		}
	});
})(jQuery);