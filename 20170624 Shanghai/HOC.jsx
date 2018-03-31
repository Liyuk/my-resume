#Form base

Form.create();

function create(MyCompnet) {
    const Form extends Component {
        state = {
            formData: {
                username: '',
            },
            status: {
                username: false,
            },
        }
        /**
         * 
         * @param {object} param  [参数]
         * {
         *  key: username,
         *  rules: {},
         * }
         */
        getFileds() {
            return this.state.formData;
        }
        onChange(key) {
            this.setState({
                formData,
                status,
            })
        }
        renderItem(key, rules, ItemComponent) {
            const {key, rules} = param;
            return (
                <Item>
                    <label />
                    <ItemComponent {...props} />
                    <Feedback status={status} />
                </Item>
            )
        }
        render() {
            return <MyCompnet form={this} />;
        }
    }
    return Form;
}


#MyForm


render() {
    const {renderItem} = this.props.form;
    return (<Form>
        {renderItem({key: 'username'}, rules: {required: true})}
        {renderItem({key: 'username'}, rules: {required: true})}
        {renderItem({key: 'username'}, rules: {required: true})}
        {renderItem({key: 'username'}, rules: {required: true})}
        {renderItem({key: 'username'}, rules: {required: true})}

        <Button />
    </Form>)
}

export default Form.create(MyForm);


#MyApp

this.refs.form.getFileds();


<MyForm ref="form" />