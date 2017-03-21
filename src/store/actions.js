export const loadData = ({ commit }) => {
    const data = JSON.parse(window.localStorage.getItem('stockTraderData'));
    if (data) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;

        const portfolio = {
            stockPortfolio,
            funds
        };

        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);
    }
}