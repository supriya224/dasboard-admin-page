import React from 'react'
import { ColumnsDirective, ColumnDirective, ChartComponent, ColumnSeries, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries, MultiColoredLineSeries } from '@syncfusion/ej2-react-charts'
// data from dates dummy
import { dataBar } from '../../../../dates/Dummy'

const Bar = () => {
    return (
        <div className=' w-full'>
            <div className="flex justify-between items-center mb-4">
                <div className="text-zinc-900 text-base font-medium leading-normal">Car manufacture show data </div>
                <div className="text-right text-orange-600 text-sm font-semibold leading-tight cursor-pointer">View All</div>
            </div>
            {/* I have used syncfusion/ej2-react-charts for showing charts like bar */}
            <ChartComponent
                id='column-sparkLine'
                height='100%'
                primaryXAxis={{
                    valueType: 'Category',
                    majorGridLines: { width: 0 },
                    labelRotation: 90,
                    chartArea: { width: 10 }
                }}
                primaryYAxis={{
                    minimum: 0,
                    maximum: 11000,
                    interval: 5000,
                    lineStyle: { width: 0 },
                    majorTickLines: { width: 0 },
                    minorTickLines: { width: 0 },
                }}
                legendSettings={{ mode: 'Range', background: 'white' }}
                tooltip={{ enable: true }}
                chartArea={{ border: { width: 0 } }}>
                <Inject services={[LineSeries, ColumnSeries, Legend, Tooltip, DataLabel, Category, MultiColoredLineSeries]} />
                <ColumnsDirective>
                    <ColumnDirective width='100%'></ColumnDirective>
                    <ColumnDirective width='100%'></ColumnDirective>
                </ColumnsDirective>
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={dataBar}
                        xName="x"
                        yName="task"
                        type="Column"
                        fill='#8FBFFF'
                        columnSpacing={0.1}
                        columnWidth={0.5}
                        cornerRadius={{
                            topLeft: 9,
                            topRight: 9,
                        }}>
                    </SeriesDirective>
                </SeriesCollectionDirective>
            </ChartComponent>
            <div className='my-5'>
            <h3>Total Review</h3>
            <h3>Positive Review</h3>
            <h3>Negative Review</h3>
            <h3>Comments </h3>
            </div>
          
        </div>
    )
}

export default Bar
