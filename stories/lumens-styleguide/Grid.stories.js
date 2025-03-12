import React from 'react'
import DemoContainer from '../helpers/Container'
import Spacer from '../helpers/Spacer'


export default {
    title: 'Styleguide/Layout/Grid'
}


// Helper component for grid items
// const GridItem = ({children, className}) => (
//     <div className={`${className} bg-light-gray rounded-md p-md mb-md text-center`}>{children}</div>
// )

// Basic Grid
export const BasicGrid = () => (<>
    <h3>Basic 12-Column Grid</h3>
    <div className="grid">
        <Spacer className="grid__item">1 column (default: spans all 12)</Spacer>

        <Spacer className="grid__item grid__item--md-6">6 columns on medium+</Spacer>
        <Spacer className="grid__item grid__item--md-6">6 columns on medium+</Spacer>

        <Spacer className="grid__item grid__item--md-4">4 columns on medium+</Spacer>
        <Spacer className="grid__item grid__item--md-4">4 columns on medium+</Spacer>
        <Spacer className="grid__item grid__item--md-4">4 columns on medium+</Spacer>

        <Spacer className="grid__item grid__item--md-3">3 columns on medium+</Spacer>
        <Spacer className="grid__item grid__item--md-3">3 columns on medium+</Spacer>
        <Spacer className="grid__item grid__item--md-3">3 columns on medium+</Spacer>
        <Spacer className="grid__item grid__item--md-3">3 columns on medium+</Spacer>
    </div>
</>);

// Responsive Grid
export const ResponsiveGrid = () => (<>
    <h3>Responsive Grid (resize to see changes)</h3>
    <p>These boxes change their column span based on viewport width:</p>
    <div className="grid">
        <Spacer className="grid__item grid__item--sm-6 grid__item--md-4 grid__item--lg-3">
            sm-6, md-4, lg-3
        </Spacer>
        <Spacer className="grid__item grid__item--sm-6 grid__item--md-4 grid__item--lg-3">
            sm-6, md-4, lg-3
        </Spacer>
        <Spacer className="grid__item grid__item--sm-6 grid__item--md-4 grid__item--lg-3">
            sm-6, md-4, lg-3
        </Spacer>
        <Spacer className="grid__item grid__item--sm-6 grid__item--md-12 grid__item--lg-3">
            sm-6, md-12, lg-3
        </Spacer>
    </div>
</>);

// Grid with Different Gaps
export const GridGaps = () => (<>
    <h3>Grid with Default Gap</h3>
    <div className="grid">
        <Spacer className="grid__item grid__item--md-3">Default gap</Spacer>
        <Spacer className="grid__item grid__item--md-3">Default gap</Spacer>
        <Spacer className="grid__item grid__item--md-3">Default gap</Spacer>
        <Spacer className="grid__item grid__item--md-3">Default gap</Spacer>
    </div>

    <h3>Grid with Small Gap</h3>
    <div className="grid grid--gap-sm">
        <Spacer className="grid__item grid__item--md-3">Small gap</Spacer>
        <Spacer className="grid__item grid__item--md-3">Small gap</Spacer>
        <Spacer className="grid__item grid__item--md-3">Small gap</Spacer>
        <Spacer className="grid__item grid__item--md-3">Small gap</Spacer>
    </div>

    <h3>Grid with Large Gap</h3>
    <div className="grid grid--gap-lg">
        <Spacer className="grid__item grid__item--md-3">Large gap</Spacer>
        <Spacer className="grid__item grid__item--md-3">Large gap</Spacer>
        <Spacer className="grid__item grid__item--md-3">Large gap</Spacer>
        <Spacer className="grid__item grid__item--md-3">Large gap</Spacer>
    </div>

    <h3>Grid with No Gap</h3>
    <div className="grid grid--no-gap">
        <Spacer className="grid__item grid__item--md-3">No gap</Spacer>
        <Spacer className="grid__item grid__item--md-3">No gap</Spacer>
        <Spacer className="grid__item grid__item--md-3">No gap</Spacer>
        <Spacer className="grid__item grid__item--md-3">No gap</Spacer>
    </div>
</>);

// Mixed Column Widths
export const MixedColumns = () => (<>
    <h3>Mixed Column Widths</h3>
    <div className="grid">
        <Spacer className="grid__item grid__item--md-8">8 columns</Spacer>
        <Spacer className="grid__item grid__item--md-4">4 columns</Spacer>

        <Spacer className="grid__item grid__item--md-4">4 columns</Spacer>
        <Spacer className="grid__item grid__item--md-8">8 columns</Spacer>

        <Spacer className="grid__item grid__item--md-3">3 columns</Spacer>
        <Spacer className="grid__item grid__item--md-6">6 columns</Spacer>
        <Spacer className="grid__item grid__item--md-3">3 columns</Spacer>
    </div>
</>);

// Nested Grids
export const NestedGrids = () => (<>
    <h3>Nested Grids</h3>
    <div className="grid">
            <div className="grid__item grid__item--md-6" style={{marginBottom: '20px'}}>
                <div
                    style={{
                        backgroundColor: '#dee2e6',
                        padding: '15px',
                        borderRadius: '4px'
                    }}
                >
                    <p style={{textAlign: 'center', marginTop: 0}}>Parent Column (6 columns)</p>
                    <div className="grid">
                        <Spacer className="grid__item grid__item--md-6">Nested (6 cols)</Spacer>
                        <Spacer className="grid__item grid__item--md-6">Nested (6 cols)</Spacer>
                        <Spacer className="grid__item grid__item--md-4">Nested (4 cols)</Spacer>
                        <Spacer className="grid__item grid__item--md-4">Nested (4 cols)</Spacer>
                        <Spacer className="grid__item grid__item--md-4">Nested (4 cols)</Spacer>
                    </div>
                </div>
            </div>

            <div className="grid__item grid__item--md-6" style={{marginBottom: '20px'}}>
                <div
                    style={{
                        backgroundColor: '#dee2e6',
                        padding: '15px',
                        borderRadius: '4px'
                    }}
                >
                    <p style={{textAlign: 'center', marginTop: 0}}>Parent Column (6 columns)</p>
                    <div className="grid">
                        <Spacer className="grid__item grid__item--md-12">
                            Nested (12 cols)
                        </Spacer>
                        <Spacer className="grid__item grid__item--md-6">Nested (6 cols)</Spacer>
                        <Spacer className="grid__item grid__item--md-6">Nested (6 cols)</Spacer>
                    </div>
                </div>
        </div>
    </div>
</>);
