import React from 'react'
import Spacer from '../helpers/Spacer'
import DemoContainer from '../helpers/Container'

export default {
  title: 'Styleguide/Layout/Flexbox',
};

// Helper component for flex items
const FlexItem = ({ children, className, style }) => (
    <Spacer className={`${className}`} style={style}>
        {children}
    </Spacer>
);

// Helper component for flex container with adjustable settings
const FlexContainer = ({ children, className, title, description }) => (
    <div style={{ marginBottom: '2rem' }}>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        <div className={`d-flex ${className} gap-md border border-medium-gray rounded-md p-md border-dashed`}>
            {children}
        </div>
    </div>
);

// Basic Flexbox
export const BasicFlex = () => (
    <FlexContainer 
        title="Basic Flexbox" 
        description="Default flex row with 3 items"
    >
        <FlexItem>Flex Item 1</FlexItem>
        <FlexItem>Flex Item 2</FlexItem>
        <FlexItem>Flex Item 3</FlexItem>
    </FlexContainer>
);

// Flex Direction
export const FlexDirection = () => (<>
    <FlexContainer title="Flex Row (default)" className="flex-row">
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
    </FlexContainer>

    <FlexContainer title="Flex Column" className="flex-column">
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
    </FlexContainer>

    <FlexContainer title="Flex Row Reverse" className="flex-row-reverse">
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
    </FlexContainer>

    <FlexContainer title="Flex Column Reverse" className="flex-column-reverse">
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
    </FlexContainer>
</>);

// Justify Content
export const JustifyContent = () => (<>
    <FlexContainer title="Justify Content: Start (default)" className="justify-content-start">
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
    </FlexContainer>

    <FlexContainer title="Justify Content: Center" className="justify-content-center">
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
    </FlexContainer>

    <FlexContainer title="Justify Content: End" className="justify-content-end">
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
    </FlexContainer>

    <FlexContainer title="Justify Content: Between" className="justify-content-between">
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
    </FlexContainer>

    <FlexContainer title="Justify Content: Around" className="justify-content-around">
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
    </FlexContainer>

    <FlexContainer title="Justify Content: Evenly" className="justify-content-evenly">
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
    </FlexContainer>
</>);

// Align Items
export const AlignItems = () => (<>
    <FlexContainer
        title="Align Items: Start"
        className="align-items-start"
        style={{ height: '150px' }}
    >
        <FlexItem>Short</FlexItem>
        <FlexItem style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Taller</FlexItem>
        <FlexItem>Short</FlexItem>
    </FlexContainer>

    <FlexContainer
        title="Align Items: Center"
        className="align-items-center"
        style={{ height: '150px' }}
    >
        <FlexItem>Short</FlexItem>
        <FlexItem style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Taller</FlexItem>
        <FlexItem>Short</FlexItem>
    </FlexContainer>

    <FlexContainer 
        title="Align Items: End" 
        className="align-items-end"
        style={{ height: '150px' }}
    >
        <FlexItem>Short</FlexItem>
        <FlexItem style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Taller</FlexItem>
        <FlexItem>Short</FlexItem>
    </FlexContainer>

    <FlexContainer title="Align Items: Stretch (default)" className="align-items-stretch" style={{ height: '150px' }}>
        <FlexItem style={{ height: 'auto' }}>Stretch</FlexItem>
        <FlexItem style={{ height: 'auto' }}>Stretch</FlexItem>
        <FlexItem style={{ height: 'auto' }}>Stretch</FlexItem>
    </FlexContainer>

    <FlexContainer 
        title="Align Items: Baseline" 
        className="align-items-baseline"
        style={{ height: '150px' }}
    >
        <FlexItem style={{ paddingTop: '30px' }}>Baseline</FlexItem>
        <FlexItem>Baseline</FlexItem>
        <FlexItem style={{ paddingBottom: '30px' }}>Baseline</FlexItem>
    </FlexContainer>
</>);

// Flex Wrap
export const FlexWrap = () => (<>
    <FlexContainer 
        title="Flex Wrap" 
            description="Items will wrap to the next line when there's not enough space"
            className="flex-wrap"
            style={{ width: '600px' }}
        >
            <FlexItem style={{ width: '180px' }}>Width: 180px</FlexItem>
            <FlexItem style={{ width: '180px' }}>Width: 180px</FlexItem>
            <FlexItem style={{ width: '180px' }}>Width: 180px</FlexItem>
            <FlexItem style={{ width: '180px' }}>Width: 180px</FlexItem>
            <FlexItem style={{ width: '180px' }}>Width: 180px</FlexItem>
        </FlexContainer>
        
        <FlexContainer 
            title="Flex Nowrap" 
            description="Items will NOT wrap (they may overflow the container)"
            className="flex-nowrap"
            style={{ width: '600px', overflowX: 'auto' }}
        >
            <FlexItem style={{ width: '180px' }}>Width: 180px</FlexItem>
            <FlexItem style={{ width: '180px' }}>Width: 180px</FlexItem>
            <FlexItem style={{ width: '180px' }}>Width: 180px</FlexItem>
            <FlexItem style={{ width: '180px' }}>Width: 180px</FlexItem>
            <FlexItem style={{ width: '180px' }}>Width: 180px</FlexItem>
        </FlexContainer>
        
        <FlexContainer 
            title="Flex Wrap Reverse" 
            description="Items wrap in reverse order"
            className="flex-wrap-reverse"
            style={{ width: '600px' }}
        >
            <FlexItem style={{ width: '180px' }}>Width: 180px (1)</FlexItem>
            <FlexItem style={{ width: '180px' }}>Width: 180px (2)</FlexItem>
            <FlexItem style={{ width: '180px' }}>Width: 180px (3)</FlexItem>
            <FlexItem style={{ width: '180px' }}>Width: 180px (4)</FlexItem>
        <FlexItem style={{ width: '180px' }}>Width: 180px (5)</FlexItem>
    </FlexContainer>
</>);

