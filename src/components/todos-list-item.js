import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';

export default class TodosListItem extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.task}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        );
    }
}
