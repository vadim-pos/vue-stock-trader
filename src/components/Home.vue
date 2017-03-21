<template>
    <div>
        <h1>Welcome to Stock Trader</h1>
        <p>Trade and View your Portfolio</p>
        <p>Click on 'End Day' to begin new day!</p>
        <p>Save and Load your data to continue trading</p>
        <hr>
        <p>Your Funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>