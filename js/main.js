
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   var y = document.getElementById("togglebtn");
// if(y.className==="fa fa-bars"){
// y.className="fa fa-times";
// }else{
// y.className="fa fa-bars";
// }
  
//   if (x.className.indexOf("responsive") == -1) {
//     x.className += " responsive";
//   } else {
//     x.className = x.className.replace(" responsive", "");
//   }
// }
if (jQuery) {  
  console.log('Jquery Loaded');
} else {
  console.log('Jquery Not Loaded');
}
console.log("js works"); 

jQuery(document).ready(function($){
  console.log("jq works");
  $('.memeber-page-service-submit-btn').click(function(e){
      e.preventDefault();
      console.log('Form Submitted');

      let formSelected = e.currentTarget.parentElement;
     // let product_id   = document.getElementById(formSelected.id + '-hidden').value;

     // let values = [];

     // values = Array.from( document.querySelectorAll( 'input[type=checkbox]:checked' )).map(item=>item.value);

       let name   = document.getElementById('name').value;
       let surname   = document.getElementById('surname').value;
       let address   = document.getElementById('address').value;
       let telnum   = document.getElementById('telnum').value;
      
          $.ajax({
              // Pass the admin-ajax.php into url.
              url: ajax_object.ajax_url,
              data: {
                  'action': 'ceylonms_jobs_add',
                  'name': name,
                  'surname': surname,
                  'address': address, 
                  'telnum': telnum
              },
              type: 'post',
              success: function(res){
                  console.log(res);
                  $('.blog-description').html(res);
                 // window.location.reload();
              },
              error: function(err){
                  console.log(err);
              },
          });
      

      //formSelected.reset();
      
      // console.log(formSelected);
      // console.log(values);
      
  });
});