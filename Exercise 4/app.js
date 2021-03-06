new Vue({
  el: '#exercise',
  data: {
  	effectClasses:{
  		highlight:true,
  		shrink:false
  	},
  	class3:'',
  	class4:'',
  	isVisible:true,
  	progressBar:{
  		width:'0px',
  		backgroundColor:'gray'
  	}
  },
  methods: {
    startEffect: function() {
    	var vm = this;
    	setInterval(function(){
    		vm.effectClasses.highlight = !vm.effectClasses.highlight;
    		vm.effectClasses.shrink = !vm.effectClasses.shrink;
    	},1000);
    },
    startProgress: function(){
    	var vm = this;
    	var width = 0
    	setInterval(function(){
    		width += 10;
    		vm.progressBar.width = width + 'px';
    	},200);
    }
  }
});
