<template>
    <div>
        <app-stock v-for="stock in stockPortfolio" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import PortfolioStock from './PortfolioStock.vue';

    export default {
        computed: {
            ...mapGetters(['stockPortfolio'])
        },
        components: {
            appStock: PortfolioStock
        }
    };
</script>