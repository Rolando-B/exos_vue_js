new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods:{
        	alertMe:function(){
        		alert("Alert !");
        	},
        	updateVal:function(event){
        		this.value=event.target.value;
        	}
        }
});