import React from 'react';
import { VictoryLine, VictoryChart, VictoryTooltip, VictoryZoomContainer, VictoryScatter, VictoryGroup, VictoryAxis } from 'victory';
import { useResizeDetector } from 'react-resize-detector';

const formatDate = (date) => date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

const getDateForWeek = (weekNumber) => {
    const currentDate = new Date();
    const oneYearAgo = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());
    oneYearAgo.setDate(oneYearAgo.getDate() + (weekNumber * 7));
    return oneYearAgo;
};

const Graph = ({ savedRepos, hoveredRepoId }) => {
    const { width, height } = useResizeDetector();

    return (
        <VictoryChart
            width={width}
            height={height}
            containerComponent={
                <VictoryZoomContainer
                    responsive={true}
                    zoomDimension="x"
                    zoomDomain={{ x: [0, 7] }}
                />
            }
        >
            <VictoryAxis
                dependentAxis
                tickValues={[0, 10, 20, 30, 40, 50]}
                tickSize={5}
                style={{ ticks: { stroke: "black", size: 5 } }}
                tickFormat={() => ''}
            />
            <VictoryAxis
                tickValues={Array.from({ length: 53 }, (_, i) => i)}
                tickSize={5}
                style={{ ticks: { stroke: "black", size: 5 } }}

                tickFormat={() => ''}
            />
            {savedRepos.map((lineData, index) => (
                <VictoryGroup key={index}>
                    <VictoryLine
                        data={lineData.data}
                        x="week"
                        y="total"
                        interpolation="natural"
                        style={{
                            data: { stroke: lineData.color, strokeWidth: 1.5, strokeOpacity: hoveredRepoId !== null && lineData.id !== hoveredRepoId ? 0.3 : 1 }
                        }}
                    />
                    <VictoryScatter
                        data={lineData.data.map((datum, index) => ({ ...datum, date: getDateForWeek(index) }))}
                        x="week"
                        y="total"
                        size={4}
                        style={{
                            data: { fill: "#fff", stroke: lineData.color, strokeWidth: 1, strokeOpacity: hoveredRepoId !== null && lineData.id !== hoveredRepoId ? 0.3 : 1 }
                        }}
                        labels={({ datum }) => `Week of ${formatDate(datum.date)}\n${datum.total} commits`}
                        labelComponent={<VictoryTooltip />}

                    />
                </VictoryGroup>
            ))}
        </VictoryChart>
    );
};

export default Graph;