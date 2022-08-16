var sanPham = new Vue({
    el: '#sp',
    data: {
        tenSp: 'XPS9310010NS'
    },
});
var gia = new Vue({
    el: '#giaFooter',
    methods: {
        formatPrice(number) {
            return Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'vnd'
            }).format(number);
        },
        chao: function () {
            alert('xin chao !!')
        }
    },
    data: {
        count: 0
    }
});