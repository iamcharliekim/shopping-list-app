$(function() {
// FORM-SUBMIT HANDLER 
	$('#js-shopping-list-form').submit(function(e){
		e.preventDefault();
		
		let listItem = $('#shopping-list-entry').val();

		let liElements = 
		`<li>
			<span class="shopping-item">${listItem}</span>
			<div class="shopping-item-controls">
			  <button class="shopping-item-toggle">
				<span class="button-label">check</span>
			  </button>
			  <button class="shopping-item-delete">
				<span class="button-label">delete</span>
			  </button>
			</div>
		  </li>`;

		$('.shopping-list').append(liElements);

		$('#shopping-list-entry').val('');
	})

// CHECK-BTN HANDLER
	$('.shopping-list').on('click', '.shopping-item-toggle', function(e){
		$(e.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
	})

// DELETE-BTN HANDLER
	$('.shopping-list').on('click', '.shopping-item-delete', function(e){
		$(e.target).closest('li').remove();
	})
});
