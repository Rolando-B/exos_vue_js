new Vue({
    el: '#exercise',
    data: {
        value: 0,
    },
    computed:{
    	result:function(){
    		if (this.value<37)
    			return 'not there yet';
    	}
    },
    watch:{
    	value:function(newVal){
    		var vm = this;
    		setTimeout(function(){
    			vm.value = 0;
    		},5000);
    	}
    }
});