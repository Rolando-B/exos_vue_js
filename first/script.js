new Vue({
	el: '#app',
	data:{
		title:"Hello World !",
		link:"http://google.fr"
	},
	methods:{
		changeTitle: function(event){
			this.title = event.target.value;
		},
		sayHello: function(){
			return this.title;
		}
	}
});