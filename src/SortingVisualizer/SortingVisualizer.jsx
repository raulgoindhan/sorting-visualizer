import React from 'react'

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props)

        init.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 100; i++){
            array.push(randomIntFromInterval(5, 1000));
        }
        this.setState(array)
    }

    render() {
        const {array} = [];

        return (
            <>
            {array.map((value, idx) => (
                <div className='array-bar' key={idx}>
                    {value}
                </div>
            ))}
            </>
        );
    }
}