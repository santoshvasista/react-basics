import { Component } from 'react';

const TableHeader = (props) => {
    return (
        <thead>
            <tr>
                {props.keys.map(key => <th key={key}> {key.toUpperCase()} </th>)}
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    return (
        <tbody>
            {props.data.map((d, index) => {
                return (
                    <tr key={d.id ?? index} onClick={() => props.removeData(index)}>
                        {props.keys.map(key => <td key={d[key]} name={d[key]}> <div> {d[key]} </div> </td>)}
                    </tr>
                )
            })}
        </tbody>
    );
}

class Table extends Component {
    render() {
        const { data, removeData } = this.props;
        const keys = this.props.keys ?? Object.keys(data?.[0] ?? {});
        return (
            <table>
                <TableHeader keys={keys}/>
                <TableBody
                    data={data}
                    keys={keys}
                    removeData={removeData}
                />
            </table>
        )
    }
}

export default Table;