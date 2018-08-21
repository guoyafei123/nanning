<template>
    
</template>

<script>
    import{mapState} from "vuex";
    export default {
        methods: {
        open(item) {
            this.$alert('<embed width="100%" height="600px" type="" src="'+item.url+'" ></embed>', item.name, {
                dangerouslyUseHTMLString: true,
                customClass:'pdfstyle',
                showConfirmButton:false
            });
        }
        },
        computed:mapState([
			'topdf',
		]),
		watch:{
			topdf(){
				this.open(this.topdf);
			}
		},
    }
</script>