 // components/drawing_drafting/DrawingCanvas.js
 import React, { useEffect, useRef } from 'react';
 import * as d3 from 'd3';

 const DrawingCanvas = ({ data }) => {
   const svgRef = useRef();

   useEffect(() => {
     const svg = d3.select(svgRef.current)
       .attr('width', '100%')
       .attr('height', '600px');

     // 清空现有内容
     svg.selectAll('*').remove();

     // 简单示例：绘制圆
     svg.selectAll('circle')
       .data(data)
       .enter()
       .append('circle')
       .attr('cx', (d) => d.x)
       .attr('cy', (d) => d.y)
       .attr('r', 20)
       .attr('fill', 'steelblue');
     
     // 更多D3绘图逻辑...

   }, [data]);

   return <svg ref={svgRef}></svg>;
 };

 export default DrawingCanvas;