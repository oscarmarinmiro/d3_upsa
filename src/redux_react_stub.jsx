import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as d3 from "d3";
import d3tip from "d3-tip";


class Viz extends React.Component{

    constructor(props){
      
        super(props);

        this.createChart = this.createChart.bind(this);

        this.margin_h = 20;
        this.margin_bottom = 20;
        this.margin_top = 20;
        this.bar_height = 12;
        this.bar_begin_factor = 0.45;
        this.text_to_bar_margin = 10;

    }

    componentDidMount() {
        window.addEventListener('resize', this.createChart);
        this.createChart();
    }

    componentDidUpdate() {
        this.createChart();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.createChart);
    }


    createChart() {

        const node = this.node;

        d3.select(node).selectAll("*").remove();

        this.dims = {width: node.getBoundingClientRect().width, height: node.getBoundingClientRect().height};

        this.width = this.dims.width;
        this.height = this.dims.height;

        this.svg = d3.select(node).append("svg").attr("width", this.dims.width).attr("height", this.dims.height);

        let data = this.props.data;

        let bar_join = this.svg.selectAll(".barras").data(data);

        // bars

        bar_join.enter().append("rect")
           .classed("barras", true)
      
        // etc... 

        }


    }

    render() {
      
            return (
                <div className="viz_container">
                    <div className="viz_title">VIZ TITLE</div>
                    <div className="viz_render" ref={node => this.node = node}/>
                </div>
            );
    }

}



Viz.propTypes = {
    vizData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    vizData: state.data
});


export default connect(mapStateToProps)(Viz);
