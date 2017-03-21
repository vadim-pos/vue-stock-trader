<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            
            <div class="panel-heading">
                <h3 class="panel-title">{{ stock.name }}
                    <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
                </h3>
            </div>

            <div class="panel-body">
                <div class="pull-left" style="width: 50%">
                    <input
                        v-model="quantity"
                        type="number"
                        class="form-control"
                        placeholder="Quantity">
                </div>
                <div class="pull-right" style="width: 50%; text-align: center">
                    <button
                        @click="sellStock"
                        :disabled="isTooLargeQuantity || quantity <= 0 || !Number.isInteger(parseFloat(quantity))"
                        class="btn btn-success">{{ isTooLargeQuantity ? 'Not enough stocks' : 'Sell' }}
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props: ['stock'],

        data() {
            return {
                quantity: 0
            };
        },

        computed: {
            isTooLargeQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },

        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock' // rename action
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    };
</script>