        /* attach a submit handler to the form */
        $("#formoid").submit(function(event) {

        let divArray1 = Array.prototype.slice.call(document.querySelectorAll(".filter-options1"));
        let divArray2 = Array.prototype.slice.call(document.querySelectorAll(".filter-options2"));
        let divArray3 = Array.prototype.slice.call(document.querySelectorAll(".filter-options3"));
          /* stop form from submitting normally */
          event.preventDefault();

          /* get the action attribute from the <form action=""> element */
          let $form = $( this ),
              url = $form.attr( 'action' );

          /* Send the data using post with element id firstname, lphonenumber along with your array*/
          let posting = $.post( url, { name: $('#title').val(), name2: $('#price').val(), name3: $('#counter').val(), name4: $('#lphonenumber').val(), extradata: array } );

          /* Alerts the results */
          posting.done(function( data ) {
            alert('success');
          });
        });