// Align Self
export const AlignSelf = () => (<>
    <FlexContainer 
        title="Align Self"
        description="Individual items can override the container's align-items"
        style={{ height: '150px' }}
    >
            <FlexItem className="align-self-start">align-self-start</FlexItem>
            <FlexItem className="align-self-center">align-self-center</FlexItem>
            <FlexItem className="align-self-end">align-self-end</FlexItem>
            <FlexItem className="align-self-stretch" style={{ height: 'auto' }}>align-self-stretch</FlexItem>
            <FlexItem className="align-self-baseline" style={{ paddingTop: '20px' }}>align-self-baseline</FlexItem>
    </FlexContainer>
</>);

// Flex Grow and Shrink
export const FlexGrowShrink = () => (<>
    <FlexContainer 
        title="Flex Grow"
        description="flex-grow-1 items will expand to fill available space"
    >
        <FlexItem style={{ width: '100px' }}>Width: 100px</FlexItem>
        <FlexItem className="flex-grow-1">flex-grow-1</FlexItem>
        <FlexItem style={{ width: '100px' }}>Width: 100px</FlexItem>
    </FlexContainer>
    
    <FlexContainer 
        title="Multiple Flex Grow Items"
        description="Multiple growing items share the space proportionally"
    >
        <FlexItem className="flex-grow-1">flex-grow-1</FlexItem>
        <FlexItem className="flex-grow-1">flex-grow-1</FlexItem>
        <FlexItem className="flex-grow-1">flex-grow-1</FlexItem>
    </FlexContainer>
    
    <FlexContainer 
        title="Flex Shrink"
        description="flex-shrink-0 prevents items from shrinking when space is limited"
        style={{ width: '400px', overflowX: 'auto' }}
    >
        <FlexItem style={{ width: '200px' }} className="flex-shrink-1">Width: 200px, flex-shrink-1 (default)</FlexItem>
        <FlexItem style={{ width: '200px' }} className="flex-shrink-0">Width: 200px, flex-shrink-0 (won't shrink)</FlexItem>
        <FlexItem style={{ width: '200px' }} className="flex-shrink-1">Width: 200px, flex-shrink-1 (default)</FlexItem>
    </FlexContainer>
</>);

// Order
export const FlexOrder = () => (<>
    <FlexContainer 
        title="Flex Order"
        description="Control the visual order of flex items (default order is 0)"
    >
        <FlexItem className="order-3">order-3 (1st in HTML)</FlexItem>
        <FlexItem className="order-1">order-1 (2nd in HTML)</FlexItem>
        <FlexItem className="order-2">order-2 (3rd in HTML)</FlexItem>
    </FlexContainer>

    <FlexContainer 
        title="First and Last"
        description="Helper classes to quickly move items to the start or end"
    >
        <FlexItem>Normal (1st in HTML)</FlexItem>
        <FlexItem>Normal (2nd in HTML)</FlexItem>
        <FlexItem className="order-first">order-first (3rd in HTML)</FlexItem>
        <FlexItem>Normal (4th in HTML)</FlexItem>
        <FlexItem className="order-last">order-last (5th in HTML)</FlexItem>
    </FlexContainer>
</>);

// Common Flex Patterns
export const CommonFlexPatterns = () => (<>
    <FlexContainer
        title="Common Flex Patterns"
        description="Common flex patterns for navigation, cards, and more"
        className="flex-column"
    >
        <div className="mb-2xl">
            <h3>Navigation Bar Pattern</h3>
            <div className="d-flex border justify-content-between align-items-center rounded-md p-md">
                <div className="font-weight-bold font-size-lg">Logo</div>
                <div className="d-flex gap-md">
                    <FlexItem>Home</FlexItem>
                    <FlexItem>Products</FlexItem>
                    <FlexItem>About</FlexItem>
                    <FlexItem>Contact</FlexItem>
                </div>
            </div>
        </div>
    
        <div className="mb-2xl">
            <h3>Card with Footer Pattern</h3>
            <div className="d-flex flex-column rounded-md border border-medium-gray overflow-hidden">
                <div className="p-md border-bottom border-medium-gray">
                    <h4 className="mb-0">Card Header</h4>
                </div>
                <div className="p-md flex-grow-1 overflow-y-auto">
                    <p>This is the main content area of the card. It will grow to fill available space.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
                    <p>Additional content can be added here and it will scroll if needed.</p>
                </div>
                <div className="p-md bg-light-gray border-top border-medium-gray">
                    <div className="d-flex justify-content-end gap-md">
                        <button className="button button--secondary">Cancel</button>
                        <button className="button button--primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="mb-2xl">
            <h3>Media Object Pattern</h3>
            <div className="d-flex bg-light-gray rounded-md p-md">
                <div className="flex-shrink-0 mr-md">
                    <div className="rounded-md bg-medium-gray" style={{ width: '64px', height: '64px' }}></div>
                </div>
                <div>
                    <h4 className="mt-0">Media heading</h4>
                    <p>This is some content that will wrap as needed. The image to the left will maintain its dimensions.</p>
                </div>
            </div>
        </div>
    </FlexContainer>
</>);
