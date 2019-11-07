import {connect} from 'react-redux';
import {createItem} from '../../actions/item_actions';
import React from 'react';
import {withRouter} from 'react-router-dom';

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: '', style: '', color: ''};
        this.update = this.update.bind(this);
        this.submit = this.submit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        }
    }

    submit(e) {
        e.preventDefault();
        this.props.createItem(this.state).then(() => this.props.history.push("/"));
    }

    render() {
        return (
        <form>
            <label>
                Title
                <input type="text" value={this.state.title} onChange={this.update('title')}/>
            </label>

            <label>
                Style
                <input type="text" value={this.state.style} onChange={this.update('style')} />
            </label>

            <label>
                Color
                <input type="text" value={this.state.color} onChange={this.update('color')} />
            </label>

            <input type="submit" value="Add New Item" onClick={this.submit}/>
        </form>
        )
    }

}

const msp = state => {
    return {};
}

const mdp = dispatch => {
    return {
        createItem: item => dispatch(createItem(item))
    }
}

export default withRouter(connect(msp, mdp)(ItemForm));