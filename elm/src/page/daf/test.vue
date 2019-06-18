<template>
    <div>
        <div>
            <span @click="handleClick('sh')">审核中</span>
            <span @click="handleClick('wc')">已完成</span>
            <span @click="handleClick('sb')">失败</span>
        </div>
        <div v-for="(item,index) in arrData" :key="item+index">
            <template v-if="item.flag == flag">
                {{item.text}}
            </template>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            flag: null,
            arrData: [
                {flag:'sh',text:'审核中'},
                {flag:'wc',text:'已完成'},
                {flag:'sb',text:'失败'},
            ]
        }
    },
    methods:{
        handleClick(flag){
            this.flag = flag;
        }
    }
}
</script>
