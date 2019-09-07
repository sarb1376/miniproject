export default store => ({
    data: store.getState().data,
    product: store.getState().product,
    modal: store.getState().modal,

    showAddModal: () => {
        store.setState({
            modal: 'add',
            product: {
                id: new Date().getTime(),
                title: '',
                price: 0,
                editing: false,
            },
        });
    },
    onChange: (prop, value) => {
        store.setState(state => ({
            product: {
                ...state.product,
                [prop]: value,
            },
        }));
    },
    onSave: (product) => {
        const originalData = store.getState().data || [];
        store.setState({
            data: [
                ...originalData,
                product,
            ],
            modal: '',
        });

        console.log(product);
    },
    onHideModal: () => {
        store.setState({
            modal: '',
        });
    },

    // onEdit: (post) => {
    //     store.setState({
    //         m,
    //     });
    // }
    onModalOpen: () => {
        store.setstate ({
            modal: 'add'
        })
    }
}
)


