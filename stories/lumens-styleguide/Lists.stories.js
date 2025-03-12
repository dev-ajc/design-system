import React from 'react';
import DemoContainer from '../helpers/Container';


export default {
  title: 'Styleguide/Typography/Lists',
};

// Basic Lists
export const BasicLists = () => (<>
    <h3>Unordered List</h3>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>
            Item 4 with nested list
            <ul>
                <li>Nested item 1</li>
                <li>Nested item 2</li>
                <li>
                    Nested item 3 with deeper nesting
                    <ul>
                        <li>Deep nested item 1</li>
                        <li>Deep nested item 2</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Item 5</li>
    </ul>

    <h3>Ordered List</h3>
    <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>
            Fourth item with nested list
            <ol>
                <li>Nested item 1</li>
                <li>Nested item 2</li>
                <li>
                    Nested item 3 with deeper nesting
                    <ol>
                        <li>Deep nested item 1</li>
                        <li>Deep nested item 2</li>
                    </ol>
                </li>
            </ol>
        </li>
        <li>Fifth item</li>
    </ol>
</>);

// Unstyled Lists
export const UnstyledLists = () => (<>
    <div style={{ maxWidth: '600px' }}>
        <h3>Unstyled List</h3>
        <ul className="list-unstyled">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>
                    Item 4 with nested list
                    <ul>
                    <li>This nested list still has bullets</li>
                    <li>Because it doesn't have the class</li>
                    </ul>
                </li>
                <li>Item.5</li>
            </ul>
        </div>
    </>);

// Inline Lists
export const InlineLists = () => (<>
    <h3>Inline List</h3>
    <ul className="list-inline">
        <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ul>
</>);

// Description Lists
export const DescriptionLists = () => (<>
    <h3>Default Description List</h3>
    <dl>
        <dt>Term 1</dt>
            <dd>Description for term 1. This contains the details and explanation related to the term.</dd>
            
            <dt>Term 2</dt>
            <dd>Description for term 2. This contains the details and explanation related to the term.</dd>
            
            <dt>Term 3</dt>
            <dd>Description for term 3. This contains the details and explanation related to the term.</dd>
        </dl>

        <h3>Horizontal Description List</h3>
        <dl className="dl-horizontal">
            <dt>Term 1</dt>
            <dd>Description for term 1. This contains the details and explanation related to the term.</dd>
            
            <dt>Term 2</dt>
            <dd>Description for term 2. This contains the details and explanation related to the term.</dd>
            
            <dt>Term 3</dt>
            <dd>Description for term 3. This contains the details and explanation related to the term.</dd>
        </dl>
    </>);

// Custom Lists
export const CustomLists = () => (<>
    <h3>Default Custom List (Bullet)</h3>
    <ul className="list-custom">
        <li>Custom bullet item 1</li>
            <li>Custom bullet item 2</li>
            <li>Custom bullet item 3</li>
        </ul>

        <h3>Check List</h3>
        <ul className="list-custom list-custom--check">
            <li>Check item 1</li>
            <li>Check item 2</li>
            <li>Check item 3</li>
        </ul>

        <h3>Arrow List</h3>
        <ul className="list-custom list-custom--arrow">
            <li>Arrow item 1</li>
            <li>Arrow item 2</li>
            <li>Arrow item 3</li>
        </ul>

        <h3>Task List</h3>
        <ul className="list-task">
            <li>Incomplete task 1</li>
            <li className="is-complete">Complete task 2</li>
            <li>Incomplete task 3</li>
            <li className="is-complete">Complete task 4</li>
        </ul>
    </>);
