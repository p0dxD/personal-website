// var source = $('#content-template').html();
// var template = Handlebars.compile(source);

// // var content ={
// // 	"info": "Handlebars",
// // 	"data": "DATA",
// // 	"more": "MORE DATA"
// // };

// var people = {
// 	info: "INFO",
// 	data: "DATA",
// 	more: "MORE"
// 	,
// 	users: [{
// 		person: {
// 			name: "Jos",
// 		},
// 		date: 35,
// 		initial: "A"
// 	},{
// 		person: {
// 			name: "Jes",
// 		},
// 		date: 34,
// 		initial: "B"

// 	}]
// };


// Handlebars.registerHelper("fullName", function(person){
// 	return person.name + " " + this.initial;
// });

// // $(".content").html(template(people));
// Handlebars.registerPartial("sentence", $("#sentence-template").html());


// var favoriteFruits = {
// 	allfruits: ["Tangerine", "Mango", "Banana"]
// };


// console.log(favoriteFruits.allfruits[0]);




// Handlebars.registerPartial("fruits", $("#fruits-template").html());




// $(".content").html(template(people));


(function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "150% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;


      //If we detect the end of the page
	var docHeight = document.body.offsetHeight;

	var winheight = window.innerHeight;

	var scrollpoint = window.scrollY;

	if ((scrollpoint + winheight) >= docHeight) {
		console.log("you're at the bottom");
		//Do stuff for bottom
	}
    });
  };

})();


  var timer;
  $(window).on('scroll', function(e) {
    // Apply blur filter to your elements by adding a class
    $('.intro').addClass('blurry');
    clearTimeout(timer);
    timer = setTimeout(onScrollEnd, 1);
  });
  function onScrollEnd() {
    // Remove blur filter from your elements by removing a class
    $('.intro').removeClass('blurry');
    console.log('Stopped Scrolling'); 
  }


// function showFooter(){
	
// }


//THE SCRIPS
// 	<script id = "content-template" type="text/x-handlebars-template">
		
// 		<div class="content">
		
// 	<table>
// 		<thead>
// 			<th>Name</th>
// 			<th>Initial</th>
// 			<th>Date</th>
// 		</thead>

// 		<tbody>
// 		{{#users}}
// 			<tr>
// 				<td>{{fullName person}}</td>
// 				<td>{{initial}}</td>
// 				<td>{{date}}</td>
// 			</tr>
// 			{{/users}}
// 		</tbody>
// 	</table>

// 	{{>sentence}}
// 	</script>

// 	<div class="content">
		
// 	</div>

// <script id = "sentence-template" type="text/x-handlebars-template">

// 	<p>This is a test template made in {{info}}. Other data includes {{data}} {{more}}.</p>
// 	{{>fruits}}
// </script>
// <script id = "fruits-template" type="text/x-handlebars-template">
// List:
// {{#each allfruits}}
// <li>{{this}}</li>
// {{/each}}
// </script>