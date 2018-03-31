#MyInput

state = {
    value: '',
}

componentWillRecieveProps(nextProps) {
    if (nextProps.value) {
        this.setState({
            value: nextProps.value,
        })
    }
}

onChange(value) {
    if (this.props.value) {
        this.setState({
            value,
        });
    }
    this.props.onChange(value);
}

<input value={this.state.value} onChange={this.onChange} />

MyInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.function,
}