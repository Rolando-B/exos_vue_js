new Vue({
	el: '#exercise',
	data:{
		name:"Bastien",
		age:21,
		img:"https://pbs.twimg.com/profile_images/805774049892855808/Qw1m1Uvo.jpg"
	},
	methods:{
		sayNameAndAge:function(){
			return this.name+" ("+this.age+")";
		},
		sayAge3:function(){
			return this.age*3;
		},
		sayRandomNum:function(){
			return Math.random();
		}
	}
});